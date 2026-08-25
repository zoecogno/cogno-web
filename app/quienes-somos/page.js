'use client';

export default function QuienesSomos() {
  const reviews = [
    {
      name: 'Silvana Olguin',
      text: 'Excelente atención. Y por sobre todo personas responsables y muy cumplidoras.',
      stars: 5
    },
    {
      name: 'Santiago Lovera',
      text: 'Hace más de quince años que soy cliente. Muy eficientes, excelentes precios y mejor atención.',
      stars: 5
    },
    {
      name: 'Lucia Noelia Bressan',
      text: 'Muy buen negocio, gente de confianza.',
      stars: 5
    },
    {
      name: 'Juan Bahl',
      text: 'Muy buena atención, agilidad en trámites y entregas, recomendable!!',
      stars: 5
    },
    {
      name: 'Franco Revelli',
      text: 'Ya 8 vehículos comprados en mi familia, siempre recibiendo el usado. Excelente atención.',
      stars: 5
    }
  ];

  const values = [
    {
      title: 'Honestidad',
      desc: 'Actuamos con transparencia y claridad en cada paso del proceso.',
      icon: '🤝'
    },
    {
      title: 'Confianza y Cercanía',
      desc: 'Mantenemos una relación directa y accesible con nuestros clientes, basada en la credibilidad y el respeto mutuo.',
      icon: '🛡️'
    },
    {
      title: 'Responsabilidad',
      desc: 'Asumimos con seriedad cada compromiso, cumpliendo con lo prometido en tiempo y forma.',
      icon: '🤝'
    },
    {
      title: 'Compromiso Post Venta',
      desc: 'Sostenemos un estándar de respuesta ágil y eficiente para cualquier necesidad posterior a la operación.',
      icon: '🚗'
    }
  ];

  return (
    <div style={{ backgroundColor: '#0B0C0E', minHeight: '100vh', color: '#ffffff', fontFamily: 'system-ui, -apple-system, sans-serif', paddingBottom: '40px' }}>

      {/* 1. Hero / Portada Institucional */}
      <section style={{ textAlign: 'center', padding: '60px 16px 40px 16px', maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.4rem', fontWeight: 900, letterSpacing: '1px', margin: '0 0 16px 0', lineHeight: 1.2 }}>
          Trayectoria y compromiso: somos <span style={{ color: '#ED1C24' }}>la propuesta confiable</span> para tu próximo vehículo
        </h1>
        <p style={{ fontSize: '1.05rem', color: '#a1a1aa', lineHeight: 1.6, maxWidth: '750px', margin: '0 auto 28px auto' }}>
          Vehículos 0KM y usados seleccionados, con destacada variedad de pick-ups. Garantía propia y atención personalizada en cada etapa de la compra.
        </p>
        <a 
          href="/usados" 
          style={{ display: 'inline-block', backgroundColor: '#ED1C24', color: '#ffffff', textDecoration: 'none', padding: '13px 28px', borderRadius: '10px', fontWeight: 700, fontSize: '0.95rem' }}
        >
          Elegí tu próximo vehículo
        </a>

        <div style={{ marginTop: '40px', borderRadius: '18px', overflow: 'hidden', border: '1px solid #2C2D31', boxShadow: '0 12px 30px rgba(0,0,0,0.5)' }}>
          <img 
            src="https://lh3.googleusercontent.com/d/15T4Gc9YjvctQg4I9i0GOX1EPcGqQkWxD" 
            alt="Fachada Cogno Automotores" 
            style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '520px', objectFit: 'cover' }}
          />
        </div>
      </section>

      {/* 2. Historia y 3 Pilares */}
      <section style={{ maxWidth: '1050px', margin: '60px auto', padding: '0 16px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.9rem', fontWeight: 800, marginBottom: '14px' }}>¿Quiénes somos?</h2>
        <p style={{ color: '#a1a1aa', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '850px', margin: '0 auto 40px auto' }}>
          Somos <strong>Cogno Automotores S.A.</strong>, una empresa familiar con más de 35 años de trayectoria en el sector automotor. A lo largo de los años, nos hemos consolidado como un referente en el mercado regional, elegidos por generaciones de clientes que valoran nuestro compromiso, la atención personalizada y la confianza construida en cada operación.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          <div style={{ backgroundColor: '#1A1B1E', border: '1px solid #2C2D31', borderRadius: '16px', overflow: 'hidden', paddingBottom: '16px' }}>
            <div style={{ height: '220px', overflow: 'hidden', backgroundColor: '#111215' }}>
              <img src="https://lh3.googleusercontent.com/d/1c-H3Rpf34CQYoZ5f7lsYzk8FBcOiDPFT" alt="Garantía propia" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h4 style={{ margin: '16px 12px 0 12px', fontSize: '1rem', fontWeight: 700 }}>Garantía propia en unidades usadas</h4>
          </div>

          <div style={{ backgroundColor: '#1A1B1E', border: '1px solid #2C2D31', borderRadius: '16px', overflow: 'hidden', paddingBottom: '16px' }}>
            <div style={{ height: '220px', overflow: 'hidden', backgroundColor: '#111215' }}>
              <img src="https://lh3.googleusercontent.com/d/1fOJKYhlmPku7EFZVnpWjrXVry0rb6kF8" alt="Atención personalizada" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h4 style={{ margin: '16px 12px 0 12px', fontSize: '1rem', fontWeight: 700 }}>Atención personalizada, de principio a fin</h4>
          </div>

          <div style={{ backgroundColor: '#1A1B1E', border: '1px solid #2C2D31', borderRadius: '16px', overflow: 'hidden', paddingBottom: '16px' }}>
            <div style={{ height: '220px', overflow: 'hidden', backgroundColor: '#111215' }}>
              <img src="https://lh3.googleusercontent.com/d/1DGYZ8EpfEpC9dFNP9IGywE3tUzwOqvbB" alt="Trayectoria" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h4 style={{ margin: '16px 12px 0 12px', fontSize: '1rem', fontWeight: 700 }}>+35 años de trayectoria en el sector</h4>
          </div>
        </div>
      </section>

      {/* 3. Nuestros Valores */}
      <section style={{ backgroundColor: '#111215', borderTop: '1px solid #1f2024', borderBottom: '1px solid #1f2024', padding: '60px 16px' }}>
        <div style={{ maxWidth: '1050px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.9rem', fontWeight: 800, textAlign: 'center', marginBottom: '36px' }}>Nuestros Valores</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {values.map((v, i) => (
              <div key={i} style={{ backgroundColor: '#1A1B1E', border: '1px solid #2C2D31', borderRadius: '14px', padding: '22px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'rgba(237,28,36,0.15)', color: '#ED1C24', padding: '10px', borderRadius: '10px', fontSize: '1.2rem', minWidth: '42px', textAlign: 'center' }}>
                  {v.icon}
                </div>
                <div>
                  <h3 style={{ margin: '0 0 6px 0', fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>{v.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#a1a1aa', lineHeight: 1.5 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Reseñas / Opiniones */}
      <section style={{ maxWidth: '1150px', margin: '60px auto', padding: '0 16px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.9rem', fontWeight: 800, marginBottom: '32px' }}>Opiniones de quienes nos eligen</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '16px', marginBottom: '36px' }}>
          {reviews.map((r, i) => (
            <div key={i} style={{ backgroundColor: '#1A1B1E', border: '1px solid #2C2D31', borderRadius: '14px', padding: '18px', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <p style={{ fontSize: '0.85rem', color: '#d4d4d8', lineHeight: 1.5, margin: '0 0 16px 0', fontStyle: 'italic' }}>
                "{r.text}"
              </p>
              <div>
                <div style={{ color: '#f59e0b', fontSize: '0.85rem', marginBottom: '4px' }}>★★★★★</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontWeight: 800, color: '#4285F4', fontSize: '0.9rem' }}>G</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff' }}>{r.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <a 
          href="https://maps.app.goo.gl/GUH2QAShLm4LVHGU6" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'inline-block', backgroundColor: '#ED1C24', color: '#ffffff', textDecoration: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 700, fontSize: '0.88rem' }}
        >
          Dejanos tu opinión
        </a>
      </section>

      {/* 5. Vení a Visitarnos & Mapa */}
      <section style={{ maxWidth: '1050px', margin: '60px auto 20px auto', padding: '0 16px' }}>
        <h2 style={{ fontSize: '1.9rem', fontWeight: 800, textAlign: 'center', marginBottom: '8px' }}>Vení a visitarnos</h2>
        <p style={{ textAlign: 'center', color: '#a1a1aa', fontSize: '0.9rem', marginBottom: '36px' }}>
          Acercate a conocer nuestro stock de unidades y recibir asesoramiento personalizado.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', alignItems: 'stretch' }}>
          {/* Datos de contacto */}
          <div style={{ backgroundColor: '#1A1B1E', border: '1px solid #2C2D31', borderRadius: '16px', padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ marginBottom: '22px' }}>
                <div style={{ fontSize: '0.85rem', color: '#ED1C24', fontWeight: 700, marginBottom: '4px' }}>📍 Ubicación</div>
                <div style={{ fontSize: '1rem', fontWeight: 700 }}>Av. Marcelo T. de Alvear 1580</div>
                <div style={{ fontSize: '0.85rem', color: '#a1a1aa' }}>Río Cuarto, Córdoba</div>
              </div>

              <div style={{ marginBottom: '22px' }}>
                <div style={{ fontSize: '0.85rem', color: '#ED1C24', fontWeight: 700, marginBottom: '4px' }}>🕒 Horarios de Atención</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Lunes a Viernes: 09:00 a 18:00 hs</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Sábados: 09:00 a 12:30 hs</div>
              </div>

              <div style={{ marginBottom: '22px' }}>
                <div style={{ fontSize: '0.85rem', color: '#ED1C24', fontWeight: 700, marginBottom: '4px' }}>📞 Contacto</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700 }}>+54 9 358 402-9424</div>
              </div>
            </div>

            <a 
              href="https://maps.app.goo.gl/GUH2QAShLm4LVHGU6" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'block', textAlign: 'center', backgroundColor: '#ED1C24', color: '#ffffff', textDecoration: 'none', padding: '12px', borderRadius: '10px', fontWeight: 700, fontSize: '0.9rem' }}
            >
              Cómo llegar en Google Maps →
            </a>
          </div>

          {/* Mapa de Google embebido */}
          <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #2C2D31', minHeight: '320px' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.6749069153093!2d-64.3392476!3d-33.1176214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cfd02dd71bdf25%3A0x6b1be2f0db38166b!2sCogno%20Automotores!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '320px', display: 'block' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* 6. Botón Flotante de WhatsApp */}
      <a 
        href="https://wa.me/5493584029424?text=Hola!%20Quiero%20hacer%20una%20consulta" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          backgroundColor: '#25D366',
          color: '#ffffff',
          borderRadius: '50%',
          width: '58px',
          height: '58px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 18px rgba(0,0,0,0.4)',
          zIndex: 999,
          textDecoration: 'none'
        }}
      >
        <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.07-1.782-.406-1.364-.565-2.281-1.927-2.35-2.018-.069-.092-.55-0.732-.55-1.396s.348-.99.472-1.127c.125-.138.27-.173.361-.173.091 0 .181.001.261.005.085.004.2-.033.312.238.117.283.402.979.437 1.05.035.071.058.154.012.246-.046.092-.07.15-.138.232-.069.081-.146.182-.208.245-.07.07-.143.146-.062.285.081.139.362.597.777.967.535.477.986.625 1.125.694.139.069.222.058.305-.035.083-.092.355-.415.45-.558.095-.143.19-.119.32-.071.13.047.83.392.973.463.143.072.238.107.273.167.035.06.035.348-.109.753z"/>
        </svg>
      </a>

    </div>
  );
}
