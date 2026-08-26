import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME || 'Inventario de Vehículos';

  if (!apiKey || !baseId) {
    return NextResponse.json({ error: 'Faltan credenciales de Airtable' }, { status: 500 });
  }

  try {
    const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`;
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      const errorText = await res.text();
      return NextResponse.json({ error: errorText }, { status: res.status });
    }

    const data = await res.json();

    const vehicles = (data.records || []).map((record) => {
      const f = record.fields;

      // Extracción robusta de fotos
      let photos = [];
      const rawPhotos = f.Fotos || f.FOTOS || f.Photos || f.Imagenes || f.IMAGENES;
      if (Array.isArray(rawPhotos)) {
        photos = rawPhotos.map((img) => img.url || img.thumbnails?.large?.url || img.thumbnails?.full?.url).filter(Boolean);
      }

      return {
        id: record.id,
        brand: f.MARCA || f.Marca || f.brand || '',
        line: f.LINEA || f.Línea || f.Linea || f.line || '',
        version: f.VERSION || f.Versión || f.Version || f.version || '',
        year: f.AÑO || f.Año || f.Modelo || f.year || '',
        km: f.KILOMETRAJE || f.Kilometraje || f.KM || f.km || '',
        equipment: f.EQUIPAMIENTO || f.Equipamiento || f.equipment || '',
        status: f.ESTADO || f.Estado || f.status || 'Disponible',
        photos: photos,
      };
    });

    return NextResponse.json(vehicles);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
