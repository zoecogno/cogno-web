'use client';

export default function CeroKmPage() {
  return (
    <div style={{ backgroundColor: '#0B0C0E', minHeight: '100vh', color: '#ffffff', paddingBottom: '80px' }}>
      
      {/* ESTILOS ORIGINALES DE SOFTR */}
      <style>{`
        *, *::before, *::after {
          box-sizing: border-box !important;
        }

        .section-0km {
          font-family: inherit;
          color: #ffffff;
          padding: 0px 16px 60px 16px;
          max-width: 1480px;
          width: 100%;
          margin: 0 auto;
          overflow-x: hidden !important;
        }

        /* Cinta Loop Infinito */
        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          background: #141518;
          border-top: 1px solid #27272a;
          border-bottom: 1px solid #27272a;
          padding: 12px 0;
          margin: 0 0 36px 0;
          white-space: nowrap;
        }

        .marquee-track {
          display: inline-flex;
          animation: marquee-scroll 32s linear infinite;
          gap: 28px;
        }

        .marquee-item {
          font-size: 0.9rem;
          font-weight: 700;
          color: #71717a;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 28px;
        }

        .marquee-item::after {
          content: "•";
          color: #ED1C24;
        }

        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        /* Grilla de Marcas */
        .brands-grid-0km {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 32px;
        }

        .brand-card-0km {
          background-color: #1A1B1E;
          border: 1px solid #2C2D31;
          border-radius: 14px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 6px 18px rgba(0,0,0,0.35);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .brand-card-0km:hover {
          transform: translateY(-3px);
          border-color: #3f4046;
        }

        .brand-img-container {
          width: 100%;
          height: 210px;
          background-color: #111215;
          overflow: hidden;
        }

        .brand-img-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .brand-content-0km {
          padding: 14px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        /* Badge alineado a la derecha */
        .brand-badge-unit {
          display: inline-block;
          align-self: flex-end;
          background-color: rgba(237, 28, 36, 0.15);
          color: #ED1C24;
          border: 1px solid rgba(237, 28, 36, 0.3);
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 5px;
          margin-bottom: 8px;
          letter-spacing: 0.5px;
        }

        .brand-title-0km {
          font-size: 1.15rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 6px 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .brand-desc-0km {
          font-size: 0.8rem;
          color: #a1a1aa;
          line-height: 1.45;
          margin-bottom: 14px;
          flex-grow: 1;
        }

        .brand-btn-0km {
          display: block;
          text-align: center;
          background-color: #ED1C24;
          color: #ffffff;
          text-decoration: none;
          padding: 9px 10px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.8rem;
          transition: background-color 0.2s ease;
          white-space: nowrap;
        }

        .brand-btn-0km:hover {
          background-color: #c9141b;
        }

        /* Nota Disponibilidad Total */
        .models-disclaimer-wrap {
          margin: 0 auto 50px auto;
          max-width: 850px;
        }

        .models-disclaimer {
          background-color: #1A1B1E;
          border: 1px solid #2C2D31;
          border-radius: 12px;
          padding: 14px 20px;
          font-size: 0.9rem;
          color: #d4d4d8;
          line-height: 1.45;
        }

        /* Sección Por qué elegirnos */
        .why-us-wrap {
          margin-bottom: 48px;
        }

        .why-us-title {
          text-align: center;
          font-size: 1.8rem;
          font-weight: 800;
          margin-bottom: 24px;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .why-card {
          background-color: #1A1B1E;
          border: 1px solid #2C2D31;
          border-radius: 14px;
          padding: 18px;
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .why-icon {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background-color: rgba(237, 28, 36, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #ED1C24;
        }

        .why-h4 {
          font-size: 1rem;
          font-weight: 700;
          margin: 0 0 4px 0;
          color: #ffffff;
        }

        .why-p {
          font-size: 0.85rem;
          color: #a1a1aa;
          line-height: 1.45;
          margin: 0;
        }

        /* Banner de Cierre */
        .cta-banner-0km {
          background: linear-gradient(135deg, #1A1B1E 0%, #111113 100%);
          border: 1px solid #2C2D31;
          border-radius: 16px;
          padding: 36px 20px;
          text-align: center;
        }

        /* Adaptación Celulares */
        @media (max-width: 768px) {
          .brands-grid-0km {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          .brand-img-container {
            height: 115px;
          }
          .brand-content-0km {
            padding: 10px;
          }
          .brand-title-0km {
            font-size: 0.95rem;
          }
          .brand-desc-0km {
            font-size: 0.75rem;
            margin-bottom: 10px;
          }
          .brand-btn-0km {
            font-size: 0.72rem;
            padding: 8px 4px;
          }
          .why-grid {
            grid-template-columns: 1fr;
          }
          .cta-banner-0km {
            padding: 28px 16px;
          }
        }
      `}</style>


            {/* ENCABEZADO ESTANDARIZADO */}
<section style={{ padding: '50px 20px 24px 20px', textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
  {/* Logo centrado */}
  <div style={{ marginBottom: '16px' }}>
    <img 
      src="/logo.png.png" 
      alt="Cogno Automotores" 
      style={{ height: '75px', width: 'auto', margin: '0 auto', display: 'inline-block' }}
    />
  </div>

  {/* Título principal estilizado */}
  <h1 style={{ fontSize: '2.75rem', fontWeight: 600, margin: '0 0 20px 0', letterSpacing: '-0.5px', color: '#ffffff' }}>
   Estás a un click de tu próximo <span style={{ color: '#ED1C24' }}>0Km</span>
  </h1>

  {/* Badge rojo tipo píldora */}
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: 'rgba(237, 28, 36, 0.08)', border: '1px solid rgba(237, 28, 36, 0.4)', color: '#ED1C24', padding: '10px 24px', borderRadius: '40px', fontSize: '0.88rem', fontWeight: 700, letterSpacing: '0.8px', marginBottom: '24px', textTransform: 'uppercase' }}>
    <span>🛡️</span>
    <span> Opciones con financiación directa de fábrica</span>
  </div>

  {/* Bajada / Descripción */}
  <p style={{ color: '#a1a1aa', fontSize: '1rem', maxWidth: '750px', margin: '0 auto', lineHeight: 1.6, fontWeight: 300 }}>
    Comercializamos las principales marcas del país. Asesoramiento comercial, financiación a medida, gestoría propia y toma de tu usado.
  </p>
</section>
  
      <div className="section-0km">

        {/* 1. Cinta Loop Infinito de Marcas */}
        <div className="marquee-wrapper">
          <div className="marquee-track">
            <span className="marquee-item">VOLKSWAGEN</span>
            <span className="marquee-item">TOYOTA</span>
            <span className="marquee-item">FORD</span>
            <span className="marquee-item">CHEVROLET</span>
            <span className="marquee-item">FIAT</span>
            <span className="marquee-item">RENAULT</span>
            <span className="marquee-item">PEUGEOT</span>
            <span className="marquee-item">CITROËN</span>
            <span className="marquee-item">JEEP</span>
            <span className="marquee-item">RAM</span>
            <span className="marquee-item">NISSAN</span>
            <span className="marquee-item">HONDA</span>
            <span className="marquee-item">BMW</span>
            <span className="marquee-item">MERCEDES-BENZ</span>
            <span className="marquee-item">AUDI</span>
            <span className="marquee-item">BYD</span>
            <span className="marquee-item">BAIC</span>
            {/* Duplicado para loop continuo */}
            <span className="marquee-item">VOLKSWAGEN</span>
            <span className="marquee-item">TOYOTA</span>
            <span className="marquee-item">FORD</span>
            <span className="marquee-item">CHEVROLET</span>
            <span className="marquee-item">FIAT</span>
            <span className="marquee-item">RENAULT</span>
            <span className="marquee-item">PEUGEOT</span>
            <span className="marquee-item">CITROËN</span>
            <span className="marquee-item">JEEP</span>
            <span className="marquee-item">RAM</span>
            <span className="marquee-item">NISSAN</span>
            <span className="marquee-item">HONDA</span>
            <span className="marquee-item">BMW</span>
            <span className="marquee-item">MERCEDES-BENZ</span>
            <span className="marquee-item">AUDI</span>
            <span className="marquee-item">BYD</span>
            <span className="marquee-item">BAIC</span>
          </div>
        </div>

        {/* 2. Grilla Completa de Tarjetas Individuales */}
        <div className="brands-grid-0km">

          {/* Volkswagen */}
          <div className="brand-card-0km">
            <div className="brand-img-container">
              <img src="https://lh3.googleusercontent.com/d/15T4Gc9YjvctQg4I9i0GOX1EPcGqQkWxD" alt="VOLKSWAGEN 0KM" />
            </div>
            <div className="brand-content-0km">
              <span className="brand-badge-unit">GAMA COMPLETA</span>
              <h3 className="brand-title-0km">VOLKSWAGEN</h3>
              <p className="brand-desc-0km">Tecnología de avanzada, confort de marcha y robustez garantizada en cada modelo de la línea alemana.</p>
              <a href="https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km%20de%20Volkswagen" target="_blank" rel="noopener noreferrer" className="brand-btn-0km">Consultar por Volkswagen →</a>
            </div>
          </div>

          {/* Toyota */}
          <div className="brand-card-0km">
            <div className="brand-img-container">
              <img src="https://lh3.googleusercontent.com/d/1xViFbNOKlcqaUUt3cVh_DL7zWnyjII8I" alt="TOYOTA 0KM" />
            </div>
            <div className="brand-content-0km">
              <span className="brand-badge-unit">GAMA COMPLETA</span>
              <h3 className="brand-title-0km">TOYOTA</h3>
              <p className="brand-desc-0km">Líder indiscutido en durabilidad, valor de reventa superior y la máxima confiabilidad mecánica del mercado.</p>
              <a href="https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km%20de%20Toyota" target="_blank" rel="noopener noreferrer" className="brand-btn-0km">Consultar por Toyota →</a>
            </div>
          </div>

          {/* Ford */}
          <div className="brand-card-0km">
            <div className="brand-img-container">
              <img src="https://lh3.googleusercontent.com/d/1cyjb8yvYKlK_MDdU6Po0snsf8tFmjvFr" alt="FORD 0KM" />
            </div>
            <div className="brand-content-0km">
              <span className="brand-badge-unit">GAMA COMPLETA</span>
              <h3 className="brand-title-0km">FORD</h3>
              <p className="brand-desc-0km">Potencia pura, equipamiento de seguridad de última generación y toda la versatilidad de la Raza Fuerte.</p>
              <a href="https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km%20de%20Ford" target="_blank" rel="noopener noreferrer" className="brand-btn-0km">Consultar por Ford →</a>
            </div>
          </div>

          {/* Chevrolet */}
          <div className="brand-card-0km">
            <div className="brand-img-container">
              <img src="https://lh3.googleusercontent.com/d/1M2IokOL1VAn2AuWHTcFTF7JS2l4UGQE_" alt="CHEVROLET 0KM" />
            </div>
            <div className="brand-content-0km">
              <span className="brand-badge-unit">GAMA COMPLETA</span>
              <h3 className="brand-title-0km">CHEVROLET</h3>
              <p className="brand-desc-0km">Conectividad total OnStar, diseño moderno y motores turbo altamente eficientes para todo tipo de uso.</p>
              <a href="https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km%20de%20Chevrolet" target="_blank" rel="noopener noreferrer" className="brand-btn-0km">Consultar por Chevrolet →</a>
            </div>
          </div>

          {/* Fiat */}
          <div className="brand-card-0km">
            <div className="brand-img-container">
              <img src="https://lh3.googleusercontent.com/d/130N-HNOQZkhX-NiuhwUofcfFteO65L1Q" alt="FIAT 0KM" />
            </div>
            <div className="brand-content-0km">
              <span className="brand-badge-unit">GAMA COMPLETA</span>
              <h3 className="brand-title-0km">FIAT</h3>
              <p className="brand-desc-0km">Excelente relación precio-calidad, bajo costo de mantenimiento y opciones urbanas y utilitarias líderes.</p>
              <a href="https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km%20de%20Fiat" target="_blank" rel="noopener noreferrer" className="brand-btn-0km">Consultar por Fiat →</a>
            </div>
          </div>

          {/* Renault */}
          <div className="brand-card-0km">
            <div className="brand-img-container">
              <img src="https://lh3.googleusercontent.com/d/1fOJKYhlmPku7EFZVnpWjrXVry0rb6kF8" alt="RENAULT 0KM" />
            </div>
            <div className="brand-content-0km">
              <span className="brand-badge-unit">GAMA COMPLETA</span>
              <h3 className="brand-title-0km">RENAULT</h3>
              <p className="brand-desc-0km">Espacio interior, confort y soluciones prácticas e innovadoras para la familia y el trabajo diario.</p>
              <a href="https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km%20de%20Renault" target="_blank" rel="noopener noreferrer" className="brand-btn-0km">Consultar por Renault →</a>
            </div>
          </div>

          {/* Peugeot */}
          <div className="brand-card-0km">
            <div className="brand-img-container">
              <img src="https://lh3.googleusercontent.com/d/1DGYZ8EpfEpC9dFNP9IGywE3tUzwOqvbB" alt="PEUGEOT 0KM" />
            </div>
            <div className="brand-content-0km">
              <span className="brand-badge-unit">GAMA COMPLETA</span>
              <h3 className="brand-title-0km">PEUGEOT</h3>
              <p className="brand-desc-0km">Diseño europeo refinado, puesto de conducción i-Cockpit de vanguardia y altísimo nivel de confort.</p>
              <a href="https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km%20de%20Peugeot" target="_blank" rel="noopener noreferrer" className="brand-btn-0km">Consultar por Peugeot →</a>
            </div>
          </div>

          {/* Citroën */}
          <div className="brand-card-0km">
            <div className="brand-img-container">
              <img src="https://lh3.googleusercontent.com/d/11dP0tnxTyc6CYCBT0GzLoHuAT9lKNaO7" alt="CITROËN 0KM" />
            </div>
            <div className="brand-content-0km">
              <span className="brand-badge-unit">GAMA COMPLETA</span>
              <h3 className="brand-title-0km">CITROËN</h3>
              <p className="brand-desc-0km">Suspensión de máxima suavidad, gran habitabilidad y propuestas modernas para disfrutar cada viaje.</p>
              <a href="https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km%20de%20Citro%C3%ABn" target="_blank" rel="noopener noreferrer" className="brand-btn-0km">Consultar por Citroën →</a>
            </div>
          </div>

          {/* Jeep / RAM */}
          <div className="brand-card-0km">
            <div className="brand-img-container">
              <img src="https://lh3.googleusercontent.com/d/14f7r6hhkiHor5WToUbkffIsqg__CCa4H" alt="JEEP 0KM" />
            </div>
            <div className="brand-content-0km">
              <span className="brand-badge-unit">GAMA COMPLETA</span>
              <h3 className="brand-title-0km">JEEP / RAM</h3>
              <p className="brand-desc-0km">El ícono mundial de la aventura off-road con equipamiento premium y máxima capacidad todoterreno.</p>
              <a href="https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km%20de%20Jeep/RAM" target="_blank" rel="noopener noreferrer" className="brand-btn-0km">Consultar por Jeep / RAM →</a>
            </div>
          </div>

          {/* Nissan */}
          <div className="brand-card-0km">
            <div className="brand-img-container">
              <img src="https://lh3.googleusercontent.com/d/1jLDKmLLwH6aghX5fZEynwksWLUHOb6YQ" alt="NISSAN 0KM" />
            </div>
            <div className="brand-content-0km">
              <span className="brand-badge-unit">GAMA COMPLETA</span>
              <h3 className="brand-title-0km">NISSAN</h3>
              <p className="brand-desc-0km">Ingeniería japonesa de precisión, gran confort de marcha y pick-ups reconocidas por su resistencia.</p>
              <a href="https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km%20de%20Nissan" target="_blank" rel="noopener noreferrer" className="brand-btn-0km">Consultar por Nissan →</a>
            </div>
          </div>

          {/* Honda */}
          <div className="brand-card-0km">
            <div className="brand-img-container">
              <img src="https://lh3.googleusercontent.com/d/13IXEtJIxLH0w8WmmTCBk-cbOFepX50i0" alt="HONDA 0KM" />
            </div>
            <div className="brand-content-0km">
              <span className="brand-badge-unit">GAMA COMPLETA</span>
              <h3 className="brand-title-0km">HONDA</h3>
              <p className="brand-desc-0km">Mecánica de altísima confiabilidad, estándares superiores de seguridad Sensing y gran valor de reventa.</p>
              <a href="https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km%20de%20Honda" target="_blank" rel="noopener noreferrer" className="brand-btn-0km">Consultar por Honda →</a>
            </div>
          </div>

          {/* BMW */}
          <div className="brand-card-0km">
            <div className="brand-img-container">
              <img src="https://lh3.googleusercontent.com/d/1-sFBOTbHqXnZDrfJEQgRWXEBkarvPKbe" alt="BMW 0KM" />
            </div>
            <div className="brand-content-0km">
              <span className="brand-badge-unit">GAMA COMPLETA</span>
              <h3 className="brand-title-0km">BMW</h3>
              <p className="brand-desc-0km">El auténtico placer de conducir, dinamismo deportivo y la máxima distinción premium alemana.</p>
              <a href="https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km%20de%20BMW" target="_blank" rel="noopener noreferrer" className="brand-btn-0km">Consultar por BMW →</a>
            </div>
          </div>

          {/* Mercedes-Benz */}
          <div className="brand-card-0km">
            <div className="brand-img-container">
              <img src="https://lh3.googleusercontent.com/d/1HWuJ67rgHuLgMGZ_vaA2WwLkKYH_NJF_" alt="MERCEDES-BENZ 0KM" />
            </div>
            <div className="brand-content-0km">
              <span className="brand-badge-unit">GAMA COMPLETA</span>
              <h3 className="brand-title-0km">MERCEDES-BENZ</h3>
              <p className="brand-desc-0km">Elegancia atemporal, vanguardia tecnológica y el máximo estándar en lujo y utilitarios comerciales.</p>
              <a href="https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km%20de%20Mercedes-Benz" target="_blank" rel="noopener noreferrer" className="brand-btn-0km">Consultar por Mercedes-Benz →</a>
            </div>
          </div>

          {/* Audi */}
          <div className="brand-card-0km">
            <div className="brand-img-container">
              <img src="https://lh3.googleusercontent.com/d/1Gm8NbrL7A-W2WtpA9U7hxjCxMNY6jLZC" alt="AUDI 0KM" />
            </div>
            <div className="brand-content-0km">
              <span className="brand-badge-unit">GAMA COMPLETA</span>
              <h3 className="brand-title-0km">AUDI</h3>
              <p className="brand-desc-0km">Vanguardia a través de la tecnología, sofisticación estética y la legendaria tracción Quattro.</p>
              <a href="https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km%20de%20Audi" target="_blank" rel="noopener noreferrer" className="brand-btn-0km">Consultar por Audi →</a>
            </div>
          </div>

          {/* BYD */}
          <div className="brand-card-0km">
            <div className="brand-img-container">
              <img src="https://lh3.googleusercontent.com/d/1m8QnUtKTZ7KHAIajpAoV_8gKtNz-Yrgc" alt="BYD Y BAIC 0KM" />
            </div>
            <div className="brand-content-0km">
              <span className="brand-badge-unit">GAMA COMPLETA</span>
              <h3 className="brand-title-0km">BYD</h3>
              <p className="brand-desc-0km">Líderes mundiales en innovación eléctrica e híbrida, diseño futurista y equipamiento inteligente.</p>
              <a href="https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km%20de%20BYD" target="_blank" rel="noopener noreferrer" className="brand-btn-0km">Consultar por BYD →</a>
            </div>
          </div>

          {/* BAIC */}
          <div className="brand-card-0km">
            <div className="brand-img-container">
              <img src="https://lh3.googleusercontent.com/d/1RpG9I6xB-ZIh_c4V5-ZKa2zUuXiAO4pl" alt="BAIC 0KM" />
            </div>
            <div className="brand-content-0km">
              <span className="brand-badge-unit">GAMA COMPLETA</span>
              <h3 className="brand-title-0km">BAIC</h3>
              <p className="brand-desc-0km">Potencia descomunal, lujo inigualable y la máxima capacidad de arrastre y carga del segmento.</p>
              <a href="https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km%20de%20BAIC" target="_blank" rel="noopener noreferrer" className="brand-btn-0km">Consultar por BAIC →</a>
            </div>
          </div>

        </div>

        {/* 3. Nota Disponibilidad Total */}
        <div className="models-disclaimer-wrap">
          <div className="models-disclaimer" style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ED1C24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ minWidth: '22px', width: '22px', height: '22px', flexShrink: 0, marginTop: '2px' }}>
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <div style={{ flexGrow: 1 }}>
              <strong>Disponibilidad total:</strong> Comercializamos la <strong>gama completa</strong> de Pick-ups, autos, SUVs y utilitarios de cada una de nuestras marcas oficiales.
            </div>
          </div>
        </div>

        {/* 4. Por qué elegirnos */}
        <div className="why-us-wrap">
          <h2 className="why-us-title">¿Por qué elegirnos para tu próximo 0Km?</h2>
          
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
                </svg>
              </div>
              <div>
                <h4 className="why-h4">Toma de Usados</h4>
                <p className="why-p">Recibimos tu unidad usada como parte de pago con cotización transparente.</p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                  <line x1="1" y1="10" x2="23" y2="10"/>
                </svg>
              </div>
              <div>
                <h4 className="why-h4">Financiación a Medida</h4>
                <p className="why-p">Accedé a créditos prendarios y opciones en cuotas fijas en pesos adaptadas a tu presupuesto.</p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
              </div>
              <div>
                <h4 className="why-h4">Gestoría Integral Propia</h4>
                <p className="why-p">Resolvemos toda la documentación y patentamiento sin demoras para que solo te preocupes por retirar la unidad.</p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div>
                <h4 className="why-h4">Garantía Oficial de Fábrica</h4>
                <p className="why-p">Cada unidad 0km cuenta con el respaldo, garantía de fábrica y servicio de postventa oficial de cada terminal automotriz.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Banner de Cierre */}
        <div className="cta-banner-0km">
          <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>
            ¿Tenés en mente una línea o versión puntual?
          </h3>
          <p style={{ fontSize: '0.95rem', color: '#a1a1aa', maxWidth: '650px', margin: '0 auto 24px auto', lineHeight: 1.5 }}>
            Acercate a nuestro local a charlar sobre tu próximo 0km. Te esperamos para ver las mejores opciones de financiación, tomar tu usado y armar una propuesta a tu medida.
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
            <a 
              href="https://maps.app.goo.gl/GUH2QAShLm4LVHGU6" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ED1C24', color: '#ffffff', textDecoration: 'none', padding: '13px 24px', borderRadius: '10px', fontWeight: 700, fontSize: '0.95rem' }}
            >
              Vení a conocernos
            </a>
            <a 
              href="https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20un%200km" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', color: '#ffffff', border: '1px solid #3f3f46', textDecoration: 'none', padding: '13px 24px', borderRadius: '10px', fontWeight: 600, fontSize: '0.95rem' }}
            >
              Hablá con nosotros
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
