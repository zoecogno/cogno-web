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
      
      {/* ESTILOS INTERACTIVOS */}
      <style>{`
        .value-card {
          background-color: #141518;
          border: 1px solid #27272a;
          border-radius: 20px;
          padding: 32px 28px;
          display: flex;
          gap: 20px;
          align-items: flex-start;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .value-card:hover {
          transform: translateY(-5px);
          border-color: rgba(237, 28, 36, 0.4);
          box-shadow: 0 12px 28px rgba(0,0,0,0.5);
        }
        .purpose-box {
          background-color: #141518;
          border: 1px solid #27272a;
          border-radius: 20px;
          padding: 36px 30px;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .purpose-box:hover {
          border-color: #3f3f46;
          transform: translateY(-3px);
        }
      `}</style>

      {/* 1. HERO INSTITUCIONAL */}
      <section style={{ padding: '50px 24px 40px 24px', textAlign: 'center', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'rgba(237, 28, 36, 0.1)', border: '1px solid rgba(237, 28, 36, 0.3)', color: '#ED1C24', padding: '6px 20px', borderRadius: '30px', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '18px' }}>
          TRAYECTORIA Y COMPROMISO
        </div>

        <h1 style={{ fontSize: '3.2rem', fontWeight: 700, margin: '0 0 18px 0', letterSpacing: '-0.8px', lineHeight: 1.15 }}>
          ¿Quiénes <span style={{ color: '#ED1C24' }}>somos?</span>
        </h1>

        <p style={{ fontSize: '1.12rem', color: '#a1a1aa', maxWidth: '820px', margin: '0 auto 40px auto', lineHeight: 1.7, fontWeight: 300 }}>
          Somos <strong style={{ color: '#ffffff', fontWeight: 600 }}>Cogno Automotores S.A.</strong>, una empresa familiar con más de 35 años de trayectoria en el sector automotor. A lo largo de los años nos consolidamos como un referente en el mercado regional, elegidos por generaciones de clientes que valoran nuestro compromiso, la atención personalizada y la confianza construida en cada operación.
        </p>

        {/* FOTO DESTACADA DEL SALÓN */}
        <div style={{ maxWidth: '1100px', margin: '0 auto', height: '440px', borderRadius: '24px', overflow: 'hidden', border: '1px solid #27272a', backgroundColor: '#070709', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
          <img 
            src="/local-frente.jpg.webp" 
            alt="Salón Cogno Automotores" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </section>

      {/* 2. PROPÓSITO & VISIÓN */}
      <section style={{ maxWidth: '1400px', margin: '70px auto 0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '26px' }}>
          
          <div className="purpose-box">
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#ED1C24', letterSpacing: '1.5px', textTransform: 'uppercase' }}>NUESTRO PROPÓSITO</span>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 600, margin: '8px 0 12px 0' }}>Experiencias de compra seguras y transparentes</h3>
            <p style={{ fontSize: '0.96rem', color: '#a1a1aa', lineHeight: 1.6, margin: 0, fontWeight: 300 }}>
              Brindar una propuesta comercial integral y honesta, ofreciendo vehículos 0km y usados rigurosamente seleccionados con garantía real, para que cada persona y familia tome su mejor decisión con absoluta tranquilidad.
            </p>
          </div>

          <div className="purpose-box">
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#ED1C24', letterSpacing: '1.5px', textTransform: 'uppercase' }}>HACIA DÓNDE VAMOS</span>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 600, margin: '8px 0 12px 0' }}>La propuesta de referencia en toda la región</h3>
            <p style={{ fontSize: '0.96rem', color: '#a1a1aa', lineHeight: 1.6, margin: 0, fontWeight: 300 }}>
              Consolidarnos como el punto de encuentro automotor más confiable de Río Cuarto y la zona, manteniendo los valores y la calidez de una firma familiar a la par de una gestión comercial moderna y ágil.
            </p>
          </div>

        </div>
      </section>

      {/* 3. NUESTROS VALORES (GRILLA 2x2) */}
      <section style={{ maxWidth: '1400px', margin: '80px auto 0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#ED1C24', letterSpacing: '1.5px', textTransform: 'uppercase' }}>PILAREES FUNDAMENTALES</span>
          <h2 style={{ fontSize: '2.3rem', fontWeight: 600, margin: '6px 0 0 0' }}>Nuestros Valores</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '26px' }}>
          {values.map((v, i) => (
            <div key={i} className="value-card">
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(237, 28, 36, 0.12)', border: '1px solid rgba(237, 28, 36, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#ED1C24' }}>
                {v.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#ffffff', margin: '0 0 8px 0' }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: '0.94rem', color: '#a1a1aa', lineHeight: 1.6, margin: 0, fontWeight: 300 }}>
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. VISITANOS EN NUESTRO SALÓN */}
      <section style={{ maxWidth: '1200px', margin: '90px auto 0 auto', padding: '0 24px' }}>
        <div style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '26px', padding: '50px 36px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#ED1C24', letterSpacing: '1.5px', textTransform: 'uppercase' }}>ATENCIÓN EN SALÓN</span>
          <h2 style={{ fontSize: '2.3rem', fontWeight: 600, margin: '8px 0 12px 0' }}>Vení a conocer nuestro local</h2>
          <p style={{ fontSize: '1.05rem', color: '#a1a1aa', maxWidth: '680px', margin: '0 auto 24px auto', lineHeight: 1.6, fontWeight: 300 }}>
            Te esperamos en nuestro salón comercial para conocer el stock de unidades, realizar un peritaje de tu usado y tomar un café mientras charlamos sobre tu próximo vehículo.
          </p>

          <div style={{ display: 'inline-block', backgroundColor: '#0B0C0E', border: '1px solid #27272a', padding: '12px 24px', borderRadius: '12px', marginBottom: '30px', fontSize: '0.95rem' }}>
            📍 <strong style={{ color: '#ffffff' }}>Av. Marcelo T. de Alvear 1580</strong> — Río Cuarto, Córdoba
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a 
              href="https://maps.app.goo.gl" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'inline-block', backgroundColor: '#ED1C24', color: '#ffffff', padding: '14px 32px', borderRadius: '12px', fontWeight: 600, fontSize: '0.94rem' }}
            >
              Cómo llegar con Google Maps →
            </a>
            <a 
              href="https://wa.me/5493584029424?text=Hola!%20Quiero%20coordinar%20una%20visita%20al%20sal%C3%B3n" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'inline-block', backgroundColor: '#1F2024', border: '1px solid #333', color: '#ffffff', padding: '14px 32px', borderRadius: '12px', fontWeight: 600, fontSize: '0.94rem' }}
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
