'use client';

import { useState } from 'react';

const hitosHistoricos = [
  {
    id: '1989',
    año: '1989',
    etiqueta: 'EL COMIENZO',
    titulo: 'La primera chata entregada: "La Vaca Milka"',
    descripcion: 'El inicio formal de nuestra historia. Esta emblemática Ford F-100 blanca con defensa tubular y cúpula fue la primera unidad vendida que dio origen a más de 35 años de trabajo ininterrumpido en Río Cuarto.',
    imagen: '/primera-chata.png',
    destacado: 'Más de 35 años de palabra empeñada'
  },
  {
    id: '1995',
    año: 'AÑOS 90',
    etiqueta: 'PRIMER SALÓN',
    titulo: 'El compromiso sobre Av. Marcelo T. de Alvear',
    descripcion: 'Nuestros primeros pasos con predio comercial propio. Desde los orígenes forjamos el valor de la transparencia jurídica, la garantía real y el trato personalizado mano a mano con cada vecino de la ciudad y la región.',
    imagen: '/origenes-local.jpg',
    destacado: 'Atención familiar y peritaje riguroso'
  },
  {
    id: 'flota',
    año: 'CRECIMIENTO',
    etiqueta: 'LIDERAZGO REGIONAL',
    titulo: 'Referentes en utilitarios pesados y pick-ups',
    descripcion: 'Consolidación comercial como concesionaria de referencia para el campo y la industria cordobesa, destacándonos por entregas constantes de flotas 0 KM y usados seleccionados.',
    imagen: '/frente-2019.png', // Podés reemplazar por /flota-hilux.jpg
    destacado: 'Especialistas en 4x4 y media/alta gama'
  },
  {
    id: 'hoy',
    año: 'PRESENTE',
    etiqueta: 'INSTALACIONES ACTUALES',
    titulo: 'Una infraestructura moderna con los valores de siempre',
    descripcion: 'Salón comercial de vanguardia sobre Av. Marcelo T. de Alvear 1580, catálogo digital multimarca en tiempo real y garantía extendida propia en todas nuestras unidades.',
    imagen: '/frente-2026.jpg.jpg',
    destacado: 'La propuesta más confiable del sur de Córdoba'
  }
];

export default function QuienesSomos() {
  const [hitoActivo, setHitoActivo] = useState(0);

  const hito = hitosHistoricos[hitoActivo];

  return (
    <div style={{ backgroundColor: '#0B0C0E', minHeight: '100vh', color: '#ffffff', paddingBottom: '80px', overflowX: 'hidden' }}>
      
      {/* ESTILOS INTERACTIVOS Y RESPONSIVE MÓVIL */}
      <style>{`
        .timeline-tab-btn {
          background: #141518;
          border: 1px solid #27272a;
          color: #a1a1aa;
          padding: 12px 24px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .timeline-tab-btn:hover {
          color: #ffffff;
          border-color: rgba(237, 28, 36, 0.5);
          transform: translateY(-2px);
        }
        .timeline-tab-btn.active {
          background: #ED1C24;
          border-color: #ED1C24;
          color: #ffffff;
          box-shadow: 0 8px 24px rgba(237, 28, 36, 0.35);
        }

        .showcase-container {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 36px;
          align-items: center;
          background-color: #141518;
          border: 1px solid #27272a;
          border-radius: 22px;
          padding: 36px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
          animation: fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .showcase-image-wrap {
          height: 380px;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          background-color: #070709;
          border: 1px solid #27272a;
        }
        .showcase-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .showcase-image-wrap:hover img {
          transform: scale(1.04);
        }

        .values-grid-2x2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
        }
        .value-card {
          background-color: #141518;
          border: 1px solid #27272a;
          border-radius: 18px;
          padding: 24px 22px;
          display: flex;
          gap: 18px;
          align-items: flex-start;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .value-card:hover {
          transform: translateY(-5px);
          border-color: rgba(237, 28, 36, 0.45);
          box-shadow: 0 14px 30px rgba(0,0,0,0.5), 0 0 20px rgba(237, 28, 36, 0.1);
        }

        .salon-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 32px;
          align-items: center;
        }

        @media (max-width: 900px) {
          .showcase-container {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            padding: 20px !important;
          }
          .showcase-image-wrap {
            height: 240px !important;
          }
          .timeline-nav-bar {
            overflow-x: auto;
            white-space: nowrap;
            justify-content: flex-start !important;
            padding-bottom: 12px;
          }
          .values-grid-2x2 {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .salon-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .hero-qs-title {
            font-size: 1.75rem !important;
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

        <h1 className="hero-qs-title" style={{ fontSize: '2.35rem', fontWeight: 600, margin: '0 0 10px 0', letterSpacing: '-0.4px', color: '#ffffff', lineHeight: 1.15 }}>
          ¿Quiénes <span style={{ color: '#ED1C24' }}>somos?</span>
        </h1>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(237, 28, 36, 0.08)', border: '1px solid rgba(237, 28, 36, 0.4)', color: '#ED1C24', padding: '6px 16px', borderRadius: '30px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.6px', marginBottom: '14px', textTransform: 'uppercase' }}>
          <span>🛡️</span>
          <span>MÁS DE 35 AÑOS DE TRAYECTORIA Y COMPROMISO</span>
        </div>

        <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <p style={{ fontSize: '1rem', color: '#F4F4F5', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
            Somos <strong style={{ fontWeight: 600, color: '#ffffff' }}>Cogno Automotores S.A.</strong>, una empresa familiar líder en Río Cuarto y el sur de Córdoba. Nos dedicamos a la comercialización de vehículos nuevos y usados seleccionados, con un stock permanente y una destacada trayectoria en pick-ups y utilitarios.
          </p>
        </div>
      </section>

      {/* 2. LÍNEA DE TIEMPO INTERACTIVA */}
      <section style={{ maxWidth: '1280px', margin: '45px auto 0 auto', padding: '0 24px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ED1C24', letterSpacing: '2px', textTransform: 'uppercase' }}>
            NUESTRO RECORRIDO
          </span>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 600, margin: '6px 0 0 0', color: '#ffffff' }}>
            Línea de Tiempo Interactiva
          </h2>
          <p style={{ color: '#a1a1aa', fontSize: '0.92rem', marginTop: '6px' }}>
            Hacé clic en cada hito para descubrir cómo evolucionamos a lo largo de las décadas:
          </p>
        </div>

        {/* SELECTOR INTERACTIVO DE ÉPOCAS */}
        <div className="timeline-nav-bar" style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '28px' }}>
          {hitosHistoricos.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setHitoActivo(index)}
              className={`timeline-tab-btn ${hitoActivo === index ? 'active' : ''}`}
            >
              <span>{item.año}</span>
              <span style={{ fontSize: '0.75rem', opacity: 0.85, fontWeight: 500 }}>• {item.etiqueta}</span>
            </button>
          ))}
        </div>

        {/* CONTENEDOR DINÁMICO DEL HITO SELECCIONADO */}
        <div key={hito.id} className="showcase-container">
          
          <div className="showcase-image-wrap">
            <img src={hito.imagen} alt={hito.titulo} />
            <div style={{ position: 'absolute', bottom: '14px', right: '14px', backgroundColor: 'rgba(11, 12, 14, 0.85)', backdropFilter: 'blur(8px)', border: '1px solid #27272a', padding: '6px 14px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 600, color: '#ffffff' }}>
              📸 Archivo Cogno
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(237, 28, 36, 0.12)', border: '1px solid rgba(237, 28, 36, 0.4)', color: '#ED1C24', padding: '4px 12px', borderRadius: '14px', fontSize: '0.76rem', fontWeight: 700, width: 'fit-content', textTransform: 'uppercase' }}>
              {hito.etiqueta}
            </div>
            
            <h3 style={{ fontSize: '1.65rem', fontWeight: 600, margin: 0, color: '#ffffff', lineHeight: 1.25 }}>
              {hito.titulo}
            </h3>

            <p style={{ fontSize: '0.98rem', color: '#d4d4d8', lineHeight: 1.65, margin: 0 }}>
              {hito.descripcion}
            </p>

            <div style={{ borderTop: '1px solid #27272a', paddingTop: '16px', display: 'flex', alignItems: 'center', gap: '10px', color: '#a1a1aa', fontSize: '0.88rem' }}>
              <span style={{ color: '#ED1C24', fontSize: '1.1rem' }}>✓</span>
              <span>{hito.destacado}</span>
            </div>
          </div>

        </div>

      </section>

      {/* 3. PROPÓSITO & VISIÓN */}
      <section style={{ maxWidth: '1280px', margin: '55px auto 0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          
          <div style={{ position: 'relative', minHeight: '260px', borderRadius: '20px', overflow: 'hidden', border: '1px solid #27272a', padding: '28px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', backgroundColor: '#141518' }}>
            <img src="/calidad-usados.jpg.webp" alt="Propósito Cogno Automotores" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,12,14,0.3) 0%, rgba(11,12,14,0.85) 45%, rgba(11,12,14,0.98) 100%)', zIndex: 2 }}></div>
            <div style={{ position: 'relative', zIndex: 3 }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#ED1C24', letterSpacing: '1.5px', textTransform: 'uppercase' }}>NUESTRO PROPÓSITO</span>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 600, margin: '4px 0 8px 0', color: '#ffffff' }}>Seguridad, respaldo y tranquilidad</h3>
              <p style={{ fontSize: '0.92rem', color: '#ffffff', lineHeight: 1.55, margin: 0 }}>
                Brindar una experiencia de compra transparente y sólida, ofreciendo vehículos rigurosamente peritados con garantía real propia para que cada cliente tome la mejor decisión.
              </p>
            </div>
          </div>

          <div style={{ position: 'relative', minHeight: '260px', borderRadius: '20px', overflow: 'hidden', border: '1px solid #27272a', padding: '28px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', backgroundColor: '#141518' }}>
            <img src="/premios-trayectoria.jpg.webp" alt="Hacia dónde vamos" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,12,14,0.3) 0%, rgba(11,12,14,0.85) 45%, rgba(11,12,14,0.98) 100%)', zIndex: 2 }}></div>
            <div style={{ position: 'relative', zIndex: 3 }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#ED1C24', letterSpacing: '1.5px', textTransform: 'uppercase' }}>HACIA DÓNDE VAMOS</span>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 600, margin: '4px 0 8px 0', color: '#ffffff' }}>El referente indiscutido en la región</h3>
              <p style={{ fontSize: '0.92rem', color: '#ffffff', lineHeight: 1.55, margin: 0 }}>
                Consolidarnos día a día como el punto de referencia automotor de Río Cuarto y la zona, uniendo la calidez de una empresa familiar con la agilidad y exigencia del mercado actual.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. NUESTROS VALORES */}
      <section style={{ maxWidth: '1280px', margin: '55px auto 0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ED1C24', letterSpacing: '2px', textTransform: 'uppercase' }}>PILARES FUNDAMENTALES</span>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 600, margin: '4px 0 0 0' }}>Nuestros Valores</h2>
        </div>

        <div className="values-grid-2x2">
          
          <div className="value-card">
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'rgba(237, 28, 36, 0.12)', border: '1px solid rgba(237, 28, 36, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#ED1C24' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ED1C24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="3" x2="12" y2="21" />
                <polyline points="4 7 12 5 20 7" />
                <polyline points="1 13 4 7 7 13" />
                <path d="M1 13a3 3 0 0 0 6 0" />
                <polyline points="17 13 20 7 23 13" />
                <path d="M17 13a3 3 0 0 0 6 0" />
                <line x1="8" y1="21" x2="16" y2="21" />
              </svg>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ffffff', margin: '0 0 4px 0' }}>Honestidad y Transparencia</h3>
              <p style={{ fontSize: '0.92rem', color: '#E4E4E7', lineHeight: 1.5, margin: 0 }}>
                Claridad absoluta en el estado de cada vehículo, peritaje verificable y condiciones comerciales transparentes desde el primer contacto.
              </p>
            </div>
          </div>

          <div className="value-card">
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'rgba(237, 28, 36, 0.12)', border: '1px solid rgba(237, 28, 36, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#ED1C24' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ED1C24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ffffff', margin: '0 0 4px 0' }}>Confianza y Cercanía</h3>
              <p style={{ fontSize: '0.92rem', color: '#E4E4E7', lineHeight: 1.5, margin: 0 }}>
                Trato humano y personalizado. Más de 35 años atendiendo a varias generaciones de familias que nos vuelven a elegir.
              </p>
            </div>
          </div>

          <div className="value-card">
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'rgba(237, 28, 36, 0.12)', border: '1px solid rgba(237, 28, 36, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#ED1C24' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ED1C24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ffffff', margin: '0 0 4px 0' }}>Responsabilidad Operativa</h3>
              <p style={{ fontSize: '0.92rem', color: '#E4E4E7', lineHeight: 1.5, margin: 0 }}>
                Garantizamos transferencias inmediatas y unidades peritadas libres de cualquier gravamen o deuda.
              </p>
            </div>
          </div>

          <div className="value-card">
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'rgba(237, 28, 36, 0.12)', border: '1px solid rgba(237, 28, 36, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#ED1C24' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ED1C24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ffffff', margin: '0 0 4px 0' }}>Compromiso Post Venta</h3>
              <p style={{ fontSize: '0.92rem', color: '#E4E4E7', lineHeight: 1.5, margin: 0 }}>
                Acompañamiento constante y respuesta ágil ante cualquier necesidad luego de retirar tu vehículo.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. SALÓN COMERCIAL & HORARIOS */}
      <section style={{ maxWidth: '1280px', margin: '55px auto 0 auto', padding: '0 24px' }}>
        <div style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '22px', padding: '32px 26px' }}>
          
          <div className="salon-grid">
            <div>
              <span style={{ color: '#ED1C24', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
                SALÓN COMERCIAL
              </span>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 600, margin: '4px 0 10px 0', lineHeight: 1.2 }}>
                Vení a conocer nuestro local
              </h2>
              <p style={{ fontSize: '0.98rem', color: '#E4E4E7', lineHeight: 1.55, margin: '0 0 18px 0' }}>
                Te esperamos en nuestras instalaciones para conocer el stock en persona, peritar tu usado y recibir asesoramiento a medida.
              </p>

              <div style={{ backgroundColor: '#0B0C0E', border: '1px solid #27272a', padding: '14px 18px', borderRadius: '12px', marginBottom: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#a1a1aa', textTransform: 'uppercase', fontWeight: 600 }}>UBICACIÓN</div>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: '#ffffff' }}>Av. Marcelo T. de Alvear 1580</div>
                  <div style={{ fontSize: '0.86rem', color: '#d4d4d8' }}>Río Cuarto, Córdoba, Argentina</div>
                </div>

                <div style={{ borderTop: '1px solid #1F2024', paddingTop: '8px' }}>
                  <div style={{ fontSize: '0.72rem', color: '#a1a1aa', textTransform: 'uppercase', fontWeight: 600 }}>HORARIOS DE ATENCIÓN</div>
                  <div style={{ fontSize: '0.92rem', color: '#ffffff', fontWeight: 500, marginTop: '2px' }}>Lunes a Viernes: 09:00 a 18:00 hs</div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '10px' }}>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Av.+Marcelo+T.+de+Alvear+1580,+Rio+Cuarto,+Cordoba" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ backgroundColor: '#ED1C24', color: '#ffffff', padding: '12px 20px', borderRadius: '10px', fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none', textAlign: 'center' }}
                >
                  Cómo llegar en Maps →
                </a>
                <a 
                  href="https://wa.me/5493584029424?text=Hola!%20Quiero%20coordinar%20una%20visita%20al%20sal%C3%B3n" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ backgroundColor: '#1F2024', border: '1px solid #333', color: '#ffffff', padding: '12px 20px', borderRadius: '10px', fontWeight: 600, fontSize: '0.88rem', textDecoration: 'none', textAlign: 'center' }}
                >
                  Hablar por WhatsApp
                </a>
              </div>
            </div>

            <div style={{ height: '300px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #27272a', backgroundColor: '#0B0C0E' }}>
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
