'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function DetalleVehiculo() {
  const params = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  useEffect(() => {
    fetch('/api/vehicles')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const found = data.find((v) => v.id === params.id);
          setVehicle(found || null);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [params.id]);

  if (loading) {
    return (
      <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a1a1aa' }}>
        Cargando vehículo...
      </div>
    );
  }

  if (!vehicle) {
    return (
      <div style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Vehículo no encontrado o ya no disponible</h2>
        <a href="/usados" style={{ color: '#ED1C24', fontWeight: 700, textDecoration: 'none' }}>← Volver al catálogo</a>
      </div>
    );
  }

  const waMsg = encodeURIComponent(`Hola! Quiero consultar por el ${vehicle.brand || ''} ${vehicle.line || ''} ${vehicle.version || ''} (${vehicle.year || ''})`);

  return (
    <div style={{ backgroundColor: '#0B0C0E', minHeight: '90vh', color: '#ffffff', padding: '40px 16px' }}>
      <div style={{ maxWidth: '750px', margin: '0 auto', backgroundColor: '#1A1B1E', border: '1px solid #2C2D31', borderRadius: '18px', padding: '24px', boxShadow: '0 12px 30px rgba(0,0,0,0.5)' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <span style={{ backgroundColor: 'rgba(237, 28, 36, 0.15)', color: '#ED1C24', border: '1px solid rgba(237, 28, 36, 0.3)', fontSize: '0.72rem', fontWeight: 700, padding: '4px 10px', borderRadius: '6px', textTransform: 'uppercase' }}>
            USADO SELECCIONADO
          </span>
          <a href="/usados" style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: '0.85rem' }}>← Ver todos los usados</a>
        </div>

        <h1 style={{ fontSize: '1.8rem', fontWeight: 900, textTransform: 'uppercase', margin: '0 0 4px 0' }}>
          {vehicle.brand} {vehicle.line}
        </h1>
        <p style={{ color: '#a1a1aa', fontSize: '0.95rem', margin: '0 0 20px 0' }}>
          {vehicle.version}
        </p>

        {/* Galería de Fotos */}
        {vehicle.photos && vehicle.photos.length > 0 && (
          <div style={{ marginBottom: '20px' }}>
            <div style={{ height: '360px', borderRadius: '14px', overflow: 'hidden', backgroundColor: '#111215', marginBottom: '10px' }}>
              <img 
                src={vehicle.photos[activePhotoIdx] || vehicle.photos[0]} 
                alt="Foto principal" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>

            {vehicle.photos.length > 1 && (
              <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '6px' }}>
                {vehicle.photos.map((p, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActivePhotoIdx(idx)}
                    style={{ border: activePhotoIdx === idx ? '2px solid #ED1C24' : '2px solid transparent', padding: 0, borderRadius: '8px', overflow: 'hidden', width: '70px', height: '52px', flexShrink: 0, cursor: 'pointer', backgroundColor: '#111215' }}
                  >
                    <img src={p} alt={`Foto ${idx+1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Especificaciones */}
        <div style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '12px', padding: '18px', marginBottom: '24px', fontSize: '0.9rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '10px' }}>
            <div><span style={{ color: '#71717a' }}>Marca:</span> <strong>{vehicle.brand}</strong></div>
            <div><span style={{ color: '#71717a' }}>Línea:</span> <strong>{vehicle.line}</strong></div>
            <div><span style={{ color: '#71717a' }}>Modelo / Año:</span> <strong>{vehicle.year || '—'}</strong></div>
            <div><span style={{ color: '#71717a' }}>Kilometraje:</span> <strong>{vehicle.km ? `${Number(vehicle.km).toLocaleString('es-AR')} km` : '—'}</strong></div>
          </div>
          {vehicle.equipment && (
            <div style={{ borderTop: '1px solid #27272a', paddingTop: '10px', marginTop: '10px' }}>
              <span style={{ color: '#71717a', display: 'block', marginBottom: '3px' }}>Equipamiento:</span>
              <span style={{ color: '#d4d4d8' }}>{vehicle.equipment}</span>
            </div>
          )}
        </div>

        {/* CTA WhatsApp */}
        <a 
          href={`https://wa.me/5493584029424?text=${waMsg}`}
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'block', textAlign: 'center', backgroundColor: '#ED1C24', color: '#ffffff', textDecoration: 'none', padding: '14px', borderRadius: '10px', fontWeight: 800, fontSize: '0.95rem' }}
        >
          Consultar por este vehículo en WhatsApp →
        </a>

      </div>
    </div>
  );
}
