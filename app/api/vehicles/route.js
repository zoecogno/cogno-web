import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const AIRTABLE_TOKEN = process.env.AIRTABLE_API_KEY;
  const BASE_ID = process.env.AIRTABLE_BASE_ID;
  const TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || 'Inventario';

  if (!AIRTABLE_TOKEN || !BASE_ID) {
    return NextResponse.json(
      { error: 'Faltan configurar las variables de entorno de Airtable' },
      { status: 500 }
    );
  }

  try {
    const url = `https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(TABLE_NAME)}`;
    
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ error: errorData }, { status: response.status });
    }

    const data = await response.json();

    const vehicles = data.records.map((record) => {
      const f = record.fields;

      // Extracción de las URLs de las fotos cargadas en Airtable
      const photos = Array.isArray(f['Fotos'] || f['Photos'] || f['Imagenes'])
        ? (f['Fotos'] || f['Photos'] || f['Imagenes']).map((img) => img.url)
        : [];

      return {
        id: record.id,
        brand: f['Marca'] || f['Brand'] || '',
        line: f['Línea'] || f['Linea'] || f['Line'] || '',
        version: f['Versión'] || f['Version'] || '',
        year: f['Año'] || f['Modelo'] || f['Year'] || '',
        km: f['Kilómetros'] || f['Kilometros'] || f['KM'] || '',
        equipment: f['Equipamiento'] || f['Detalle'] || f['Observaciones'] || '',
        photos: photos,
      };
    });

    return NextResponse.json(vehicles);
  } catch (error) {
    console.error('Error al conectar con Airtable:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
