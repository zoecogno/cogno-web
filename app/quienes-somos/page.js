'use client';

const values = [
  {
    title: 'Honestidad y Transparencia',
    desc: 'Claridad absoluta en el estado de cada vehículo, precios y condiciones comerciales desde el primer contacto.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m11 17 2 2a1 1 0 0 0 1.42 0l6.58-6.59a1 1 0 0 0 0-1.41l-2.58-2.59a1 1 0 0 0-1.42 0L15 10.41" />
        <path d="m18 13-1.5-1.5" />
        <path d="M14 6.5 12.5 5" />
        <path d="M2 13v7a2 2 0 0 0 2 2h7l9-9-4.5-4.5z" />
        <path d="M6 18h.01" />
      </svg>
    ),
  },
  {
    title: 'Confianza y Cercanía',
    desc: 'Trato personalizado y humano. Generaciones de clientes nos siguen eligiendo para renovar su unidad.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Responsabilidad',
    desc: 'Asumimos con seriedad cada compromiso, cumpliendo con lo prometido en tiempo y forma.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: 'Compromiso Post Venta',
    desc: 'Sostenemos un estándar de respuesta ágil y eficiente para cualquier necesidad posterior a la operación.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

export default function QuienesSomos() {
  return (
    <div style={{ backgroundColor: '#0B0C0E', minHeight: '100vh', color: '#ffffff', paddingBottom: '100px' }}>
      
      {/* ESTILOS INTERACTIVOS & RESPONSIVE */}
      <style>{`
        .values-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 26px;
        }
        @media (max-width: 860px) {
          .values-grid {
            grid-template-columns: 1fr;
          }
        }
        .value-card {
          background-color: #141518;
          border: 1px solid #27272a;
          border-radius: 20px;
          padding: 34px 28px;
          display: flex;
          gap: 22px;
          align-items: flex-start;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .value-card:hover {
          transform: translateY(-5px);
          border-color: rgba(237, 28, 36, 0.4);
          box-shadow: 0 14px 30px rgba(0,0,0,0.5);
        }
        .vision-card {
          position: relative;
          min-height: 280px;
          border-radius: 22px;
          overflow: hidden;
          border: 1px solid #27272a;
          padding: 38px 32px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          transition: transform 0.3s ease, border-color 0.3s ease;
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
          transform: translateY(-4px);
        }
        .vision-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(11,12,14,0.4) 0%, rgba(11,12,14,0.85) 45%, rgba(11,12,14,0.98) 100%);
          z-index: 2;
        }
        .vision-content {
          position: relative;
          z-index: 3;
        }
        .salon-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 32px;
          align-items: center;
        }
        @media (max-width: 960px) {
          .salon-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* 1. HERO INSTITUCIONAL */}
      <section style={{ padding: '50px 24px 40px 24px', textAlign: 'center', maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'rgba(237, 28, 36, 0.1)', border: '1px solid rgba(237, 28, 36, 0.3)', color: '#ED1C24', padding: '6px 20px', borderRadius: '30px', fontSize: '0.86rem', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '20px' }}>
          TRAYECTORIA Y COMPROMISO
        </div>

        <h1 style={{ fontSize: '3.4rem', fontWeight: 700, margin: '0 0 24px 0', letterSpacing: '-0.8px', lineHeight: 1.15 }}>
          ¿Quiénes <span style={{ color: '#ED1C24' }}>somos?</span>
        </h1>

        {/* PÁRRAFOS PRINCIPALES SEPARADOS EN 2 BLOQUES */}
        <div style={{ maxWidth: '960px', margin: '0 auto 40px auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p style={{ fontSize: '1.2rem', color: '#f4f4f5', lineHeight: 1.7, margin: 0, fontWeight: 400 }}>
            Somos <strong style={{ color: '#ffffff', fontWeight: 600 }}>Cogno Automotores S.A.</strong>, una empresa familiar con más de 35 años de trayectoria en el sector automotor. Nos dedicamos a la venta de vehículos nuevos y usados, con un amplio stock y una destacada variedad de pick-ups.
          </p>
          <p style={{ fontSize: '1.14rem', color: '#d4d4d8', lineHeight: 1.7, margin: 0, fontWeight: 300 }}>
            <strong style={{ color: '#ffffff', fontWeight: 600 }}>Nuestra historia nos respalda</strong>, y seguimos trabajando cada día para ofrecer un servicio responsable, cercano y a la altura de las expectativas de quienes nos eligen.
          </p>
        </div>

        {/* FOTO COMPLETA PROPORCIONAL (SIN RECORTES) */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', borderRadius: '24px', overflow: 'hidden', border: '1px solid #27272a', backgroundColor: '#070709', boxShadow: '0 24px 50px rgba(0,0,0,0.7)' }}>
          <img 
            src="/frente-2026.jpg.jpg" 
            onError={(e) => { e.currentTarget.src = '/local-2026.jpg.webp'; }}
            alt="Salón Cogno Automotores" 
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Párrafos a lo largo continuos y centrados */}
        <div style={{ maxWidth: '960px', margin: '45px auto 0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '22px' }}>
          <p style={{ fontSize: '1.12rem', color: '#d4d4d8', lineHeight: 1.8, margin: 0, fontWeight: 300 }}>
            A lo largo de los años, nos hemos consolidado como un referente en el mercado local, elegidos por generaciones de clientes que valoran nuestro compromiso, la atención personalizada y la confianza construida en cada paso.
          </p>

          <p style={{ fontSize: '1.12rem', color: '#d4d4d8', lineHeight: 1.8, margin: 0, fontWeight: 300 }}>
            Todas nuestras unidades usadas cuentan con garantía propia, como parte de nuestro compromiso con la calidad, la seriedad y la transparencia.
          </p>
        </div>
      </section>

      {/* 2. PROPÓSITO & VISIÓN */}
      <section style={{ maxWidth: '1440px', margin: '70px auto 0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '26px' }}>
          
          <div className="vision-card">
            <img src="/calidad-usados.jpg.webp" alt="Propósito" />
            <div className="vision-overlay"></div>
            <div className="vision-content">
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#ED1C24', letterSpacing: '1.5px', textTransform: 'uppercase' }}>NUESTRO PROPÓSITO</span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 600, margin: '8px 0 12px 0', color: '#ffffff' }}>Seguridad, respaldo y tranquilidad</h3>
              <p style={{ fontSize: '1.02rem', color: '#d4d4d8', lineHeight: 1.6, margin: 0, fontWeight: 300 }}>
                Brindar una experiencia de compra transparente y sólida, ofreciendo vehículos nuevos y usados seleccionados con garantía real para que cada familia y cliente tome la mejor decisión comercial.
              </p>
            </div>
          </div>

          <div className="vision-card">
            <img src="/premios-trayectoria.jpg.webp" alt="Visión" />
            <div className="vision-overlay"></div>
            <div className="vision-content">
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#ED1C24', letterSpacing: '1.5px', textTransform: 'uppercase' }}>HACIA DÓNDE VAMOS</span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 600, margin: '8px 0 12px 0', color: '#ffffff' }}>El referente indiscutido en la región</h3>
              <p style={{ fontSize: '1.02rem', color: '#d4d4d8', lineHeight: 1.6, margin: 0, fontWeight: 300 }}>
                Consolidarnos día a día como el punto de referencia automotor en Río Cuarto y la zona, uniendo la calidez y seriedad de una empresa familiar con la agilidad y exigencia del mercado actual.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. NUESTROS VALORES (GRILLA ESTRICTA 2x2) */}
      <section style={{ maxWidth: '1440px', margin: '80px auto 0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#ED1C24', letterSpacing: '2px', textTransform: 'uppercase' }}>PILARES FUNDAMENTALES</span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 600, margin: '6px 0 0 0' }}>Nuestros Valores</h2>
        </div>

        <div className="values-grid">
          {values.map((v, i) => (
            <div key={i} className="value-card">
              <div style={{ width: '50px', height: '50px', borderRadius: '14px', backgroundColor: 'rgba(237, 28, 36, 0.12)', border: '1px solid rgba(237, 28, 36, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#ED1C24' }}>
                {v.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#ffffff', margin: '0 0 8px 0' }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: '1rem', color: '#a1a1aa', lineHeight: 1.6, margin: 0, fontWeight: 300 }}>
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SECCIÓN SALÓN + MAPA GOOGLE EMBEBIDO */}
      <section style={{ maxWidth: '1440px', margin: '90px auto 0 auto', padding: '0 24px' }}>
        <div style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '28px', padding: '48px 36px', overflow: 'hidden' }}>
          
          <div className="salon-grid">
            
            {/* Información Izquierda */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'rgba(237, 28, 36, 0.1)', border: '1px solid rgba(237, 28, 36, 0.3)', color: '#ED1C24', padding: '5px 16px', borderRadius: '30px', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
                SALÓN COMERCIAL
              </div>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 600, margin: '0 0 16px 0', lineHeight: 1.2 }}>
                Vení a conocer nuestro local
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#a1a1aa', lineHeight: 1.6, margin: '0 0 24px 0', fontWeight: 300 }}>
                Te esperamos en nuestro salón comercial para conocer el stock en persona, realizar un peritaje transparente de tu usado y asesorarte de forma personalizada.
              </p>

              <div style={{ backgroundColor: '#0B0C0E', border: '1px solid #27272a', padding: '16px 20px', borderRadius: '14px', marginBottom: '28px' }}>
                <div style={{ fontSize: '0.82rem', color: '#71717a', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '1px', marginBottom: '4px' }}>UBICACIÓN</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#ffffff' }}>Av. Marcelo T. de Alvear 1580</div>
                <div style={{ fontSize: '0.9rem', color: '#a1a1aa', marginTop: '2px', fontWeight: 300 }}>Río Cuarto, Córdoba, Argentina</div>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Av.+Marcelo+T.+de+Alvear+1580,+Rio+Cuarto,+Cordoba" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ backgroundColor: '#ED1C24', color: '#ffffff', padding: '13px 26px', borderRadius: '10px', fontWeight: 600, fontSize: '0.92rem' }}
                >
                  Cómo llegar en Google Maps →
                </a>
                <a 
                  href="https://wa.me/5493584029424?text=Hola!%20Quiero%20coordinar%20una%20visita%20al%20sal%C3%B3n" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ backgroundColor: '#1F2024', border: '1px solid #333', color: '#ffffff', padding: '13px 26px', borderRadius: '10px', fontWeight: 600, fontSize: '0.92rem' }}
                >
                  Hablar por WhatsApp
                </a>
              </div>
            </div>

            {/* Mapa Embebido Derecha */}
            <div style={{ height: '380px', borderRadius: '20px', overflow: 'hidden', border: '1px solid #27272a', backgroundColor: '#0B0C0E' }}>
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
