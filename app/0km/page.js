'use client';

const brands = [
  {
    name: 'TOYOTA',
    desc: 'Líder indiscutido en durabilidad, valor de reventa superior y la máxima confiabilidad mecánica del mercado.',
    image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&w=800&q=80',
    popular: 'Hilux · SW4 · Corolla Cross · Yaris',
  },
  {
    name: 'VOLKSWAGEN',
    desc: 'Tecnología de avanzada, confort de marcha y robustez garantizada en cada modelo de la línea alemana.',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80',
    popular: 'Amarok · Taos · Nivus · Polo',
  },
  {
    name: 'FORD',
    desc: 'Potencia pura, equipamiento de seguridad de última generación y toda la versatilidad de la Raza Fuerte.',
    image: 'https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=800&q=80',
    popular: 'Ranger · Maverick · Territory · Bronco',
  },
  {
    name: 'CHEVROLET',
    desc: 'Conectividad total OnStar, diseño moderno y motores turbo altamente eficientes para todo tipo de uso.',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    popular: 'S10 · Tracker · Montana · Onix',
  },
  {
    name: 'FIAT',
    desc: 'Líder en ventas nacionales. Máxima economía de mantenimiento, agilidad urbana y pick-ups polivalentes.',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    popular: 'Cronos · Strada · Toro · Titano · Pulse',
  },
  {
    name: 'RENAULT',
    desc: 'Espacio interior líder, robustez de suspensiones y bajo costo operativo ideal para el trabajo o la familia.',
    image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=800&q=80',
    popular: 'Alaskan · Duster · Kardian · Kangoo',
  },
  {
    name: 'PEUGEOT',
    desc: 'Diseño vanguardista, puesto de conducción i-Cockpit y la mejor terminación estética en su categoría.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    popular: '208 · 2008 · Partner',
  },
  {
    name: 'CITROËN',
    desc: 'Confort de marcha inigualable, diseño disruptivo y habitabilidad pensada para disfrutar el camino.',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    popular: 'C3 · C3 Aircross · C4 Cactus · Berlingo',
  },
  {
    name: 'JEEP',
    desc: 'Espíritu auténticamente aventurero, capacidad 4x4 legendaria y sofisticación premium en cada detalle.',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    popular: 'Renegade · Compass · Commander',
  },
  {
    name: 'NISSAN',
    desc: 'Ingeniería japonesa de alta precisión, durabilidad extrema y tecnología de visión periférica inteligente.',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
    popular: 'Frontier · Kicks · Versa · Sentra',
  },
  {
    name: 'RAM',
    desc: 'Lujo imponente, capacidad de carga superior y el poder inconfundible de las pick-ups full-size y compactas.',
    image: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=800&q=80',
    popular: 'Rampage · 1500 Laramie · 2500',
  },
  {
    name: 'HONDA',
    desc: 'Ingeniería motriz de referencia global, seguridad activa Honda Sensing y máximo valor de reventa.',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80',
    popular: 'HR-V · ZR-V · CR-V · Civic',
  },
];

const tickerBrands = [
  'TOYOTA', 'VOLKSWAGEN', 'FORD', 'CHEVROLET', 'FIAT', 'RENAULT', 
  'PEUGEOT', 'CITROËN', 'JEEP', 'RAM', 'NISSAN', 'HONDA', 'BMW', 'AUDI', 'MERCEDES-BENZ', 'BYD', 'BAIC'
];

export default function CeroKmPage() {
  return (
    <div style={{ backgroundColor: '#0B0C0E', minHeight: '100vh', color: '#ffffff', paddingBottom: '100px' }}>
      
      {/* ESTILOS INTERACTIVOS */}
      <style>{`
        .brand-card {
          background-color: #141518;
          border: 1px solid #27272a;
          border-radius: 22px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .brand-card:hover {
          transform: translateY(-8px);
          border-color: rgba(237, 28, 36, 0.5);
          box-shadow: 0 18px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(237, 28, 36, 0.15);
        }
        .brand-img-box {
          position: relative;
          height: 230px;
          background-color: #070709;
          overflow: hidden;
        }
        .brand-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .brand-card:hover .brand-img-box img {
          transform: scale(1.08);
        }
        .brand-btn-red {
          display: block;
          text-align: center;
          background-color: #ED1C24;
          color: #ffffff;
          padding: 13px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.92rem;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }
        .brand-btn-red:hover {
          background-color: #c9141b;
          transform: scale(1.02);
        }
      `}</style>

      {/* 1. HERO */}
      <section style={{ padding: '50px 24px 30px 24px', textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'rgba(237, 28, 36, 0.1)', border: '1px solid rgba(237, 28, 36, 0.3)', color: '#ED1C24', padding: '6px 20px', borderRadius: '30px', fontSize: '0.86rem', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '18px' }}>
          OPCIONES CON FINANCIACIÓN DIRECTA DE FÁBRICA
        </div>

        <h1 style={{ fontSize: '3.4rem', fontWeight: 400, margin: '0 0 16px 0', letterSpacing: '0.5px', lineHeight: 1.15 }}>
          Estás a un click de tu próximo <span style={{ color: '#ED1C24', fontWeight: 600 }}>0Km</span>
        </h1>

        <p style={{ fontSize: '1.12rem', color: '#a1a1aa', maxWidth: '780px', margin: '0 auto 35px auto', lineHeight: 1.6, fontWeight: 300 }}>
          Comercializamos las principales marcas del país. Asesoramiento comercial, financiación a medida, gestoría propia y toma de tu usado al mejor valor del mercado.
        </p>
      </section>

      {/* 2. MARQUESINA INFINITA FLUIDA */}
      <div style={{ width: '100%', overflow: 'hidden', backgroundColor: '#070709', borderTop: '1px solid #1F2024', borderBottom: '1px solid #1F2024', padding: '15px 0', marginBottom: '55px', whiteSpace: 'nowrap' }}>
        <div className="marquee-content">
          {[...tickerBrands, ...tickerBrands].map((brand, idx) => (
            <span key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '24px', margin: '0 24px', color: '#a1a1aa', fontSize: '0.86rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>
              <span>{brand}</span>
              <span style={{ color: '#ED1C24', fontSize: '0.9rem' }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* 3. GRILLA DE MARCAS ANCHA (4 COLUMNAS EN PC) */}
      <section style={{ maxWidth: '1550px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: '28px' }}>
          {brands.map((b, i) => (
            <div key={i} className="brand-card">
              
              <div className="brand-img-box">
                <span style={{ position: 'absolute', top: '14px', right: '14px', backgroundColor: '#ED1C24', color: '#ffffff', fontSize: '0.72rem', fontWeight: 700, padding: '4px 10px', borderRadius: '6px', letterSpacing: '0.5px', zIndex: 2 }}>
                  GAMA COMPLETA
                </span>
                <img src={b.image} alt={b.name} />
              </div>

              <div style={{ padding: '26px 22px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', margin: '0 0 10px 0', letterSpacing: '0.5px' }}>
                  {b.name}
                </h2>
                
                <p style={{ fontSize: '0.92rem', color: '#a1a1aa', lineHeight: 1.55, margin: '0 0 14px 0', flexGrow: 1, fontWeight: 300 }}>
                  {b.desc}
                </p>

                <div style={{ fontSize: '0.8rem', color: '#71717a', marginBottom: '22px', borderTop: '1px solid #27272a', paddingTop: '10px' }}>
                  <strong style={{ color: '#d4d4d8' }}>Modelos:</strong> {b.popular}
                </div>

                <a 
                  href={`https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20la%20gama%200km%20de%20${encodeURIComponent(b.name)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="brand-btn-red"
                >
                  Consultar por {b.name} →
                </a>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
