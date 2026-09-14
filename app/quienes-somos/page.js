'use client';

const capitulosHistoria = [
  {
    año: '1989',
    etiqueta: 'EL PUNTO DE PARTIDA',
    titulo: 'La primera chata: "La Vaca Milka"',
    relato: 'Todo comenzó con esta clásica Ford F-100 blanca equipada con cúpula y defensa tubular. Fue la primera unidad entregada y la chispa fundacional de Cogno Automotores. Sin grandes estructuras, pero con una convicción innegociable: la palabra empeñada y el trato leal valen más que cualquier firma.',
    imagen: '/primera-chata.png',
    pie: 'Ford F-100 bautizada "La Vaca Milka" — Archivo fundacional 1989',
    selloNumero: '01',
    selloTexto: 'ORIGEN • 1989'
  },
  {
    año: 'AÑOS 90',
    etiqueta: 'PRIMER SALÓN',
    titulo: 'Echar raíces sobre Marcelo T. de Alvear',
    relato: 'Los primeros pasos en el predio propio. El trabajo artesanal de seleccionar cada vehículo, revisar la mecánica de punta a punta y atender personalmente a cada productor, transportista y vecino de la región que confiaba su herramienta de trabajo en nuestras manos.',
    imagen: '/origenes-local.jpg',
    pie: 'Primeras instalaciones y utilitarios en el predio propio',
    selloNumero: '90s',
    selloTexto: 'PREDIO PROPIO'
  },
  {
    año: 'CRECIMIENTO',
    etiqueta: 'EMPRESA Y FAMILIA',
    titulo: 'Una pasión construida entre generaciones',
    relato: 'La transición hacia la comercialización de 0 KM y usados jóvenes. Detrás del mostrador, la familia siempre presente: atendiendo clientes, resolviendo trámites de gestoría y compartiendo el orgullo de ver crecer un proyecto que ya era parte de la identidad de Banda Norte.',
    imagen: '/familia-90s.jpg',
    pie: 'El corazón de una empresa familiar — Archivo histórico',
    selloNumero: 'FAM',
    selloTexto: 'MULTIMARCA'
  },
  {
    año: '2014',
    etiqueta: 'CONSOLIDACIÓN',
    titulo: 'Referentes indiscutidos en pick-ups',
    relato: 'Río Cuarto y el sur de Córdoba demandaban utilitarios pesados y confiables. Consolidamos el mayor despliegue de camionetas de la región, convirtiéndonos en el punto de encuentro natural para renovar Toyota Hilux, Ford Ranger y Volkswagen Amarok con garantía real.',
    imagen: '/frente-2014.png',
    pie: 'Exhibición de utilitarios sobre vereda Alvear en 2014',
    selloNumero: '4X4',
    selloTexto: 'LÍDERES 4X4'
  },
  {
    año: '2015',
    etiqueta: 'RITMO DE CALLE',
    titulo: 'El salón a la vista de toda la ciudad',
    relato: 'Una postal cotidiana sobre Marcelo T. de Alvear 1580. La rotación de stock no paraba: autos medianos, sedanes familiares y camionetas listas para transferir en el día. Los clientes ya no venían solo por un auto, venían a buscar respaldo y tranquilidad.',
    imagen: '/frente-2015.jpg',
    pie: 'Vista frontal desde la avenida — Archivo 2015',
    selloNumero: '15',
    selloTexto: 'ALVEAR 1580'
  },
  {
    año: 'EXPANSIÓN',
    etiqueta: 'VOLUMEN Y FLOTAS',
    titulo: 'Entregas por flotas: La fuerza de Hilux',
    relato: 'Llegaron los desafíos de escala: proveer flotas corporativas completas, unidades 0 KM llave en mano para el sector agroindustrial y logística pesada. Tres Hilux rojas listas para salir en simultáneo simbolizaron la madurez operativa de la concesionaria.',
    imagen: '/flota-hilux.jpg',
    pie: 'Flota comercial 0 KM alineada en el salón de entregas',
    selloNumero: 'FLOTA',
    selloTexto: 'DESPACHO 0KM'
  },
  {
    año: 'PRESENTE',
    etiqueta: 'HOY',
    titulo: 'Más de 35 años de confianza viva en Río Cuarto',
    relato: 'Salón modelo sobre Marcelo T. de Alvear 1580, inventario digital en tiempo real conectado al taller y garantía extendida propia de 6 meses. Seguimos siendo la misma empresa familiar del primer día, atendida por sus propios dueños con la seriedad de siempre.',
    imagen: '/frente-2026.jpg.jpg',
    pie: 'Instalaciones actuales — Marcelo T. de Alvear 1580',
    selloNumero: '35+',
    selloTexto: 'GARANTÍA TOTAL'
  }
];

export default function QuienesSomos() {
  return (
    <div style={{ backgroundColor: '#0B0C0E', minHeight: '100vh', color: '#ffffff', paddingBottom: '80px', overflowX: 'hidden' }}>
      
      {/* TIPOGRAFÍA VINTAGE & REGLAS RESPONSIVE ESTRICTAS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=Special+Elite&display=swap');

        .font-typewriter {
          font-family: 'Special Elite', 'Courier Prime', monospace !important;
        }

        /* LÍNEA DE TIEMPO VERTICAL */
        .timeline-container {
          position: relative;
          max-width: 1160px;
          margin: 60px auto 0 auto;
          padding: 0 24px;
        }

        .timeline-container::before {
          content: '';
          position: absolute;
          top: 30px;
          bottom: 30px;
          left: 50%;
          width: 2px;
          background: linear-gradient(180deg, #ED1C24 0%, #27272a 12%, #27272a 88%, #ED1C24 100%);
          transform: translateX(-50%);
          z-index: 1;
        }

        .timeline-row {
          display: flex;
          align-items: center;
          position: relative;
          margin-bottom: 80px;
          width: 100%;
        }

        .timeline-row:nth-child(even) {
          flex-direction: row-reverse;
        }

        .timeline-dot {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background-color: #ED1C24;
          border: 3px solid #0B0C0E;
          box-shadow: 0 0 12px rgba(237, 28, 36, 0.7);
          z-index: 5;
        }

        .timeline-col {
          width: 46%;
          box-sizing: border-box;
          z-index: 2;
        }

        /* FOTO HISTÓRICA */
        .timeline-photo-box {
          border-radius: 18px;
          overflow: hidden;
          background-color: #141518;
          border: 1px solid #27272a;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.6);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .timeline-photo-box:hover {
          transform: scale(1.02);
          border-color: rgba(237, 28, 36, 0.5);
        }

        .timeline-photo-box img {
          width: 100%;
          height: 310px;
          object-fit: cover;
          display: block;
        }

        .timeline-photo-pie {
          padding: 10px 16px;
          font-size: 0.76rem;
          color: #a1a1aa;
          background-color: #0d0e11;
          border-top: 1px solid #1f2024;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* ESTAMPILLA VINTAGE CON TEXTO INTEGRADO */
        .timeline-stamp-box {
          background: #eadecc;
          background-image: 
            radial-gradient(#d6c4a8 10%, transparent 11%),
            linear-gradient(135deg, #f7f3ec 0%, #d8c8b4 100%);
          background-size: 8px 8px, 100% 100%;
          border: 1px solid #baa891;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.65), inset 0 0 14px rgba(160, 130, 95, 0.35);
          border-radius: 4px;
          outline: 5px dotted #eadecc;
          outline-offset: -3px;
          padding: 24px 22px;
          box-sizing: border-box;
          position: relative;
          color: #2b2219;
          transition: transform 0.3s ease;
        }

        .timeline-stamp-box:hover {
          transform: scale(1.015);
        }

        .timeline-seal {
          position: absolute;
          top: -12px;
          right: -12px;
          width: 62px;
          height: 62px;
          border-radius: 50%;
          border: 2px dashed rgba(237, 28, 36, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 0.56rem;
          font-weight: 800;
          color: #ED1C24;
          transform: rotate(16deg);
          pointer-events: none;
          background: rgba(234, 222, 204, 0.95);
          line-height: 1.1;
          letter-spacing: 0.5px;
        }

        /* MISIÓN & VISIÓN (ESTÁNDAR VISUAL APROBADO) */
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

        /* VALORES (GRILLA 2x2 APROBADA) */
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

        /* --- CELULARES: FIX OVERFLOW Y CALIBRACIÓN COMPACTA --- */
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

          /* FIX CRÍTICO: DESACTIVA LÍNEA Y NODOS EN CELULARES */
          .timeline-container {
            padding: 0 16px !important;
            margin-top: 35px !important;
          }
          .timeline-container::before {
            display: none !important;
          }
          .timeline-dot {
            display: none !important;
          }
          .timeline-row, .timeline-row:nth-child(even) {
            flex-direction: column !important;
            margin-bottom: 45px !important;
          }
          .timeline-col {
            width: 100% !important;
            max-width: 100% !important;
          }
          .timeline-col:last-child {
            margin-top: 14px !important;
          }
          .timeline-photo-box img {
            height: 220px !important;
          }
          .timeline-stamp-box {
            padding: 18px 16px !important;
            outline-width: 3px !important;
          }
          .timeline-seal {
            width: 50px !important;
            height: 50px !important;
            font-size: 0.48rem !important;
            top: -8px !important;
            right: -8px !important;
          }

          /* RESTABLECIMIENTO DE MISIÓN Y VISIÓN COMPACTAS */
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

          /* VALORES COMPACTOS */
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
          .value-card h3 {
            font-size: 1.05rem !important;
            margin-bottom: 3px !important;
          }
          .value-card p {
            font-size: 0.85rem !important;
            line-height: 1.45 !important;
          }

          /* SALÓN COMERCIAL */
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

        <div className="hero-qs-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(237, 28, 36, 0.08)', border: '1px solid rgba(237, 28, 36, 0.4)', color: '#ED1C24', padding: '6px 16px', borderRadius: '30px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.6px', marginBottom: '14px', textTransform: 'uppercase' }}>
          <span>🛡️</span>
          <span>TRAYECTORIA Y COMPROMISO</span>
        </div>

        <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <p className="hero-qs-desc" style={{ fontSize: '1rem', color: '#F4F4F5', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
            Somos <strong style={{ fontWeight: 600, color: '#ffffff' }}>Cogno Automotores S.A.</strong>, una empresa familiar con más de 35 años de trayectoria en el sector automotor. Nos dedicamos a la venta de vehículos nuevos y usados, con un amplio stock y una destacada variedad de pick-ups.
          </p>
          <p className="hero-qs-desc" style={{ fontSize: '1rem', color: '#F4F4F5', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
            <strong style={{ fontWeight: 600, color: '#ffffff' }}>Nuestra historia nos respalda</strong>, y seguimos trabajando cada día para ofrecer un servicio responsable, cercano y a la altura de las expectativas de quienes nos eligen.
          </p>
        </div>
      </section>

      {/* FOTO SALÓN PANORÁMICA PROPORCIONAL */}
      <div style={{ maxWidth: '1000px', margin: '24px auto 0 auto', padding: '0 24px' }}>
        <div style={{ borderRadius: '18px', overflow: 'hidden', border: '1px solid #27272a', backgroundColor: '#070709', boxShadow: '0 16px 36px rgba(0,0,0,0.6)' }}>
          <img 
            src="/frente-2026.jpg.jpg" 
            alt="Salón Cogno Automotores" 
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        <div style={{ maxWidth: '820px', margin: '24px auto 0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <p style={{ fontSize: '0.98rem', color: '#E4E4E7', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
            A lo largo de los años, nos hemos consolidado como un referente en el mercado local, elegidos por generaciones de clientes que valoran nuestro compromiso, la atención personalizada y la confianza construida en cada paso.
          </p>
          <p style={{ fontSize: '0.98rem', color: '#E4E4E7', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
            Todas nuestras unidades usadas cuentan con garantía propia, como parte de nuestro compromiso con la calidad, la seriedad y la transparencia.
          </p>
        </div>
      </div>

      {/* 2. LÍNEA DE TIEMPO: FOTOS DOCUMENTALES Y ESTAMPILLAS VINTAGE */}
      <section className="timeline-container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ED1C24', letterSpacing: '2px', textTransform: 'uppercase' }}>
            NUESTRO CAMINO
          </span>
          <h2 className="section-title" style={{ margin: '6px 0 10px 0', color: '#ffffff' }}>
            Nuestra Historia
          </h2>
          <p style={{ color: '#a1a1aa', fontSize: '0.95rem', maxWidth: '720px', margin: '0 auto', lineHeight: 1.55 }}>
            Las empresas no se construyen con discursos, sino con hechos, clientes que vuelven a lo largo de los años y el valor irrenunciable de la palabra empeñada.
          </p>
        </div>

        {capitulosHistoria.map((cap, index) => (
          <div key={index} className="timeline-row">
            
            <div className="timeline-dot"></div>

            {/* COLUMNA 1: ESTAMPILLA VINTAGE CON MÁQUINA DE ESCRIBIR */}
            <div className="timeline-col">
              <div className="timeline-stamp-box font-typewriter">
                <div className="timeline-seal">
                  COGNO<br/>{cap.selloNumero}
                </div>

                <div style={{ borderBottom: '1px dashed #baa891', paddingBottom: '8px', marginBottom: '12px' }}>
                  <div style={{ fontSize: '1.65rem', fontWeight: 700, color: '#991b1b', lineHeight: 1 }}>
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

                <div style={{ marginTop: '14px', paddingTop: '8px', borderTop: '1px dashed #baa891', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.7rem', color: '#7a654f' }}>
                  <span>EXPEDICIÓN RÍO CUARTO</span>
                  <span>SERIE 1989-2026</span>
                </div>
              </div>
            </div>

            {/* COLUMNA 2: FOTO DOCUMENTAL */}
            <div className="timeline-col">
              <div className="timeline-photo-box">
                <img src={cap.imagen} alt={cap.titulo} />
                <div className="timeline-photo-pie">
                  <span style={{ color: '#ED1C24' }}>📷</span>
                  <span>{cap.pie}</span>
                </div>
              </div>
            </div>

          </div>
        ))}
      </section>

      {/* 3. PROPÓSITO & VISIÓN */}
      <section style={{ maxWidth: '1280px', margin: '50px auto 0 auto', padding: '0 24px' }}>
        <div className="vision-grid">
          
          <div className="vision-card">
            <img src="/calidad-usados.jpg.webp" alt="Propósito" />
            <div className="vision-overlay"></div>
            <div className="vision-content">
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#ED1C24', letterSpacing: '1.5px', textTransform: 'uppercase' }}>NUESTRO PROPÓSITO</span>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 600, margin: '4px 0 8px 0', color: '#ffffff' }}>Seguridad, respaldo y tranquilidad</h3>
              <p style={{ fontSize: '0.94rem', color: '#ffffff', lineHeight: 1.55, margin: 0, fontWeight: 400 }}>
                Brindar una experiencia de compra transparente y sólida, ofreciendo vehículos nuevos y usados seleccionados con garantía real para que cada cliente tome la mejor decisión.
              </p>
            </div>
          </div>

          <div className="vision-card">
            <img src="/premios-trayectoria.jpg.webp" alt="Visión" />
            <div className="vision-overlay"></div>
            <div className="vision-content">
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#ED1C24', letterSpacing: '1.5px', textTransform: 'uppercase' }}>HACIA DÓNDE VAMOS</span>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 600, margin: '4px 0 8px 0', color: '#ffffff' }}>El referente indiscutido en la región</h3>
              <p style={{ fontSize: '0.94rem', color: '#ffffff', lineHeight: 1.55, margin: 0, fontWeight: 400 }}>
                Consolidarnos día a día como el punto de referencia automotor en Río Cuarto y la zona, uniendo la calidez y seriedad de una empresa familiar con la agilidad y exigencia del mercado actual.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. NUESTROS VALORES */}
      <section style={{ maxWidth: '1280px', margin: '50px auto 0 auto', padding: '0 24px' }}>
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
                Claridad absoluta en el estado de cada vehículo, precios y condiciones comerciales desde el primer contacto.
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
                Trato personalizado y humano. Generaciones de clientes nos siguen eligiendo para renovar su unidad.
              </p>
            </div>
          </div>

          <div className="value-card">
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'rgba(237, 28, 36, 0.12)', border: '1px solid rgba(237, 28, 36, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#ED1C24' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ffffff', margin: '0 0 4px 0' }}>Responsabilidad</h3>
              <p style={{ fontSize: '0.92rem', color: '#E4E4E7', lineHeight: 1.5, margin: 0, fontWeight: 400 }}>
                Asumimos con seriedad cada compromiso, cumpliendo con lo prometido en tiempo y forma.
              </p>
            </div>
          </div>

          <div className="value-card">
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'rgba(237, 28, 36, 0.12)', border: '1px solid rgba(237, 28, 36, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#ED1C24' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ffffff', margin: '0 0 4px 0' }}>Compromiso Post Venta</h3>
              <p style={{ fontSize: '0.92rem', color: '#E4E4E7', lineHeight: 1.5, margin: 0, fontWeight: 400 }}>
                Sostenemos un estándar de respuesta ágil y eficiente para cualquier necesidad posterior a la operación.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. SALÓN COMERCIAL & HORARIOS */}
      <section style={{ maxWidth: '1280px', margin: '50px auto 0 auto', padding: '0 24px' }}>
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
                Te esperamos en nuestro salón comercial para conocer el stock en persona, realizar un peritaje transparente de tu usado y asesorarte de forma personalizada.
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
