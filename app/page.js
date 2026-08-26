'use client';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#0B0C0E', minHeight: '100vh', color: '#ffffff', paddingBottom: '90px' }}>
      
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
        .identity-card {
          position: relative;
          height: 320px;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid #27272a;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          align-items: flex-end;
          text-decoration: none;
        }
        .identity-card img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1;
        }
        .identity-card:hover img {
          transform: scale(1.08);
        }
        .identity-card:hover {
          transform: translateY(-6px);
          border-color: #ED1C24;
          box-shadow: 0 14px 28px rgba(0,0,0,0.5);
        }
        .identity-overlay {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 24px 20px 18px 20px;
          background: linear-gradient(180deg, rgba(11,12,14,0) 0%, rgba(11,12,14,0.7) 40%, rgba(11,12,14,0.95) 100%);
        }
        .metric-box {
          background-color: #141518;
          border: 1px solid #27272a;
          border-radius: 18px;
          padding: 28px 18px;
          text-align: center;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .metric-box:hover {
          transform: translateY(-4px);
          border-color: #ED1C24;
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
      `}</style>

      {/* 1. HERO PRINCIPAL */}
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

        {/* 2 TARJETAS DE ELECCIÓN CON HOVER */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', textAlign: 'left' }}>

          {/* 0KM */}
          <div className="interactive-card">
            <div className="card-img-container">
              <span style={{ position: 'absolute', top: '14px', left: '14px', backgroundColor: '#ED1C24', color: '#ffffff', fontSize: '0.7rem', fontWeight: 600, padding: '4px 10px', borderRadius: '6px', letterSpacing: '0.5px', zIndex: 2 }}>
                0 KM
              </span>
              <img src="https://lh3.googleusercontent.com/d/1xViFbNOKlcqaUUt3cVh_DL7zWnyjII8I" alt="0km" />
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

          {/* Usados */}
          <div className="interactive-card">
            <div className="card-img-container">
              <span style={{ position: 'absolute', top: '14px', left: '14px', backgroundColor: '#ED1C24', color: '#ffffff', fontSize: '0.7rem', fontWeight: 600, padding: '4px 10px', borderRadius: '6px', letterSpacing: '0.5px', zIndex: 2 }}>
                SELECCIONADOS
              </span>
              <img src="https://lh3.googleusercontent.com/d/10u5Lg969bZ23-3j3P-zL2mPj10zBvhK_" alt="Usados" />
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

      {/* 2. NUEVA SECCIÓN DE IDENTIDAD: 3 FOTOS REALES CON HOVER INTERACTIVO */}
      <section style={{ maxWidth: '1200px', margin: '60px auto 0 auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#ED1C24', letterSpacing: '1.5px', textTransform: 'uppercase' }}>IDENTIDAD Y COMPROMISO</span>
          <h2 style={{ fontSize: '1.9rem', fontWeight: 600, margin: '6px 0 0 0' }}>El respaldo de una trayectoria real</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '22px' }}>
          
          {/* Foto 1: Garantía / Cromado */}
          <div className="identity-card">
            <img src="/calidad-usados.jpg" onError={(e) => { e.currentTarget.src = 'https://lh3.googleusercontent.com/d/10u5Lg969bZ23-3j3P-zL2mPj10zBvhK_'; }} alt="Garantía propia" />
            <div className="identity-overlay">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, margin: 0, color: '#ffffff' }}>Garantía propia en las unidades usadas</h3>
            </div>
          </div>

          {/* Foto 2: Frente Local / Atención */}
          <div className="identity-card">
            <img src="/local-frente.jpg" onError={(e) => { e.currentTarget.src = 'https://lh3.googleusercontent.com/d/1xViFbNOKlcqaUUt3cVh_DL7zWnyjII8I'; }} alt="Atención personalizada" />
            <div className="identity-overlay">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, margin: 0, color: '#ffffff' }}>Atención personalizada de principio a fin</h3>
            </div>
          </div>

          {/* Foto 3: Premios / Trayectoria */}
          <div className="identity-card">
            <img src="/premios-trayectoria.jpg" onError={(e) => { e.currentTarget.src = 'https://lh3.googleusercontent.com/d/13N24eZ776WbB7B9nLqF7P-Z_T4_0P6a_'; }} alt="Premios y trayectoria" />
            <div className="identity-overlay">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, margin: 0, color: '#ffffff' }}>+35 años de trayectoria en el sector automotor</h3>
            </div>
          </div>

        </div>
      </section>

      {/* 3. MÉTRICAS */}
      <section style={{ maxWidth: '1200px', margin: '50px auto 0 auto', padding: '0 20px' }}>
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

    </div>
  );
}
