'use client';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#0B0C0E', minHeight: '100vh', color: '#ffffff', paddingBottom: '80px' }}>
      
      {/* ESTILOS INTERACTIVOS (HOVER, ZOOM Y ELEVACIÓN) */}
      <style>{`
        .interactive-card {
          background-color: #141518;
          border: 1px solid #27272a;
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .interactive-card:hover {
          transform: translateY(-8px);
          border-color: rgba(237, 28, 36, 0.5);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.6), 0 0 18px rgba(237, 28, 36, 0.15);
        }
        .card-img-container {
          position: relative;
          height: 250px;
          background-color: #070709;
          overflow: hidden;
        }
        .card-img-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .interactive-card:hover .card-img-container img {
          transform: scale(1.06);
        }
        .metric-box {
          background-color: #141518;
          border: 1px solid #27272a;
          border-radius: 18px;
          padding: 30px 20px;
          text-align: center;
          transition: transform 0.3s ease, border-color 0.3s ease, background-color 0.3s ease;
        }
        .metric-box:hover {
          transform: translateY(-4px);
          border-color: #ED1C24;
          background-color: #18191d;
        }
        .action-btn-red {
          display: block;
          text-align: center;
          background-color: #ED1C24;
          color: #ffffff;
          padding: 13px;
          border-radius: 10px;
          font-weight: 500;
          font-size: 0.88rem;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }
        .action-btn-red:hover {
          background-color: #c9141b;
          transform: scale(1.02);
        }
        .feature-box {
          background-color: #141518;
          border: 1px solid #27272a;
          border-radius: 16px;
          padding: 26px;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .feature-box:hover {
          transform: translateY(-4px);
          border-color: #3f3f46;
        }
      `}</style>

      {/* 1. HERO */}
      <section style={{ padding: '60px 20px 40px 20px', textAlign: 'center', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'rgba(237, 28, 36, 0.1)', border: '1px solid rgba(237, 28, 36, 0.3)', color: '#ED1C24', padding: '5px 16px', borderRadius: '30px', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '20px' }}>
          LA PROPUESTA CONFIABLE
        </div>

        <h1 style={{ fontSize: '2.6rem', fontWeight: 600, margin: '0 0 14px 0', letterSpacing: '-0.5px', lineHeight: 1.2 }}>
          ¿0Km o Usado <span style={{ color: '#ED1C24' }}>seleccionado?</span>
        </h1>

        <p style={{ fontSize: '0.95rem', color: '#a1a1aa', maxWidth: '640px', margin: '0 auto 46px auto', lineHeight: 1.6, fontWeight: 300 }}>
          Elegí la categoría de tu interés para explorar nuestras unidades disponibles, opciones de financiación directa y propuestas a medida.
        </p>

        {/* 2 TARJETAS PRINCIPALES CON INTERACCIÓN */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', textAlign: 'left' }}>

          {/* Tarjeta 0KM */}
          <div className="interactive-card">
            <div className="card-img-container">
              <span style={{ position: 'absolute', top: '14px', left: '14px', backgroundColor: '#ED1C24', color: '#ffffff', fontSize: '0.7rem', fontWeight: 600, padding: '4px 10px', borderRadius: '6px', letterSpacing: '0.5px', zIndex: 2 }}>
                0 KM
              </span>
              <img 
                src="https://lh3.googleusercontent.com/d/1xViFbNOKlcqaUUt3cVh_DL7zWnyjII8I" 
                alt="Unidades 0km" 
              />
            </div>
            <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', margin: '0 0 10px 0', letterSpacing: '0.5px' }}>
                UNIDADES 0KM
              </h2>
              <p style={{ fontSize: '0.86rem', color: '#a1a1aa', lineHeight: 1.5, margin: '0 0 24px 0', flexGrow: 1, fontWeight: 300 }}>
                Comercializamos la gama completa de las principales marcas del país. Financiación directa de fábrica y entrega programada.
              </p>
              <a href="/0km" className="action-btn-red">
                Explorar Marcas 0KM →
              </a>
            </div>
          </div>

          {/* Tarjeta Usados */}
          <div className="interactive-card">
            <div className="card-img-container">
              <span style={{ position: 'absolute', top: '14px', left: '14px', backgroundColor: '#ED1C24', color: '#ffffff', fontSize: '0.7rem', fontWeight: 600, padding: '4px 10px', borderRadius: '6px', letterSpacing: '0.5px', zIndex: 2 }}>
                SELECCIONADOS
              </span>
              <img 
                src="https://lh3.googleusercontent.com/d/10u5Lg969bZ23-3j3P-zL2mPj10zBvhK_" 
                alt="Usados Seleccionados" 
              />
            </div>
            <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', margin: '0 0 6px 0', letterSpacing: '0.5px' }}>
                USADOS SELECCIONADOS
              </h2>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#ED1C24', fontSize: '0.72rem', fontWeight: 500, marginBottom: '10px' }}>
                🛡️ 6 MESES DE GARANTÍA ESCRITA
              </div>
              <p style={{ fontSize: '0.86rem', color: '#a1a1aa', lineHeight: 1.5, margin: '0 0 24px 0', flexGrow: 1, fontWeight: 300 }}>
                Unidades rigurosamente inspeccionadas, con historial verificado y entrega con toda la documentación lista para transferir.
              </p>
              <a href="/usados" className="action-btn-red">
                Ver Catálogo de Usados →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 2. BLOQUE DE MÉTRICAS & TRAYECTORIA */}
      <section style={{ maxWidth: '1200px', margin: '30px auto 0 auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          
          <div className="metric-box">
            <div style={{ fontSize: '2.4rem', fontWeight: 700, color: '#ED1C24', lineHeight: 1, marginBottom: '8px' }}>+35</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>Años de Trayectoria</div>
            <div style={{ fontSize: '0.78rem', color: '#71717a', fontWeight: 300 }}>Referente automotor familiar</div>
          </div>

          <div className="metric-box">
            <div style={{ fontSize: '2.4rem', fontWeight: 700, color: '#ED1C24', lineHeight: 1, marginBottom: '8px' }}>6 Meses</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>Garantía Total Escrita</div>
            <div style={{ fontSize: '0.78rem', color: '#71717a', fontWeight: 300 }}>En todos nuestros usados</div>
          </div>

          <div className="metric-box">
            <div style={{ fontSize: '2.4rem', fontWeight: 700, color: '#ED1C24', lineHeight: 1, marginBottom: '8px' }}>100%</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>Gestoría Propia</div>
            <div style={{ fontSize: '0.78rem', color: '#71717a', fontWeight: 300 }}>Documentación al día sin demoras</div>
          </div>

          <div className="metric-box">
            <div style={{ fontSize: '2.4rem', fontWeight: 700, color: '#ED1C24', lineHeight: 1, marginBottom: '8px' }}>16+</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#ffffff', marginBottom: '4px' }}>Marcas Multimarca</div>
            <div style={{ fontSize: '0.78rem', color: '#71717a', fontWeight: 300 }}>Gama 0km completa disponible</div>
          </div>

        </div>
      </section>

      {/* 3. PROPUESTA DE VALOR */}
      <section style={{ maxWidth: '1200px', margin: '70px auto 0 auto', padding: '0 20px', textAlign: 'center' }}>
        <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#ED1C24', letterSpacing: '1.5px', textTransform: 'uppercase' }}>EXPERIENCIA Y SEGURIDAD</span>
        <h2 style={{ fontSize: '2rem', fontWeight: 600, margin: '8px 0 36px 0' }}>La forma más confiable de cambiar tu auto</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', textAlign: 'left' }}>
          
          <div className="feature-box">
            <div style={{ color: '#ED1C24', marginBottom: '14px' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
            </div>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: '0 0 6px 0' }}>Tomamos tu usado al mejor valor</h3>
            <p style={{ fontSize: '0.84rem', color: '#a1a1aa', lineHeight: 1.5, margin: 0, fontWeight: 300 }}>Recibimos tu vehículo como parte de pago con cotización transparente, justa y ágil en el acto.</p>
          </div>

          <div className="feature-box">
            <div style={{ color: '#ED1C24', marginBottom: '14px' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
            </div>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: '0 0 6px 0' }}>Financiación en pesos a medida</h3>
            <p style={{ fontSize: '0.84rem', color: '#a1a1aa', lineHeight: 1.5, margin: 0, fontWeight: 300 }}>Opciones en cuotas fijas, créditos prendarios bancarios y planes directos adaptados a tu posibilidad.</p>
          </div>

          <div className="feature-box">
            <div style={{ color: '#ED1C24', marginBottom: '14px' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: '0 0 6px 0' }}>Tranquilidad y respaldo total</h3>
            <p style={{ fontSize: '0.84rem', color: '#a1a1aa', lineHeight: 1.5, margin: 0, fontWeight: 300 }}>Cada operación cuenta con el respaldo de nuestra trayectoria, seriedad comercial y atención cercana.</p>
          </div>

        </div>
      </section>

    </div>
  );
}
