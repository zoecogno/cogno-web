'use client';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#0B0C0E', minHeight: '85vh', color: '#ffffff', padding: '50px 20px 80px 20px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>

        {/* Badge superior */}
        <div style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'rgba(237, 28, 36, 0.1)', border: '1px solid rgba(237, 28, 36, 0.3)', color: '#ED1C24', padding: '5px 16px', borderRadius: '30px', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '20px' }}>
          LA PROPUESTA CONFIABLE
        </div>

        {/* Título Principal Fino */}
        <h1 style={{ fontSize: '2.6rem', fontWeight: 600, margin: '0 0 14px 0', letterSpacing: '-0.5px', lineHeight: 1.2 }}>
          ¿0Km o Usado <span style={{ color: '#ED1C24', fontWeight: 600 }}>seleccionado?</span>
        </h1>

        {/* Subtítulo liviano */}
        <p style={{ fontSize: '0.95rem', color: '#a1a1aa', maxWidth: '620px', margin: '0 auto 50px auto', lineHeight: 1.6, fontWeight: 300 }}>
          Elegí la categoría de tu interés para explorar nuestras unidades disponibles y propuestas a medida.
        </p>

        {/* Las 2 Tarjetas Principales */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', textAlign: 'left' }}>

          {/* Tarjeta 0KM */}
          <div style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '20px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', height: '240px', backgroundColor: '#070709', overflow: 'hidden' }}>
              <span style={{ position: 'absolute', top: '14px', left: '14px', backgroundColor: '#ED1C24', color: '#ffffff', fontSize: '0.7rem', fontWeight: 600, padding: '4px 10px', borderRadius: '6px', letterSpacing: '0.5px', zIndex: 2 }}>
                0 KM
              </span>
              <img 
                src="https://lh3.googleusercontent.com/d/1xViFbNOKlcqaUUt3cVh_DL7zWnyjII8I" 
                alt="0km" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', margin: '0 0 10px 0', letterSpacing: '0.5px' }}>
                UNIDADES 0KM
              </h2>
              <p style={{ fontSize: '0.86rem', color: '#a1a1aa', lineHeight: 1.5, margin: '0 0 24px 0', flexGrow: 1, fontWeight: 300 }}>
                Comercializamos la gama completa de las principales marcas del país. Financiación de fábrica y entrega programada.
              </p>
              <a 
                href="/0km" 
                style={{ display: 'block', textAlign: 'center', backgroundColor: '#ED1C24', color: '#ffffff', padding: '13px', borderRadius: '10px', fontWeight: 500, fontSize: '0.88rem' }}
              >
                Explorar Marcas 0KM →
              </a>
            </div>
          </div>

          {/* Tarjeta Usados */}
          <div style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '20px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', height: '240px', backgroundColor: '#070709', overflow: 'hidden' }}>
              <span style={{ position: 'absolute', top: '14px', left: '14px', backgroundColor: '#ED1C24', color: '#ffffff', fontSize: '0.7rem', fontWeight: 600, padding: '4px 10px', borderRadius: '6px', letterSpacing: '0.5px', zIndex: 2 }}>
                SELECCIONADOS
              </span>
              <img 
                src="https://lh3.googleusercontent.com/d/10u5Lg969bZ23-3j3P-zL2mPj10zBvhK_" 
                alt="Usados" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
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
                Unidades rigurosamente inspeccionadas, con historial verificado y entrega con toda la documentación lista.
              </p>
              <a 
                href="/usados" 
                style={{ display: 'block', textAlign: 'center', backgroundColor: '#ED1C24', color: '#ffffff', padding: '13px', borderRadius: '10px', fontWeight: 500, fontSize: '0.88rem' }}
              >
                Ver Catálogo de Usados →
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
