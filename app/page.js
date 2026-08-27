'use client';

import { useRef } from 'react';

const reviews = [
  {
    name: 'Silvana Olguin',
    text: 'Excelente atención. Y por sobre todo personas responsables y muy cumplidoras.',
    rating: 5,
  },
  {
    name: 'Santiago Lovera',
    text: 'Hace más de quince años que soy cliente. Muy eficientes, excelentes precios y mejor atención.',
    rating: 5,
  },
  {
    name: 'Lucia Noelia Bressan',
    text: 'Muy buen negocio, gente de confianza y excelente predisposición.',
    rating: 5,
  },
  {
    name: 'Juan Bahl',
    text: 'Muy buena atención, agilidad en trámites y entregas, totalmente recomendable!!',
    rating: 5,
  },
  {
    name: 'Franco Revelli',
    text: 'Ya 8 vehículos comprados en mi familia, siempre recibiendo el usado. Se hacen buenos negocios, te facilitan todos los tramites y siempre cumplen con su palabra.',
    rating: 5,
  },
  {
    name: 'Gabriel Agustín Dama',
    text: 'Tan sólidos y confiables como siempre, un placer hacer negocios con esta prestigiosa firma de Banda Norte…',
    rating: 5,
  },
  {
    name: 'Jorge Luis Etcheverry',
    text: 'Excelentes vehículos, muy buena atención y por sobre todo, responsabilidad',
    rating: 5,
  },
];

export default function Home() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div style={{ backgroundColor: '#0B0C0E', minHeight: '100vh', color: '#ffffff', paddingBottom: '90px', overflowX: 'hidden' }}>
      
      {/* ESTILOS INTERACTIVOS Y RESPONSIVE MÓVIL */}
      <style>{`
        /* --- ESCRITORIO (ANCHO COMPLETO PANORÁMICO) --- */
        .hero-title {
          font-size: 3.1rem;
          font-weight: 600;
          margin: 0 auto 20px auto;
          letter-spacing: -0.5px;
          color: #ffffff;
          line-height: 1.25;
          max-width: 950px;
        }
        .two-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
          width: 100%;
          max-width: 1540px;
          margin: 0 auto;
        }
        .interactive-card {
          background-color: #141518;
          border: 1px solid #27272a;
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .interactive-card:hover {
          transform: translateY(-8px);
          border-color: rgba(237, 28, 36, 0.5);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.6), 0 0 20px rgba(237, 28, 36, 0.15);
        }
        .card-img-container {
          position: relative;
          height: 440px;
          background-color: #070709;
          overflow: hidden;
        }
        .card-img-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .interactive-card:hover .card-img-container img {
          transform: scale(1.06);
        }
        .card-body-content {
          padding: 32px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          justify-content: space-between;
        }
        .identity-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .identity-card {
          position: relative;
          height: 340px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #27272a;
          display: flex;
          align-items: flex-end;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .identity-card img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
          z-index: 1;
        }
        .identity-card:hover img {
          transform: scale(1.08);
        }
        .identity-card:hover {
          transform: translateY(-6px);
          border-color: #ED1C24;
        }
        .identity-overlay {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 24px;
          background: linear-gradient(180deg, rgba(11,12,14,0) 0%, rgba(11,12,14,0.7) 40%, rgba(11,12,14,0.95) 100%);
        }
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .metric-box {
          background-color: #141518;
          border: 1px solid #27272a;
          border-radius: 20px;
          padding: 32px 20px;
          text-align: center;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .metric-box:hover {
          transform: translateY(-4px);
          border-color: #ED1C24;
        }
        .review-carousel-item {
          background-color: #141518;
          border: 1px solid #27272a;
          border-radius: 18px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 380px;
          flex-shrink: 0;
          scroll-snap-align: start;
        }
        .scroll-btn {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background-color: #141518;
          border: 1px solid #27272a;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .scroll-btn:hover {
          background-color: #ED1C24;
          border-color: #ED1C24;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .action-btn-red {
          display: block;
          text-align: center;
          background-color: #ED1C24;
          color: #ffffff;
          padding: 15px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.98rem;
          text-decoration: none;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }
        .action-btn-red:hover {
          background-color: #c9141b;
          transform: scale(1.02);
        }

        .salon-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 36px;
          align-items: center;
        }

        /* --- CELULARES (ADAPTACIÓN COMPACTA) --- */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 1.85rem !important;
            line-height: 1.25 !important;
          }
          .two-cards-grid {
            gap: 12px !important;
          }
          .interactive-card {
            border-radius: 16px !important;
          }
          .card-img-container {
            height: 130px !important;
          }
          .card-body-content {
            padding: 12px !important;
          }
          .card-main-title {
            font-size: 1.05rem !important;
            margin-bottom: 2px !important;
          }
          .card-desc-text {
            display: none !important;
          }
          .card-tag-badge {
            font-size: 0.7rem !important;
            margin-bottom: 6px !important;
          }
          .action-btn-red {
            padding: 10px 6px !important;
            font-size: 0.78rem !important;
            border-radius: 8px !important;
          }
          
          /* Trayectoria / Identidad compacto en celular */
          .identity-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .identity-card {
            height: 140px !important;
            border-radius: 14px !important;
          }
          .identity-overlay {
            padding: 14px !important;
          }
          .identity-overlay h3 {
            font-size: 0.95rem !important;
          }

          /* Métricas compactas */
          .metrics-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 10px !important;
          }
          .metric-box {
            padding: 16px 10px !important;
            border-radius: 14px !important;
          }
          .metric-num {
            font-size: 1.9rem !important;
            margin-bottom: 4px !important;
          }
          .metric-label {
            font-size: 0.82rem !important;
            margin-bottom: 2px !important;
          }
          .metric-sub {
            font-size: 0.72rem !important;
          }

          /* Financiación compacta */
          .finance-box {
            padding: 28px 16px !important;
            border-radius: 16px !important;
          }
          .finance-title {
            font-size: 1.45rem !important;
            margin-bottom: 10px !important;
          }
          .finance-desc {
            font-size: 0.88rem !important;
            margin-bottom: 20px !important;
          }

          /* Salón y mapa compacto */
          .salon-card-box {
            padding: 24px 16px !important;
            border-radius: 16px !important;
          }
          .salon-grid {
            grid-template-columns: 1fr !important;
            gap: 18px !important;
          }
          .salon-title {
            font-size: 1.5rem !important;
          }
          .salon-map-container {
            height: 230px !important;
          }
        }
      `}</style>

      {/* 1. HERO INSTITUCIONAL */}
      <section style={{ padding: '45px 20px 20px 20px', textAlign: 'center', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ marginBottom: '16px' }}>
          <img 
            src="/logo.png.png" 
            alt="Cogno Automotores" 
            style={{ height: '75px', width: 'auto', margin: '0 auto', display: 'inline-block' }} 
          />
        </div>

        <h1 className="hero-title">
          Somos la <span style={{ color: '#ED1C24' }}>propuesta confiable</span> para tu próximo vehículo
        </h1>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(237, 28, 36, 0.08)', border: '1px solid rgba(237, 28, 36, 0.4)', color: '#ED1C24', padding: '8px 20px', borderRadius: '30px', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.8px', marginBottom: '20px', textTransform: 'uppercase' }}>
          <span>🛡️</span>
          <span>TRAYECTORIA Y COMPROMISO</span>
        </div>

        <p style={{ color: '#ffffff', fontSize: '1.05rem', maxWidth: '850px', margin: '0 auto 12px auto', lineHeight: 1.7, fontWeight: 300 }}>
          Vehículos 0KM y usados seleccionados, con destacada variedad de pick-ups. Garantía propia y atención personalizada en cada etapa de la compra.
        </p>

        <p style={{ color: '#a1a1aa', fontSize: '0.92rem', margin: '0 auto 30px auto', fontWeight: 400 }}>
          Elegí la categoría de tu interés para explorar nuestras unidades disponibles:
        </p>
      </section>

      {/* 2. TARJETAS 0KM Y USADOS (ANCHO COMPLETO) */}
      <section style={{ maxWidth: '1540px', margin: '0 auto', padding: '0 24px' }}>
        <div className="two-cards-grid">

          {/* 0KM */}
          <div className="interactive-card">
            <div className="card-img-container">
              <span style={{ position: 'absolute', top: '14px', left: '14px', backgroundColor: '#ED1C24', color: '#ffffff', fontSize: '0.82rem', fontWeight: 700, padding: '5px 12px', borderRadius: '6px', zIndex: 2 }}>
                0 KM
              </span>
              <img 
                src="/cero-km.png" 
                onError={(e) => { e.currentTarget.src = '/local-2026.jpg.webp'; }}
                alt="Unidades 0km" 
              />
            </div>
            <div className="card-body-content">
              <div>
                <h2 className="card-main-title" style={{ fontSize: '1.55rem', fontWeight: 700, color: '#ffffff', margin: '0 0 6px 0' }}>
                  Unidades 0KM
                </h2>
                <div className="card-tag-badge" style={{ color: '#a1a1aa', fontSize: '0.82rem', fontWeight: 600, marginBottom: '10px' }}>
                  Multimarca Oficial
                </div>
                <p className="card-desc-text" style={{ fontSize: '0.96rem', color: '#a1a1aa', lineHeight: 1.6, margin: '0 0 24px 0', fontWeight: 300 }}>
                  Comercializamos la gama completa de las principales marcas del país. Financiación directa de fábrica y entrega programada.
                </p>
              </div>
              <a href="/0km" className="action-btn-red">
                Explorar 0KM →
              </a>
            </div>
          </div>

          {/* Usados */}
          <div className="interactive-card">
            <div className="card-img-container">
              <span style={{ position: 'absolute', top: '14px', left: '14px', backgroundColor: '#ED1C24', color: '#ffffff', fontSize: '0.82rem', fontWeight: 700, padding: '5px 12px', borderRadius: '6px', zIndex: 2 }}>
                SELECCIONADOS
              </span>
              <img 
                src="/usados-portada.jpeg" 
                onError={(e) => { e.currentTarget.src = '/calidad-usados.jpg.webp'; }}
                alt="Usados Seleccionados" 
              />
            </div>
            <div className="card-body-content">
              <div>
                <h2 className="card-main-title" style={{ fontSize: '1.55rem', fontWeight: 700, color: '#ffffff', margin: '0 0 6px 0' }}>
                  Usados Seleccionados
                </h2>
                <div className="card-tag-badge" style={{ color: '#ED1C24', fontSize: '0.82rem', fontWeight: 700, marginBottom: '10px' }}>
                  🛡️ 6 MESES DE GARANTÍA
                </div>
                <p className="card-desc-text" style={{ fontSize: '0.96rem', color: '#a1a1aa', lineHeight: 1.6, margin: '0 0 24px 0', fontWeight: 300 }}>
                  Unidades rigurosamente inspeccionadas, con historial verificado y entrega con toda la documentación lista para transferir.
                </p>
              </div>
              <a href="/usados" className="action-btn-red">
                Ver Catálogo Usados →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. IDENTIDAD */}
      <section style={{ maxWidth: '1540px', margin: '75px auto 0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ED1C24', letterSpacing: '2px', textTransform: 'uppercase' }}>
            RESPALDO Y CONFIANZA
          </span>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 600, margin: '6px 0 0 0' }}>
            El valor de una trayectoria real
          </h2>
        </div>

        <div className="identity-grid">
          <div className="identity-card">
            <img src="/calidad-usados.jpg.webp" alt="Garantía propia" />
            <div className="identity-overlay">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, margin: 0, color: '#ffffff', lineHeight: 1.4 }}>Garantía propia en las unidades usadas</h3>
            </div>
          </div>

          <div className="identity-card">
            <img src="/frente-2026.jpg.jpg" alt="Atención personalizada" />
            <div className="identity-overlay">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, margin: 0, color: '#ffffff', lineHeight: 1.4 }}>Atención personalizada de principio a fin</h3>
            </div>
          </div>

          <div className="identity-card">
            <img src="/premios-trayectoria.jpg.webp" alt="Premios y trayectoria" />
            <div className="identity-overlay">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, margin: 0, color: '#ffffff', lineHeight: 1.4 }}>+35 años de trayectoria en el sector</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MÉTRICAS */}
      <section style={{ maxWidth: '1540px', margin: '60px auto 0 auto', padding: '0 24px' }}>
        <div className="metrics-grid">
          <div className="metric-box">
            <div className="metric-num" style={{ fontSize: '2.6rem', fontWeight: 700, color: '#ED1C24', lineHeight: 1, marginBottom: '8px' }}>+35</div>
            <div className="metric-label" style={{ fontSize: '1.02rem', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>Años de Trayectoria</div>
            <div className="metric-sub" style={{ fontSize: '0.85rem', color: '#71717a', fontWeight: 300 }}>Referente automotor familiar</div>
          </div>

          <div className="metric-box">
            <div className="metric-num" style={{ fontSize: '2.6rem', fontWeight: 700, color: '#ED1C24', lineHeight: 1, marginBottom: '8px' }}>6 Meses</div>
            <div className="metric-label" style={{ fontSize: '1.02rem', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>Garantía Total Escrita</div>
            <div className="metric-sub" style={{ fontSize: '0.85rem', color: '#71717a', fontWeight: 300 }}>En todos nuestros usados</div>
          </div>

          <div className="metric-box">
            <div className="metric-num" style={{ fontSize: '2.6rem', fontWeight: 700, color: '#ED1C24', lineHeight: 1, marginBottom: '8px' }}>100%</div>
            <div className="metric-label" style={{ fontSize: '1.02rem', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>Gestoría Propia</div>
            <div className="metric-sub" style={{ fontSize: '0.85rem', color: '#71717a', fontWeight: 300 }}>Documentación al día</div>
          </div>

          <div className="metric-box">
            <div className="metric-num" style={{ fontSize: '2.6rem', fontWeight: 700, color: '#ED1C24', lineHeight: 1, marginBottom: '8px' }}>16+</div>
            <div className="metric-label" style={{ fontSize: '1.02rem', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>Marcas Multimarca</div>
            <div className="metric-sub" style={{ fontSize: '0.85rem', color: '#71717a', fontWeight: 300 }}>Gama 0km completa</div>
          </div>
        </div>
      </section>

      {/* 5. FINANCIACIÓN */}
      <section style={{ maxWidth: '1540px', margin: '75px auto 0 auto', padding: '0 24px' }}>
        <div className="finance-box" style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '24px', padding: '50px 36px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'rgba(237, 28, 36, 0.1)', border: '1px solid rgba(237, 28, 36, 0.3)', color: '#ED1C24', padding: '7px 20px', borderRadius: '30px', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
            PLANES A MEDIDA
          </div>
          <h2 className="finance-title" style={{ fontSize: '2.3rem', fontWeight: 600, margin: '0 0 16px 0' }}>
            Financiación y Créditos Prendarios
          </h2>
          <p className="finance-desc" style={{ fontSize: '1.02rem', color: '#a1a1aa', maxWidth: '780px', margin: '0 auto 30px auto', lineHeight: 1.6, fontWeight: 300 }}>
            Te asesoramos para que encuentres la estructura de pago más conveniente: créditos prendarios bancarios, cuotas fijas en pesos y toma de tu vehículo usado como anticipo.
          </p>
          <a 
            href="https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20opciones%20de%20financiaci%C3%B3n" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ display: 'inline-block', backgroundColor: '#ED1C24', color: '#ffffff', padding: '14px 34px', borderRadius: '10px', fontWeight: 700, fontSize: '0.94rem', textDecoration: 'none' }}
          >
            Consultar Financiación →
          </a>
        </div>
      </section>

      {/* 6. RESEÑAS (ANCHO PANORÁMICO) */}
      <section style={{ maxWidth: '1540px', margin: '75px auto 0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ED1C24', letterSpacing: '2px', textTransform: 'uppercase' }}>TESTIMONIOS REALES</span>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 600, margin: '6px 0 0 0' }}>Opiniones de clientes</h2>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '16px' }}>
            <button onClick={() => scroll('left')} className="scroll-btn" aria-label="Anterior">←</button>
            <button onClick={() => scroll('right')} className="scroll-btn" aria-label="Siguiente">→</button>
          </div>
        </div>

        <div 
          ref={scrollRef} 
          className="no-scrollbar" 
          style={{ display: 'flex', gap: '22px', overflowX: 'auto', scrollSnapType: 'x mandatory', paddingBottom: '16px' }}
        >
          {reviews.map((r, i) => (
            <div key={i} className="review-carousel-item">
              <div>
                <p style={{ fontSize: '0.94rem', color: '#d4d4d8', fontStyle: 'italic', lineHeight: 1.6, margin: '0 0 16px 0', fontWeight: 300 }}>
                  "{r.text}"
                </p>
                <div style={{ color: '#F59E0B', fontSize: '0.95rem', marginBottom: '12px' }}>
                  {'★'.repeat(r.rating)}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderTop: '1px solid #27272a', paddingTop: '12px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.04 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                </svg>
                <span style={{ fontSize: '0.92rem', fontWeight: 600, color: '#ffffff' }}>{r.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. SALÓN Y MAPA */}
      <section style={{ maxWidth: '1540px', margin: '75px auto 0 auto', padding: '0 24px' }}>
        <div className="salon-card-box" style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '26px', padding: '38px 30px' }}>
          <div className="salon-grid">
            <div>
              <span style={{ color: '#ED1C24', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
                SALÓN COMERCIAL
              </span>
              <h2 className="salon-title" style={{ fontSize: '2.1rem', fontWeight: 600, margin: '6px 0 12px 0', lineHeight: 1.2 }}>
                Vení a conocer nuestro local
              </h2>
              <p style={{ fontSize: '0.98rem', color: '#a1a1aa', lineHeight: 1.6, margin: '0 0 20px 0', fontWeight: 300 }}>
                Te esperamos en nuestro salón comercial para conocer el stock en persona, realizar un peritaje transparente de tu usado y asesorarte de forma personalizada.
              </p>

              <div style={{ backgroundColor: '#0B0C0E', border: '1px solid #27272a', padding: '14px 18px', borderRadius: '12px', marginBottom: '22px' }}>
                <div style={{ fontSize: '0.75rem', color: '#71717a', textTransform: 'uppercase', fontWeight: 600 }}>UBICACIÓN</div>
                <div style={{ fontSize: '1.02rem', fontWeight: 600, color: '#ffffff' }}>Av. Marcelo T. de Alvear 1580</div>
                <div style={{ fontSize: '0.88rem', color: '#a1a1aa' }}>Río Cuarto, Córdoba, Argentina</div>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Av.+Marcelo+T.+de+Alvear+1580,+Rio+Cuarto,+Cordoba" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ backgroundColor: '#ED1C24', color: '#ffffff', padding: '12px 24px', borderRadius: '10px', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}
                >
                  Cómo llegar en Google Maps →
                </a>
                <a 
                  href="https://wa.me/5493584029424?text=Hola!%20Quiero%20coordinar%20una%20visita%20al%20sal%C3%B3n" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ backgroundColor: '#1F2024', border: '1px solid #333', color: '#ffffff', padding: '12px 24px', borderRadius: '10px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}
                >
                  Hablar por WhatsApp
                </a>
              </div>
            </div>

            <div className="salon-map-container" style={{ height: '340px', borderRadius: '18px', overflow: 'hidden', border: '1px solid #27272a', backgroundColor: '#0B0C0E' }}>
              <iframe
                title="Ubicación Cogno Automotores"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Av.+Marcelo+T.+de+Alvear+1580,+Rio+Cuarto,+Cordoba&t=&z=16&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
