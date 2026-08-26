import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const apiKey = process.env.AIRTABLE_API_KEY || process.env.AIRTABLE_PAT;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME || 'Vehiculos';

  if (!apiKey || !baseId) {
    return NextResponse.json({ error: 'Faltan variables de entorno' }, { status: 500 });
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
      const err = await res.json();
      return NextResponse.json({ error: 'Error en Airtable', details: err }, { status: res.status });
    }

    const data = await res.json();

    const vehicles = data.records.map((record) => {
      const f = record.fields;

      // Extracción de fotos (maneja adjuntos de Airtable o URLs de texto)
      let photos = [];
      const rawPhotos = f.Fotos || f.Photos || f.Imagenes || f.Imágenes || f['Fotos del vehículo'];
      if (Array.isArray(rawPhotos)) {
        photos = rawPhotos.map((p) => p.url || (p.thumbnails && p.thumbnails.large ? p.thumbnails.large.url : p));
      } else if (typeof rawPhotos === 'string') {
        photos = [rawPhotos];
      }

      return {
        id: record.id,
        brand: f.Marca || f.Brand || '',
        line: f.Modelo || f.Línea || f.Linea || f.Line || '',
        version: f.Versión || f.Version || '',
        year: f.Año || f.Anio || f.Year || '',
        km: f.Kilometraje || f.KM || f.Km || f.Kilometros || '',
        equipment: f.Equipamiento || f.Descripcion || f.Detalles || '',
        photos: photos,
      };
    });

    return NextResponse.json(vehicles);
  } catch (error) {
    console.error('Error fetching Airtable:', error);
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}
