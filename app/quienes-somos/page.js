'use client';

const capitulosHistoria = [
  {
    año: '1989',
    etiqueta: 'EL PUNTO DE PARTIDA',
    titulo: 'La primera chata: "La Vaca Milka"',
    relato: 'Todo comenzó con esta clásica Ford F-100 color champagne. Fue la primera unidad entregada y la chispa fundacional de Cogno Automotores. Sin grandes estructuras, sino con una convicción inquebrantable: la palabra empeñada y el trato leal valen más que cualquier firma.',
    imagen: '/primera-chata.png',
    selloNumero: '01',
    selloTexto: 'ORIGEN • 1989',
    rotacion: '-1.5deg'
  },
  {
    año: 'ORÍGENES',
    etiqueta: 'PRIMER SALÓN',
    titulo: 'Echar raíces sobre Marcelo T. de Alvear',
    relato: 'Los primeros pasos en el predio propio de Río Cuarto. El trabajo artesanal de seleccionar cada vehículo, revisar la mecánica de punta a punta y atender personalmente a cada productor, transportista y vecino que confiaba en nuestras manos.',
    imagen: '/origenes-local.jpg',
    selloNumero: '90s',
    selloTexto: 'PREDIO PROPIO',
    rotacion: '2deg'
  },
  {
    año: 'AÑOS 90',
    etiqueta: 'EL SELLO DE LAS PICK-UPS',
    titulo: 'Nuestra clásica vidriera sobre la avenida',
    relato: 'Exhibiendo lo mejor de la industria nacional en nuestra marquesina, marcando el pulso de las unidades 0 KM que elegían las familias y el campo en una época dorada para los utilitarios.',
    imagen: '/vidriera f100.png',
    selloNumero: '97',
    selloTexto: 'F-100 0KM',
    rotacion: '-1.8deg'
  },
  {
    año: 'ETAPA DE EXPANSIÓN',
    etiqueta: 'INNOVACIÓN Y VARIEDAD',
    titulo: 'Apuesta a la vanguardia y el diseño',
    relato: 'Incorporando deportividad y exclusividad en cada rincón de nuestro salón, como el inolvidable Peugeot RCZ que marcó tendencia en el espacio interior de la concesionaria.',
    imagen: '/rcz 2011.png',
    selloNumero: '2011',
    selloTexto: 'VANGUARDIA',
    rotacion: '1.5deg'
  },
  {
    año: '2015',
    etiqueta: 'RITMO DE CALLE',
    titulo: 'El salón a la vista de toda la ciudad',
    relato: 'Renovamos nuestra fachada y marquesinas corporativas sobre Av. Marcelo T. de Alvear 1580 para potenciar la identidad de la marca y brindar una experiencia más moderna.',
    imagen: '/frente 2015.png',
    selloNumero: '15',
    selloTexto: 'NUEVA FACHADA',
    rotacion: '2deg'
  },
  {
    año: '2016',
    etiqueta: 'STOCK EN CRECIMIENTO • DEPÓSITO',
    titulo: 'El esfuerzo diario y la variedad',
    relato: 'Vistas internas del salón y depósito repletas de unidades preparadas, reflejando el trabajo en equipo y el compromiso constante por mantener un stock dinámico y seguro.',
    esDoble: true,
    imagen1: '/2016.jpeg',
    imagen2: '/julio 2016.jpeg',
    selloNumero: 'STK',
    selloTexto: 'DEPÓSITO',
    rotacion: '-1.5deg'
  },
  {
    año: '2020',
    etiqueta: 'CONFIANZA PLENA • FLOTAS 0KM',
    titulo: 'Entregas múltiples y respaldo de marcas',
    relato: 'Las flotas de Amarok blancas y nuestras icónicas camionetas en fila, simbolizando el respaldo de las marcas líderes y la confianza depositada por clientes de toda la provincia.',
    esDoble: true,
    imagen1: '/amaroks blancas.png',
    imagen2: '/flota-hilux.jpg', // Asegúrate de tener esta o ajustala si el nombre difiere
    selloNumero: 'FLT',
    selloTexto: 'FLOTAS 0KM',
    rotacion: '-2deg'
  },
  {
    año: 'PRESENTE',
    etiqueta: 'HOY',
    titulo: 'Más de 35 años de confianza viva en Río Cuarto',
    relato: 'Nuestra historia nos respalda, uniendo la calidez de siempre con la nueva plataforma digital para estar siempre cerca tuyo. La palabra empeñada sigue siendo nuestro motor.',
    imagen: '/frente-2026.jpg.jpg',
    selloNumero: '35+',
    selloTexto: 'FUTURO DIGITAL',
    rotacion: '1.2deg'
  }
];

export default function QuienesSomos() {
  return (
    <div style={{ backgroundColor: '#0B0C0E', minHeight: '100vh', color: '#ffffff', paddingBottom: '80px' }}>
      
      {/* ESTILOS INTERACTIVOS Y RESPONSIVOS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=Special+Elite&display=swap');

        .font-typewriter {
          font-family: 'Special Elite', 'Courier Prime', monospace !important;
        }

        .timeline-desktop-wrapper {
          position: relative;
          max-width: 1180px;
          margin: 45px auto 0 auto;
          padding: 0 20px;
          display: block;
        }

        .timeline-desktop-wrapper::before {
          content: '';
          position: absolute;
          top: 30px;
          bottom: 30px;
          left: 50%;
          width: 2px;
          background: #ED1C24;
          box-shadow: 0 0 10px rgba(237, 28, 36, 0.4);
          transform: translateX(-50%);
          z-index: 1;
        }

        .timeline-desktop-row {
          display: flex;
          align-items: center;
          position: relative;
          margin-bottom: 75px;
          width: 100%;
        }

        .timeline-desktop-row:nth-child(even) {
          flex-direction: row-reverse;
        }

        .timeline-desktop-dot {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background-color: #ED1C24;
          border: 3px solid #0B0C0E;
          box-shadow: 0 0 12px rgba(237, 28, 36, 0.75);
          z-index: 5;
        }

        .timeline-desktop-col {
          width: 46%;
          box-sizing: border-box;
          z-index: 2;
        }

        .timeline-desktop-photo {
          border-radius: 18px;
          overflow: hidden;
          background-color: #141518;
          border: 1px solid #27272a;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.65);
          height: 330px;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .timeline-desktop-photo:hover {
          transform: scale(1.02);
          border-color: rgba(237, 28, 36, 0.5);
        }

        .timeline-desktop-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Estilo para fotos dobles */
        .timeline-desktop-photo-double {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          height: 330px;
        }

        .timeline-desktop-photo-double img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 14px;
        }

        .timeline-desktop-stamp {
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

        .timeline-desktop-stamp:hover {
          transform: scale(1.02) !important;
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

        .timeline-mobile-wrapper {
          display: none;
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

        @media (max-width: 860px) {
          .section-title {
            font-size: 1.35rem !important;
          }
          .hero-qs-title {
            font-size: 1.75rem !important;
            line-height: 1.25 !important;
            margin-bottom: 8px !important;
          }
          .hero-qs-badge {
            padding: 5px 12px !important;
            font-size: 0.7rem !important;
            margin-bottom: 10px !important;
          }
          .hero-qs-desc {
            font-size: 0.88rem !important;
            line-height: 1.45 !important;
            color: #a1a1aa !important;
          }

          .timeline-desktop-wrapper {
            display: none !important;
          }

          .timeline-mobile-wrapper {
            display: block !important;
            width: 100vw !important;
            max-width: 100vw !important;
            overflow-x: scroll !important;
            overflow-y: hidden !important;
            margin-left: -20px !important;
            padding: 15px 20px 35px 20px !important;
            box-sizing: border-box !important;
            -webkit-overflow-scrolling: touch !important;
            scroll-behavior: smooth;
          }

          .timeline-mobile-wrapper::-webkit-scrollbar {
            height: 6px;
            display: block !important;
          }
          .timeline-mobile-wrapper::-webkit-scrollbar-thumb {
            background: #ED1C24;
            border-radius: 4px;
          }
          .timeline-mobile-wrapper::-webkit-scrollbar-track {
            background: #141518;
          }

          .timeline-mobile-stage {
            position: relative;
            display: inline-flex !important;
            align-items: center;
            height: 620px !important;
            padding: 0 40px 0 10px !important;
          }
          .vision-section-container {
            margin-top: 15px !important;
          }

          .timeline-mobile-axis {
            position: absolute;
            left: 0;
            width: 100%;
            top: 50%;
            height: 2px;
            background: #ED1C24;
            transform: translateY(-50%);
            z-index: 1;
          }

          .timeline-mobile-slot {
            position: relative;
            width: 490px !important;
            height: 100%;
            margin-right: 36px !important;
            flex-shrink: 0 !important;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2;
          }

          .timeline-mobile-dot {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: #ED1C24;
            border: 3px solid #0B0C0E;
            box-shadow: 0 0 12px rgba(237, 28, 36, 0.85);
            z-index: 5;
          }

          .mobile-node-top {
            position: absolute;
            bottom: calc(50% + 22px);
            left: 50%;
            transform: translateX(-50%);
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            width: 480px !important;
          }

          .mobile-node-bottom {
            position: absolute;
            top: calc(50% + 22px);
            left: 50%;
            transform: translateX(-50%);
            display: flex !important;
            flex-direction: row !important;
            align-items: center !important;
            width: 480px !important;
          }

          .mobile-h-photo {
            width: 270px !important;
            height: 240px !important;
            border-radius: 16px !important;
            overflow: hidden;
            background-color: #070709;
            border: 1px solid #27272a;
            box-shadow: 0 12px 28px rgba(0,0,0,0.7);
            flex-shrink: 0 !important;
            z-index: 2;
          }

          .mobile-h-photo img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          .mobile-h-photo-double {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 6px;
            padding: 4px;
            background: #141518;
          }

          .mobile-h-photo-double img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
          }

          .mobile-h-stamp {
            width: 220px !important;
            margin-top: 0 !important;
            margin-left: -20px !important;
            background: #eadecc;
            background-image: 
              radial-gradient(#d6c4a8 10%, transparent 11%),
              linear-gradient(135deg, #f7f3ec 0%, #d8c8b4 100%);
            background-size: 8px 8px, 100% 100%;
            border: 1px solid #baa891;
            box-shadow: 0 12px 25px rgba(0,0,0,0.7), inset 0 0 10px rgba(160, 130, 95, 0.35);
            border-radius: 4px;
            outline: 4px dotted #eadecc;
            outline-offset: -2px;
            padding: 14px 12px !important;
            color: #2b2219;
            position: relative;
            flex-shrink: 0 !important;
            z-index: 3;
          }

          .mobile-h-seal {
            position: absolute;
            top: -6px;
            right: -6px;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            border: 2px dashed rgba(237, 28, 36, 0.85);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.44rem;
            font-weight: 800;
            color: #ED1C24;
            background: rgba(234, 222, 204, 0.95);
            transform: rotate(14deg);
            line-height: 1;
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

      {/* 1. ENCABEZADO INSTITUCIONAL CONDENSADO */}
      <section style={{ padding: '24px 20px 10px 20px', textAlign: 'center', maxWidth: '980px', margin: '0 auto' }}>
        <div style={{ marginBottom: '8px' }}>
          <img 
            src="/logo.png.png" 
            alt="Cogno Automotores" 
            style={{ height: '48px', width: 'auto', margin: '0 auto', display: 'inline-block' }}
          />
        </div>

        <h1 className="hero-qs-title" style={{ fontSize: '2.35rem', fontWeight: 600, margin: '0 0 8px 0', letterSpacing: '-0.4px', color: '#ffffff', lineHeight: 1.15 }}>
          ¿Quiénes <span style={{ color: '#ED1C24' }}>somos?</span>
        </h1>

        <div className="hero-qs-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(237, 28, 36, 0.08)', border: '1px solid rgba(237, 28, 36, 0.4)', color: '#ED1C24', padding: '5px 14px', borderRadius: '30px', fontSize: '0.74rem', fontWeight: 700, letterSpacing: '0.6px', marginBottom: '12px', textTransform: 'uppercase' }}>
          <span>🛡️</span>
          <span>TRAYECTORIA Y COMPROMISO</span>
        </div>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <p className="hero-qs-desc" style={{ fontSize: '0.98rem', color: '#a1a1aa', lineHeight: 1.55, margin: 0, fontWeight: 400 }}>
            Somos <strong style={{ fontWeight: 600, color: '#e4e4e7' }}>Cogno Automotores S.A.</strong>, una empresa familiar con más de 35 años en Río Cuarto. Nos dedicamos a la venta de vehículos nuevos y usados, con un amplio stock y una destacada variedad de pick-ups.
          </p>
        </div>
      </section>

      {/* FOTO SALÓN ACTUAL */}
      <div style={{ maxWidth: '1000px', margin: '18px auto 0 auto', padding: '0 24px' }}>
        <div style={{ borderRadius: '18px', overflow: 'hidden', border: '1px solid #27272a', backgroundColor: '#070709', boxShadow: '0 16px 36px rgba(0,0,0,0.6)' }}>
          <img 
            src="/frente-2026.jpg.jpg" 
            alt="Salón Cogno Automotores" 
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </div>

      {/* 2. NUESTRA HISTORIA */}
      <section style={{ maxWidth: '1280px', margin: '45px auto 0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px', padding: '0 20px' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ED1C24', letterSpacing: '2px', textTransform: 'uppercase' }}>
            NUESTRO RECORRIDO
          </span>
          <h2 className="section-title" style={{ margin: '6px 0 8px 0', color: '#ffffff' }}>
            Nuestra Historia
          </h2>
          <p style={{ color: '#a1a1aa', fontSize: '0.92rem', maxWidth: '680px', margin: '0 auto', lineHeight: 1.5 }}>
            Las empresas no se construyen con discursos, sino con hechos, clientes que vuelven a lo largo de los años y el valor irrenunciable de la palabra empeñada. Te invitamos a recorrer los momentos que nos trajeron hasta acá.
          </p>
        </div>

        {/* --- VISTA PC (ESCRITORIO): VERTICAL EN ZIGZAG --- */}
        <div className="timeline-desktop-wrapper">
          {capitulosHistoria.map((cap, index) => (
            <div key={index} className="timeline-desktop-row">
              <div className="timeline-desktop-dot"></div>

              {/* ESTAMPILLA VINTAGE */}
              <div className="timeline-desktop-col">
                <div 
                  className="timeline-desktop-stamp font-typewriter"
                  style={{ transform: `rotate(${cap.rotacion})` }}
                >
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

              {/* FOTO DOCUMENTAL (SIMPLE O DOBLE) */}
              <div className="timeline-desktop-col">
                <div className={cap.esDoble ? "timeline-desktop-photo timeline-desktop-photo-double" : "timeline-desktop-photo"}>
                  {cap.esDoble ? (
                    <>
                      <img src={cap.imagen1} alt={`${cap.titulo} - 1`} />
                      <img src={cap.imagen2} alt={`${cap.titulo} - 2`} />
                    </>
                  ) : (
                    <img src={cap.imagen} alt={cap.titulo} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- VISTA CELULAR (MÓVIL): HORIZONTAL CON EJE AL CENTRO --- */}
        <div className="timeline-mobile-wrapper">
          <div className="timeline-mobile-stage">
            <div className="timeline-mobile-axis"></div>

            {capitulosHistoria.map((cap, index) => {
              const esArriba = index % 2 === 0;

              return (
                <div key={index} className="timeline-mobile-slot">
                  <div className="timeline-mobile-dot"></div>

                  <div className={esArriba ? 'mobile-node-top' : 'mobile-node-bottom'}>
                    <div className={cap.esDoble ? "mobile-h-photo mobile-h-photo-double" : "mobile-h-photo"}>
                      {cap.esDoble ? (
                        <>
                          <img src={cap.imagen1} alt={`${cap.titulo} - 1`} />
                          <img src={cap.imagen2} alt={`${cap.titulo} - 2`} />
                        </>
                      ) : (
                        <img src={cap.imagen} alt={cap.titulo} />
                      )}
                    </div>

                    <div 
                      className="mobile-h-stamp font-typewriter"
                      style={{ transform: `rotate(${cap.rotacion})` }}
                    >
                      <div className="mobile-h-seal">
                        COGNO<br/>{cap.selloNumero}
                      </div>

                      <div style={{ borderBottom: '1px dashed #baa891', paddingBottom: '4px', marginBottom: '6px' }}>
                        <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#991b1b', lineHeight: 1 }}>
                          {cap.año}
                        </div>
                        <div style={{ fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.8px', color: '#574838', marginTop: '2px', fontWeight: 700 }}>
                          {cap.etiqueta}
                        </div>
                      </div>

                      <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1a1612', margin: '0 0 4px 0', lineHeight: 1.25 }}>
                        {cap.titulo}
                      </h3>

                      <p style={{ fontSize: '0.74rem', color: '#2b2219', lineHeight: 1.4, margin: 0 }}>
                        {cap.relato}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div style={{ textAlign: 'center', marginBottom: '28px', padding: '0 20px', marginTop: '50px' }}>
        <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ED1C24', letterSpacing: '2px', textTransform: 'uppercase' }}>
          HORIZONTE ESTRATÉGICO
        </span>
        <h2 className="section-title" style={{ margin: '6px 0 0 0', color: '#ffffff' }}>
          Hacia Dónde Vamos
        </h2>
      </div>

      {/* 3. PROPÓSITO & VISIÓN */}
      <section className="vision-section-container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
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
                Te esperamos en nuestro salón comercial para conocer el stock en persona, realizar un peritaje transparente de tu usado y asesorarte de forma personalizada[cite: 1].
              </p>

              <div style={{ backgroundColor: '#0B0C0E', border: '1px solid #27272a', padding: '14px 18px', borderRadius: '12px', marginBottom: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#a1a1aa', textTransform: 'uppercase', fontWeight: 600 }}>UBICACIÓN</div>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: '#ffffff' }}>Av. Marcelo T. de Alvear 1580[cite: 1]</div>
                  <div style={{ fontSize: '0.86rem', color: '#d4d4d8' }}>Río Cuarto, Córdoba, Argentina[cite: 1]</div>
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
