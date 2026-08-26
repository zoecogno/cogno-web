import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const apiKey = process.env.AIRTABLE_API_KEY || process.env.AIRTABLE_PAT;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME || 'tblJgLxwf9A58BRut';

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

    const data = await res.json();

    if (!res.ok || !data.records) {
      return NextResponse.json({ error: 'Error al consultar Airtable', details: data }, { status: res.status || 500 });
    }

    const vehicles = data.records
      .filter((record) => {
        const estado = record.fields['ESTADO'] || '';
        // Si no está vendido o si está disponible/publicado, lo mostramos
        if (typeof estado === 'string' && estado.toLowerCase().includes('vendid')) {
          return false;
        }
        return true;
      })
      .map((record) => {
        const f = record.fields;

        // Extracción de fotos de la columna FOTOS
        let photos = [];
        const rawPhotos = f['FOTOS'];
        if (Array.isArray(rawPhotos)) {
          photos = rawPhotos.map((p) => {
            if (typeof p === 'string') return p;
            return (p.thumbnails && p.thumbnails.large && p.thumbnails.large.url) || (p.thumbnails && p.thumbnails.full && p.thumbnails.full.url) || p.url || '';
          }).filter(Boolean);
        } else if (typeof rawPhotos === 'string') {
          photos = [rawPhotos];
        }

        return {
          id: record.id,
          brand: String(f['MARCA'] || '').trim(),
          line: String(f['LÍNEA'] || f['LINEA'] || '').trim(),
          version: String(f['VERSIÓN'] || f['VERSION'] || '').trim(),
          year: String(f['MODELO'] || '').trim(),
          km: f['KM'] || '',
          equipment: String(f['EQUIPAMIENTO ADICIONAL'] || f['EQUIPAMIENTO'] || '').trim(),
          status: String(f['ESTADO'] || '').trim(),
          photos: photos,
        };
      });

    return NextResponse.json(vehicles);
  } catch (error) {
    return NextResponse.json({ error: 'Excepción interna', message: error.message }, { status: 500 });
  }
}
