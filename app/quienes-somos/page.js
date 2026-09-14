'use client';

import { useState, useEffect } from 'react';

const capitulosHistoria = [
  {
    año: '1989',
    etiqueta: 'EL COMIENZO',
    titulo: 'La primera chata: "La Vaca Milka"',
    relato: 'Todo comenzó con esta clásica Ford F-100 blanca equipada con cúpula y defensa tubular. Fue la primera unidad entregada y la chispa fundacional de Cogno Automotores. Sin grandes estructuras, pero con una convicción innegociable: la palabra empeñada y el trato leal valen más que cualquier firma.',
    imagen: '/primera-chata.png',
    pie: 'Ford F-100 "La Vaca Milka" — Archivo fundacional 1989'
  },
  {
    año: 'AÑOS 90',
    etiqueta: 'EL PRIMER SALÓN',
    titulo: 'Echar raíces sobre Marcelo T. de Alvear',
    relato: 'Los primeros pasos en el predio propio. El trabajo artesanal de seleccionar cada vehículo, revisar la mecánica de punta a punta y atender personalmente a cada productor, transportista y vecino de la región que confiaba su herramienta de trabajo en nuestras manos.',
    imagen: '/origenes-local.jpg',
    pie: 'Primeras instalaciones y utilitarios en el predio propio'
  },
  {
    año: 'CRECIMIENTO',
    etiqueta: 'EMPRESA Y FAMILIA',
    titulo: 'Una pasión construida entre generaciones',
    relato: 'La transición hacia la comercialización de 0 KM y usados jóvenes. Detrás del mostrador, la familia siempre presente: atendiendo clientes, resolviendo trámites de gestoría y compartiendo el orgullo de ver crecer un proyecto que ya era parte de la identidad de Banda Norte.',
    imagen: '/frente-familia.jpg',
    pie: 'La vidriera histórica de Unidades 0KM y el corazón familiar'
  },
  {
    año: '2014',
    etiqueta: 'CONSOLIDACIÓN',
    titulo: 'Referentes indiscutidos en pick-ups y utilitarios',
    relato: 'Río Cuarto y el sur de Córdoba demandaban vehículos de trabajo pesados y confiables. Consolidamos el mayor despliegue de camionetas de la región, convirtiéndonos en el punto de encuentro natural para renovar Toyota Hilux, Ford Ranger y Volkswagen Amarok con garantía real.',
    imagen: '/frente-2014.png',
    pie: 'Exhibición de utilitarios sobre vereda Alvear en 2014'
  },
  {
    año: '2015',
    etiqueta: 'RITMO DE CALLE',
    titulo: 'El salón a la vista de toda la ciudad',
    relato: 'Una postal cotidiana sobre Marcelo T. de Alvear 1580. La rotación de stock no paraba: autos medianos, sedanes familiares y pick-ups listas para transferir en el día. Los clientes ya no venían solo por un auto, venían a buscar respaldo y tranquilidad.',
    imagen: '/frente-2015.jpg',
    pie: 'Vista frontal desde la avenida — Archivo 2015'
  },
  {
    año: 'EXPANSIÓN',
    etiqueta: 'VOLUMEN Y CONFIANZA',
    titulo: 'Entregas por flotas: La fuerza de Hilux',
    relato: 'Llegaron los desafíos de escala: proveer flotas corporativas completas, unidades 0 KM llave en mano para el sector agroindustrial y logística pesada. Tres Hilux rojas listas para salir en simultáneo simbolizaron la madurez operativa de la concesionaria.',
    imagen: '/flota-hilux.jpg',
    pie: 'Flota comercial 0 KM alineada en el salón de entregas'
  },
  {
    año: '2019',
    etiqueta: 'MODERNIZACIÓN',
    titulo: 'Renovación de instalaciones y catálogo multimarca',
    relato: 'Ampliamos el salón cubierto, modernizamos la marquesina corporativa e incorporamos tecnologías de tasación y seguimiento. Cogno Automotores ya unía el prestigio de tres décadas con el dinamismo y confort que exigen las nuevas generaciones.',
    imagen: '/frente-2019.png',
    pie: 'Fachada renovada con marquesina y vidrieras panorámicas'
  },
  {
    año: 'PRESENTE',
    etiqueta: 'HOY',
    titulo: 'Más de 35 años de confianza viva en Río Cuarto',
    relato: 'Salón modelo sobre Marcelo T. de Alvear 1580, inventario digital en tiempo real conectado al taller y garantía extendida propia de 6 meses. Seguimos siendo la misma empresa familiar del primer día, atendida por sus propios dueños con la seriedad de siempre.',
    imagen: '/frente-2026.jpg.jpg',
    pie: 'Instalaciones actuales — Marcelo T. de Alvear 1580'
  }
];

export default function QuienesSomos() {
  const [indiceActivo, setIndiceActivo] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('historia-scroll-track');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollDist = -rect.top;
      const totalScrollable = rect.height - window.innerHeight;

      if (scrollDist >= 0 && totalScrollable > 0) {
        const progreso = Math.min(Math.max(scrollDist / totalScrollable, 0), 0.999);
        const nuevoIndice = Math.floor(progreso * capitulosHistoria.length);
        setIndiceActivo(nuevoIndice);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const actual = capitulosHistoria[indiceActivo];

  return (
    <div style={{ backgroundColor: '#0B0C0E', minHeight: '100vh', color: '#ffffff', paddingBottom: '80px', overflowX: 'hidden' }}>
      
      <style>{`
        /* TRACK DE SCROLL PRINCIPAL */
        .sticky-story-track {
          position: relative;
          height: 600vh;
        }

        .sticky-story-stage {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 20px 24px;
          box-sizing: border-box;
        }

        .story-theater-grid {
          max-width: 1280px;
          width: 100%;
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .story-visual-screen {
          position: relative;
          height: 480px;
          border-radius: 22px;
          overflow: hidden;
          background-color: #141518;
          border: 1px solid #27272a;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.7);
        }

        .story-visual-screen img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease;
        }

        .story-text-pane {
          background-color: #141518;
          border: 1px solid #27272a;
          border-radius: 22px;
          padding: 36px;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5);
          position: relative;
        }

        .story-anim-slide {
          animation: slideUpFade 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .timeline-indicator-track {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 24px;
        }

        .indicator-dot {
          height: 4px;
          border-radius: 4px;
          transition: all 0.3s ease;
          background-color: #27272a;
          flex: 1;
        }

        .indicator-dot.active {
          background-color: #ED1C24;
          box-shadow: 0 0 10px rgba(237, 28, 36, 0.6);
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
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .value-card:hover {
          transform: translateY(-5px);
          border-color: rgba(237, 28, 36, 0.45);
        }

        .salon-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 32px;
          align-items: center;
        }

        /* RESPONSIVE MOBILE */
        @media (max-width: 860px) {
          .sticky-story-track {
            height: auto !important;
          }
          .sticky-story-stage {
            position: relative !important;
            height: auto !important;
            padding: 20px 0 !important;
          }
          .story-theater-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .story-visual-screen {
            height: 250px !important;
          }
          .story-text-pane {
            padding: 20px !important;
          }
          .values-grid-2x2, .salon-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-qs-title {
            font-size: 1.75rem !important;
          }
        }
      `}</style>

      {/* 1. HERO INSTITUCIONAL */}
      <section style={{ padding: '30px 20px 10px 20px', textAlign: 'center', maxWidth: '980px', margin: '0 auto' }}>
        <div style={{ marginBottom: '10px' }}>
          <img 
            src="/logo.png.png" 
            alt="Cogno Automotores" 
            style={{ height: '52px', width: 'auto', margin: '0 auto', display: 'inline-block' }}
          />
        </div>

        <h1 className="hero-qs-title" style={{ fontSize: '2.35rem', fontWeight: 600, margin: '0 0 10px 0', color: '#ffffff', lineHeight: 1.15 }}>
          Nuestra <span style={{ color: '#ED1C24' }}>Historia</span>
        </h1>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(237, 28, 36, 0.08)', border: '1px solid rgba(237, 28, 36, 0.4)', color: '#ED1C24', padding: '6px 16px', borderRadius: '30px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.6px', marginBottom: '14px', textTransform: 'uppercase' }}>
          <span>🛡️</span>
          <span>MÁS DE 35 AÑOS DE TRAYECTORIA Y COMPROMISO EN RÍO CUARTO</span>
        </div>

        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.02rem', color: '#d4d4d8', lineHeight: 1.65, margin: 0 }}>
            Deslizá hacia abajo para recorrer nuestro camino. Las fotos y memorias cobran vida en pantalla paso a paso.
          </p>
        </div>
      </section>

      {/* 2. TEATRO SCROLLYTELLING FIJO */}
      <section id="historia-scroll-track" className="sticky-story-track">
        <div className="sticky-story-stage">
          <div className="story-theater-grid">
            
            {/* PANTALLA VISUAL */}
            <div className="story-visual-screen">
              <img 
                key={actual.imagen} 
                src={actual.imagen} 
                alt={actual.titulo} 
                className="story-anim-slide"
              />
              <div style={{ position: 'absolute', bottom: '14px', left: '14px', right: '14px', backgroundColor: 'rgba(11, 12, 14, 0.85)', backdropFilter: 'blur(8px)', border: '1px solid #27272a', padding: '8px 16px', borderRadius: '12px', fontSize: '0.8rem', color: '#a1a1aa', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#ED1C24' }}>📷</span>
                <span>{actual.pie}</span>
              </div>
            </div>

            {/* PANEL DE RELATO */}
            <div className="story-text-pane">
              
              {/* LÍNEA DE PROGRESO */}
              <div className="timeline-indicator-track">
                {capitulosHistoria.map((_, i) => (
                  <div key={i} className={`indicator-dot ${i === indiceActivo ? 'active' : ''}`} />
                ))}
              </div>

              <div key={actual.año} className="story-anim-slide">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ED1C24', letterSpacing: '-0.5px' }}>
                    {actual.año}
                  </span>
                  <span style={{ fontSize: '0.74rem', color: '#a1a1aa', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', backgroundColor: '#0B0C0E', padding: '4px 10px', borderRadius: '8px', border: '1px solid #27272a' }}>
                    {actual.etiqueta}
                  </span>
                </div>

                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#ffffff', margin: '0 0 14px 0', lineHeight: 1.25 }}>
                  {actual.titulo}
                </h2>

                <p style={{ fontSize: '0.96rem', color: '#d4d4d8', lineHeight: 1.7, margin: 0 }}>
                  {actual.relato}
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. PROPÓSITO & VISIÓN */}
      <section style={{ maxWidth: '1280px', margin: '50px auto 0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          
          <div style={{ position: 'relative', minHeight: '260px', borderRadius: '20px', overflow: 'hidden', border: '1px solid #27272a', padding: '28px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', backgroundColor: '#141518' }}>
            <img src="/calidad-usados.jpg.webp" alt="Propósito Cogno Automotores" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,12,14,0.3) 0%, rgba(11,12,14,0.85) 45%, rgba(11,12,14,0.98) 100%)', zIndex: 2 }}></div>
            <div style={{ position: 'relative', zIndex: 3 }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#ED1C24', letterSpacing: '1.5px', textTransform: 'uppercase' }}>NUESTRO COMPROMISO</span>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 600, margin: '4px 0 8px 0', color: '#ffffff' }}>Seguridad, respaldo y tranquilidad</h3>
              <p style={{ fontSize: '0.92rem', color: '#ffffff', lineHeight: 1.55, margin: 0 }}>
                Cada vehículo que comercializamos atraviesa un peritaje mecánico estricto y cuenta con garantía real propia de 6 meses para que tomes la mejor decisión de inversión.
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
                Unir la calidez, cercanía y solidez moral de una empresa familiar de más de tres décadas con las herramientas tecnológicas más modernas del sector automotor.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. VALORES FUNDAMENTALES */}
      <section style={{ maxWidth: '1280px', margin: '55px auto 0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ED1C24', letterSpacing: '2px', textTransform: 'uppercase' }}>PILARES INNEGOCIABLES</span>
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
                Trato humano y profesional. Más de tres décadas atendiendo a generaciones de familias que nos siguen eligiendo.
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
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ffffff', margin: '0 0 4px 0' }}>Garantía y Post Venta</h3>
              <p style={{ fontSize: '0.92rem', color: '#E4E4E7', lineHeight: 1.5, margin: 0 }}>
                Acompañamiento constante y respuesta ágil ante cualquier consulta técnica o administrativa luego de retirar la unidad.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. SALÓN COMERCIAL & UBICACIÓN */}
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
