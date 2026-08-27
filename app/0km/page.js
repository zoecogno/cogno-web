'use client';

const BRANDS = [
  { name: 'Toyota', logo: 'https://www.carlogos.org/car-logos/toyota-logo-2020-europe-640.png' },
  { name: 'Volkswagen', logo: 'https://www.carlogos.org/car-logos/volkswagen-logo-2019-640.png' },
  { name: 'Ford', logo: 'https://www.carlogos.org/car-logos/ford-logo-2017-640.png' },
  { name: 'Chevrolet', logo: 'https://www.carlogos.org/car-logos/chevrolet-logo-2013-640.png' },
  { name: 'Fiat', logo: 'https://www.carlogos.org/car-logos/fiat-logo-2020-640.png' },
  { name: 'Renault', logo: 'https://www.carlogos.org/car-logos/renault-logo-2021-640.png' },
  { name: 'Jeep', logo: 'https://www.carlogos.org/car-logos/jeep-logo-1993-640.png' },
  { name: 'RAM', logo: 'https://www.carlogos.org/car-logos/ram-logo-2009-640.png' },
  { name: 'Peugeot', logo: 'https://www.carlogos.org/car-logos/peugeot-logo-2021-640.png' },
  { name: 'Citroën', logo: 'https://www.carlogos.org/car-logos/citroen-logo-2022-640.png' },
  { name: 'Nissan', logo: 'https://www.carlogos.org/car-logos/nissan-logo-2020-white-640.png' },
  { name: 'Honda', logo: 'https://www.carlogos.org/car-logos/honda-logo-2000-640.png' },
];

export default function CeroKm() {
  return (
    <div style={{ backgroundColor: '#0B0C0E', minHeight: '100vh', color: '#ffffff', paddingBottom: '90px', overflowX: 'hidden' }}>
      
      {/* ESTILOS INTERACTIVOS Y RESPONSIVE */}
      <style>{`
        .hero-title-0km {
          font-size: 3.2rem;
          font-weight: 600;
          margin: 0 auto 18px auto;
          letter-spacing: -0.5px;
          color: #ffffff;
          line-height: 1.2;
          max-width: 950px;
        }
        .brands-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
          max-width: 1540px;
          margin: 0 auto;
        }
        .brand-card {
          background-color: #141518;
          border: 1px solid #27272a;
          border-radius: 18px;
          padding: 28px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .brand-card:hover {
          transform: translateY(-6px);
          border-color: #ED1C24;
          box-shadow: 0 14px 28px rgba(0,0,0,0.5), 0 0 15px rgba(237, 28, 36, 0.15);
        }
        .brand-logo-img {
          height: 52px;
          width: auto;
          object-fit: contain;
          margin-bottom: 14px;
          filter: brightness(0) invert(1);
          opacity: 0.85;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .brand-card:hover .brand-logo-img {
          transform: scale(1.1);
          opacity: 1;
        }
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1540px;
          margin: 0 auto;
        }
        .benefit-card {
          background-color: #141518;
          border: 1px solid #27272a;
          border-radius: 20px;
          padding: 32px 24px;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .benefit-card:hover {
          transform: translateY(-4px);
          border-color: #ED1C24;
        }
        .salon-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 36px;
          align-items: center;
        }

        /* CELULARES (ADAPTACIÓN COMPACTA) */
        @media (max-width: 768px) {
          .hero-title-0km {
            font-size: 1.95rem !important;
            line-height: 1.25 !important;
            margin-bottom: 12px !important;
          }
          .hero-desc-0km {
            font-size: 0.94rem !important;
            line-height: 1.5 !important;
          }
          .hero-badge-0km {
            padding: 6px 16px !important;
            font-size: 0.75rem !important;
            margin-bottom: 14px !important;
          }
          .brands-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
          .brand-card {
            padding: 20px 12px !important;
            border-radius: 14px !important;
          }
          .brand-logo-img {
            height: 38px !important;
            margin-bottom: 8px !important;
          }
          .benefits-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .benefit-card {
            padding: 22px 18px !important;
            border-radius: 16px !important;
          }
          .salon-card-box {
            padding: 24px 16px !important;
            border-radius: 16px !important;
          }
          .salon-grid {
            grid-template-columns: 1fr !important;
            gap: 18px !important;
          }
          .salon-map-container {
            height: 220px !important;
          }
        }
      `}</style>

      {/* 1. HERO INSTITUCIONAL */}
      <section style={{ padding: '35px 20px 15px 20px', textAlign: 'center', maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Logo */}
        <div style={{ marginBottom: '14px' }}>
          <img 
            src="/logo.png.png" 
            alt="Cogno Automotores" 
            style={{ height: '70px', width: 'auto', margin: '0 auto', display: 'inline-block' }} 
          />
        </div>

        {/* Título principal */}
        <h1 className="hero-title-0km">
          Estás a un click de tu próximo <span style={{ color: '#ED1C24' }}>0KM</span>
        </h1>

        {/* Badge rojo tipo píldora */}
        <div className="hero-badge-0km" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(237, 28, 36, 0.08)', border: '1px solid rgba(237, 28, 36, 0.4)', color: '#ED1C24', padding: '9px 22px', borderRadius: '30px', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.8px', marginBottom: '20px', textTransform: 'uppercase' }}>
          <span>🛡️</span>
          <span>OPCIONES CON FINANCIACIÓN DIRECTA DE FÁBRICA</span>
        </div>

        {/* Bajada */}
        <p className="hero-desc-0km" style={{ color: '#F4F4F5', fontSize: '1.15rem', maxWidth: '880px', margin: '0 auto 14px auto', lineHeight: 1.7, fontWeight: 400 }}>
          Comercializamos la gama completa de las principales marcas del país. Asesoramiento comercial personalizado, financiación a medida, gestoría propia y toma de tu vehículo usado.
        </p>

        <p style={{ color: '#d4d4d8', fontSize: '1.02rem', margin: '0 auto 30px auto', fontWeight: 400 }}>
          Hacé click en la marca de tu interés para consultar unidades disponibles y cotización:
        </p>
      </section>

      {/* 2. GRILLA DE MARCAS 0KM */}
      <section style={{ maxWidth: '1540px', margin: '0 auto', padding: '0 24px' }}>
        <div className="brands-grid">
          {BRANDS.map((brand, i) => (
            <a 
              key={i} 
              href={`https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20la%20gama%20de%200KM%20${brand.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-card"
            >
              <img src={brand.logo} alt={brand.name} className="brand-logo-img" />
              <span style={{ fontSize: '1.05rem', fontWeight: 600, color: '#ffffff', letterSpacing: '0.5px' }}>{brand.name}</span>
              <span style={{ fontSize: '0.78rem', color: '#ED1C24', fontWeight: 600, marginTop: '4px' }}>Consultar modelos →</span>
            </a>
          ))}
        </div>
      </section>

      {/* 3. BENEFICIOS Y CONDICIONES COMERCIALES */}
      <section style={{ maxWidth: '1540px', margin: '80px auto 0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ED1C24', letterSpacing: '2px', textTransform: 'uppercase' }}>VENTAJAS EXCLUSIVAS</span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 600, margin: '6px 0 0 0' }}>¿Por qué elegir tu 0KM con nosotros?</h2>
        </div>

        <div className="benefits-grid">
          
          <div className="benefit-card">
            <div style={{ width: '46px', height: '46px', borderRadius: '12px', backgroundColor: 'rgba(237, 28, 36, 0.12)', border: '1px solid rgba(237, 28, 36, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ED1C24', marginBottom: '18px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0 0 8px 0', color: '#ffffff' }}>Financiación Directa</h3>
            <p style={{ fontSize: '1rem', color: '#E4E4E7', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
              Accedé a tasas preferenciales de fábrica y créditos prendarios en cuotas fijas en pesos adaptadas a tu posibilidad.
            </p>
          </div>

          <div className="benefit-card">
            <div style={{ width: '46px', height: '46px', borderRadius: '12px', backgroundColor: 'rgba(237, 28, 36, 0.12)', border: '1px solid rgba(237, 28, 36, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ED1C24', marginBottom: '18px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 3h5v5" />
                <path d="M4 20L21 3" />
                <path d="M21 16v5h-5" />
                <path d="M15 15l6 6" />
                <path d="M4 4l5 5" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0 0 8px 0', color: '#ffffff' }}>Tomamos tu Usado</h3>
            <p style={{ fontSize: '1rem', color: '#E4E4E7', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
              Peritaje profesional y cotización transparente para recibir tu vehículo actual como parte de pago de la nueva unidad.
            </p>
          </div>

          <div className="benefit-card">
            <div style={{ width: '46px', height: '46px', borderRadius: '12px', backgroundColor: 'rgba(237, 28, 36, 0.12)', border: '1px solid rgba(237, 28, 36, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ED1C24', marginBottom: '18px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0 0 8px 0', color: '#ffffff' }}>Gestoría Integral</h3>
            <p style={{ fontSize: '1rem', color: '#E4E4E7', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
              Nos encargamos de todo el patentamiento, inscripción inicial y documentación para que retires tu 0KM listo para rodar.
            </p>
          </div>

        </div>
      </section>

      {/* 4. SALÓN COMERCIAL & HORARIOS */}
      <section style={{ maxWidth: '1540px', margin: '80px auto 0 auto', padding: '0 24px' }}>
        <div className="salon-card-box" style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '26px', padding: '38px 30px' }}>
          
          <div className="salon-grid">
            <div>
              <span style={{ color: '#ED1C24', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
                SALÓN COMERCIAL
              </span>
              <h2 className="salon-title" style={{ fontSize: '2.2rem', fontWeight: 600, margin: '6px 0 12px 0', lineHeight: 1.2 }}>
                Vení a conocer nuestro local
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#E4E4E7', lineHeight: 1.6, margin: '0 0 20px 0', fontWeight: 400 }}>
                Te esperamos en nuestro salón comercial para asesorarte sobre plazos de entrega, versiones disponibles y cotizaciones de 0KM.
              </p>

              <div style={{ backgroundColor: '#0B0C0E', border: '1px solid #27272a', padding: '16px 20px', borderRadius: '14px', marginBottom: '22px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#a1a1aa', textTransform: 'uppercase', fontWeight: 600 }}>UBICACIÓN</div>
                  <div style={{ fontSize: '1.08rem', fontWeight: 600, color: '#ffffff' }}>Av. Marcelo T. de Alvear 1580</div>
                  <div style={{ fontSize: '0.9rem', color: '#d4d4d8' }}>Río Cuarto, Córdoba, Argentina</div>
                </div>

                <div style={{ borderTop: '1px solid #1F2024', paddingTop: '10px' }}>
                  <div style={{ fontSize: '0.75rem', color: '#a1a1aa', textTransform: 'uppercase', fontWeight: 600 }}>HORARIOS DE ATENCIÓN</div>
                  <div style={{ fontSize: '0.96rem', color: '#ffffff', fontWeight: 500, marginTop: '2px' }}>Lunes a Viernes: 09:00 a 18:00 hs</div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '12px' }}>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Av.+Marcelo+T.+de+Alvear+1580,+Rio+Cuarto,+Cordoba" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ backgroundColor: '#ED1C24', color: '#ffffff', padding: '13px 24px', borderRadius: '10px', fontWeight: 700, fontSize: '0.92rem', textDecoration: 'none', textAlign: 'center' }}
                >
                  Cómo llegar en Maps →
                </a>
                <a 
                  href="https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20unidades%200KM" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ backgroundColor: '#1F2024', border: '1px solid #333', color: '#ffffff', padding: '13px 24px', borderRadius: '10px', fontWeight: 600, fontSize: '0.92rem', textDecoration: 'none', textAlign: 'center' }}
                >
                  Hablar por WhatsApp
                </a>
              </div>
            </div>

            <div className="salon-map-container" style={{ height: '340px', borderRadius: '18px', overflow: 'hidden', border: '1px solid #27272a', backgroundColor: '#0B0C0E' }}>
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
