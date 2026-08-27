'use client';

import { useState, useEffect, Suspense } from 'react';

function CatalogoContent() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('TODAS');
  const [yearFrom, setYearFrom] = useState('TODOS');
  const [yearTo, setYearTo] = useState('TODOS');
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  useEffect(() => {
    fetch('/api/vehicles')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const sorted = [...data].sort((a, b) => {
            const aHasPhoto = a.photos && a.photos.length > 0 ? 1 : 0;
            const bHasPhoto = b.photos && b.photos.length > 0 ? 1 : 0;
            if (bHasPhoto !== aHasPhoto) return bHasPhoto - aHasPhoto;
            return (Number(b.year) || 0) - (Number(a.year) || 0);
          });
          setVehicles(sorted);

          // Si el link viene de WhatsApp con ?auto=ID_DEL_AUTO, lo abre solo
          if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            const autoId = params.get('auto') || params.get('id');
            if (autoId) {
              const matched = sorted.find((v) => v.id === autoId);
              if (matched) setSelectedVehicle(matched);
            }
          }
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const openModal = (vehicle) => {
    setSelectedVehicle(vehicle);
    setActivePhotoIdx(0);
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', `/usados?auto=${vehicle.id}`);
    }
  };

  const closeModal = () => {
    setSelectedVehicle(null);
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', '/usados');
    }
  };

  const brands = ['TODAS', ...Array.from(new Set(vehicles.map((v) => v.brand).filter(Boolean))).sort()];
  const allYears = Array.from(new Set(vehicles.map((v) => Number(v.year)).filter((y) => !isNaN(y) && y > 1990))).sort((a, b) => b - a);

  const filtered = vehicles.filter((v) => {
    const term = search.toLowerCase();
    const matchSearch =
      !term ||
      (v.brand && v.brand.toLowerCase().includes(term)) ||
      (v.line && v.line.toLowerCase().includes(term)) ||
      (v.version && v.version.toLowerCase().includes(term));

    const matchBrand = selectedBrand === 'TODAS' || v.brand === selectedBrand;
    const vYear = Number(v.year);
    const matchFrom = yearFrom === 'TODOS' || (vYear && vYear >= Number(yearFrom));
    const matchTo = yearTo === 'TODOS' || (vYear && vYear <= Number(yearTo));

    return matchSearch && matchBrand && matchFrom && matchTo;
  });

  return (
    <div style={{ maxWidth: '1480px', margin: '0 auto' }}>
      
      {/* ENCABEZADO */}
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <div style={{ marginBottom: '16px' }}>
          <img src="/logo.png.png" alt="Cogno Automotores" style={{ height: '75px', width: 'auto', margin: '0 auto', display: 'inline-block' }} />
        </div>

        <h1 style={{ fontSize: '2.75rem', fontWeight: 600, margin: '0 0 20px 0', letterSpacing: '-0.5px', color: '#ffffff' }}>
          Estás a un click de tu próximo vehículo
        </h1>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: 'rgba(237, 28, 36, 0.08)', border: '1px solid rgba(237, 28, 36, 0.4)', color: '#ED1C24', padding: '10px 24px', borderRadius: '40px', fontSize: '0.88rem', fontWeight: 700, letterSpacing: '0.8px', marginBottom: '24px', textTransform: 'uppercase' }}>
          <span>🛡️</span>
          <span>TODOS NUESTROS USADOS CUENTAN CON 6 MESES DE GARANTÍA TOTAL</span>
        </div>

        <h2 style={{ fontSize: '1.6rem', fontWeight: 600, margin: '14px 0 6px 0', color: '#ffffff' }}>
          Nuestro catálogo
        </h2>

        <p style={{ color: '#a1a1aa', fontSize: '1rem', margin: 0, fontWeight: 300 }}>
          Aquí podrás ver la descripción general de nuestras unidades, cualquier consulta no dudes en contactarte.
        </p>
      </div>

      {/* BUSCADOR Y FILTROS */}
      <div style={{ maxWidth: '1000px', margin: '0 auto 45px auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <input
          type="text"
          placeholder="🔍  Buscá por marca, línea o versión (ej: Amarok, Cruze, Hilux)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: '100%', padding: '15px 20px', backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '12px', color: '#ffffff', fontSize: '0.98rem', outline: 'none' }}
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
          <select value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)} style={{ width: '100%', padding: '12px 16px', backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '10px', color: '#ffffff', fontSize: '0.9rem', outline: 'none' }}>
            {brands.map((b) => (<option key={b} value={b}>MARCA: {b}</option>))}
          </select>

          <select value={yearFrom} onChange={(e) => setYearFrom(e.target.value)} style={{ width: '100%', padding: '12px 16px', backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '10px', color: '#ffffff', fontSize: '0.9rem', outline: 'none' }}>
            <option value="TODOS">AÑO DESDE: TODOS</option>
            {allYears.map((y) => (<option key={y} value={y}>DESDE: {y}</option>))}
          </select>

          <select value={yearTo} onChange={(e) => setYearTo(e.target.value)} style={{ width: '100%', padding: '12px 16px', backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '10px', color: '#ffffff', fontSize: '0.9rem', outline: 'none' }}>
            <option value="TODOS">AÑO HASTA: TODOS</option>
            {allYears.map((y) => (<option key={y} value={y}>HASTA: {y}</option>))}
          </select>
        </div>
      </div>

      {/* GRILLA DE TARJETAS */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '80px 20px', color: '#a1a1aa' }}>Cargando catálogo actualizado de usados...</div>
      ) : filtered.length === 0 ? (
        <div style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '18px', padding: '60px 20px', textAlign: 'center', maxWidth: '650px', margin: '0 auto' }}>
          <h3>No se encontraron unidades con esos criterios</h3>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '26px' }}>
          {filtered.map((v) => {
            const mainPhoto = v.photos && v.photos.length > 0 ? v.photos[0] : null;
            return (
              <div key={v.id} style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '18px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '240px', backgroundColor: '#070709', position: 'relative', overflow: 'hidden' }}>
                  {mainPhoto ? (
                    <img src={mainPhoto} alt={`${v.brand} ${v.line}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#52525b' }}>Sin foto disponible</div>
                  )}
                </div>

                <div style={{ padding: '24px 22px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ED1C24', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>
                    {v.brand}
                  </span>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, margin: '0 0 6px 0', textTransform: 'uppercase', color: '#ffffff' }}>
                    {v.line}
                  </h3>
                  <p style={{ color: '#a1a1aa', fontSize: '0.92rem', margin: '0 0 16px 0', minHeight: '40px', lineHeight: 1.45, fontWeight: 300 }}>
                    {v.version || 'Versión estándar'}
                  </p>

                  <div style={{ borderTop: '1px solid #27272a', paddingTop: '14px', marginBottom: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ fontSize: '0.92rem', color: '#d4d4d8' }}><strong style={{ color: '#71717a' }}>Modelo:</strong> {v.year || '—'}</div>
                    <div style={{ fontSize: '0.92rem', color: '#d4d4d8' }}><strong style={{ color: '#71717a' }}>Kilómetros:</strong> {v.km ? `${Number(v.km).toLocaleString('es-AR')} km` : 'Consultar'}</div>
                  </div>

                  <button
                    onClick={() => openModal(v)}
                    style={{ width: '100%', backgroundColor: '#ED1C24', color: '#ffffff', border: 'none', padding: '12px', borderRadius: '10px', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer' }}
                  >
                    Ver Detalle y Fotos →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* MODAL DETALLE VEHÍCULO */}
      {selectedVehicle && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.88)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', zIndex: 1000 }}>
          <div style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '20px', maxWidth: '720px', width: '100%', maxHeight: '90vh', overflowY: 'auto', padding: '28px', position: 'relative' }}>
            <button onClick={closeModal} style={{ position: 'absolute', top: '18px', right: '18px', backgroundColor: 'transparent', border: 'none', color: '#a1a1aa', fontSize: '1.5rem', cursor: 'pointer' }}>✕</button>

            <span style={{ backgroundColor: 'rgba(237, 28, 36, 0.15)', color: '#ED1C24', border: '1px solid rgba(237, 28, 36, 0.3)', fontSize: '0.72rem', fontWeight: 700, padding: '4px 10px', borderRadius: '6px', textTransform: 'uppercase' }}>
              USADO SELECCIONADO
            </span>

            <h2 style={{ fontSize: '1.7rem', fontWeight: 700, margin: '10px 0 4px 0', textTransform: 'uppercase' }}>
              {selectedVehicle.brand} {selectedVehicle.line}
            </h2>
            <p style={{ color: '#a1a1aa', fontSize: '0.95rem', margin: '0 0 18px 0', fontWeight: 300 }}>{selectedVehicle.version}</p>

            {/* Galería */}
            {selectedVehicle.photos && selectedVehicle.photos.length > 0 && (
              <div style={{ marginBottom: '20px' }}>
                <div style={{ height: '360px', borderRadius: '14px', overflow: 'hidden', backgroundColor: '#070709', marginBottom: '10px' }}>
                  <img src={selectedVehicle.photos[activePhotoIdx] || selectedVehicle.photos[0]} alt="Foto" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                {selectedVehicle.photos.length > 1 && (
                  <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '6px' }}>
                    {selectedVehicle.photos.map((p, idx) => (
                      <button key={idx} onClick={() => setActivePhotoIdx(idx)} style={{ border: activePhotoIdx === idx ? '2px solid #ED1C24' : '1px solid #27272a', padding: 0, borderRadius: '8px', overflow: 'hidden', width: '75px', height: '55px', flexShrink: 0, cursor: 'pointer', backgroundColor: '#070709' }}>
                        <img src={p} alt={`Foto ${idx+1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Ficha técnica */}
            <div style={{ backgroundColor: '#0B0C0E', border: '1px solid #27272a', borderRadius: '12px', padding: '16px', marginBottom: '22px', fontSize: '0.9rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: selectedVehicle.equipment ? '12px' : 0 }}>
                <div><span style={{ color: '#71717a' }}>Marca:</span> {selectedVehicle.brand}</div>
                <div><span style={{ color: '#71717a' }}>Línea:</span> {selectedVehicle.line}</div>
                <div><span style={{ color: '#71717a' }}>Modelo / Año:</span> {selectedVehicle.year || '—'}</div>
                <div><span style={{ color: '#71717a' }}>Kilometraje:</span> {selectedVehicle.km ? `${Number(selectedVehicle.km).toLocaleString('es-AR')} km` : 'Consultar'}</div>
              </div>
              {selectedVehicle.equipment && (
                <div style={{ borderTop: '1px solid #1F2024', paddingTop: '10px' }}>
                  <span style={{ color: '#71717a', display: 'block', fontSize: '0.8rem', fontWeight: 600 }}>Equipamiento:</span>
                  <span style={{ color: '#d4d4d8', fontSize: '0.88rem' }}>{selectedVehicle.equipment}</span>
                </div>
              )}
            </div>

            <a
              href={`https://wa.me/5493584029424?text=${encodeURIComponent(`Hola! Quiero consultar por el ${selectedVehicle.brand} ${selectedVehicle.line} ${selectedVehicle.version || ''} (${selectedVehicle.year || ''})`)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', textAlign: 'center', backgroundColor: '#ED1C24', color: '#ffffff', padding: '14px', borderRadius: '10px', fontWeight: 700, fontSize: '0.92rem' }}
            >
              Consultar por este vehículo en WhatsApp →
            </a>
          </div>
        </div>
      )}

    </div>
  );
}

export default function CatalogoUsados() {
  return (
    <div style={{ backgroundColor: '#0B0C0E', minHeight: '100vh', color: '#ffffff', padding: '40px 20px 90px 20px' }}>
      <Suspense fallback={<div style={{ textAlign: 'center', padding: '80px', color: '#a1a1aa' }}>Cargando catálogo...</div>}>
        <CatalogoContent />
      </Suspense>
    </div>
  );
}
