'use client';

import { useState, useEffect, useMemo } from 'react';

export default function InventarioUsados() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('ALL');
  const [selectedModel, setSelectedModel] = useState('ALL');
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
        console.error('Error cargando vehículos:', err);
        setLoading(false);
      });
  }, []);

  // Lista dinámica de marcas para el dropdown
  const brandsList = useMemo(() => {
    const list = Array.from(new Set(vehicles.map((v) => v.brand).filter(Boolean)));
    return list.sort();
  }, [vehicles]);

  // Lista dinámica de modelos/años para el dropdown
  const modelsList = useMemo(() => {
    const list = Array.from(new Set(vehicles.map((v) => `${v.year}`).filter(Boolean)));
    return list.sort((a, b) => b - a);
  }, [vehicles]);

  // Filtrado múltiple (Buscador + Marca + Modelo/Año)
  const filteredVehicles = useMemo(() => {
    return vehicles.filter((v) => {
      const matchSearch = `${v.brand || ''} ${v.line || ''} ${v.version || ''} ${v.year || ''}`
        .toLowerCase()
        .includes(search.toLowerCase());
      
      const matchBrand = selectedBrand === 'ALL' || (v.brand && v.brand.toUpperCase() === selectedBrand.toUpperCase());
      const matchModel = selectedModel === 'ALL' || String(v.year) === String(selectedModel);

      return matchSearch && matchBrand && matchModel;
    });
  }, [vehicles, search, selectedBrand, selectedModel]);

  const openVehicleModal = (veh) => {
    setSelectedVehicle(veh);
    setActivePhotoIdx(0);
  };

  return (
    <div style={{ backgroundColor: '#0B0C0E', minHeight: '100vh', color: '#ffffff', fontFamily: 'system-ui, -apple-system, sans-serif', paddingBottom: '60px' }}>

      {/* 1. Hero / Encabezado */}
      <section style={{ textAlign: 'center', padding: '50px 16px 20px 16px', maxWidth: '850px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.4rem', fontWeight: 900, letterSpacing: '0.5px', margin: '0 0 16px 0', lineHeight: 1.2 }}>
          Tu próximo vehículo <span style={{ color: '#ED1C24' }}>lo encontrás acá</span>
        </h1>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(237, 28, 36, 0.1)', border: '1px solid rgba(237, 28, 36, 0.3)', color: '#ED1C24', padding: '6px 14px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.5px', marginBottom: '24px' }}>
          🛡️ TODOS NUESTROS USADOS CUENTAN CON 6 MESES DE GARANTÍA TOTAL
        </div>

        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '0 0 6px 0' }}>Nuestro catálogo</h2>
        <p style={{ fontSize: '0.9rem', color: '#a1a1aa', margin: 0 }}>
          Aquí podrás ver la descripción general de nuestras unidades, cualquier consulta no dudes en contactarte.
        </p>
      </section>

      {/* 2. Barra de Búsqueda y Filtros */}
      <section style={{ maxWidth: '1100px', margin: '30px auto 40px auto', padding: '0 16px' }}>
        {/* Input Buscador */}
        <div style={{ marginBottom: '16px' }}>
          <div style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#71717a', fontSize: '1rem' }}>🔍</span>
            <input 
              type="text" 
              placeholder="Buscá tu próximo vehículo (Marca, modelo o versión)..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: '100%', boxSizing: 'border-box', padding: '14px 16px 14px 44px', borderRadius: '12px', backgroundColor: '#141518', border: '1px solid #2C2D31', color: '#ffffff', outline: 'none', fontSize: '0.92rem' }}
            />
          </div>
        </div>

        {/* Dropdowns de Filtro */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <select 
            value={selectedBrand} 
            onChange={(e) => setSelectedBrand(e.target.value)}
            style={{ backgroundColor: '#141518', color: '#ffffff', border: '1px solid #2C2D31', padding: '10px 16px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700, outline: 'none', cursor: 'pointer' }}
          >
            <option value="ALL">MARCA: TODAS</option>
            {brandsList.map((b) => (
              <option key={b} value={b}>{b.toUpperCase()}</option>
            ))}
          </select>

          <select 
            value={selectedModel} 
            onChange={(e) => setSelectedModel(e.target.value)}
            style={{ backgroundColor: '#141518', color: '#ffffff', border: '1px solid #2C2D31', padding: '10px 16px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700, outline: 'none', cursor: 'pointer' }}
          >
            <option value="ALL">AÑO / MODELO: TODOS</option>
            {modelsList.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>

          {(selectedBrand !== 'ALL' || selectedModel !== 'ALL' || search !== '') && (
            <button 
              onClick={() => { setSelectedBrand('ALL'); setSelectedModel('ALL'); setSearch(''); }}
              style={{ backgroundColor: 'transparent', border: '1px solid #3f3f46', color: '#a1a1aa', padding: '10px 16px', borderRadius: '8px', fontSize: '0.85rem', cursor: 'pointer' }}
            >
              Limpiar filtros
            </button>
          )}
        </div>
      </section>

      {/* 3. Grilla de Vehículos */}
      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 16px' }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#a1a1aa' }}>
            <div style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Cargando catálogo en tiempo real...</div>
          </div>
        ) : filteredVehicles.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0', backgroundColor: '#141518', borderRadius: '16px', border: '1px solid #2C2D31' }}>
            <div style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '6px' }}>No se encontraron unidades con esos criterios</div>
            <p style={{ color: '#71717a', fontSize: '0.9rem', margin: 0 }}>Probá buscando por otro término o limpiando los filtros seleccionados.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(255px, 1fr))', gap: '20px' }}>
            {filteredVehicles.map((v) => (
              <div 
                key={v.id} 
                style={{ backgroundColor: '#1A1B1E', border: '1px solid #2C2D31', borderRadius: '14px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 6px 18px rgba(0,0,0,0.35)', transition: 'transform 0.2s ease' }}
              >
                {/* Foto Principal */}
                <div style={{ height: '180px', backgroundColor: '#111215', position: 'relative', overflow: 'hidden' }}>
                  {v.photos && v.photos.length > 0 ? (
                    <img 
                      src={v.photos[0]} 
                      alt={`${v.brand} ${v.line}`} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                    />
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#52525b' }}>
                      <span style={{ fontSize: '2rem' }}>📷</span>
                      <span style={{ fontSize: '0.75rem', marginTop: '4px' }}>Foto en preparación</span>
                    </div>
                  )}

                  {v.photos && v.photos.length > 1 && (
                    <span style={{ position: 'absolute', bottom: '8px', right: '8px', backgroundColor: 'rgba(0,0,0,0.7)', color: '#fff', fontSize: '0.7rem', padding: '2px 8px', borderRadius: '6px', fontWeight: 700 }}>
                      📷 {v.photos.length} fotos
                    </span>
                  )}
                </div>

                {/* Datos del Vehículo */}
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#ffffff', margin: '0 0 6px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {v.brand}
                  </h3>

                  <div style={{ fontSize: '0.75rem', color: '#71717a', textTransform: 'uppercase', fontWeight: 700, marginBottom: '2px' }}>LÍNEA</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#e4e4e7', marginBottom: '8px' }}>
                    {v.line || '—'}
                  </div>

                  <div style={{ fontSize: '0.82rem', color: '#a1a1aa', lineHeight: 1.4, marginBottom: '14px', minHeight: '34px' }}>
                    {v.version || ''}
                  </div>

                  <div style={{ borderTop: '1px solid #27272a', paddingTop: '10px', marginTop: 'auto', marginBottom: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#d4d4d8', marginBottom: '4px' }}>
                      <span style={{ color: '#71717a', fontWeight: 600 }}>MODELO</span>
                      <span style={{ fontWeight: 700 }}>{v.year || '—'}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#d4d4d8' }}>
                      <span style={{ color: '#71717a', fontWeight: 600 }}>KM</span>
                      <span style={{ fontWeight: 700 }}>{v.km ? `${Number(v.km).toLocaleString('es-AR')}` : '—'}</span>
                    </div>
                  </div>

                  {/* Botón Ver Ficha */}
                  <button 
                    onClick={() => openVehicleModal(v)}
                    style={{ width: '100%', backgroundColor: '#ED1C24', color: '#ffffff', border: 'none', padding: '10px', borderRadius: '8px', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer' }}
                  >
                    Ver detalles y fotos
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* 4. Modal / Ficha Completa del Vehículo */}
      {selectedVehicle && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
          <div style={{ backgroundColor: '#1A1B1E', border: '1px solid #2C2D31', borderRadius: '16px', maxWidth: '640px', width: '100%', maxHeight: '92vh', overflowY: 'auto', padding: '24px', position: 'relative', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
            
            <button 
              onClick={() => setSelectedVehicle(null)} 
              style={{ position: 'absolute', top: '16px', right: '16px', background: '#27272a', border: 'none', color: '#ffffff', width: '32px', height: '32px', borderRadius: '50%', fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              ✕
            </button>

            <span style={{ backgroundColor: 'rgba(237, 28, 36, 0.15)', color: '#ED1C24', border: '1px solid rgba(237, 28, 36, 0.3)', fontSize: '0.7rem', fontWeight: 700, padding: '3px 8px', borderRadius: '5px', textTransform: 'uppercase' }}>
              USADO SELECCIONADO
            </span>

            <h2 style={{ fontSize: '1.45rem', fontWeight: 900, margin: '10px 0 4px 0', textTransform: 'uppercase' }}>
              {selectedVehicle.brand} {selectedVehicle.line}
            </h2>
            <p style={{ color: '#a1a1aa', fontSize: '0.9rem', margin: '0 0 16px 0' }}>
              {selectedVehicle.version}
            </p>

            {/* Foto Grande Activa */}
            {selectedVehicle.photos && selectedVehicle.photos.length > 0 && (
              <div style={{ marginBottom: '14px' }}>
                <div style={{ height: '300px', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#111215', marginBottom: '8px' }}>
                  <img 
                    src={selectedVehicle.photos[activePhotoIdx] || selectedVehicle.photos[0]} 
                    alt="Foto grande" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>

                {/* Miniaturas */}
                {selectedVehicle.photos.length > 1 && (
                  <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
                    {selectedVehicle.photos.map((p, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setActivePhotoIdx(idx)}
                        style={{ border: activePhotoIdx === idx ? '2px solid #ED1C24' : '2px solid transparent', padding: 0, borderRadius: '6px', overflow: 'hidden', width: '60px', height: '45px', flexShrink: 0, cursor: 'pointer', backgroundColor: '#111215' }}
                      >
                        <img src={p} alt={`Miniatura ${idx+1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Ficha Técnica */}
            <div style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '12px', padding: '16px', marginBottom: '20px', fontSize: '0.88rem', lineHeight: 1.6 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '8px' }}>
                <div><span style={{ color: '#71717a' }}>Año / Modelo:</span> <strong>{selectedVehicle.year || '—'}</strong></div>
                <div><span style={{ color: '#71717a' }}>Kilómetros:</span> <strong>{selectedVehicle.km ? `${Number(selectedVehicle.km).toLocaleString('es-AR')} km` : '—'}</strong></div>
              </div>
              {selectedVehicle.equipment && (
                <div style={{ borderTop: '1px solid #27272a', paddingTop: '8px', marginTop: '8px' }}>
                  <span style={{ color: '#71717a', display: 'block', marginBottom: '2px' }}>Equipamiento / Observaciones:</span>
                  <span style={{ color: '#d4d4d8' }}>{selectedVehicle.equipment}</span>
                </div>
              )}
            </div>

            {/* Botón WhatsApp de Consulta */}
            <a 
              href={`https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20el%20${encodeURIComponent(`${selectedVehicle.brand || ''} ${selectedVehicle.line || ''} ${selectedVehicle.version || ''} (${selectedVehicle.year || ''})`)}`}
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'block', textAlign: 'center', backgroundColor: '#ED1C24', color: '#ffffff', textDecoration: 'none', padding: '13px', borderRadius: '10px', fontWeight: 800, fontSize: '0.92rem' }}
            >
              Consultar por este vehículo en WhatsApp →
            </a>
          </div>
        </div>
      )}

      {/* Botón Flotante de WhatsApp */}
      <a 
        href="https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20el%20catálogo%20de%20usados" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          backgroundColor: '#25D366',
          color: '#ffffff',
          borderRadius: '50%',
          width: '58px',
          height: '58px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 18px rgba(0,0,0,0.4)',
          zIndex: 999,
          textDecoration: 'none'
        }}
      >
        <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.07-1.782-.406-1.364-.565-2.281-1.927-2.35-2.018-.069-.092-.55-0.732-.55-1.396s.348-.99.472-1.127c.125-.138.27-.173.361-.173.091 0 .181.001.261.005.085.004.2-.033.312.238.117.283.402.979.437 1.05.035.071.058.154.012.246-.046.092-.07.15-.138.232-.069.081-.146.182-.208.245-.07.07-.143.146-.062.285.081.139.362.597.777.967.535.477.986.625 1.125.694.139.069.222.058.305-.035.083-.092.355-.415.45-.558.095-.143.19-.119.32-.071.13.047.83.392.973.463.143.072.238.107.273.167.035.06.035.348-.109.753z"/>
        </svg>
      </a>

    </div>
  );
}
