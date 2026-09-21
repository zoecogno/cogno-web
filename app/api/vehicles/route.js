import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// Memoria temporal en el servidor de Vercel (Cache)
let cachedVehicles = null;
let lastFetchTime = 0;
// Tiempo de caché: 12 horas
const CACHE_DURATION = 12 * 60 * 60 * 1000; 

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const secretAdminKey = searchParams.get('admin');
  
  // Tu clave secreta para forzar la recarga inmediata desde Airtable
  const CLAVE_ADMIN_SECRETA = 'cogno2026admin'; 

  const now = Date.now();
  const fuerzaRecarga = secretAdminKey === CLAVE_ADMIN_SECRETA;

  // Si hay caché válida y NO se pidió recarga por administrador, devolvemos los datos guardados sin gastar Airtable
  if (cachedVehicles && !fuerzaRecarga && (now - lastFetchTime < CACHE_DURATION)) {
    return NextResponse.json(cachedVehicles);
  }

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
        const estado = String(record.fields['ESTADO'] || '').trim().toLowerCase();
        return estado === 'disponible';
      })
      .map((record) => {
        const f = record.fields;

        let photos = [];
        const rawPhotos = f['FOTOS'];
        if (Array.isArray(rawPhotos)) {
          photos = rawPhotos.map((p) => {
            if (typeof p === 'string') return p;
            return p.url || (p.thumbnails && p.thumbnails.full && p.thumbnails.full.url) || (p.thumbnails && p.thumbnails.large && p.thumbnails.large.url) || '';
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

    // Guardamos en caché y actualizamos la marca de tiempo
    cachedVehicles = vehicles;
    lastFetchTime = now;

    return NextResponse.json(vehicles);
  } catch (error) {
    return NextResponse.json({ error: 'Excepción interna', message: error.message }, { status: 500 });
  }
}
