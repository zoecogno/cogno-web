'use client';

export default function QuienesSomos() {
  return (
    <div style={{ backgroundColor: '#0B0C0E', minHeight: '100vh', color: '#ffffff', paddingBottom: '80px', overflowX: 'hidden' }}>
      
      {/* ESTILOS INTERACTIVOS Y RESPONSIVE MÓVIL */}
      <style>{`
        .timeline-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .timeline-card {
          background-color: #141518;
          border: 1px solid #27272a;
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .timeline-card:hover {
          transform: translateY(-5px);
          border-color: rgba(237, 28, 36, 0.5);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(237, 28, 36, 0.12);
        }
        .timeline-img-box {
          width: 100%;
          height: 250px;
          position: relative;
          overflow: hidden;
          background-color: #070709;
          border-bottom: 1px solid #27272a;
        }
        .timeline-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .timeline-card:hover .timeline-img-box img {
          transform: scale(1.05);
        }
        .timeline-content {
          padding: 22px 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .timeline-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: rgba(237, 28, 36, 0.12);
          border: 1px solid rgba(237, 28, 36, 0.4);
          color: #ED1C24;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          width: fit-content;
          margin-bottom: 10px;
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
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .value-card:hover {
          transform: translateY(-5px);
          border-color: rgba(237, 28, 36, 0.45);
          box-shadow: 0 14px 30px rgba(0,0,0,0.5), 0 0 20px rgba(237, 28, 36, 0.1);
        }
        .vision-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .vision-card {
          position: relative;
          min-height: 280px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #27272a;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          background-color: #141518;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .vision-card img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1;
        }
        .vision-card:hover img {
          transform: scale(1.08);
        }
        .vision-card:hover {
          border-color: #ED1C24;
          transform: translateY(-5px);
          box-shadow: 0 16px 32px rgba(0,0,0,0.6);
        }
        .vision-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(11,12,14,0.3) 0%, rgba(11,12,14,0.85) 45%, rgba(11,12,14,0.98) 100%);
          z-index: 2;
        }
        .vision-content {
          position: relative;
          z-index: 3;
        }
        .section-title {
          font-size: 1.85rem !important;
          font-weight: 600;
        }
        .salon-title {
          font-size: 1.85rem !important;
        }
        .salon-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 32px;
          align-items: center;
        }

        /* --- CELULARES (ADAPTACIÓN COMPACTA) --- */
        @media (max-width: 768px) {
          .section-title {
            font-size: 1.35rem !important;
          }
          .hero-qs-title {
            font-size: 1.75rem !important;
            line-height: 1.25 !important;
            margin-bottom: 10px !important;
          }
          .hero-qs-badge {
            padding: 6px 14px !important;
            font-size: 0.72rem !important;
            margin-bottom: 12px !important;
          }
          .hero-qs-desc {
            font-size: 0.9rem !important;
            line-height: 1.45 !important;
          }
          .timeline-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .timeline-img-box {
            height: 200px !important;
          }
          .timeline-content {
            padding: 18px 18px !important;
          }
          .timeline-content h3 {
            font-size: 1.18rem !important;
          }
          .timeline-content p {
            font-size: 0.88rem !important;
            line-height: 1.5 !important;
          }
          .vision-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .vision-card {
            min-height: auto !important;
            padding: 16px 16px !important;
            border-radius: 14px !important;
          }
          .vision-card h3 {
            font-size: 1.15rem !important;
            margin-bottom: 4px !important;
          }
          .vision-card p {
            font-size: 0.86rem !important;
            line-height: 1.45 !important;
          }
          .values-grid-2x2 {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }
          .value-card {
            padding: 14px 16px !important;
            border-radius: 14px !important;
            gap: 12px !important;
          }
          .value-icon-box {
            width: 38px !important;
            height: 38px !important;
            border-radius: 10px !important;
            flex-shrink: 0 !important;
          }
          .value-icon-box svg {
            width: 18px !important;
            height: 18px !important;
          }
          .value-card h3 {
            font-size: 1.05rem !important;
            margin-bottom: 3px !important;
          }
          .value-card p {
            font-size: 0.85rem !important;
            line-height: 1.45 !important;
          }
          .salon-card-box {
            padding: 22px 16px !important;
            border-radius: 16px !important;
          }
          .salon-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .salon-title {
            font-size: 1.45rem !important;
          }
          .salon-map-container {
            height: 220px !important;
          }
        }
      `}</style>

      {/* 1. ENCABEZADO INSTITUCIONAL */}
      <section style={{ padding: '20px 20px 10px 20px', textAlign: 'center', maxWidth: '980px', margin: '0 auto' }}>
        
        {/* Logo */}
        <div style={{ marginBottom: '10px' }}>
          <img 
            src="/logo.png.png" 
            alt="Cogno Automotores" 
            style={{ height: '52px', width: 'auto', margin: '0 auto', display: 'inline-block' }}
          />
        </div>

        {/* Título principal */}
        <h1 className="hero-qs-title" style={{ fontSize: '2.35rem', fontWeight: 600, margin: '0 0 10px 0', letterSpacing: '-0.4px', color: '#ffffff', lineHeight: 1.15 }}>
          ¿Quiénes <span style={{ color: '#ED1C24' }}>somos?</span>
        </h1>

        {/* Badge rojo */}
        <div className="hero-qs-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(237, 28, 36, 0.08)', border: '1px solid rgba(237, 28, 36, 0.4)', color: '#ED1C24', padding: '6px 16px', borderRadius: '30px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.6px', marginBottom: '14px', textTransform: 'uppercase' }}>
          <span>🛡️</span>
          <span>MÁS DE 35 AÑOS DE TRAYECTORIA Y COMPROMISO</span>
        </div>

        {/* Párrafos principales */}
        <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <p className="hero-qs-desc" style={{ fontSize: '1rem', color: '#F4F4F5', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
            Somos <strong style={{ fontWeight: 600, color: '#ffffff' }}>Cogno Automotores S.A.</strong>, una empresa familiar con más de tres décadas y media de trayectoria intachable en el sector automotor de Río Cuarto y la región.
          </p>
          <p className="hero-qs-desc" style={{ fontSize: '1rem', color: '#F4F4F5', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
            <strong style={{ fontWeight: 600, color: '#ffffff' }}>Nuestra historia nos respalda</strong>. Comenzamos paso a paso con la seriedad y el valor de la palabra como única garantía, y hoy sostenemos ese mismo compromiso en cada unidad 0 KM y usado seleccionado que entregamos.
          </p>
        </div>

      </section>

      {/* FOTO SALÓN PANORÁMICA PROPORCIONAL ACTUAL */}
      <div style={{ maxWidth: '1000px', margin: '24px auto 0 auto', padding: '0 24px' }}>
        <div style={{ borderRadius: '18px', overflow: 'hidden', border: '1px solid #27272a', backgroundColor: '#070709', boxShadow: '0 16px 36px rgba(0,0,0,0.6)' }}>
          <img 
            src="/frente-2026.jpg.jpg" 
            alt="Salón actual de Cogno Automotores sobre Av. Marcelo T. de Alvear" 
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        <div style={{ maxWidth: '820px', margin: '24px auto 0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <p style={{ fontSize: '0.98rem', color: '#E4E4E7', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
            A lo largo de los años nos consolidamos como un referente automotor indiscutido, elegidos por generaciones de familias y empresas de la zona que buscan tranquilidad jurídica y peritaje mecánico estricto.
          </p>
        </div>
      </div>

      {/* 2. NUESTRA HISTORIA EN IMÁGENES (TIMELINE VISUAL) */}
      <section style={{ maxWidth: '1280px', margin: '55px auto 0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ED1C24', letterSpacing: '2px', textTransform: 'uppercase' }}>
            NUESTRO CAMINO
          </span>
          <h2 className="section-title" style={{ margin: '6px 0 10px 0', color: '#ffffff' }}>
            Una historia construida sobre la confianza
          </h2>
          <p style={{ color: '#a1a1aa', fontSize: '0.95rem', maxWidth: '680px', margin: '0 auto', lineHeight: 1.55 }}>
            Los hitos, vehículos y momentos que forjaron la identidad de Cogno Automotores a lo largo de más de 35 años.
          </p>
        </div>

        <div className="timeline-grid">
          
          {/* HITO 1: LA VACA MILKA */}
          <div className="timeline-card">
            <div className="timeline-img-box">
              <img src="/primera-chata.png" alt="Primera unidad vendida - La Vaca Milka" />
            </div>
            <div className="timeline-content">
              <div className="timeline-badge">1989 • EL INICIO</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', margin: '0 0 8px 0' }}>
                La primera chata vendida: "La Vaca Milka"
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#d4d4d8', lineHeight: 1.55, margin: 0, fontWeight: 400 }}>
                El punto de partida de nuestra historia automotriz. Esta clásica Ford F-100 con cúpula y defensa tubular fue el primer vehículo comercializado que abrió camino a tres décadas de trabajo constante.
              </p>
            </div>
          </div>

          {/* HITO 2: EL PRIMER LOCAL Y ORÍGENES */}
          <div className="timeline-card">
            <div className="timeline-img-box">
              <img src="/origenes-local.jpg" alt="Primer salón y utilitarios en los comienzos" />
            </div>
            <div className="timeline-content">
              <div className="timeline-badge">AÑOS 90 • PRIMER SALÓN</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', margin: '0 0 8px 0' }}>
                Los primeros pasos sobre Av. Marcelo T. de Alvear
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#d4d4d8', lineHeight: 1.55, margin: 0, fontWeight: 400 }}>
                Las primeras unidades exhibidas en el predio propio. Desde los orígenes, priorizamos la palabra empeñada, la transparencia en la documentación y una atención cercana y personalizada.
              </p>
            </div>
          </div>

          {/* HITO 3: CONSOLIDACIÓN PICK-UPS 2014 */}
          <div className="timeline-card">
            <div className="timeline-img-box">
              <img src="/frente-2014.png" alt="Fachada y stock de pickups en 2014" />
            </div>
            <div className="timeline-content">
              <div className="timeline-badge">2014 • LIDERAZGO EN PICK-UPS</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', margin: '0 0 8px 0' }}>
                Referentes en utilitarios pesados y camionetas
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#d4d4d8', lineHeight: 1.55, margin: 0, fontWeight: 400 }}>
                Consolidación como el salón de referencia para el campo y la industria regional, con un amplio despliegue permanente de Toyota Hilux, Ford Ranger y Volkswagen Amarok seleccionadas.
              </p>
            </div>
          </div>

          {/* HITO 4: CRECIMIENTO Y RENOVACIÓN 2019 */}
          <div className="timeline-card">
            <div className="timeline-img-box">
              <img src="/frente-2019.png" alt="Salón ampliado en 2019" />
            </div>
            <div className="timeline-content">
              <div className="timeline-badge">2019 • EXPANSIÓN Y MODERNIZACIÓN</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', margin: '0 0 8px 0' }}>
                Renovación del salón y catálogo multimarca
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#d4d4d8', lineHeight: 1.55, margin: 0, fontWeight: 400 }}>
                Modernización integral de la marquesina e instalaciones sobre Marcelo T. de Alvear 1580, sumando nuevas líneas de 0 KM multimarca y vehículos de media y alta gama.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. PROPÓSITO & VISIÓN */}
      <section style={{ maxWidth: '1280px', margin: '55px auto 0 auto', padding: '0 24px' }}>
        <div className="vision-grid">
          
          <div className="vision-card">
            <img src="/calidad-usados.jpg.webp" alt="Propósito Cogno Automotores" />
            <div className="vision-overlay"></div>
            <div className="vision-content">
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#ED1C24', letterSpacing: '1.5px', textTransform: 'uppercase' }}>NUESTRO PROPÓSITO</span>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 600, margin: '4px 0 8px 0', color: '#ffffff' }}>Seguridad, respaldo y tranquilidad</h3>
              <p style={{ fontSize: '0.94rem', color: '#ffffff', lineHeight: 1.55, margin: 0, fontWeight: 400 }}>
                Brindar una experiencia de compra transparente y sólida, ofreciendo vehículos nuevos y usados rigurosamente peritados con garantía real propia para que cada cliente tome la mejor decisión.
              </p>
            </div>
          </div>

          <div className="vision-card">
            <img src="/premios-trayectoria.jpg.webp" alt="Hacia dónde vamos" />
            <div className="vision-overlay"></div>
            <div className="vision-content">
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#ED1C24', letterSpacing: '1.5px', textTransform: 'uppercase' }}>HACIA DÓNDE VAMOS</span>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 600, margin: '4px 0 8px 0', color: '#ffffff' }}>El referente indiscutido en la región</h3>
              <p style={{ fontSize: '0.94rem', color: '#ffffff', lineHeight: 1.55, margin: 0, fontWeight: 400 }}>
                Consolidarnos día a día como el punto de encuentro automotor de Río Cuarto y la zona, uniendo la calidez y seriedad de una empresa familiar con la agilidad y exigencia del mercado actual.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. NUESTROS VALORES */}
      <section style={{ maxWidth: '1280px', margin: '55px auto 0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ED1C24', letterSpacing: '2px', textTransform: 'uppercase' }}>PILARES FUNDAMENTALES</span>
          <h2 className="section-title" style={{ margin: '4px 0 0 0' }}>Nuestros Valores</h2>
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
              <p style={{ fontSize: '0.92rem', color: '#E4E4E7', lineHeight: 1.5, margin: 0, fontWeight: 400 }}>
                Claridad absoluta en el estado de cada vehículo, peritaje verificable, precios y condiciones comerciales desde el primer contacto.
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
              <p style={{ fontSize: '0.92rem', color: '#E4E4E7', lineHeight: 1.5, margin: 0, fontWeight: 400 }}>
                Trato humano y profesional. Más de 35 años atendiendo a varias generaciones de familias que nos vuelven a elegir.
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
              <p style={{ fontSize: '0.92rem', color: '#E4E4E7', lineHeight: 1.5, margin: 0, fontWeight: 400 }}>
                Asumimos cada compromiso con seriedad, garantizando transferencias inmediatas y unidades libres de cualquier gravamen.
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
              <p style={{ fontSize: '0.92rem', color: '#E4E4E7', lineHeight: 1.5, margin: 0, fontWeight: 400 }}>
                Sostenemos un estándar de respuesta ágil y acompañamiento permanente para cualquier consulta posterior a la entrega.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. SALÓN COMERCIAL & HORARIOS */}
      <section style={{ maxWidth: '1280px', margin: '55px auto 0 auto', padding: '0 24px' }}>
        <div className="salon-card-box" style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '22px', padding: '32px 26px' }}>
          
          <div className="salon-grid">
            <div>
              <span style={{ color: '#ED1C24', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
                SALÓN COMERCIAL
              </span>
              <h2 className="salon-title" style={{ fontWeight: 600, margin: '4px 0 10px 0', lineHeight: 1.2 }}>
                Vení a conocer nuestro local
              </h2>
              <p style={{ fontSize: '0.98rem', color: '#E4E4E7', lineHeight: 1.55, margin: '0 0 18px 0', fontWeight: 400 }}>
                Te esperamos en nuestras instalaciones para conocer el stock en persona, realizar un peritaje transparente de tu usado y asesorarte de forma personalizada.
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

            <div className="salon-map-container" style={{ height: '300px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #27272a', backgroundColor: '#0B0C0E' }}>
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
