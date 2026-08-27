'use client';

const BRANDS_DATA = [
  {
    brand: 'TOYOTA',
    image: '/sw4 diamond blanca 0KM TOYOTA.jpeg',
  },
  {
    brand: 'VOLKSWAGEN',
    image: '/VW AMAROK V6 GRIS VOLCÁN.jpg',
  },
  {
    brand: 'FORD',
    image: '/RANGER LTD+ ATRÁS 0KM FORD.jpg',
  },
  {
    brand: 'CHEVROLET',
    image: '/S10 HIGH CHEVROLET.avif',
  },
  {
    brand: 'FIAT',
    image: '/FIAT TORO 0KM DUNA.jpg',
  },
  {
    brand: 'RENAULT',
    image: '/RENAULT KARDIAN 0KM.webp',
  },
  {
    brand: 'JEEP & RAM',
    image: '/jeep compass 0km.jpg',
  },
  {
    brand: 'PEUGEOT',
    image: '/PEUGEOT 0KM.avif',
  },
  {
    brand: 'CITROËN',
    image: '/CITROEN C4 0KM.png',
  },
  {
    brand: 'NISSAN',
    image: '/nissan frontier.jpg',
  },
  {
    brand: 'HONDA',
    image: '/honda wr v.jpg',
  },
  {
    brand: 'BMW',
    image: '/bmw x6 0km.webp',
  },
  {
    brand: 'MERCEDES-BENZ',
    image: '/mercedez glc.avif',
  },
  {
    brand: 'AUDI',
    image: '/audi q5.avif',
  },
  {
    brand: 'BYD',
    image: '/byd shark 0kmm.webp',
  },
  {
    brand: 'BAIC',
    image: '/BAIC BJ30.webp',
  },
];

const MARQUEE_ITEMS = [
  'TOYOTA', 'VOLKSWAGEN', 'FORD', 'CHEVROLET', 'FIAT', 'RENAULT', 
  'JEEP', 'RAM', 'PEUGEOT', 'CITROËN', 'NISSAN', 'HONDA', 
  'BMW', 'MERCEDES-BENZ', 'AUDI', 'BYD', 'BAIC'
];

export default function CeroKm() {
  return (
    <div style={{ backgroundColor: '#0B0C0E', minHeight: '100vh', color: '#ffffff', paddingBottom: '90px', overflowX: 'hidden' }}>
      
      {/* ESTILOS INTERACTIVOS, MARQUESINA Y RESPONSIVE */}
      <style>{`
        /* MARQUESINA */
        .marquee-wrapper {
          overflow: hidden;
          background-color: #070709;
          border-top: 1px solid #1f2024;
          border-bottom: 1px solid #1f2024;
          padding: 14px 0;
          white-space: nowrap;
          position: relative;
          margin-bottom: 45px;
        }
        .marquee-content {
          display: inline-flex;
          align-items: center;
          animation: marqueeScroll 28s linear infinite;
        }
        .marquee-item {
          font-size: 0.92rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: #a1a1aa;
          padding: 0 24px;
          display: inline-flex;
          align-items: center;
          gap: 24px;
        }
        .marquee-dot {
          color: #ED1C24;
          font-size: 0.75rem;
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        /* HERO & GRILLA */
        .hero-title-0km {
          font-size: 3.2rem;
          font-weight: 600;
          margin: 0 auto 18px auto;
          letter-spacing: -0.5px;
          color: #ffffff;
          line-height: 1.2;
          max-width: 950px;
        }
        .cars-grid-0km {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 28px;
          max-width: 1540px;
          margin: 0 auto;
        }
        .car-card-0km {
          background-color: #141518;
          border: 1px solid #27272a;
          border-radius: 22px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease;
          text-decoration: none;
        }
        .car-card-0km:hover {
          transform: translateY(-7px);
          border-color: rgba(237, 28, 36, 0.6);
          box-shadow: 0 16px 32px rgba(0,0,0,0.6), 0 0 20px rgba(237, 28, 36, 0.15);
        }
        .car-img-box {
          height: 240px;
          position: relative;
          background-color: #070709;
          overflow: hidden;
        }
        .car-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .car-card-0km:hover .car-img-box img {
          transform: scale(1.08);
        }
        
        /* BADGE GAMA COMPLETA */
        .badge-gama-completa {
          display: inline-flex;
          align-items: center;
          background-color: rgba(237, 28, 36, 0.14);
          border: 1px solid rgba(237, 28, 36, 0.4);
          color: #ED1C24;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.8px;
          padding: 5px 12px;
          border-radius: 8px;
          margin-bottom: 12px;
        }

        .car-body-0km {
          padding: 22px 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          justify-content: space-between;
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
          .cars-grid-0km {
            grid-template-columns: 1fr 1fr !important;
            gap: 12px !important;
          }
          .car-card-0km {
            border-radius: 14px !important;
          }
          .car-img-box {
            height: 125px !important;
          }
          .badge-gama-completa {
            font-size: 0.62rem !important;
            padding: 3px 7px !important;
            border-radius: 6px !important;
            margin-bottom: 6px !important;
          }
          .car-body-0km {
            padding: 12px 10px !important;
          }
          .car-title-brand {
            font-size: 1.02rem !important;
            margin-bottom: 8px !important;
          }
          .car-btn-text {
            font-size: 0.75rem !important;
            padding: 8px 4px !important;
            border-radius: 8px !important;
          }
          .benefits-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .benefit-card {
            padding: 22px 18px !important;
            border-radius: 16px !important;
          }
          .banner-cierre-box {
            padding: 28px 18px !important;
            border-radius: 18px !important;
          }
          .banner-cierre-title {
            font-size: 1.45rem !important;
            line-height: 1.3 !important;
            margin-bottom: 12px !important;
          }
          .banner-cierre-desc {
            font-size: 0.92rem !important;
            line-height: 1.5 !important;
            margin-bottom: 22px !important;
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

        {/* Badge rojo */}
        <div className="hero-badge-0km" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(237, 28, 36, 0.08)', border: '1px solid rgba(237, 28, 36, 0.4)', color: '#ED1C24', padding: '9px 22px', borderRadius: '30px', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.8px', marginBottom: '20px', textTransform: 'uppercase' }}>
          <span>🛡️</span>
          <span>OPCIONES CON FINANCIACIÓN DIRECTA DE FÁBRICA</span>
        </div>

        {/* Bajada */}
        <p className="hero-desc-0km" style={{ color: '#F4F4F5', fontSize: '1.15rem', maxWidth: '880px', margin: '0 auto 14px auto', lineHeight: 1.7, fontWeight: 400 }}>
          Comercializamos la gama completa de las principales marcas del país. Asesoramiento comercial personalizado, financiación a medida, gestoría propia y toma de tu vehículo usado.
        </p>

        <p style={{ color: '#d4d4d8', fontSize: '1.02rem', margin: '0 auto 28px auto', fontWeight: 400 }}>
          Elegí la marca de tu interés para consultar versiones y cotización oficial:
        </p>
      </section>

      {/* 2. MARQUESINA INFINITA DE MARCAS */}
      <div className="marquee-wrapper">
        <div className="marquee-content">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((name, i) => (
            <span key={i} className="marquee-item">
              <span>{name}</span>
              <span className="marquee-dot">●</span>
            </span>
          ))}
        </div>
      </div>

      {/* 3. CATÁLOGO DE MARCAS 0KM */}
      <section style={{ maxWidth: '1540px', margin: '0 auto', padding: '0 24px' }}>
        <div className="cars-grid-0km">
          {BRANDS_DATA.map((item, idx) => (
            <a
              key={idx}
              href={`https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km%20${encodeURIComponent(item.brand)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="car-card-0km"
            >
              <div className="car-img-box">
                <img 
                  src={item.image} 
                  alt={`${item.brand} 0km`} 
                  onError={(e) => { e.currentTarget.src = '/cero-km.png'; }}
                />
              </div>

              <div className="car-body-0km">
                <div>
                  <div className="badge-gama-completa">
                    GAMA COMPLETA
                  </div>
                  <h3 className="car-title-brand" style={{ fontSize: '1.4rem', fontWeight: 700, margin: '0 0 16px 0', color: '#ffffff', letterSpacing: '0.5px' }}>
                    {item.brand}
                  </h3>
                </div>

                <div 
                  className="car-btn-text" 
                  style={{ backgroundColor: 'rgba(237, 28, 36, 0.12)', border: '1px solid rgba(237, 28, 36, 0.35)', color: '#ffffff', textAlign: 'center', padding: '11px 14px', borderRadius: '10px', fontWeight: 600, fontSize: '0.9rem' }}
                >
                  Consultar {item.brand} →
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 4. BENEFICIOS */}
      <section style={{ maxWidth: '1540px', margin: '80px auto 0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ED1C24', letterSpacing: '2px', textTransform: 'uppercase' }}>VENTAJAS EXCLUSIVAS</span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 600, margin: '6px 0 0 0' }}>¿Por qué elegirnos para tu proximo 0KM ?</h2>
        </div>

        <div className="benefits-grid">
          
          <div className="benefit-card">
            <div style={{ width: '46px', height: '46px', borderRadius: '12px', backgroundColor: 'rgba(237, 28, 36, 0.12)', border: '1px solid rgba(237, 28, 36, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ED1C24', marginBottom: '18px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0 0 8px 0', color: '#ffffff' }}>Financiación a medida</h3>
            <p style={{ fontSize: '1rem', color: '#E4E4E7', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
              Accedé a créditos prendarios y opciones en cuotas fijas en pesos adaptadas a tu presupuesto.
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
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0 0 8px 0', color: '#ffffff' }}>Toma de usado</h3>
            <p style={{ fontSize: '1rem', color: '#E4E4E7', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
              Recibimos tu unidad usada como parte de pago con cotización transparente.
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
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '0 0 8px 0', color: '#ffffff' }}>Gestoría propia</h3>
            <p style={{ fontSize: '1rem', color: '#E4E4E7', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
              Resolvemos toda la documentación y patentamiento sin demoras para que solo te preocupes por retirar la unidad.
            </p>
          </div>

        </div>
      </section>

      {/* 5. BANNER DE CIERRE INSTITUCIONAL */}
      <section style={{ maxWidth: '1540px', margin: '80px auto 0 auto', padding: '0 24px' }}>
        <div className="banner-cierre-box" style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '24px', padding: '48px 36px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'rgba(237, 28, 36, 0.1)', border: '1px solid rgba(237, 28, 36, 0.3)', color: '#ED1C24', padding: '7px 20px', borderRadius: '30px', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
            ASESORAMIENTO INTEGRAL
          </div>
          <h2 className="banner-cierre-title" style={{ fontSize: '2.2rem', fontWeight: 600, margin: '0 0 16px 0', color: '#ffffff' }}>
            ¿Tenés en mente una línea o versión puntual?
          </h2>
          <p className="banner-cierre-desc" style={{ fontSize: '1.08rem', color: '#E4E4E7', maxWidth: '820px', margin: '0 auto 32px auto', lineHeight: 1.7, fontWeight: 400 }}>
            Acercate a nuestro local a charlar sobre tu próximo 0km. Te esperamos para ver las mejores opciones de financiación, tomar tu usado y armar una propuesta a tu medida.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Av.+Marcelo+T.+de+Alvear+1580,+Rio+Cuarto,+Cordoba" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ backgroundColor: '#ED1C24', color: '#ffffff', padding: '14px 28px', borderRadius: '10px', fontWeight: 700, fontSize: '0.94rem', textDecoration: 'none' }}
            >
              Vení a conocernos →
            </a>
            <a 
              href="https://wa.me/5493584029424?text=Hola!%20Quiero%20asesorarme%20sobre%20las%20opciones%20de%20unidades%200KM" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ backgroundColor: '#1F2024', border: '1px solid #333', color: '#ffffff', padding: '14px 28px', borderRadius: '10px', fontWeight: 600, fontSize: '0.94rem', textDecoration: 'none' }}
            >
              Hablá con nosotros
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
