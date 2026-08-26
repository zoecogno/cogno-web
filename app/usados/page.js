'use client';

import { useState, useEffect } from 'react';

export default function CatalogoUsados() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('TODAS');
  const [selectedYear, setSelectedYear] = useState('TODOS');
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  useEffect(() => {
    fetch('/api/vehicles')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setVehicles(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Marcas y Años únicos
  const brands = ['TODAS', ...Array.from(new Set(vehicles.map((v) => v.brand).filter(Boolean))).sort()];
  const years = ['TODOS', ...Array.from(new Set(vehicles.map((v) => String(v.year)).filter(Boolean))).sort((a, b) => b - a)];

  // Filtro
  const filtered = vehicles.filter((v) => {
    const term = search.toLowerCase();
    const matchSearch =
      (v.brand && v.brand.toLowerCase().includes(term)) ||
      (v.line && v.line.toLowerCase().includes(term)) ||
      (v.version && v.version.toLowerCase().includes(term));
    const matchBrand = selectedBrand === 'TODAS' || v.brand === selectedBrand;
    const matchYear = selectedYear === 'TODOS' || String(v.year) === selectedYear;
    return matchSearch && matchBrand && matchYear;
  });

  return (
    <div style={{ backgroundColor: '#0B0C0E', minHeight: '100vh', color: '#ffffff', padding: '50px 20px 80px 20px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Título & Subtítulo */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 600, margin: '0 0 10px 0', letterSpacing: '-0.3px' }}>
            Tu próximo vehículo <span style={{ color: '#ED1C24' }}>lo encontrás acá</span>
          </h1>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(237, 28, 36, 0.1)', border: '1px solid rgba(237, 28, 36, 0.3)', color: '#ED1C24', padding: '5px 14px', borderRadius: '30px', fontSize: '0.74rem', fontWeight: 500, marginBottom: '14px' }}>
            TODOS NUESTROS USADOS CUENTAN CON 6 MESES DE GARANTÍA TOTAL
          </div>
          <p style={{ color: '#a1a1aa', fontSize: '0.92rem', margin: 0, fontWeight: 300 }}>
            Aquí podrás ver la descripción general de nuestras unidades, cualquier consulta no dudes en contactarte.
          </p>
        </div>

        {/* Buscador & Filtros */}
        <div style={{ maxWidth: '900px', margin: '0 auto 40px auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <input
            type="text"
            placeholder="🔍  Buscá tu próximo vehículo (Marca, modelo o versión)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: '100%', padding: '14px 18px', backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '10px', color: '#ffffff', fontSize: '0.9rem', outline: 'none', fontFamily: 'inherit' }}
          />

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              style={{ flex: 1, minWidth: '160px', padding: '11px 14px', backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '8px', color: '#d4d4d8', fontSize: '0.85rem', outline: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              {brands.map((b) => (
                <option key={b} value={b} style={{ backgroundColor: '#141518' }}>MARCA: {b}</option>
              ))}
            </select>

            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              style={{ flex: 1, minWidth: '160px', padding: '11px 14px', backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '8px', color: '#d4d4d8', fontSize: '0.85rem', outline: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              {years.map((y) => (
                <option key={y} value={y} style={{ backgroundColor: '#141518' }}>AÑO / MODELO: {y}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Contenido / Grilla */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#a1a1aa', fontSize: '0.95rem' }}>
            Cargando catálogo actualizado de usados...
          </div>
        ) : filtered.length === 0 ? (
          <div style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '16px', padding: '50px 20px', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, margin: '0 0 6px 0' }}>No se encontraron unidades con esos criterios</h3>
            <p style={{ color: '#71717a', fontSize: '0.86rem', margin: 0 }}>Probá buscando por otro término o limpiando los filtros seleccionados.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))', gap: '24px' }}>
            {filtered.map((v) => {
              const mainPhoto = v.photos && v.photos.length > 0 ? v.photos[0] : null;
              return (
                <div
                  key={v.id}
                  style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s ease, border-color 0.2s ease' }}
                >
                  <div style={{ height: '210px', backgroundColor: '#070709', position: 'relative', overflow: 'hidden' }}>
                    {mainPhoto ? (
                      <img src={mainPhoto} alt={`${v.brand} ${v.line}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#52525b', fontSize: '0.82rem' }}>
                        Sin foto disponible
                      </div>
                    )}
                    <span style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: 'rgba(0,0,0,0.75)', color: '#ED1C24', border: '1px solid rgba(237, 28, 36, 0.4)', fontSize: '0.68rem', fontWeight: 600, padding: '3px 9px', borderRadius: '6px' }}>
                      {v.year || 'SELECCIONADO'}
                    </span>
                  </div>

                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 600, margin: '0 0 4px 0', textTransform: 'uppercase' }}>
                      {v.brand} {v.line}
                    </h3>
                    <p style={{ color: '#a1a1aa', fontSize: '0.85rem', margin: '0 0 14px 0', minHeight: '38px', lineHeight: 1.4, fontWeight: 300 }}>
                      {v.version || 'Versión no especificada'}
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #27272a', borderBottom: '1px solid #27272a', padding: '10px 0', marginBottom: '16px', fontSize: '0.8rem', color: '#d4d4d8' }}>
                      <div><span style={{ color: '#71717a' }}>Año:</span> {v.year || '—'}</div>
                      <div><span style={{ color: '#71717a' }}>Km:</span> {v.km ? `${Number(v.km).toLocaleString('es-AR')} km` : 'A consultar'}</div>
                    </div>

                    <button
                      onClick={() => { setSelectedVehicle(v); setActivePhotoIdx(0); }}
                      style={{ width: '100%', backgroundColor: '#ED1C24', color: '#ffffff', border: 'none', padding: '11px', borderRadius: '8px', fontWeight: 600, fontSize: '0.84rem', cursor: 'pointer', fontFamily: 'inherit' }}
                    >
                      Ver Detalle y Fotos →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* MODAL DETALLE VEHÍCULO */}
      {selectedVehicle && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', zIndex: 1000 }}>
          <div style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '18px', maxWidth: '680px', width: '100%', maxHeight: '90vh', overflowY: 'auto', padding: '24px', position: 'relative' }}>
            
            <button
              onClick={() => setSelectedVehicle(null)}
              style={{ position: 'absolute', top: '16px', right: '16px', backgroundColor: 'transparent', border: 'none', color: '#a1a1aa', fontSize: '1.4rem', cursor: 'pointer' }}
            >
              ✕
            </button>

            <span style={{ backgroundColor: 'rgba(237, 28, 36, 0.15)', color: '#ED1C24', border: '1px solid rgba(237, 28, 36, 0.3)', fontSize: '0.7rem', fontWeight: 600, padding: '3px 8px', borderRadius: '4px' }}>
              USADO SELECCIONADO
            </span>

            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '8px 0 2px 0', textTransform: 'uppercase' }}>
              {selectedVehicle.brand} {selectedVehicle.line}
            </h2>
            <p style={{ color: '#a1a1aa', fontSize: '0.88rem', margin: '0 0 16px 0', fontWeight: 300 }}>
              {selectedVehicle.version}
            </p>

            {/* Galería Modal */}
            {selectedVehicle.photos && selectedVehicle.photos.length > 0 && (
              <div style={{ marginBottom: '18px' }}>
                <div style={{ height: '320px', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#070709', marginBottom: '8px' }}>
                  <img
                    src={selectedVehicle.photos[activePhotoIdx] || selectedVehicle.photos[0]}
                    alt="Foto"
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
                {selectedVehicle.photos.length > 1 && (
                  <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
                    {selectedVehicle.photos.map((p, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActivePhotoIdx(idx)}
                        style={{ border: activePhotoIdx === idx ? '2px solid #ED1C24' : '1px solid #27272a', padding: 0, borderRadius: '6px', overflow: 'hidden', width: '64px', height: '48px', flexShrink: 0, cursor: 'pointer', backgroundColor: '#070709' }}
                      >
                        <img src={p} alt={`Foto ${idx+1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Ficha */}
            <div style={{ backgroundColor: '#0B0C0E', border: '1px solid #27272a', borderRadius: '10px', padding: '14px', marginBottom: '20px', fontSize: '0.86rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: selectedVehicle.equipment ? '10px' : 0 }}>
                <div><span style={{ color: '#71717a' }}>Marca:</span> {selectedVehicle.brand}</div>
                <div><span style={{ color: '#71717a' }}>Línea:</span> {selectedVehicle.line}</div>
                <div><span style={{ color: '#71717a' }}>Modelo / Año:</span> {selectedVehicle.year || '—'}</div>
                <div><span style={{ color: '#71717a' }}>Kilometraje:</span> {selectedVehicle.km ? `${Number(selectedVehicle.km).toLocaleString('es-AR')} km` : '—'}</div>
              </div>
              {selectedVehicle.equipment && (
                <div style={{ borderTop: '1px solid #1F2024', paddingTop: '8px' }}>
                  <span style={{ color: '#71717a', display: 'block', fontSize: '0.78rem' }}>Equipamiento Adicional:</span>
                  <span style={{ color: '#d4d4d8', fontSize: '0.84rem' }}>{selectedVehicle.equipment}</span>
                </div>
              )}
            </div>

            <a
              href={`https://wa.me/5493584029424?text=${encodeURIComponent(`Hola! Quiero consultar por el ${selectedVehicle.brand} ${selectedVehicle.line} ${selectedVehicle.version || ''} (${selectedVehicle.year || ''})`)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', textAlign: 'center', backgroundColor: '#ED1C24', color: '#ffffff', padding: '13px', borderRadius: '8px', fontWeight: 600, fontSize: '0.88rem' }}
            >
              Consultar por este vehículo en WhatsApp →
            </a>

          </div>
        </div>
      )}

    </div>
  );
}
