import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const AIRTABLE_PAT = process.env.AIRTABLE_PAT;
  const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
  const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || 'Vehiculos';

  if (!AIRTABLE_PAT || !AIRTABLE_BASE_ID) {
    return NextResponse.json({ error: 'Faltan variables de entorno de Airtable' }, { status: 500 });
  }

  try {
    const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`;
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_PAT}`,
      },
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      const errData = await res.json();
      return NextResponse.json({ error: 'Error en Airtable', details: errData }, { status: res.status });
    }

    const data = await res.json();

    // Mapeo dinámico de los campos de Airtable
    const vehicles = data.records.map((record) => {
      const f = record.fields;

      // Extracción de fotos (maneja array de adjuntos o links de texto)
      let photoList = [];
      if (Array.isArray(f.Fotos) || Array.isArray(f.Photos) || Array.isArray(f.Imágenes)) {
        const rawPhotos = f.Fotos || f.Photos || f.Imágenes;
        photoList = rawPhotos.map((p) => p.url || p);
      } else if (f.FotoPrincipal || f.Imagen) {
        photoList = [f.FotoPrincipal || f.Imagen];
      }

      return {
        id: record.id,
        brand: f.Marca || f.Brand || '',
        line: f.Modelo || f.Línea || f.Line || '',
        version: f.Versión || f.Version || '',
        year: f.Año || f.Year || '',
        km: f.Kilometraje || f.KM || f.Km || '',
        equipment: f.Equipamiento || f.Descripcion || f.Detalles || '',
        photos: photoList,
      };
    });

    return NextResponse.json(vehicles);
  } catch (error) {
    console.error('Error fetching Airtable:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
