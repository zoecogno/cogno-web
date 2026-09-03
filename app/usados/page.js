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

  const [openBrandMobile, setOpenBrandMobile] = useState(false);
  const [openYearMobile, setOpenYearMobile] = useState(false);

  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [copied, setCopied] = useState(false);
  const [fullscreenPhoto, setFullscreenPhoto] = useState(false);

  // Bloqueo estricto del fondo para móviles y PC
  useEffect(() => {
    if (selectedVehicle || fullscreenPhoto) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
  }, [selectedVehicle, fullscreenPhoto]);

  const handleShare = async () => {
    if (!selectedVehicle) return;
    const shareUrl = `${window.location.origin}/usados?auto=${selectedVehicle.id}`;
    const shareData = {
      title: `${selectedVehicle.brand} ${selectedVehicle.line} | Cogno Automotores`,
      text: `Mirá este ${selectedVehicle.brand} ${selectedVehicle.line} ${selectedVehicle.version || ''} (${selectedVehicle.year}) en Cogno Automotores:`,
      url: shareUrl,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err.name !== 'AbortError') {
          try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
          } catch (clipboardErr) {
            console.error(clipboardErr);
          }
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch (clipboardErr) {
        console.error(clipboardErr);
      }
    }
  };

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
    setFullscreenPhoto(false);
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', `/usados?auto=${vehicle.id}`);
      document.title = `${vehicle.brand} ${vehicle.line} | Cogno Automotores`;
    }
  };

  const closeModal = () => {
    setSelectedVehicle(null);
    setFullscreenPhoto(false);
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
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
      
      <style>{`
        .hero-title-usados {
          font-size: 2.35rem;
          font-weight: 600;
          margin: 0 auto 10px auto;
          letter-spacing: -0.4px;
          color: #ffffff;
          line-height: 1.2;
          max-width: 820px;
        }
        .filter-container {
          background-color: #141518;
          border: 1px solid #27272a;
          border-radius: 18px;
          padding: 20px 24px;
          margin: 0 auto 36px auto;
          max-width: 1280px;
        }
        .filter-main-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 28px;
          align-items: flex-start;
        }

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

        .brand-chip {
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 0.8rem;
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

        /* 3 COLUMNAS FIJAS EN ESCRITORIO */
        .usados-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }
        .card-usado {
          background-color: #141518;
          border: 1px solid #27272a;
          border-radius: 18px;
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
          height: 200px;
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

        /* MODAL OVERLAY & CARD */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100dvh;
          background-color: rgba(0, 0, 0, 0.88);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          justify-content: center;
          align-items: flex-start;
          z-index: 99999;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          overscroll-behavior: contain;
          touch-action: pan-y;
          padding: 24px 16px calc(60px + env(safe-area-inset-bottom, 0px)) 16px;
          box-sizing: border-box;
        }
        .modal-card {
          background-color: #141518;
          border: 1px solid #27272a;
          border-radius: 22px;
          max-width: 800px;
          width: 100%;
          box-sizing: border-box;
          padding: 30px 24px calc(30px + env(safe-area-inset-bottom, 0px)) 24px;
          position: relative;
          box-shadow: 0 25px 60px rgba(0,0,0,0.9);
          margin: 0 auto;
          overscroll-behavior: contain;
touch-action: pan-y;
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

        .mobile-accordion-toggle {
          display: none;
        }
        .desktop-filter-header {
          display: block;
        }

        @media (max-width: 960px) {
          .usados-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
        }

        @media (max-width: 768px) {
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
            font-size: 1.75rem !important;
            line-height: 1.25 !important;
            margin-bottom: 10px !important;
          }
          .hero-desc-usados {
            font-size: 0.9rem !important;
            line-height: 1.45 !important;
          }
          .hero-badge-usados {
            padding: 6px 14px !important;
            font-size: 0.72rem !important;
            margin-bottom: 12px !important;
          }
          .usados-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 10px !important;
          }
          .card-usado {
            border-radius: 14px !important;
          }
          .card-usado-img-box {
            height: 120px !important;
          }
          .card-usado-body {
            padding: 10px !important;
          }
          .card-usado-brand {
            font-size: 0.66rem !important;
            margin-bottom: 2px !important;
          }
          .card-usado-line {
            font-size: 0.92rem !important;
            margin-bottom: 3px !important;
          }
          .card-usado-version {
            font-size: 0.75rem !important;
            margin-bottom: 8px !important;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .card-usado-specs {
            display: none !important;
          }
          .card-usado-btn {
            font-size: 0.75rem !important;
            padding: 8px 4px !important;
            border-radius: 8px !important;
          }
          .modal-overlay {
            padding: 16px 12px calc(60px + env(safe-area-inset-bottom, 0px)) 12px !important;
          }
          .modal-card {
            padding: 22px 14px calc(24px + env(safe-area-inset-bottom, 0px)) 14px !important;
            border-radius: 18px !important;
          }
          .modal-main-img-box {
            height: 220px !important;
          }
          .modal-title-text {
            font-size: 1.3rem !important;
          }
        }
      `}</style>

      {/* 1. ENCABEZADO INSTITUCIONAL */}
      <section style={{ padding: '20px 20px 10px 20px', textAlign: 'center', maxWidth: '980px', margin: '0 auto' }}>
        <div style={{ marginBottom: '10px' }}>
          <img 
            src="/logo.png.png" 
            alt="Cogno Automotores" 
            style={{ height: '52px', width: 'auto', margin: '0 auto', display: 'inline-block' }} 
          />
        </div>

        <h1 className="hero-title-usados">
          Tu próximo vehículo <span style={{ color: '#ED1C24' }}>lo encontrás acá</span>
        </h1>

        <div className="hero-badge-usados" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(237, 28, 36, 0.08)', border: '1px solid rgba(237, 28, 36, 0.4)', color: '#ED1C24', padding: '6px 16px', borderRadius: '30px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.6px', marginBottom: '14px', textTransform: 'uppercase' }}>
          <span>🛡️</span>
          <span>TODOS NUESTROS USADOS CUENTAN CON 6 MESES DE GARANTÍA TOTAL</span>
        </div>

        <p className="hero-desc-usados" style={{ color: '#F4F4F5', fontSize: '1rem', maxWidth: '780px', margin: '0 auto 16px auto', lineHeight: 1.6, fontWeight: 400 }}>
          Explorá nuestro catálogo de unidades seleccionadas con historial verificado y entrega con documentación lista para salir a la calle.
        </p>

      </section>

      {/* 2. FILTROS */}
      <div className="filter-container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          
          <input
            type="text"
            placeholder="🔍 Buscá por marca, modelo o versión (ej: Chevrolet Cruze, Amarok, Hilux)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: '100%', boxSizing: 'border-box', padding: '12px 16px', backgroundColor: '#0B0C0E', border: '1px solid #27272a', borderRadius: '10px', color: '#ffffff', fontSize: '0.92rem', outline: 'none' }}
          />

          <div className="filter-main-grid">
            
            {/* MARCAS */}
            <div>
              <div className="desktop-filter-header" style={{ fontSize: '0.75rem', color: '#a1a1aa', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '8px' }}>
                FILTRAR POR MARCA:
              </div>

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

              <div className={`filter-section-desktop ${openBrandMobile ? 'show-mobile' : ''}`}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
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

            {/* AÑOS */}
            <div>
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

              <div className={`filter-section-desktop ${openYearMobile ? 'show-mobile' : ''}`}>
                <div style={{ backgroundColor: '#0B0C0E', border: '1px solid #27272a', borderRadius: '12px', padding: '12px 16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <span style={{ fontSize: '0.75rem', color: '#a1a1aa', fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                      AÑO / MODELO
                    </span>
                    <span style={{ fontSize: '0.88rem', color: '#ED1C24', fontWeight: 700 }}>
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

          {/* Contador */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #1f2024', paddingTop: '8px', fontSize: '0.82rem', color: '#a1a1aa' }}>
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
                style={{ background: 'transparent', border: 'none', color: '#ED1C24', fontWeight: 600, cursor: 'pointer', fontSize: '0.8rem' }}
              >
                Limpiar filtros ✕
              </button>
            )}
          </div>

        </div>
      </div>

      {/* 3. GRILLA (3 COLUMNAS) */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '80px 20px', color: '#a1a1aa', fontSize: '1rem' }}>
          Cargando catálogo actualizado de unidades...
        </div>
      ) : filtered.length === 0 ? (
        <div style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '18px', padding: '50px 20px', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '1.2rem', margin: '0 0 8px 0', color: '#ffffff' }}>No se encontraron unidades con esos criterios</h3>
          <p style={{ color: '#a1a1aa', fontSize: '0.9rem', margin: '0 0 16px 0' }}>Probá ajustando la búsqueda o ampliando el rango de años.</p>
          <button
            onClick={() => {
              setSearch('');
              setSelectedBrands([]);
              setYearRange([minAvailableYear, maxAvailableYear]);
            }}
            style={{ backgroundColor: '#ED1C24', color: '#ffffff', border: 'none', padding: '9px 20px', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem' }}
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
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#71717a', fontSize: '0.85rem' }}>
                      Sin foto disponible
                    </div>
                  )}
                </div>

                <div className="card-usado-body" style={{ padding: '18px 16px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <span className="card-usado-brand" style={{ fontSize: '0.72rem', fontWeight: 700, color: '#ED1C24', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '3px' }}>
                      {v.brand}
                    </span>
                    <h3 className="card-usado-line" style={{ fontSize: '1.15rem', fontWeight: 600, margin: '0 0 4px 0', textTransform: 'uppercase', color: '#ffffff', letterSpacing: '-0.3px' }}>
                      {v.line}
                    </h3>
                    <p className="card-usado-version" style={{ color: '#a1a1aa', fontSize: '0.84rem', margin: '0 0 14px 0', lineHeight: 1.4, fontWeight: 300, minHeight: '34px' }}>
                      {v.version || 'Versión estándar'}
                    </p>

                    <div className="card-usado-specs" style={{ borderTop: '1px solid #27272a', paddingTop: '10px', marginBottom: '14px', display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', color: '#E4E4E7' }}>
                      <div><strong style={{ color: '#71717a', fontWeight: 400 }}>Año:</strong> {v.year || '—'}</div>
                      <div><strong style={{ color: '#71717a', fontWeight: 400 }}>KM:</strong> {v.km ? `${Number(v.km).toLocaleString('es-AR')} km` : 'Consultar'}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => openModal(v)}
                    className="card-usado-btn"
                    style={{ width: '100%', backgroundColor: '#ED1C24', color: '#ffffff', border: 'none', padding: '10px', borderRadius: '8px', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', transition: 'background-color 0.2s ease' }}
                  >
                    Ver Detalle y Fotos →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 4. MODAL DETALLE */}
      {selectedVehicle && (
        <div 
          onClick={closeModal}
          className="modal-overlay"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="modal-card"
          >
            
            {/* Botón Cerrar */}
            <button 
              onClick={closeModal} 
              style={{ position: 'absolute', top: '14px', right: '14px', backgroundColor: '#1f2024', border: '1px solid #444', color: '#ffffff', width: '34px', height: '34px', borderRadius: '50%', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 30 }}
              aria-label="Cerrar modal"
            >
              ✕
            </button>

            {/* Logo Centrado */}
            <div style={{ textAlign: 'center', marginBottom: '10px' }}>
              <img 
                src="/logo.png.png" 
                alt="Cogno Automotores" 
                style={{ height: '46px', width: 'auto', margin: '0 auto', display: 'inline-block' }} 
              />
            </div>

            {/* Título Institucional */}
            <h1 style={{ textAlign: 'center', fontSize: '1.4rem', fontWeight: 600, color: '#ffffff', margin: '0 0 10px 0', letterSpacing: '-0.3px' }}>
              Tu próximo vehículo lo encontrás acá
            </h1>

            {/* Badge de Garantía */}
            <div style={{ textAlign: 'center', marginBottom: '14px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(237, 28, 36, 0.12)', border: '1px solid rgba(237, 28, 36, 0.35)', color: '#ED1C24', padding: '5px 12px', borderRadius: '30px', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                <span>🛡️</span>
                <span>TODOS NUESTROS USADOS CUENTAN CON 6 MESES DE GARANTÍA TOTAL</span>
              </span>
            </div>

            {/* Título Principal */}
            <div style={{ marginBottom: '16px' }}>
              <h2 className="modal-title-text" style={{ fontSize: '1.55rem', fontWeight: 700, margin: '0 0 3px 0', textTransform: 'uppercase', color: '#ffffff', letterSpacing: '-0.3px', lineHeight: 1.2 }}>
                {selectedVehicle.brand} {selectedVehicle.line} {selectedVehicle.version || ''}
              </h2>
              {selectedVehicle.version && (
                <p style={{ color: '#a1a1aa', fontSize: '0.88rem', margin: 0, fontWeight: 400 }}>
                  {selectedVehicle.version}
                </p>
              )}
            </div>

            {/* Galería con Click para Pantalla Completa */}
            {selectedVehicle.photos && selectedVehicle.photos.length > 0 && (
              <div style={{ marginBottom: '18px' }}>
                <div 
                  onClick={() => setFullscreenPhoto(true)}
                  className="modal-main-img-box" 
                  style={{ height: '360px', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#070709', position: 'relative', border: '1px solid #27272a', cursor: 'zoom-in' }}
                  title="Hacé clic para ver en pantalla completa"
                >
                  <img 
                    src={selectedVehicle.photos[activePhotoIdx] || selectedVehicle.photos[0]} 
                    alt={`${selectedVehicle.brand} ${selectedVehicle.line}`} 
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                  />

                  <div style={{ position: 'absolute', bottom: '10px', right: '10px', backgroundColor: 'rgba(11, 12, 14, 0.85)', border: '1px solid rgba(255, 255, 255, 0.2)', padding: '5px 10px', borderRadius: '20px', fontSize: '0.72rem', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '5px', backdropFilter: 'blur(4px)', pointerEvents: 'none' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                    </svg>
                    <span>Ver pantalla completa</span>
                  </div>

                  {selectedVehicle.photos.length > 1 && (
                    <>
                      <button onClick={prevPhoto} className="gallery-arrow-btn" style={{ left: '10px' }} aria-label="Foto anterior">
                        ‹
                      </button>
                      <button onClick={nextPhoto} className="gallery-arrow-btn" style={{ right: '10px' }} aria-label="Foto siguiente">
                        ›
                      </button>
                    </>
                  )}
                </div>

                {selectedVehicle.photos.length > 1 && (
                  <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', padding: '8px 0 2px 0' }}>
                    {selectedVehicle.photos.map((p, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => setActivePhotoIdx(idx)} 
                        style={{ border: activePhotoIdx === idx ? '2px solid #ED1C24' : '1px solid #27272a', padding: 0, borderRadius: '6px', overflow: 'hidden', width: '68px', height: '48px', flexShrink: 0, cursor: 'pointer', backgroundColor: '#070709' }}
                      >
                        <img src={p} alt={`Foto ${idx+1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Ficha Técnica con ICONOS SVG Originales */}
            <div style={{ backgroundColor: '#0B0C0E', border: '1px solid #27272a', borderRadius: '14px', padding: '16px 18px', marginBottom: '18px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                
                <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #191a1d', paddingBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#a1a1aa', fontSize: '0.85rem', width: '130px', flexShrink: 0 }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <span>Marca</span>
                  </div>
                  <strong style={{ color: '#ffffff', fontSize: '0.9rem', textTransform: 'uppercase' }}>
                    {selectedVehicle.brand}
                  </strong>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #191a1d', paddingBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#a1a1aa', fontSize: '0.85rem', width: '130px', flexShrink: 0 }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    <span>Línea</span>
                  </div>
                  <strong style={{ color: '#ffffff', fontSize: '0.9rem', textTransform: 'uppercase' }}>
                    {selectedVehicle.line}
                  </strong>
                </div>

                {selectedVehicle.version && (
                  <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #191a1d', paddingBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#a1a1aa', fontSize: '0.85rem', width: '130px', flexShrink: 0 }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                      </svg>
                      <span>Versión</span>
                    </div>
                    <strong style={{ color: '#ffffff', fontSize: '0.9rem' }}>
                      {selectedVehicle.version}
                    </strong>
                  </div>
                )}

                <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #191a1d', paddingBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#a1a1aa', fontSize: '0.85rem', width: '130px', flexShrink: 0 }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>Modelo / Año</span>
                  </div>
                  <strong style={{ color: '#ffffff', fontSize: '0.9rem' }}>
                    {selectedVehicle.year || '—'}
                  </strong>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#a1a1aa', fontSize: '0.85rem', width: '130px', flexShrink: 0 }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>Kilometraje</span>
                  </div>
                  <strong style={{ color: '#ffffff', fontSize: '0.9rem' }}>
                    {selectedVehicle.km ? `${Number(selectedVehicle.km).toLocaleString('es-AR')} km` : 'Consultar'}
                  </strong>
                </div>

                {selectedVehicle.equipment && (
                  <div style={{ borderTop: '1px solid #191a1d', paddingTop: '10px', marginTop: '2px' }}>
                    <span style={{ color: '#a1a1aa', fontSize: '0.78rem', fontWeight: 600, display: 'block', marginBottom: '3px' }}>
                      Equipamiento destacado:
                    </span>
                    <span style={{ color: '#E4E4E7', fontSize: '0.84rem', lineHeight: 1.45 }}>
                      {selectedVehicle.equipment}
                    </span>
                  </div>
                )}

              </div>
            </div>

            {/* Botones de Acción */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              
              <a
                href={`https://wa.me/5493584029424?text=${encodeURIComponent(`Hola! Quiero consultar por el ${selectedVehicle.brand} ${selectedVehicle.line} ${selectedVehicle.version || ''} (${selectedVehicle.year || ''})`)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', textAlign: 'center', backgroundColor: '#ED1C24', color: '#ffffff', padding: '12px', borderRadius: '10px', fontWeight: 700, fontSize: '0.92rem', textDecoration: 'none', boxShadow: '0 4px 14px rgba(237, 28, 36, 0.3)' }}
              >
                Consultar por este vehículo
              </a>

              <button
                type="button"
                onClick={handleShare}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', backgroundColor: '#0B0C0E', border: '1px solid #27272a', color: '#ffffff', padding: '10px', borderRadius: '10px', fontWeight: 600, fontSize: '0.84rem', cursor: 'pointer' }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
                <span>{copied ? '✓ ¡Enlace copiado al portapapeles!' : 'Compartir esta unidad'}</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 5. LIGHTBOX / PANTALLA COMPLETA */}
      {fullscreenPhoto && selectedVehicle?.photos && (
        <div 
          onClick={() => setFullscreenPhoto(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            height: '100dvh',
            backgroundColor: 'rgba(0, 0, 0, 0.98)',
            zIndex: 100000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(10px)',
            cursor: 'zoom-out',
            padding: 0,
            boxSizing: 'border-box'
          }}
        >
          <button 
            onClick={(e) => { e.stopPropagation(); setFullscreenPhoto(false); }}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              backgroundColor: 'rgba(11, 12, 14, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: '#ffffff',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              fontSize: '1.4rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 100010,
              boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
            }}
          >
            ✕
          </button>

          <img 
            src={selectedVehicle.photos[activePhotoIdx] || selectedVehicle.photos[0]} 
            alt={`${selectedVehicle.brand} ${selectedVehicle.line}`}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '92vw',
              maxHeight: '92vh',
              width: 'auto',
              height: '90vh',
              objectFit: 'contain',
              borderRadius: '14px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.9)',
              cursor: 'default'
            }}
          />

          {selectedVehicle.photos.length > 1 && (
            <>
              <button 
                onClick={prevPhoto} 
                className="gallery-arrow-btn" 
                style={{ left: '20px', width: '56px', height: '56px', fontSize: '1.8rem' }}
                aria-label="Foto anterior"
              >
                ‹
              </button>
              <button 
                onClick={nextPhoto} 
                className="gallery-arrow-btn" 
                style={{ right: '20px', width: '56px', height: '56px', fontSize: '1.8rem' }}
                aria-label="Foto siguiente"
              >
                ›
              </button>
              <div 
                onClick={(e) => e.stopPropagation()}
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  fontSize: '0.88rem',
                  color: '#ffffff',
                  letterSpacing: '0.5px'
                }}
              >
                Foto {activePhotoIdx + 1} de {selectedVehicle.photos.length}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default function CatalogoUsados() {
  return (
    <div style={{ backgroundColor: '#0B0C0E', minHeight: '100vh', color: '#ffffff', paddingBottom: '80px' }}>
      <Suspense fallback={<div style={{ textAlign: 'center', padding: '80px', color: '#a1a1aa' }}>Cargando catálogo...</div>}>
        <CatalogoContent />
      </Suspense>
    </div>
  );
}
