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
    <div style={{ backgroundColor: '#0B0C0E', minHeight: '100vh', color: '#ffffff', paddingBottom: '90px' }}>
      
      {/* ESTILOS INTERACTIVOS */}
      <style>{`
        .interactive-card {
          background-color: #141518;
          border: 1px solid #27272a;
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .interactive-card:hover {
          transform: translateY(-8px);
          border-color: rgba(237, 28, 36, 0.5);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.6), 0 0 18px rgba(237, 28, 36, 0.15);
        }
        .card-img-container {
          position: relative;
          height: 250px;
          background-color: #070709;
          overflow: hidden;
        }
        .card-img-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .interactive-card:hover .card-img-container img {
          transform: scale(1.06);
        }
        .identity-card {
          position: relative;
          height: 320px;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid #27272a;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          align-items: flex-end;
          text-decoration: none;
        }
        .identity-card img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1;
        }
        .identity-card:hover img {
          transform: scale(1.08);
        }
        .identity-card:hover {
          transform: translateY(-6px);
          border-color: #ED1C24;
          box-shadow: 0 14px 28px rgba(0,0,0,0.5);
        }
        .identity-overlay {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 24px 20px 18px 20px;
          background: linear-gradient(180deg, rgba(11,12,14,0) 0%, rgba(11,12,14,0.7) 40%, rgba(11,12,14,0.95) 100%);
        }
        .metric-box {
          background-color: #141518;
          border: 1px solid #27272a;
          border-radius: 18px;
          padding: 28px 18px;
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
          border-radius: 16px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 320px;
          flex-shrink: 0;
          scroll-snap-align: start;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .review-carousel-item:hover {
          transform: translateY(-4px);
          border-color: #3f3f46;
        }
        .scroll-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background-color: #141518;
          border: 1px solid #27272a;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.2s, border-color 0.2s;
        }
        .scroll-btn:hover {
          background-color: #ED1C24;
          border-color: #ED1C24;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .action-btn-red {
          display: block;
          text-align: center;
          background-color: #ED1C24;
          color: #ffffff;
          padding: 13px;
          border-radius: 10px;
          font-weight: 500;
          font-size: 0.88rem;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }
        .action-btn-red:hover {
          background-color: #c9141b;
          transform: scale(1.02);
        }
      `}</style>

      {/* 1. HERO PRINCIPAL */}
      <section style={{ padding: '40px 20px 40px 20px', textAlign: 'center', maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* LOGO SUPERIOR */}
        <div style={{ marginBottom: '18px' }}>
          <img 
            src="/logo.png.png" 
            alt="Cogno Automotores" 
            style={{ height: '75px', width: 'auto', margin: '0 auto', display: 'inline-block' }}
          />
        </div>

        <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'rgba(237, 28, 36, 0.1)', border: '1px solid rgba(237, 28, 36, 0.3)', color: '#ED1C24', padding: '5px 16px', borderRadius: '30px', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>
          TU PRÓXIMO VEHÍCULO TE ESPERA
        </div>

        <h1 style={{ fontSize: '2.6rem', fontWeight: 600, margin: '0 0 14px 0', letterSpacing: '-0.5px', lineHeight: 1.2 }}>
          ¿Qué estás <span style={{ color: '#ED1C24' }}>buscando?</span>
        </h1>

        <p style={{ fontSize: '0.95rem', color: '#a1a1aa', maxWidth: '640px', margin: '0 auto 46px auto', lineHeight: 1.6, fontWeight: 300 }}>
          Elegí la categoría de tu interés para explorar nuestras unidades disponibles, opciones de financiación directa y propuestas a medida.
        </p>

        {/* 2 TARJETAS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', textAlign: 'left' }}>

          {/* 0KM */}
          <div className="interactive-card">
            <div className="card-img-container">
              <span style={{ position: 'absolute', top: '14px', left: '14px', backgroundColor: '#ED1C24', color: '#ffffff', fontSize: '0.7rem', fontWeight: 600, padding: '4px 10px', borderRadius: '6px', letterSpacing: '0.5px', zIndex: 2 }}>
                0 KM
              </span>
              <img src="https://lh3.googleusercontent.com/d/1xViFbNOKlcqaUUt3cVh_DL7zWnyjII8I" alt="0km" />
            </div>
            <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', margin: '0 0 10px 0', letterSpacing: '0.5px' }}>
                Unidades 0KM
              </h2>
              <p style={{ fontSize: '0.86rem', color: '#a1a1aa', lineHeight: 1.5, margin: '0 0 24px 0', flexGrow: 1, fontWeight: 300 }}>
                Comercializamos la gama completa de las principales marcas del país. Financiación directa de fábrica y entrega programada.
              </p>
              <a href="/0km" className="action-btn-red">
                Explorar Marcas 0KM →
              </a>
            </div>
          </div>

          {/* Usados */}
          <div className="interactive-card">
            <div className="card-img-container">
              <span style={{ position: 'absolute', top: '14px', left: '14px', backgroundColor: '#ED1C24', color: '#ffffff', fontSize: '0.7rem', fontWeight: 600, padding: '4px 10px', borderRadius: '6px', letterSpacing: '0.5px', zIndex: 2 }}>
                SELECCIONADOS
              </span>
              <img src="https://lh3.googleusercontent.com/d/1YDtAHqMdLNs5unVJTbrNr503FpFFogwg" alt="Usados" />
            </div>
            <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', margin: '0 0 6px 0', letterSpacing: '0.5px' }}>
                Usados Seleccionados
              </h2>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#ED1C24', fontSize: '0.72rem', fontWeight: 500, marginBottom: '10px' }}>
                🛡️ 6 MESES DE GARANTÍA ESCRITA
              </div>
              <p style={{ fontSize: '0.86rem', color: '#a1a1aa', lineHeight: 1.5, margin: '0 0 24px 0', flexGrow: 1, fontWeight: 300 }}>
                Unidades rigurosamente inspeccionadas, con historial verificado y entrega con toda la documentación lista para transferir.
              </p>
              <a href="/usados" className="action-btn-red">
                Ver Catálogo de Usados →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 2. IDENTIDAD: 3 FOTOS REALES */}
      <section style={{ maxWidth: '1200px', margin: '50px auto 0 auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#ED1C24', letterSpacing: '1.5px', textTransform: 'uppercase' }}>IDENTIDAD Y COMPROMISO</span>
          <h2 style={{ fontSize: '1.9rem', fontWeight: 600, margin: '6px 0 0 0' }}>El respaldo de una trayectoria real</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '22px' }}>
          
          <div className="identity-card">
            <img src="/calidad-usados.jpg.webp" alt="Garantía propia" />
            <div className="identity-overlay">
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, margin: 0, color: '#ffffff' }}>Garantía propia en las unidades usadas</h3>
            </div>
          </div>

          <div className="identity-card">
            <img src="/local-frente.jpg.webp" alt="Atención personalizada" />
            <div className="identity-overlay">
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, margin: 0, color: '#ffffff' }}>Atención personalizada de principio a fin</h3>
            </div>
          </div>

          <div className="identity-card">
            <img src="/premios-trayectoria.jpg.webp" alt="Premios y trayectoria" />
            <div className="identity-overlay">
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, margin: 0, color: '#ffffff' }}>+35 años de trayectoria en el sector automotor</h3>
            </div>
          </div>

        </div>
      </section>

      {/* 3. MÉTRICAS */}
      <section style={{ maxWidth: '1200px', margin: '50px auto 0 auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          
          <div className="metric-box">
            <div style={{ fontSize: '2.4rem', fontWeight: 700, color: '#ED1C24', lineHeight: 1, marginBottom: '8px' }}>+35</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>Años de Trayectoria</div>
            <div style={{ fontSize: '0.78rem', color: '#71717a', fontWeight: 300 }}>Referente automotor familiar</div>
          </div>

          <div className="metric-box">
            <div style={{ fontSize: '2.4rem', fontWeight: 700, color: '#ED1C24', lineHeight: 1, marginBottom: '8px' }}>6 Meses</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>Garantía Total Escrita</div>
            <div style={{ fontSize: '0.78rem', color: '#71717a', fontWeight: 300 }}>En todos nuestros usados</div>
          </div>

          <div className="metric-box">
            <div style={{ fontSize: '2.4rem', fontWeight: 700, color: '#ED1C24', lineHeight: 1, marginBottom: '8px' }}>100%</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>Gestoría Propia</div>
            <div style={{ fontSize: '0.78rem', color: '#71717a', fontWeight: 300 }}>Documentación al día sin demoras</div>
          </div>

          <div className="metric-box">
            <div style={{ fontSize: '2.4rem', fontWeight: 700, color: '#ED1C24', lineHeight: 1, marginBottom: '8px' }}>16+</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>Marcas Multimarca</div>
            <div style={{ fontSize: '0.78rem', color: '#71717a', fontWeight: 300 }}>Gama 0km completa disponible</div>
          </div>

        </div>
      </section>

      {/* 4. FINANCIACIÓN Y CRÉDITOS */}
      <section style={{ maxWidth: '1000px', margin: '70px auto 0 auto', padding: '0 20px' }}>
        <div style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '22px', padding: '46px 30px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'rgba(237, 28, 36, 0.1)', border: '1px solid rgba(237, 28, 36, 0.3)', color: '#ED1C24', padding: '4px 14px', borderRadius: '30px', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
            PLANES A MEDIDA
          </div>
          <h2 style={{ fontSize: '2rem', fontWeight: 600, margin: '0 0 14px 0' }}>
            Financiación y Créditos Prendarios
          </h2>
          <p style={{ fontSize: '0.92rem', color: '#a1a1aa', maxWidth: '680px', margin: '0 auto 28px auto', lineHeight: 1.6, fontWeight: 300 }}>
            Te asesoramos para que encuentres la estructura de pago más conveniente: créditos prendarios bancarios, cuotas fijas en pesos y toma de tu vehículo usado como anticipo.
          </p>
          <a 
            href="https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20opciones%20de%20financiaci%C3%B3n" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: 'inline-block', backgroundColor: '#ED1C24', color: '#ffffff', padding: '13px 30px', borderRadius: '10px', fontWeight: 600, fontSize: '0.88rem' }}
          >
            Consultar Opciones de Financiación →
          </a>
        </div>
      </section>

      {/* 5. RESEÑAS EN CARRUSEL */}
      <section style={{ maxWidth: '1200px', margin: '70px auto 0 auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '28px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#ED1C24', letterSpacing: '1.5px', textTransform: 'uppercase' }}>TESTIMONIOS REALES</span>
            <h2 style={{ fontSize: '2rem', fontWeight: 600, margin: '4px 0 0 0' }}>Opiniones de quienes nos eligen</h2>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={() => scroll('left')} className="scroll-btn" aria-label="Anterior">←</button>
            <button onClick={() => scroll('right')} className="scroll-btn" aria-label="Siguiente">→</button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="no-scrollbar"
          style={{ display: 'flex', gap: '20px', overflowX: 'auto', scrollSnapType: 'x mandatory', paddingBottom: '16px' }}
        >
          {reviews.map((r, i) => (
            <div key={i} className="review-carousel-item">
              <div>
                <p style={{ fontSize: '0.86rem', color: '#d4d4d8', fontStyle: 'italic', lineHeight: 1.5, margin: '0 0 16px 0', fontWeight: 300 }}>
                  "{r.text}"
                </p>
                <div style={{ color: '#F59E0B', fontSize: '0.9rem', marginBottom: '12px' }}>
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
                <span style={{ fontSize: '0.86rem', fontWeight: 600, color: '#ffffff' }}>{r.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <a 
            href="https://maps.app.goo.gl" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#141518', border: '1px solid #27272a', color: '#a1a1aa', padding: '10px 22px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 500 }}
          >
            Ver más opiniones en Google Maps ↗
          </a>
        </div>
      </section>

    </div>
  );
}
