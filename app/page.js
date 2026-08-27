'use client';

import { useRef } from 'react';

const reviews = [
  { name: 'Silvana Olguin', text: 'Excelente atención. Y por sobre todo personas responsables y muy cumplidoras.', rating: 5 },
  { name: 'Santiago Lovera', text: 'Hace más de quince años que soy cliente. Muy eficientes, excelentes precios y mejor atención.', rating: 5 },
  { name: 'Lucia Noelia Bressan', text: 'Muy buen negocio, gente de confianza y excelente predisposición.', rating: 5 },
  { name: 'Franco Revelli', text: 'Ya 8 vehículos comprados en mi familia, siempre recibiendo el usado. Se hacen buenos negocios y cumplen con su palabra.', rating: 5 },
  { name: 'Gabriel Agustín Dama', text: 'Tan sólidos y confiables como siempre, un placer hacer negocios con esta prestigiosa firma de Banda Norte.', rating: 5 },
];

export default function Home() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - clientWidth * 0.75 : scrollLeft + clientWidth * 0.75,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div style={{ backgroundColor: '#0B0C0E', minHeight: '100vh', color: '#ffffff', paddingBottom: '90px' }}>
      
      {/* ESTILOS INTERACTIVOS */}
      <style>{`
        .two-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          width: 100%;
        }
        .main-card {
          background-color: #141518;
          border: 1px solid #27272a;
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .main-card:hover {
          transform: translateY(-6px);
          border-color: rgba(237, 28, 36, 0.5);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.6), 0 0 20px rgba(237, 28, 36, 0.15);
        }
        .main-card-img {
          height: 320px;
          background-color: #070709;
          position: relative;
          overflow: hidden;
        }
        .main-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .main-card:hover .main-card-img img {
          transform: scale(1.06);
        }
        .salon-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 32px;
          align-items: center;
        }
        @media (max-width: 860px) {
          .main-card-img {
            height: 240px;
          }
          .salon-grid {
            grid-template-columns: 1fr;
          }
        }
        .btn-red {
          display: block;
          text-align: center;
          background-color: #ED1C24;
          color: #ffffff;
          padding: 14px;
          border-radius: 10px;
          font-weight: 700;
          font-size: 0.95rem;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }
        .btn-red:hover {
          background-color: #c9141b;
          transform: scale(1.02);
        }
        .scroll-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: #141518;
          border: 1px solid #27272a;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.1rem;
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
      `}</style>

      {/* 1. ENCABEZADO INSTITUCIONAL ESTANDARIZADO */}
      <section style={{ padding: '50px 20px 24px 20px', textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Logo ampliado */}
        <div style={{ marginBottom: '18px' }}>
          <img 
            src="/logo.png.png" 
            alt="Cogno Automotores" 
            style={{ height: '85px', width: 'auto', margin: '0 auto', display: 'inline-block' }} 
          />
        </div>

        {/* Título principal con buscando? en rojo */}
        <h1 style={{ fontSize: '3.2rem', fontWeight: 600, margin: '0 0 18px 0', letterSpacing: '-0.5px', color: '#ffffff', lineHeight: 1.15 }}>
          ¿Qué estás <span style={{ color: '#ED1C24' }}>buscando?</span>
        </h1>

        {/* Badge rojo tipo píldora */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(237, 28, 36, 0.08)', border: '1px solid rgba(237, 28, 36, 0.4)', color: '#ED1C24', padding: '9px 22px', borderRadius: '30px', fontSize: '0.86rem', fontWeight: 700, letterSpacing: '0.8px', marginBottom: '28px', textTransform: 'uppercase' }}>
          <span>🛡️</span>
          <span>TU PRÓXIMO VEHÍCULO TE ESPERA</span>
        </div>

        {/* Bajada con tipografía unificada en blanco */}
        <p style={{ color: '#ffffff', fontSize: '1.05rem', maxWidth: '850px', margin: '0 auto 35px auto', lineHeight: 1.7, fontWeight: 300 }}>
          Elegí la categoría de tu interés para explorar nuestras unidades disponibles, opciones de financiación directa y propuestas a medida.
        </p>

      </section>

      {/* 2. TARJETAS 0KM Y USADOS */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div className="two-cards-grid">
          
          {/* Tarjeta 0KM */}
          <div className="main-card">
            <div className="main-card-img">
              <span style={{ position: 'absolute', top: '14px', left: '14px', backgroundColor: '#ED1C24', color: '#ffffff', fontSize: '0.8rem', fontWeight: 700, padding: '5px 12px', borderRadius: '6px', zIndex: 2 }}>
                0 KM
              </span>
              <img src="/local-2026.jpg.webp" alt="Unidades 0km" />
            </div>
            <div style={{ padding: '26px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <h2 style={{ fontSize: '1.45rem', fontWeight: 700, margin: '0 0 10px 0', color: '#ffffff' }}>Unidades 0KM</h2>
              <p style={{ color: '#a1a1aa', fontSize: '0.95rem', lineHeight: 1.6, margin: '0 0 22px 0', flexGrow: 1, fontWeight: 300 }}>
                Comercializamos la gama completa de las principales marcas del país. Financiación directa de fábrica y entrega programada.
              </p>
              <a href="/0km" className="btn-red">Explorar Marcas 0KM →</a>
            </div>
          </div>

          {/* Tarjeta Usados */}
          <div className="main-card">
            <div className="main-card-img">
              <span style={{ position: 'absolute', top: '14px', left: '14px', backgroundColor: '#ED1C24', color: '#ffffff', fontSize: '0.8rem', fontWeight: 700, padding: '5px 12px', borderRadius: '6px', zIndex: 2 }}>
                SELECCIONADOS
              </span>
              <img src="/calidad-usados.jpg.webp" alt="Usados Seleccionados" />
            </div>
            <div style={{ padding: '26px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <h2 style={{ fontSize: '1.45rem', fontWeight: 700, margin: '0 0 6px 0', color: '#ffffff' }}>Usados Seleccionados</h2>
              <div style={{ color: '#ED1C24', fontSize: '0.82rem', fontWeight: 700, marginBottom: '10px' }}>
                🛡️ 6 MESES DE GARANTÍA ESCRITA
              </div>
              <p style={{ color: '#a1a1aa', fontSize: '0.95rem', lineHeight: 1.6, margin: '0 0 22px 0', flexGrow: 1, fontWeight: 300 }}>
                Unidades rigurosamente inspeccionadas, con historial verificado y entrega con toda la documentación lista para transferir.
              </p>
              <a href="/usados" className="btn-red">Ver Catálogo de Usados →</a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. RESEÑAS */}
      <section style={{ maxWidth: '1200px', margin: '70px auto 0 auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ED1C24', letterSpacing: '1.5px', textTransform: 'uppercase' }}>TESTIMONIOS REALES</span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 600, margin: '6px 0 0 0' }}>Opiniones de nuestros clientes</h2>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '16px' }}>
            <button onClick={() => scroll('left')} className="scroll-btn" aria-label="Anterior">←</button>
            <button onClick={() => scroll('right')} className="scroll-btn" aria-label="Siguiente">→</button>
          </div>
        </div>

        <div ref={scrollRef} className="no-scrollbar" style={{ display: 'flex', gap: '20px', overflowX: 'auto', scrollSnapType: 'x mandatory', paddingBottom: '16px' }}>
          {reviews.map((r, i) => (
            <div key={i} style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '16px', padding: '24px', width: '320px', flexShrink: 0, scrollSnapAlign: 'start', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '0.92rem', color: '#d4d4d8', fontStyle: 'italic', lineHeight: 1.6, margin: '0 0 14px 0', fontWeight: 300 }}>"{r.text}"</p>
                <div style={{ color: '#F59E0B', fontSize: '0.95rem', marginBottom: '12px' }}>{'★'.repeat(r.rating)}</div>
              </div>
              <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#ffffff', borderTop: '1px solid #27272a', paddingTop: '10px' }}>{r.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. LOCAL Y MAPA */}
      <section style={{ maxWidth: '1200px', margin: '80px auto 0 auto', padding: '0 20px' }}>
        <div style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '24px', padding: '36px 28px' }}>
          <div className="salon-grid">
            <div>
              <span style={{ color: '#ED1C24', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>SALÓN COMERCIAL</span>
              <h2 style={{ fontSize: '2.1rem', fontWeight: 600, margin: '6px 0 14px 0', lineHeight: 1.2 }}>Vení a conocer nuestro local</h2>
              <p style={{ color: '#ffffff', fontSize: '0.98rem', lineHeight: 1.6, margin: '0 0 20px 0', fontWeight: 300 }}>
                Te esperamos para conocer el stock en persona, peritar tu usado y brindarte asesoramiento profesional.
              </p>
              <div style={{ backgroundColor: '#0B0C0E', border: '1px solid #27272a', padding: '14px 18px', borderRadius: '12px', marginBottom: '22px' }}>
                <div style={{ fontSize: '0.75rem', color: '#71717a', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '1px', marginBottom: '2px' }}>UBICACIÓN</div>
                <div style={{ fontSize: '1.02rem', fontWeight: 600, color: '#ffffff' }}>Av. Marcelo T. de Alvear 1580</div>
                <div style={{ fontSize: '0.88rem', color: '#a1a1aa', marginTop: '2px', fontWeight: 300 }}>Río Cuarto, Córdoba, Argentina</div>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="https://www.google.com/maps/search/?api=1&query=Av.+Marcelo+T.+de+Alvear+1580,+Rio+Cuarto,+Cordoba" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#ED1C24', color: '#ffffff', padding: '12px 22px', borderRadius: '10px', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
                  Cómo llegar en Google Maps →
                </a>
                <a href="https://wa.me/5493584029424?text=Hola!%20Quiero%20coordinar%20una%20visita%20al%20sal%C3%B3n" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#1F2024', border: '1px solid #333', color: '#ffffff', padding: '12px 22px', borderRadius: '10px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
                  Hablar por WhatsApp
                </a>
              </div>
            </div>

            <div style={{ height: '340px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #27272a', backgroundColor: '#0B0C0E' }}>
              <iframe
                title="Ubicación Cogno"
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
