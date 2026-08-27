'use client';

import { useState, useEffect, useMemo, Suspense } from 'react';

function CatalogoContent() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);
  
  const [minAvailableYear, setMinAvailableYear] = useState(2010);
  const [maxAvailableYear, setMaxAvailableYear] = useState(new Date().getFullYear());
  const [yearRange, setYearRange] = useState([2010, new Date().getFullYear()]);

  // Estados para acordeones móviles
  const [openBrandMobile, setOpenBrandMobile] = useState(false);
  const [openYearMobile, setOpenYearMobile] = useState(false);

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

          const years = sorted.map((v) => Number(v.year)).filter((y) => !isNaN(y) && y > 1990);
          if (years.length > 0) {
            const min = Math.min(...years);
            const max = Math.max(...years);
            setMinAvailableYear(min);
            setMaxAvailableYear(max);
            setYearRange([min, max]);
          }

          if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            const autoId = params.get('auto') || params.get('id');
            if (autoId) {
              const matched = sorted.find((v) => String(v.id) === String(autoId));
              if (matched) {
                setSelectedVehicle(matched);
                document.title = `${matched.brand} ${matched.line} | Cogno Automotores`;
              }
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
      document.title = `${vehicle.brand} ${vehicle.line} | Cogno Automotores`;
    }
  };

  const closeModal = () => {
    setSelectedVehicle(null);
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', '/usados');
      document.title = 'Inventario de Usados Seleccionados | Cogno Automotores';
    }
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    if (selectedVehicle?.photos?.length) {
      setActivePhotoIdx((prev) => (prev + 1) % selectedVehicle.photos.length);
    }
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    if (selectedVehicle?.photos?.length) {
      setActivePhotoIdx((prev) => (prev - 1 + selectedVehicle.photos.length) % selectedVehicle.photos.length);
    }
  };

  const allBrands = useMemo(() => {
    return Array.from(new Set(vehicles.map((v) => v.brand).filter(Boolean))).sort();
  }, [vehicles]);

  const toggleBrand = (b) => {
    if (b === 'TODAS') {
      setSelectedBrands([]);
      return;
    }
    setSelectedBrands((prev) => 
      prev.includes(b) ? prev.filter((item) => item !== b) : [...prev, b]
    );
  };

  const filtered = useMemo(() => {
    const searchTerms = search.toLowerCase().trim().split(/\s+/).filter(Boolean);

    return vehicles.filter((v) => {
      const vText = `${v.brand || ''} ${v.line || ''} ${v.version || ''} ${v.year || ''}`.toLowerCase();
      
      const matchesSearch = searchTerms.length === 0 || searchTerms.every((term) => vText.includes(term));
      const matchBrand = selectedBrands.length === 0 || selectedBrands.includes(v.brand);
      
      const vYear = Number(v.year);
      const matchYear = !vYear || (vYear >= yearRange[0] && vYear <= yearRange[1]);

      return matchesSearch && matchBrand && matchYear;
    });
  }, [vehicles, search, selectedBrands, yearRange]);

  const minPercent = ((yearRange[0] - minAvailableYear) / (maxAvailableYear - minAvailableYear || 1)) * 100;
  const maxPercent = ((yearRange[1] - minAvailableYear) / (maxAvailableYear - minAvailableYear || 1)) * 100;

  return (
    <div style={{ maxWidth: '1540px', margin: '0 auto', padding: '0 24px' }}>
      
      {/* ESTILOS INTERACTIVOS Y RESPONSIVE */}
      <style>{`
        .hero-title-usados {
          font-size: 3.2rem;
          font-weight: 600;
          margin: 0 auto 18px auto;
          letter-spacing: -0.5px;
          color: #ffffff;
          line-height: 1.2;
          max-width: 950px;
        }
        .filter-container {
          background-color: #141518;
          border: 1px solid #27272a;
          border-radius: 20px;
          padding: 24px 28px;
          margin: 0 auto 45px auto;
          max-width: 1540px;
        }
        .filter-main-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 32px;
          align-items: flex-start;
        }

        /* DUAL SLIDER */
        .dual-slider-wrapper {
          position: relative;
          height: 36px;
          display: flex;
          align-items: center;
        }
        .dual-slider-track {
          position: absolute;
          width: 100%;
          height: 6px;
          background-color: #27272a;
          border-radius: 3px;
          z-index: 1;
        }
        .dual-slider-highlight {
          position: absolute;
          height: 6px;
          background-color: #ED1C24;
          border-radius: 3px;
          z-index: 2;
        }
        .dual-range-input {
          position: absolute;
          width: 100%;
          background: none;
          pointer-events: none;
          -webkit-appearance: none;
          appearance: none;
          z-index: 3;
          height: 0;
          margin: 0;
        }
        .dual-range-input::-webkit-slider-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #ffffff;
          border: 3px solid #ED1C24;
          cursor: pointer;
          pointer-events: auto;
          -webkit-appearance: none;
          box-shadow: 0 2px 6px rgba(0,0,0,0.5);
          transition: transform 0.15s ease;
        }
        .dual-range-input::-webkit-slider-thumb:hover {
          transform: scale(1.15);
        }
        .dual-range-input::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #ffffff;
          border: 3px solid #ED1C24;
          cursor: pointer;
          pointer-events: auto;
          box-shadow: 0 2px 6px rgba(0,0,0,0.5);
        }

        /* CHIPS MARCAS */
        .brand-chip {
          padding: 7px 14px;
          border-radius: 8px;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          border: 1px solid #27272a;
          background-color: #0B0C0E;
          color: #a1a1aa;
          transition: all 0.2s ease;
          user-select: none;
        }
        .brand-chip.active {
          background-color: rgba(237, 28, 36, 0.15);
          border-color: #ED1C24;
          color: #ffffff;
        }
        .brand-chip:hover {
          border-color: #ED1C24;
        }

        /* GRILLA */
        .usados-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
          gap: 26px;
        }
        .card-usado {
          background-color: #141518;
          border: 1px solid #27272a;
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .card-usado:hover {
          transform: translateY(-6px);
          border-color: rgba(237, 28, 36, 0.6);
          box-shadow: 0 16px 32px rgba(0,0,0,0.6), 0 0 20px rgba(237, 28, 36, 0.15);
        }
        .card-usado-img-box {
          height: 230px;
          background-color: #070709;
          position: relative;
          overflow: hidden;
        }
        .card-usado-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .card-usado:hover .card-usado-img-box img {
          transform: scale(1.06);
        }

        /* MODAL */
        .modal-box-inner {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .modal-box-inner::-webkit-scrollbar {
          display: none;
        }

        .gallery-arrow-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: rgba(11, 12, 14, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          cursor: pointer;
          backdrop-filter: blur(4px);
          transition: background-color 0.2s ease, transform 0.2s ease;
          z-index: 10;
        }
        .gallery-arrow-btn:hover {
          background-color: #ED1C24;
          border-color: #ED1C24;
          transform: translateY(-50%) scale(1.08);
        }

        /* ELEMENTOS ACORDEÓN MÓVIL (OCULTOS EN ESCRITORIO) */
        .mobile-accordion-toggle {
          display: none;
        }
        .desktop-filter-header {
          display: block;
        }

        /* CELULARES (ADAPTACIÓN COMPACTA CON BOTONES DE FILTRO) */
        @media (max-width: 860px) {
          .desktop-filter-header {
            display: none !important;
          }
          .mobile-accordion-toggle {
            display: flex !important;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            background-color: #0B0C0E;
            border: 1px solid #27272a;
            border-radius: 10px;
            padding: 12px 16px;
            color: #ffffff;
            font-size: 0.88rem;
            font-weight: 600;
            cursor: pointer;
          }
          .mobile-accordion-toggle.active {
            border-color: #ED1C24;
            color: #ED1C24;
          }
          .filter-main-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .filter-section-desktop {
            display: none;
          }
          .filter-section-desktop.show-mobile {
            display: block !important;
            margin-top: 10px;
          }
          .filter-container {
            padding: 14px !important;
            border-radius: 16px !important;
            margin-bottom: 24px !important;
          }
          .hero-title-usados {
            font-size: 1.95rem !important;
            line-height: 1.25 !important;
            margin-bottom: 12px !important;
          }
          .hero-desc-usados {
            font-size: 0.94rem !important;
            line-height: 1.5 !important;
          }
          .hero-badge-usados {
            padding: 6px 16px !important;
            font-size: 0.72rem !important;
            margin-bottom: 14px !important;
          }
          .usados-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 12px !important;
          }
          .card-usado {
            border-radius: 14px !important;
          }
          .card-usado-img-box {
            height: 125px !important;
          }
          .card-usado-body {
            padding: 12px 10px !important;
          }
          .card-usado-brand {
            font-size: 0.68rem !important;
            margin-bottom: 2px !important;
          }
          .card-usado-line {
            font-size: 0.95rem !important;
            margin-bottom: 4px !important;
          }
          .card-usado-version {
            font-size: 0.78rem !important;
            margin-bottom: 10px !important;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .card-usado-specs {
            display: none !important;
          }
          .card-usado-btn {
            font-size: 0.76rem !important;
            padding: 8px 4px !important;
            border-radius: 8px !important;
          }
          .modal-box-inner {
            padding: 20px 16px !important;
            border-radius: 16px !important;
          }
          .modal-main-img-box {
            height: 230px !important;
          }
          .modal-title-text {
            font-size: 1.35rem !important;
          }
        }
      `}</style>

      {/* 1. ENCABEZADO INSTITUCIONAL */}
      <section style={{ padding: '35px 20px 15px 20px', textAlign: 'center', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ marginBottom: '14px' }}>
          <img 
            src="/logo.png.png" 
            alt="Cogno Automotores" 
            style={{ height: '70px', width: 'auto', margin: '0 auto', display: 'inline-block' }} 
          />
        </div>

        <h1 className="hero-title-usados">
          Tu próximo vehículo <span style={{ color: '#ED1C24' }}>lo encontrás acá</span>
        </h1>

        <div className="hero-badge-usados" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(237, 28, 36, 0.08)', border: '1px solid rgba(237, 28, 36, 0.4)', color: '#ED1C24', padding: '9px 22px', borderRadius: '30px', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.8px', marginBottom: '20px', textTransform: 'uppercase' }}>
          <span>🛡️</span>
          <span>TODOS NUESTROS USADOS CUENTAN CON 6 MESES DE GARANTÍA TOTAL</span>
        </div>

        <p className="hero-desc-usados" style={{ color: '#F4F4F5', fontSize: '1.15rem', maxWidth: '880px', margin: '0 auto 12px auto', lineHeight: 1.7, fontWeight: 400 }}>
          Explorá nuestro catálogo de unidades seleccionadas con historial verificado y entrega con documentación lista para salir a la calle.
        </p>

      </section>

      {/* 2. FILTROS CON ACORDEÓN INTELIGENTE PARA MÓVILES */}
      <div className="filter-container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* Buscador */}
          <input
            type="text"
            placeholder="🔍 Buscá por marca, modelo o versión (ej: Chevrolet Cruze, Amarok, Hilux)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: '100%', boxSizing: 'border-box', padding: '14px 18px', backgroundColor: '#0B0C0E', border: '1px solid #27272a', borderRadius: '12px', color: '#ffffff', fontSize: '0.98rem', outline: 'none' }}
          />

          {/* Grilla de Filtros */}
          <div className="filter-main-grid">
            
            {/* 1. SECCIÓN MARCAS */}
            <div>
              {/* Título en PC */}
              <div className="desktop-filter-header" style={{ fontSize: '0.78rem', color: '#a1a1aa', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '10px' }}>
                FILTRAR POR MARCA:
              </div>

              {/* Botón desplegable solo en celular */}
              <button
                type="button"
                onClick={() => setOpenBrandMobile(!openBrandMobile)}
                className={`mobile-accordion-toggle ${selectedBrands.length > 0 || openBrandMobile ? 'active' : ''}`}
              >
                <span>
                   Filtrar por Marca {selectedBrands.length > 0 ? `(${selectedBrands.length})` : ''}
                </span>
                <span>{openBrandMobile ? '▲' : '▼'}</span>
              </button>

              {/* Contenido Chips */}
              <div className={`filter-section-desktop ${openBrandMobile ? 'show-mobile' : ''}`}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  <button
                    type="button"
                    onClick={() => toggleBrand('TODAS')}
                    className={`brand-chip ${selectedBrands.length === 0 ? 'active' : ''}`}
                  >
                    TODAS
                  </button>
                  {allBrands.map((b) => {
                    const isActive = selectedBrands.includes(b);
                    return (
                      <button
                        key={b}
                        type="button"
                        onClick={() => toggleBrand(b)}
                        className={`brand-chip ${isActive ? 'active' : ''}`}
                      >
                        {b} {isActive ? '✓' : ''}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 2. SECCIÓN AÑOS */}
            <div>
              {/* Botón desplegable solo en celular */}
              <button
                type="button"
                onClick={() => setOpenYearMobile(!openYearMobile)}
                className={`mobile-accordion-toggle ${yearRange[0] !== minAvailableYear || yearRange[1] !== maxAvailableYear || openYearMobile ? 'active' : ''}`}
              >
                <span>
                   Filtrar por Año ({yearRange[0]} — {yearRange[1]})
                </span>
                <span>{openYearMobile ? '▲' : '▼'}</span>
              </button>

              {/* Contenido Slider Dual */}
              <div className={`filter-section-desktop ${openYearMobile ? 'show-mobile' : ''}`}>
                <div style={{ backgroundColor: '#0B0C0E', border: '1px solid #27272a', borderRadius: '14px', padding: '14px 18px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.78rem', color: '#a1a1aa', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                      AÑO / MODELO
                    </span>
                    <span style={{ fontSize: '0.92rem', color: '#ED1C24', fontWeight: 700 }}>
                      {yearRange[0]} — {yearRange[1]}
                    </span>
                  </div>

                  <div className="dual-slider-wrapper">
                    <div className="dual-slider-track"></div>
                    <div 
                      className="dual-slider-highlight"
                      style={{
                        left: `${minPercent}%`,
                        width: `${Math.max(0, maxPercent - minPercent)}%`
                      }}
                    ></div>
                    <input
                      type="range"
                      min={minAvailableYear}
                      max={maxAvailableYear}
                      value={yearRange[0]}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        setYearRange([Math.min(val, yearRange[1]), yearRange[1]]);
                      }}
                      className="dual-range-input"
                    />
                    <input
                      type="range"
                      min={minAvailableYear}
                      max={maxAvailableYear}
                      value={yearRange[1]}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        setYearRange([yearRange[0], Math.max(val, yearRange[0])]);
                      }}
                      className="dual-range-input"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Contador y Limpiar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #1f2024', paddingTop: '10px', fontSize: '0.84rem', color: '#a1a1aa' }}>
            <span>Mostrando <strong style={{ color: '#ffffff' }}>{filtered.length}</strong> {filtered.length === 1 ? 'unidad' : 'unidades disponibles'}</span>
            {(search || selectedBrands.length > 0 || yearRange[0] !== minAvailableYear || yearRange[1] !== maxAvailableYear) && (
              <button
                onClick={() => {
                  setSearch('');
                  setSelectedBrands([]);
                  setYearRange([minAvailableYear, maxAvailableYear]);
                  setOpenBrandMobile(false);
                  setOpenYearMobile(false);
                }}
                style={{ background: 'transparent', border: 'none', color: '#ED1C24', fontWeight: 600, cursor: 'pointer', fontSize: '0.82rem' }}
              >
                Limpiar filtros ✕
              </button>
            )}
          </div>

        </div>
      </div>

      {/* 3. GRILLA DE TARJETAS DE USADOS */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '90px 20px', color: '#a1a1aa', fontSize: '1.1rem' }}>
          Cargando catálogo actualizado de unidades...
        </div>
      ) : filtered.length === 0 ? (
        <div style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '20px', padding: '60px 20px', textAlign: 'center', maxWidth: '650px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.3rem', margin: '0 0 10px 0', color: '#ffffff' }}>No se encontraron unidades con esos criterios</h3>
          <p style={{ color: '#a1a1aa', fontSize: '0.95rem', margin: '0 0 20px 0' }}>Probá ajustando la búsqueda o ampliando el rango de años.</p>
          <button
            onClick={() => {
              setSearch('');
              setSelectedBrands([]);
              setYearRange([minAvailableYear, maxAvailableYear]);
            }}
            style={{ backgroundColor: '#ED1C24', color: '#ffffff', border: 'none', padding: '10px 22px', borderRadius: '8px', fontWeight: 700, cursor: 'pointer' }}
          >
            Ver todos los vehículos
          </button>
        </div>
      ) : (
        <div className="usados-grid">
          {filtered.map((v) => {
            const mainPhoto = v.photos && v.photos.length > 0 ? v.photos[0] : null;
            return (
              <div key={v.id} className="card-usado">
                <div className="card-usado-img-box">
                  {mainPhoto ? (
                    <img src={mainPhoto} alt={`${v.brand} ${v.line}`} loading="lazy" />
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#71717a' }}>
                      Sin foto disponible
                    </div>
                  )}
                </div>

                <div className="card-usado-body" style={{ padding: '22px 20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <span className="card-usado-brand" style={{ fontSize: '0.76rem', fontWeight: 700, color: '#ED1C24', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                      {v.brand}
                    </span>
                    <h3 className="card-usado-line" style={{ fontSize: '1.3rem', fontWeight: 600, margin: '0 0 6px 0', textTransform: 'uppercase', color: '#ffffff', letterSpacing: '-0.3px' }}>
                      {v.line}
                    </h3>
                    <p className="card-usado-version" style={{ color: '#a1a1aa', fontSize: '0.9rem', margin: '0 0 16px 0', lineHeight: 1.45, fontWeight: 300, minHeight: '38px' }}>
                      {v.version || 'Versión estándar'}
                    </p>

                    <div className="card-usado-specs" style={{ borderTop: '1px solid #27272a', paddingTop: '12px', marginBottom: '18px', display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: '#E4E4E7' }}>
                      <div><strong style={{ color: '#71717a', fontWeight: 400 }}>Año:</strong> {v.year || '—'}</div>
                      <div><strong style={{ color: '#71717a', fontWeight: 400 }}>KM:</strong> {v.km ? `${Number(v.km).toLocaleString('es-AR')} km` : 'Consultar'}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => openModal(v)}
                    className="card-usado-btn"
                    style={{ width: '100%', backgroundColor: '#ED1C24', color: '#ffffff', border: 'none', padding: '12px', borderRadius: '10px', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', transition: 'background-color 0.2s ease' }}
                  >
                    Ver Detalle y Fotos →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 4. MODAL DETALLE IDÉNTICO A SOFTR (DATOS ALINEADOS A LA IZQUIERDA) */}
      {selectedVehicle && (
        <div 
          onClick={closeModal}
          style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', zIndex: 1000, backdropFilter: 'blur(8px)' }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="modal-box-inner"
            style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '24px', maxWidth: '820px', width: '100%', maxHeight: '92vh', overflowY: 'auto', padding: '34px 28px', position: 'relative', boxShadow: '0 25px 60px rgba(0,0,0,0.85)' }}
          >
            
            {/* Botón Cerrar */}
            <button 
              onClick={closeModal} 
              style={{ position: 'absolute', top: '18px', right: '18px', backgroundColor: '#1f2024', border: '1px solid #333', color: '#ffffff', width: '36px', height: '36px', borderRadius: '50%', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 20 }}
            >
              ✕
            </button>

            {/* Logo Centrado Arriba */}
            <div style={{ textAlign: 'center', marginBottom: '14px' }}>
              <img 
                src="/logo.png.png" 
                alt="Cogno Automotores" 
                style={{ height: '58px', width: 'auto', margin: '0 auto', display: 'inline-block' }} 
              />
            </div>

            {/* Título Institucional Softr */}
            <h1 style={{ textAlign: 'center', fontSize: '1.9rem', fontWeight: 600, color: '#ffffff', margin: '0 0 14px 0', letterSpacing: '-0.3px' }}>
              Tu próximo vehículo lo encontrás acá
            </h1>

            {/* Badge de Garantía */}
            <div style={{ textAlign: 'center', marginBottom: '22px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(237, 28, 36, 0.12)', border: '1px solid rgba(237, 28, 36, 0.35)', color: '#ED1C24', padding: '6px 16px', borderRadius: '30px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.6px', textTransform: 'uppercase' }}>
                <span>🛡️</span>
                <span>TODOS NUESTROS USADOS CUENTAN CON 6 MESES DE GARANTÍA TOTAL</span>
              </span>
            </div>

            {/* Título Principal del Auto */}
            <div style={{ marginBottom: '20px' }}>
              <h2 className="modal-title-text" style={{ fontSize: '1.8rem', fontWeight: 700, margin: '0 0 4px 0', textTransform: 'uppercase', color: '#ffffff', letterSpacing: '-0.3px', lineHeight: 1.2 }}>
                {selectedVehicle.brand} {selectedVehicle.line} {selectedVehicle.version || ''}
              </h2>
              {selectedVehicle.version && (
                <p style={{ color: '#a1a1aa', fontSize: '0.92rem', margin: 0, fontWeight: 400 }}>
                  {selectedVehicle.version}
                </p>
              )}
            </div>

            {/* Galería Interactiva */}
            {selectedVehicle.photos && selectedVehicle.photos.length > 0 && (
              <div style={{ marginBottom: '24px' }}>
                <div className="modal-main-img-box" style={{ height: '420px', borderRadius: '18px', overflow: 'hidden', backgroundColor: '#070709', position: 'relative', border: '1px solid #27272a' }}>
                  <img 
                    src={selectedVehicle.photos[activePhotoIdx] || selectedVehicle.photos[0]} 
                    alt={`${selectedVehicle.brand} ${selectedVehicle.line}`} 
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                  />

                  {selectedVehicle.photos.length > 1 && (
                    <>
                      <button onClick={prevPhoto} className="gallery-arrow-btn" style={{ left: '14px' }} aria-label="Foto anterior">
                        ‹
                      </button>
                      <button onClick={nextPhoto} className="gallery-arrow-btn" style={{ right: '14px' }} aria-label="Foto siguiente">
                        ›
                      </button>
                    </>
                  )}
                </div>

                {selectedVehicle.photos.length > 1 && (
                  <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', padding: '12px 0 4px 0' }}>
                    {selectedVehicle.photos.map((p, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => setActivePhotoIdx(idx)} 
                        style={{ border: activePhotoIdx === idx ? '2px solid #ED1C24' : '1px solid #27272a', padding: 0, borderRadius: '10px', overflow: 'hidden', width: '82px', height: '58px', flexShrink: 0, cursor: 'pointer', backgroundColor: '#070709' }}
                      >
                        <img src={p} alt={`Foto ${idx+1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Ficha Técnica Estilo Softr */}
            <div style={{ backgroundColor: '#0B0C0E', border: '1px solid #27272a', borderRadius: '16px', padding: '20px 22px', marginBottom: '26px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                
                {/* Marca */}
                <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #191a1d', paddingBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#a1a1aa', fontSize: '0.92rem', width: '180px', flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span>Marca</span>
                  </div>
                  <strong style={{ color: '#ffffff', fontSize: '0.96rem', textTransform: 'uppercase', textAlign: 'left' }}>
                    {selectedVehicle.brand}
                  </strong>
                </div>

                {/* Línea */}
                <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #191a1d', paddingBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#a1a1aa', fontSize: '0.92rem', width: '180px', flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                    </svg>
                    <span>Línea</span>
                  </div>
                  <strong style={{ color: '#ffffff', fontSize: '0.96rem', textTransform: 'uppercase', textAlign: 'left' }}>
                    {selectedVehicle.line}
                  </strong>
                </div>

                {/* Versión */}
                {selectedVehicle.version && (
                  <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #191a1d', paddingBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#a1a1aa', fontSize: '0.92rem', width: '180px', flexShrink: 0 }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                      </svg>
                      <span>Versión</span>
                    </div>
                    <strong style={{ color: '#ffffff', fontSize: '0.96rem', textAlign: 'left' }}>
                      {selectedVehicle.version}
                    </strong>
                  </div>
                )}

                {/* Modelo / Año */}
                <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #191a1d', paddingBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#a1a1aa', fontSize: '0.92rem', width: '180px', flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    <span>Modelo / Año</span>
                  </div>
                  <strong style={{ color: '#ffffff', fontSize: '0.96rem', textAlign: 'left' }}>
                    {selectedVehicle.year || '—'}
                  </strong>
                </div>

                {/* Kilometraje */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#a1a1aa', fontSize: '0.92rem', width: '180px', flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <span>Kilometraje</span>
                  </div>
                  <strong style={{ color: '#ffffff', fontSize: '0.96rem', textAlign: 'left' }}>
                    {selectedVehicle.km ? `${Number(selectedVehicle.km).toLocaleString('es-AR')} km` : 'Consultar'}
                  </strong>
                </div>

                {/* Equipamiento */}
                {selectedVehicle.equipment && (
                  <div style={{ borderTop: '1px solid #191a1d', paddingTop: '14px', marginTop: '4px' }}>
                    <span style={{ color: '#a1a1aa', fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                      Equipamiento destacado:
                    </span>
                    <span style={{ color: '#E4E4E7', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {selectedVehicle.equipment}
                    </span>
                  </div>
                )}

              </div>
            </div>

            {/* Botón WhatsApp */}
            <a
              href={`https://wa.me/5493584029424?text=${encodeURIComponent(`Hola! Quiero consultar por el ${selectedVehicle.brand} ${selectedVehicle.line} ${selectedVehicle.version || ''} (${selectedVehicle.year || ''})`)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', textAlign: 'center', backgroundColor: '#ED1C24', color: '#ffffff', padding: '15px', borderRadius: '12px', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', transition: 'background-color 0.2s ease', boxShadow: '0 8px 20px rgba(237, 28, 36, 0.35)' }}
            >
              Consultar por este vehículo →
            </a>

          </div>
        </div>
      )}

    </div>
  );
}

export default function CatalogoUsados() {
  return (
    <div style={{ backgroundColor: '#0B0C0E', minHeight: '100vh', color: '#ffffff', paddingBottom: '90px' }}>
      <Suspense fallback={<div style={{ textAlign: 'center', padding: '80px', color: '#a1a1aa' }}>Cargando catálogo...</div>}>
        <CatalogoContent />
      </Suspense>
    </div>
  );
}
