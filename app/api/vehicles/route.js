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

      // Extracción de fotos desde la columna FOTOS
      let photos = [];
      const rawPhotos = f['FOTOS'] || f['Fotos'] || [];
      if (Array.isArray(rawPhotos)) {
        photos = rawPhotos
          .map((img) => img.url || img.thumbnails?.large?.url || img.thumbnails?.full?.url)
          .filter(Boolean);
      }

      return {
        id: record.id,
        brand: f['MARCA'] || '',
        line: f['LÍNEA'] || f['LINEA'] || '',
        version: f['VERSIÓN'] || f['VERSION'] || '',
        year: f['MODELO'] || '',
        km: f['KM'] || '',
        status: f['ESTADO'] || 'Disponible',
        equipment: f['EQUIPAMIENTO ADICIONAL'] || '',
        photos: photos,
      };
    });

    return NextResponse.json(vehicles);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
