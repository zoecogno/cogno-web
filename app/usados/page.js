'use client';

import { useState, useEffect } from 'react';

export default function CatalogoUsados() {
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
          // Ordenar: primero los que tienen foto, y luego por año de mayor a menor
          const sorted = [...data].sort((a, b) => {
            const aHasPhoto = a.photos && a.photos.length > 0 ? 1 : 0;
            const bHasPhoto = b.photos && b.photos.length > 0 ? 1 : 0;
            if (bHasPhoto !== aHasPhoto) return bHasPhoto - aHasPhoto;
            return (Number(b.year) || 0) - (Number(a.year) || 0);
          });
          setVehicles(sorted);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Listas únicas de Marcas y Años
  const brands = ['TODAS', ...Array.from(new Set(vehicles.map((v) => v.brand).filter(Boolean))).sort()];
  const allYears = Array.from(new Set(vehicles.map((v) => Number(v.year)).filter((y) => !isNaN(y) && y > 1990))).sort((a, b) => b - a);

  // Filtrado múltiple
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
    <div style={{ backgroundColor: '#0B0C0E', minHeight: '100vh', color: '#ffffff', padding: '40px 20px 90px 20px' }}>
      
      {/* ESTILOS INTERACTIVOS */}
      <style>{`
        .used-card {
          background-color: #141518;
          border: 1px solid #27272a;
          border-radius: 18px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 8px 24px rgba(0,0,0,0.4);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .used-card:hover {
          transform: translateY(-5px);
          border-color: rgba(237, 28, 36, 0.4);
          box-shadow: 0 14px 30px rgba(0,0,0,0.6);
        }
        .used-img-box {
          height: 240px;
          background-color: #070709;
          position: relative;
          overflow: hidden;
        }
        .used-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .used-card:hover .used-img-box img {
          transform: scale(1.05);
        }
      `}</style>

      <div style={{ maxWidth: '1480px', margin: '0 auto' }}>
        
        {/* LOGO & ENCABEZADO */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{ marginBottom: '16px' }}>
            <img 
              src="/logo.png.png" 
              alt="Cogno Automotores" 
              style={{ height: '75px', width: 'auto', margin: '0 auto', display: 'inline-block' }}
            />
          </div>

          <h1 style={{ fontSize: '3rem', fontWeight: 700, margin: '0 0 14px 0', letterSpacing: '-0.5px' }}>
            Estás a un click de tu próximo <span style={{ color: '#ED1C24' }}>vehículo</span>
          </h1>

       <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: 'rgba(237, 28, 36, 0.08)', border: '1px solid rgba(237, 28, 36, 0.4)', color: '#ED1C24', padding: '10px 24px', borderRadius: '40px', fontSize: '0.88rem', fontWeight: 700, letterSpacing: '0.8px', marginBottom: '28px', textTransform: 'uppercase' }}>
            <span>🛡️</span>
            <span>TODOS NUESTROS USADOS CUENTAN CON 6 MESES DE GARANTÍA TOTAL</span>
          </div>

          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, margin: '14px 0 6px 0', color: '#ffffff' }}>
            Nuestro catálogo
          </h2>

          <p style={{ color: '#a1a1aa', fontSize: '1rem', margin: 0, fontWeight: 300 }}>
            Aquí podrás ver la descripción general de nuestras unidades, cualquier consulta no dudes en contactarte.
          </p>
        </div>

        {/* BUSCADOR & FILTROS (CON RANGO DE AÑOS) */}
        <div style={{ maxWidth: '1000px', margin: '0 auto 45px auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <input
            type="text"
            placeholder="🔍  Buscá por marca, línea o versión (ej: Amarok, Cruze, Hilux)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: '100%', padding: '15px 20px', backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '12px', color: '#ffffff', fontSize: '0.98rem', outline: 'none', fontFamily: 'inherit' }}
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
            
            {/* Filtro Marca */}
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              style={{ width: '100%', padding: '12px 16px', backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '10px', color: '#ffffff', fontSize: '0.9rem', outline: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              {brands.map((b) => (
                <option key={b} value={b} style={{ backgroundColor: '#141518' }}>MARCA: {b}</option>
              ))}
            </select>

            {/* Filtro Año Desde */}
            <select
              value={yearFrom}
              onChange={(e) => setYearFrom(e.target.value)}
              style={{ width: '100%', padding: '12px 16px', backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '10px', color: '#ffffff', fontSize: '0.9rem', outline: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              <option value="TODOS" style={{ backgroundColor: '#141518' }}>AÑO DESDE: TODOS</option>
              {allYears.map((y) => (
                <option key={y} value={y} style={{ backgroundColor: '#141518' }}>DESDE: {y}</option>
              ))}
            </select>

            {/* Filtro Año Hasta */}
            <select
              value={yearTo}
              onChange={(e) => setYearTo(e.target.value)}
              style={{ width: '100%', padding: '12px 16px', backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '10px', color: '#ffffff', fontSize: '0.9rem', outline: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              <option value="TODOS" style={{ backgroundColor: '#141518' }}>AÑO HASTA: TODOS</option>
              {allYears.map((y) => (
                <option key={y} value={y} style={{ backgroundColor: '#141518' }}>HASTA: {y}</option>
              ))}
            </select>

          </div>
        </div>

        {/* GRILLA DE VEHÍCULOS */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '80px 20px', color: '#a1a1aa', fontSize: '1.1rem' }}>
            Cargando catálogo actualizado de usados...
          </div>
        ) : filtered.length === 0 ? (
          <div style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '18px', padding: '60px 20px', textAlign: 'center', maxWidth: '650px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 600, margin: '0 0 8px 0' }}>No se encontraron unidades con esos criterios</h3>
            <p style={{ color: '#71717a', fontSize: '0.95rem', margin: 0 }}>Probá buscando por otro término o limpiando los filtros seleccionados.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: '26px' }}>
            {filtered.map((v) => {
              const mainPhoto = v.photos && v.photos.length > 0 ? v.photos[0] : null;
              return (
                <div key={v.id} className="used-card">
                  
                  {/* FOTO (Sin cartel rojo de año encima) */}
                  <div className="used-img-box">
                    {mainPhoto ? (
                      <img src={mainPhoto} alt={`${v.brand} ${v.line}`} />
                    ) : (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#52525b', fontSize: '0.9rem' }}>
                        Sin foto disponible
                      </div>
                    )}
                  </div>

                  {/* DATOS DEL VEHÍCULO */}
                  <div style={{ padding: '24px 22px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    
                    {/* MARCA */}
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ED1C24', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>
                      {v.brand}
                    </span>

                    {/* LÍNEA / MODELO */}
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 700, margin: '0 0 6px 0', textTransform: 'uppercase', color: '#ffffff' }}>
                      {v.line}
                    </h3>

                    {/* VERSIÓN */}
                    <p style={{ color: '#a1a1aa', fontSize: '0.92rem', margin: '0 0 16px 0', minHeight: '40px', lineHeight: 1.45, fontWeight: 300 }}>
                      {v.version || 'Versión estándar'}
                    </p>

                    {/* MODELO / AÑO Y KILOMETRAJE (Alineados a la izquierda abajo) */}
                    <div style={{ borderTop: '1px solid #27272a', paddingTop: '14px', marginBottom: '18px', display: 'flex', flexDirection: 'column', gap: '4px', textAlign: 'left' }}>
                      <div style={{ fontSize: '0.92rem', color: '#d4d4d8' }}>
                        <strong style={{ color: '#71717a', fontWeight: 500 }}>Modelo:</strong> {v.year || '—'}
                      </div>
                      <div style={{ fontSize: '0.92rem', color: '#d4d4d8' }}>
                        <strong style={{ color: '#71717a', fontWeight: 500 }}>Kilómetros:</strong> {v.km ? `${Number(v.km).toLocaleString('es-AR')} km` : 'Consultar'}
                      </div>
                    </div>

                    <button
                      onClick={() => { setSelectedVehicle(v); setActivePhotoIdx(0); }}
                      style={{ width: '100%', backgroundColor: '#ED1C24', color: '#ffffff', border: 'none', padding: '12px', borderRadius: '10px', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', fontFamily: 'inherit', transition: 'background-color 0.2s ease' }}
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
          <div style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '20px', maxWidth: '720px', width: '100%', maxHeight: '90vh', overflowY: 'auto', padding: '28px', position: 'relative' }}>
            
            <button
              onClick={() => setSelectedVehicle(null)}
              style={{ position: 'absolute', top: '18px', right: '18px', backgroundColor: 'transparent', border: 'none', color: '#a1a1aa', fontSize: '1.5rem', cursor: 'pointer' }}
            >
              ✕
            </button>

            <span style={{ backgroundColor: 'rgba(237, 28, 36, 0.15)', color: '#ED1C24', border: '1px solid rgba(237, 28, 36, 0.3)', fontSize: '0.72rem', fontWeight: 700, padding: '4px 10px', borderRadius: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              USADO SELECCIONADO
            </span>

            <h2 style={{ fontSize: '1.7rem', fontWeight: 700, margin: '10px 0 4px 0', textTransform: 'uppercase' }}>
              {selectedVehicle.brand} {selectedVehicle.line}
            </h2>
            <p style={{ color: '#a1a1aa', fontSize: '0.95rem', margin: '0 0 18px 0', fontWeight: 300 }}>
              {selectedVehicle.version}
            </p>

            {/* Galería Modal */}
            {selectedVehicle.photos && selectedVehicle.photos.length > 0 && (
              <div style={{ marginBottom: '20px' }}>
                <div style={{ height: '360px', borderRadius: '14px', overflow: 'hidden', backgroundColor: '#070709', marginBottom: '10px' }}>
                  <img
                    src={selectedVehicle.photos[activePhotoIdx] || selectedVehicle.photos[0]}
                    alt="Foto"
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
                {selectedVehicle.photos.length > 1 && (
                  <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '6px' }}>
                    {selectedVehicle.photos.map((p, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActivePhotoIdx(idx)}
                        style={{ border: activePhotoIdx === idx ? '2px solid #ED1C24' : '1px solid #27272a', padding: 0, borderRadius: '8px', overflow: 'hidden', width: '75px', height: '55px', flexShrink: 0, cursor: 'pointer', backgroundColor: '#070709' }}
                      >
                        <img src={p} alt={`Foto ${idx+1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Ficha Técnica */}
            <div style={{ backgroundColor: '#0B0C0E', border: '1px solid #27272a', borderRadius: '12px', padding: '16px', marginBottom: '22px', fontSize: '0.9rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: selectedVehicle.equipment ? '12px' : 0 }}>
                <div><span style={{ color: '#71717a' }}>Marca:</span> {selectedVehicle.brand}</div>
                <div><span style={{ color: '#71717a' }}>Línea:</span> {selectedVehicle.line}</div>
                <div><span style={{ color: '#71717a' }}>Modelo / Año:</span> {selectedVehicle.year || '—'}</div>
                <div><span style={{ color: '#71717a' }}>Kilometraje:</span> {selectedVehicle.km ? `${Number(selectedVehicle.km).toLocaleString('es-AR')} km` : 'Consultar'}</div>
              </div>
              {selectedVehicle.equipment && (
                <div style={{ borderTop: '1px solid #1F2024', paddingTop: '10px' }}>
                  <span style={{ color: '#71717a', display: 'block', fontSize: '0.8rem', fontWeight: 600 }}>Equipamiento Adicional:</span>
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
