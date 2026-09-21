import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Leemos los vehículos desde el archivo local de respaldo en public/vehicles.json
    const filePath = path.join(process.cwd(), 'public', 'vehicles.json');
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'No se encontró el archivo de respaldo de vehículos' }, { status: 404 });
    }

    const fileData = fs.readFileSync(filePath, 'utf8');
    const vehicles = JSON.parse(fileData);

    // Filtramos únicamente los disponibles por seguridad
    const availableVehicles = vehicles.filter((v) => {
      const estado = String(v.status || '').trim().toLowerCase();
      return estado === 'disponible';
    });

    return NextResponse.json(availableVehicles);
  } catch (error) {
    return NextResponse.json({ error: 'Excepción interna al leer respaldo', message: error.message }, { status: 500 });
  }
}
