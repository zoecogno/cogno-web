'use client';

export default function Unidades0km() {
  const brands = [
    {
      name: 'VOLKSWAGEN',
      img: 'https://lh3.googleusercontent.com/d/15T4Gc9YjvctQg4I9i0GOX1EPcGqQkWxD',
      desc: 'Tecnología de avanzada, confort de marcha y robustez garantizada en cada modelo de la línea alemana.',
      wa: 'https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km%20de%20Volkswagen'
    },
    {
      name: 'TOYOTA',
      img: 'https://lh3.googleusercontent.com/d/1xViFbNOKlcqaUUt3cVh_DL7zWnyjII8I',
      desc: 'Líder indiscutido en durabilidad, valor de reventa superior y la máxima confiabilidad mecánica del mercado.',
      wa: 'https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km%20de%20Toyota'
    },
    {
      name: 'FORD',
      img: 'https://lh3.googleusercontent.com/d/1cyjb8yvYKlK_MDdU6Po0snsf8tFmjvFr',
      desc: 'Potencia pura, equipamiento de seguridad de última generación y toda la versatilidad de la Raza Fuerte.',
      wa: 'https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km%20de%20Ford'
    },
    {
      name: 'CHEVROLET',
      img: 'https://lh3.googleusercontent.com/d/1M2IokOL1VAn2AuWHTcFTF7JS2l4UGQE_',
      desc: 'Conectividad total OnStar, diseño moderno y motores turbo altamente eficientes para todo tipo de uso.',
      wa: 'https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km%20de%20Chevrolet'
    },
    {
      name: 'FIAT',
      img: 'https://lh3.googleusercontent.com/d/1c-H3Rpf34CQYoZ5f7lsYzk8FBcOiDPFT',
      desc: 'Excelente relación precio-calidad, bajo costo de mantenimiento y opciones urbanas y utilitarias líderes.',
      wa: 'https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km%20de%20Fiat'
    },
    {
      name: 'RENAULT',
      img: 'https://lh3.googleusercontent.com/d/1fOJKYhlmPku7EFZVnpWjrXVry0rb6kF8',
      desc: 'Espacio interior, confort y soluciones prácticas e innovadoras para la familia y el trabajo diario.',
      wa: 'https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km%20de%20Renault'
    },
    {
      name: 'PEUGEOT',
      img: 'https://lh3.googleusercontent.com/d/1DGYZ8EpfEpC9dFNP9IGywE3tUzwOqvbB',
      desc: 'Diseño europeo refinado, puesto de conducción i-Cockpit de vanguardia y altísimo nivel de confort.',
      wa: 'https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km%20de%20Peugeot'
    },
    {
      name: 'CITROËN',
      img: 'https://lh3.googleusercontent.com/d/11dP0tnxTyc6CYCBT0GzLoHuAT9lKNaO7',
      desc: 'Suspensión de máxima suavidad, gran habitabilidad y propuestas modernas para disfrutar cada viaje.',
      wa: 'https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km%20de%20Citroën'
    },
    {
      name: 'JEEP / RAM',
      img: 'https://lh3.googleusercontent.com/d/1XJkZ139uY_wRv_I1fWQQsLg_H8f0cOjW',
      desc: 'El ícono mundial de la aventura off-road con equipamiento premium y máxima capacidad todoterreno.',
      wa: 'https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km%20de%20Jeep%20o%20RAM'
    },
    {
      name: 'NISSAN',
      img: 'https://lh3.googleusercontent.com/d/1jLDKmLLwH6aghX5fZEynwksWLUHOb6YQ',
      desc: 'Ingeniería japonesa de precisión, gran confort de marcha y pick-ups reconocidas por su resistencia.',
      wa: 'https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km%20de%20Nissan'
    },
    {
      name: 'HONDA',
      img: 'https://lh3.googleusercontent.com/d/13IXEtJIxLH0w8WmmTCBk-cbOFepX50i0',
      desc: 'Mecánica de altísima confiabilidad, estándares superiores de seguridad Sensing y gran valor de reventa.',
      wa: 'https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km%20de%20Honda'
    },
    {
      name: 'BMW',
      img: 'https://lh3.googleusercontent.com/d/1-sFBOTbHqXnZDrfJEQgRWXEBkarvPKbe',
      desc: 'El auténtico placer de conducir, dinamismo deportivo y la máxima distinción premium alemana.',
      wa: 'https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km%20de%20BMW'
    },
    {
      name: 'MERCEDES-BENZ',
      img: 'https://lh3.googleusercontent.com/d/1HWuJ67rgHuLgMGZ_vaA2WwLkKYH_NJF_',
      desc: 'Elegancia atemporal, vanguardia tecnológica y el máximo estándar en lujo y utilitarios comerciales.',
      wa: 'https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km%20de%20Mercedes-Benz'
    },
    {
      name: 'AUDI',
      img: 'https://lh3.googleusercontent.com/d/1Gm8NbrL7A-W2WtpA9U7hxjCxMNY6jLZC',
      desc: 'Vanguardia a través de la tecnología, sofisticación estética y la legendaria tracción Quattro.',
      wa: 'https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km%20de%20Audi'
    },
    {
      name: 'BYD',
      img: 'https://lh3.googleusercontent.com/d/1m8QnUtKTZ7KHAIajpAoV_8gKtNz-Yrgc',
      desc: 'Líderes mundiales en innovación eléctrica e híbrida, diseño futurista y equipamiento inteligente.',
      wa: 'https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km%20de%20BYD'
    },
    {
      name: 'BAIC',
      img: 'https://lh3.googleusercontent.com/d/1m8QnUtKTZ7KHAIajpAoV_8gKtNz-Yrgc',
      desc: 'Potencia descomunal, lujo inigualable y la máxima capacidad de arrastre y carga del segmento.',
      wa: 'https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km%20de%20BAIC'
    }
  ];

  const marqueeBrands = [
    'TOYOTA', 'FORD', 'CHEVROLET', 'FIAT', 'RENAULT', 'PEUGEOT', 'CITROËN', 'JEEP', 'RAM', 'NISSAN', 'HONDA', 'BMW', 'MERCEDES-BENZ', 'AUDI', 'BYD', 'BAIC'
  ];

  return (
    <div style={{ backgroundColor: '#0B0C0E', minHeight: '100vh', color: '#ffffff', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* 1. Header / Hero 0KM */}
      <section style={{ textAlign: 'center', padding: '50px 16px 30px 16px', maxWidth: '850px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.3rem', fontWeight: 900, letterSpacing: '0.5px', margin: '0 0 16px 0', lineHeight: 1.2 }}>
          Estás a un click de tu próximo <span style={{ color: '#ED1C24' }}>0Km</span>
        </h1>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(237, 28, 36, 0.1)', border: '1px solid rgba(237, 28, 36, 0.3)', color: '#ED1C24', padding: '6px 14px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.5px', marginBottom: '18px' }}>
          📍 OPCIONES CON FINANCIACIÓN DIRECTA DE FÁBRICA
        </div>

        <p style={{ fontSize: '0.95rem', color: '#a1a1aa', lineHeight: 1.6, margin: 0 }}>
          Comercializamos las principales marcas del país. Asesoramiento comercial, financiación a medida, gestoría propia y toma de tu usado.
        </p>
      </section>

      {/* 2. Cinta Loop Infinito */}
      <div style={{ overflow: 'hidden', background: '#141518', borderTop: '1px solid #27272a', borderBottom: '1px solid #27272a', padding: '12px 0', margin: '20px 0 36px 0', whiteSpace: 'nowrap' }}>
        <div style={{ display: 'inline-flex', gap: '28px', animation: 'marquee 32s linear infinite' }}>
          {[...marqueeBrands, ...marqueeBrands].map((b, i) => (
            <span key={i} style={{ fontSize: '0.85rem', fontWeight: 700, color: '#71717a', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              {b} <span style={{ color: '#ED1C24', marginLeft: '14px' }}>•</span>
            </span>
          ))}
        </div>
      </div>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>

        {/* 3. Grilla de 16 Tarjetas de Marcas */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px', marginBottom: '36px' }}>
          {brands.map((b, i) => (
            <div key={i} style={{ backgroundColor: '#1A1B1E', border: '1px solid #2C2D31', borderRadius: '14px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 6px 18px rgba(0,0,0,0.35)' }}>
              <div style={{ height: '155px', backgroundColor: '#111215', overflow: 'hidden' }}>
                <img src={b.img} alt={`${b.name} 0KM`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: '14px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <span style={{ alignSelf: 'flex-end', backgroundColor: 'rgba(237, 28, 36, 0.15)', color: '#ED1C24', border: '1px solid rgba(237, 28, 36, 0.3)', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', padding: '3px 8px', borderRadius: '5px', marginBottom: '8px', letterSpacing: '0.5px' }}>
                  GAMA COMPLETA
                </span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', margin: '0 0 6px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {b.name}
                </h3>
                <p style={{ fontSize: '0.8rem', color: '#a1a1aa', lineHeight: 1.45, marginBottom: '14px', flexGrow: 1 }}>
                  {b.desc}
                </p>
                <a href={b.wa} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', backgroundColor: '#ED1C24', color: '#ffffff', textDecoration: 'none', padding: '9px 10px', borderRadius: '8px', fontWeight: 700, fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                  Consultar por {b.name} →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Nota Disponibilidad Total */}
        <div style={{ maxWidth: '850px', margin: '0 auto 50px auto' }}>
          <div style={{ backgroundColor: '#1A1B1E', border: '1px solid #2C2D31', borderRadius: '12px', padding: '14px 20px', fontSize: '0.9rem', color: '#d4d4d8', lineHeight: 1.45, display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <span style={{ color: '#ED1C24', fontSize: '1.1rem', lineHeight: 1 }}>ⓘ</span>
            <div><strong>Disponibilidad total:</strong> Comercializamos la <strong>gama completa</strong> de Pick-ups, autos, SUVs y utilitarios de cada una de nuestras marcas oficiales.</div>
          </div>
        </div>

        {/* 5. Por qué elegirnos para tu próximo 0Km */}
        <section style={{ marginBottom: '50px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.8rem', fontWeight: 800, marginBottom: '24px' }}>
            ¿Por qué elegirnos para tu próximo 0Km?
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            <div style={{ backgroundColor: '#1A1B1E', border: '1px solid #2C2D31', borderRadius: '14px', padding: '18px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: 'rgba(237, 28, 36, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#ED1C24', fontSize: '1.1rem' }}>🔄</div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 4px 0', color: '#ffffff' }}>Toma de Usados</h4>
                <p style={{ fontSize: '0.85rem', color: '#a1a1aa', lineHeight: 1.45, margin: 0 }}>Recibimos tu unidad usada como parte de pago con cotización transparente.</p>
              </div>
            </div>

            <div style={{ backgroundColor: '#1A1B1E', border: '1px solid #2C2D31', borderRadius: '14px', padding: '18px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: 'rgba(237, 28, 36, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#ED1C24', fontSize: '1.1rem' }}>💳</div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 4px 0', color: '#ffffff' }}>Financiación a Medida</h4>
                <p style={{ fontSize: '0.85rem', color: '#a1a1aa', lineHeight: 1.45, margin: 0 }}>Accedé a créditos prendarios y opciones en cuotas fijas en pesos adaptadas a tu presupuesto.</p>
              </div>
            </div>

            <div style={{ backgroundColor: '#1A1B1E', border: '1px solid #2C2D31', borderRadius: '14px', padding: '18px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: 'rgba(237, 28, 36, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#ED1C24', fontSize: '1.1rem' }}>📋</div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 4px 0', color: '#ffffff' }}>Gestoría Integral Propia</h4>
                <p style={{ fontSize: '0.85rem', color: '#a1a1aa', lineHeight: 1.45, margin: 0 }}>Resolvemos toda la documentación y patentamiento sin demoras para que solo te preocupes por retirar la unidad.</p>
              </div>
            </div>

            <div style={{ backgroundColor: '#1A1B1E', border: '1px solid #2C2D31', borderRadius: '14px', padding: '18px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '8px', backgroundColor: 'rgba(237, 28, 36, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#ED1C24', fontSize: '1.1rem' }}>🛡️</div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 4px 0', color: '#ffffff' }}>Garantía Oficial de Fábrica</h4>
                <p style={{ fontSize: '0.85rem', color: '#a1a1aa', lineHeight: 1.45, margin: 0 }}>Cada unidad 0km cuenta con el respaldo, garantía de fábrica y servicio de postventa oficial de cada terminal automotriz.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Banner de Cierre */}
        <section style={{ background: 'linear-gradient(135deg, #1A1B1E 0%, #111113 100%)', border: '1px solid #2C2D31', borderRadius: '16px', padding: '36px 20px', textAlign: 'center', marginBottom: '40px' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>
            ¿Tenés en mente una línea o versión puntual?
          </h3>
          <p style={{ fontSize: '0.92rem', color: '#a1a1aa', maxWidth: '650px', margin: '0 auto 24px auto', lineHeight: 1.5 }}>
            Acercate a nuestro local a charlar sobre tu próximo 0km. Te esperamos para ver las mejores opciones de financiación, tomar tu usado y armar una propuesta a tu medida.
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
            <a href="https://maps.app.goo.gl/GUH2QAShLm4LVHGU6" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ED1C24', color: '#ffffff', textDecoration: 'none', padding: '12px 24px', borderRadius: '10px', fontWeight: 700, fontSize: '0.9rem' }}>
              Vení a conocernos
            </a>
            <a href="https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#141518', color: '#ffffff', border: '1px solid #3f3f46', textDecoration: 'none', padding: '12px 24px', borderRadius: '10px', fontWeight: 600, fontSize: '0.9rem' }}>
              Hablá con nosotros
            </a>
          </div>
        </section>

      </main>

      {/* Botón Flotante de WhatsApp */}
      <a 
        href="https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km" 
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

      {/* Animación Marquesina */}
      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

    </div>
  );
}
