'use client';

const capitulosHistoria = [
  {
    año: '1989',
    etiqueta: 'EL PUNTO DE PARTIDA',
    titulo: 'La primera chata: "La Vaca Milka"',
    relato: 'Todo comenzó con esta clásica Ford F-100 blanca equipada con cúpula y defensa tubular. Fue la primera unidad entregada y la chispa fundacional de Cogno Automotores. Sin grandes estructuras, pero con una convicción innegociable: la palabra empeñada y el trato leal valen más que cualquier firma.',
    imagen: '/primera-chata.png',
    selloNumero: '01',
    selloTexto: 'ORIGEN • 1989',
    rotacion: '-1deg'
  },
  {
    año: 'AÑOS 90',
    etiqueta: 'PRIMER SALÓN',
    titulo: 'Echar raíces sobre Marcelo T. de Alvear',
    relato: 'Los primeros pasos en el predio propio. El trabajo artesanal de seleccionar cada vehículo, revisar la mecánica de punta a punta y atender personalmente a cada productor, transportista y vecino de la región que confiaba su herramienta de trabajo en nuestras manos.',
    imagen: '/origenes-local.jpg',
    selloNumero: '90s',
    selloTexto: 'PREDIO PROPIO',
    rotacion: '1.2deg'
  },
  {
    año: 'CRECIMIENTO',
    etiqueta: 'EMPRESA Y FAMILIA',
    titulo: 'Una pasión construida entre generaciones',
    relato: 'La transición hacia la comercialización de 0 KM y usados jóvenes. Detrás del mostrador, la familia siempre presente: atendiendo clientes, resolviendo trámites de gestoría y compartiendo el orgullo de ver crecer un proyecto que ya era parte de la identidad de Banda Norte.',
    imagen: '/frente-familia.jpg',
    selloNumero: 'FAM',
    selloTexto: 'MULTIMARCA',
    rotacion: '-1.2deg'
  },
  {
    año: '2014',
    etiqueta: 'CONSOLIDACIÓN',
    titulo: 'Referentes indiscutidos en pick-ups',
    relato: 'Río Cuarto y el sur de Córdoba demandaban utilitarios pesados y confiables. Consolidamos el mayor despliegue de camionetas de la región, convirtiéndonos en el punto de encuentro natural para renovar Toyota Hilux, Ford Ranger y Volkswagen Amarok con garantía real.',
    imagen: '/frente-2014.png',
    selloNumero: '4X4',
    selloTexto: 'LÍDERES PICK-UPS',
    rotacion: '1deg'
  },
  {
    año: '2015',
    etiqueta: 'RITMO DE CALLE',
    titulo: 'El salón a la vista de toda la ciudad',
    relato: 'Una postal cotidiana sobre Marcelo T. de Alvear 1580. La rotación de stock no paraba: autos medianos, sedanes familiares y camionetas listas para transferir en el día. Los clientes ya no venían solo por un auto, venían a buscar respaldo y tranquilidad.',
    imagen: '/frente-2015.jpg',
    selloNumero: '15',
    selloTexto: 'ALVEAR 1580',
    rotacion: '-1deg'
  },
  {
    año: 'EXPANSIÓN',
    etiqueta: 'VOLUMEN Y FLOTAS',
    titulo: 'Entregas por flotas: La fuerza de Hilux',
    relato: 'Llegaron los desafíos de escala: proveer flotas corporativas completas, unidades 0 KM llave en mano para el sector agroindustrial y logística pesada. Tres Hilux rojas listas para salir en simultáneo simbolizaron la madurez operativa de la concesionaria.',
    imagen: '/flota-hilux.jpg',
    selloNumero: 'FLOTA',
    selloTexto: 'DESPACHO 0KM',
    rotacion: '1.2deg'
  },
  {
    año: '2019',
    etiqueta: 'MODERNIZACIÓN',
    titulo: 'Renovación de instalaciones y salón',
    relato: 'Ampliamos el salón cubierto, modernizamos la marquesina corporativa e incorporamos tecnologías de tasación y seguimiento. Cogno Automotores ya unía el prestigio de tres décadas con el dinamismo y confort que exigen las nuevas generaciones.',
    imagen: '/frente-2019.png',
    selloNumero: '19',
    selloTexto: 'INFRAESTRUCTURA',
    rotacion: '-1.5deg'
  },
  {
    año: 'PRESENTE',
    etiqueta: 'HOY',
    titulo: 'Más de 35 años de confianza viva en Río Cuarto',
    relato: 'Salón modelo sobre Marcelo T. de Alvear 1580, inventario digital en tiempo real conectado al taller y garantía extendida propia de 6 meses. Seguimos siendo la misma empresa familiar del primer día, atendida por sus propios dueños con la seriedad de siempre.',
    imagen: '/frente-2026.jpg.jpg',
    selloNumero: '35+',
    selloTexto: 'GARANTÍA TOTAL',
    rotacion: '1deg'
  }
];

export default function QuienesSomos() {
  return (
    <div style={{ backgroundColor: '#0B0C0E', minHeight: '100vh', color: '#ffffff', paddingBottom: '90px' }}>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=Special+Elite&display=swap');

        .font-typewriter {
          font-family: 'Special Elite', 'Courier Prime', monospace !important;
        }

        .snap-scroll-album {
          scroll-snap-type: y mandatory;
          overflow-y: auto;
          height: 100vh;
          scroll-behavior: smooth;
        }

        .snap-slide {
          scroll-snap-align: center;
          scroll-snap-stop: always;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          box-sizing: border-box;
          background-color: #0B0C0E;
        }

        /* SOPORTE INTEGRADO: PASPARTÚ FOTO + ESTAMPILLA */
        .story-unified-frame {
          max-width: 1280px;
          width: 100%;
          background-color: #141518;
          border: 1px solid #27272a;
          border-radius: 24px;
          padding: 16px;
          display: grid;
          grid-template-columns: 1.35fr 1fr;
          gap: 24px;
          align-items: stretch;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.85);
          position: relative;
        }

        .photo-canvas-clean {
          width: 100%;
          height: 72vh;
          min-height: 420px;
          border-radius: 18px;
          overflow: hidden;
          background-color: #070709;
          border: 1px solid #27272a;
          position: relative;
        }

        .photo-canvas-clean img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ESTAMPILLA ACOPLADA */
        .vintage-stamp-docked {
          background: #eadecc;
          background-image: 
            radial-gradient(#d6c4a8 10%, transparent 11%),
            linear-gradient(135deg, #f7f3ec 0%, #d8c8b4 100%);
          background-size: 8px 8px, 100% 100%;
          border: 1px solid #baa891;
          box-shadow: 0 14px 32px rgba(0, 0, 0, 0.6), inset 0 0 14px rgba(160, 130, 95, 0.35);
          border-radius: 6px;
          outline: 6px dotted #eadecc;
          outline-offset: -3px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          color: #2b2219;
          transition: transform 0.3s ease;
        }

        .postmark-seal-compact {
          position: absolute;
          top: -14px;
          right: -14px;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          border: 2px dashed rgba(237, 28, 36, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 0.58rem;
          font-weight: 800;
          color: #ED1C24;
          transform: rotate(18deg);
          pointer-events: none;
          background: rgba(234, 222, 204, 0.95);
          line-height: 1.1;
          letter-spacing: 0.5px;
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

        /* CELULARES */
        @media (max-width: 900px) {
          .snap-slide {
            height: auto !important;
            padding: 20px 16px !important;
          }
          .story-unified-frame {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
            padding: 12px !important;
          }
          .photo-canvas-clean {
            height: 260px !important;
            min-height: auto !important;
          }
          .vintage-stamp-docked {
            padding: 20px !important;
            transform: none !important;
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
      <section style={{ padding: '40px 20px 25px 20px', textAlign: 'center', maxWidth: '980px', margin: '0 auto' }}>
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
            Un solo giro del mouse pasa directamente al siguiente recuerdo. Las postales y sellos se anclan en el centro exacto:
          </p>
        </div>
      </section>

      {/* 2. ÁLBUM SCROLL SNAP CON PASPARTÚ INTEGRADO */}
      <div className="snap-scroll-album">
        {capitulosHistoria.map((cap, index) => (
          <section key={index} className="snap-slide">
            <div className="story-unified-frame">
              
              {/* COLUMNA IZQUIERDA: FOTO DESPEJADA DENTRO DEL MARCO */}
              <div className="photo-canvas-clean">
                <img src={cap.imagen} alt={cap.titulo} />
                <div style={{ position: 'absolute', bottom: '12px', left: '12px', backgroundColor: 'rgba(11, 12, 14, 0.85)', backdropFilter: 'blur(8px)', border: '1px solid #27272a', padding: '5px 12px', borderRadius: '16px', fontSize: '0.74rem', color: '#ffffff', fontWeight: 600 }}>
                  📷 Archivo Cogno Automotores
                </div>
              </div>

              {/* COLUMNA DERECHA: ESTAMPILLA ACOPLADA */}
              <div 
                className="vintage-stamp-docked font-typewriter"
                style={{ transform: `rotate(${cap.rotacion})` }}
              >
                <div className="postmark-seal-compact">
                  COGNO<br/>{cap.selloNumero}
                </div>

                <div>
                  <div style={{ borderBottom: '1px dashed #baa891', paddingBottom: '8px', marginBottom: '12px' }}>
                    <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#991b1b', lineHeight: 1 }}>
                      {cap.año}
                    </div>
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '1.2px', color: '#574838', marginTop: '4px', fontWeight: 700 }}>
                      {cap.etiqueta} • {cap.selloTexto}
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.18rem', fontWeight: 700, color: '#1a1612', margin: '0 0 10px 0', lineHeight: 1.3 }}>
                    {cap.titulo}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: '#2b2219', lineHeight: 1.55, margin: 0 }}>
                    {cap.relato}
                  </p>
                </div>

                <div style={{ marginTop: '14px', paddingTop: '8px', borderTop: '1px dashed #baa891', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.7rem', color: '#7a654f' }}>
                  <span>EXPEDICIÓN RÍO CUARTO</span>
                  <span>SERIE 1989-2026</span>
                </div>
              </div>

            </div>
          </section>
        ))}
      </div>

      {/* 3. PROPÓSITO & COMPROMISO */}
      <section style={{ maxWidth: '1280px', margin: '60px auto 0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          
          <div style={{ position: 'relative', minHeight: '260px', borderRadius: '20px', overflow: 'hidden', border: '1px solid #27272a', padding: '28px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', backgroundColor: '#141518' }}>
            <img src="/calidad-usados.jpg.webp" alt="Propósito Cogno Automotores" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,12,14,0.3) 0%, rgba(11,12,14,0.85) 45%, rgba(11,12,14,0.98) 100%)', zIndex: 2 }}></div>
            <div style={{ position: 'relative', zIndex: 3 }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#ED1C24', letterSpacing: '1.5px', textTransform: 'uppercase' }}>NUESTRO COMPROMISO</span>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 600, margin: '4px 0 8px 0', color: '#ffffff' }}>Seguridad, respaldo y tranquilidad</h3>
              <p style={{ fontSize: '0.92rem', color: '#ffffff', lineHeight: 1.55, margin: 0 }}>
                Cada vehículo que comercializamos atraviesa un peritaje mecánico riguroso y cuenta con garantía real propia de 6 meses para que tomes la mejor decisión de inversión.
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
                  Hablar por WhatsApp[cite: 3, 4]
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
