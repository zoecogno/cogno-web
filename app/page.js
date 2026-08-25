'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [featuredVehicles, setFeaturedVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/vehicles')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // Tomamos las primeras 3 unidades para la sección destacados
          setFeaturedVehicles(data.slice(0, 3));
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const metrics = [
    { number: '+35', label: 'Años de Trayectoria' },
    { number: '6 Meses', label: 'Garantía Total Escrita' },
    { number: '+1.000', label: 'Clientes que nos eligen' },
    { number: '100%', label: 'Gestoría Integral Propia' }
  ];

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
    }
  ];

  return (
    <div style={{ backgroundColor: '#0B0C0E', minHeight: '100vh', color: '#ffffff', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* 1. HERO / SELECTOR PRINCIPAL */}
      <section style={{ padding: '60px 16px 40px 16px', maxWidth: '1150px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(237, 28, 36, 0.12)', border: '1px solid rgba(237, 28, 36, 0.3)', color: '#ED1C24', padding: '6px 16px', borderRadius: '30px', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '20px' }}>
          LA PROPUESTA CONFIABLE
        </div>

        <h1 style={{ fontSize: '2.8rem', fontWeight: 900, letterSpacing: '-0.5px', margin: '0 0 14px 0', lineHeight: 1.15 }}>
          ¿0Km o Usado <span style={{ color: '#ED1C24' }}>seleccionado?</span>
        </h1>
        <p style={{ color: '#a1a1aa', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto 40px auto', lineHeight: 1.5 }}>
          Elegí la categoría de tu interés para explorar nuestras unidades disponibles y propuestas a medida.
        </p>

        {/* Las 2 Tarjetas Gigantes */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', textAlign: 'left' }}>
          
          {/* Card 0KM */}
          <div className="card-hover" style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '20px', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease' }}>
            <div style={{ position: 'relative', height: '240px', backgroundColor: '#0a0a0c', overflow: 'hidden' }}>
              <span style={{ position: 'absolute', top: '16px', left: '16px', backgroundColor: '#ED1C24', color: '#fff', fontSize: '0.72rem', fontWeight: 800, padding: '5px 12px', borderRadius: '6px', textTransform: 'uppercase', zIndex: 2, letterSpacing: '0.5px' }}>
                0 KM
              </span>
              <img 
                src="https://lh3.googleusercontent.com/d/1xViFbNOKlcqaUUt3cVh_DL7zWnyjII8I" 
                alt="Unidades 0KM" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '26px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 900, margin: '0 0 8px 0', letterSpacing: '0.5px' }}>UNIDADES 0KM</h2>
              <p style={{ fontSize: '0.9rem', color: '#a1a1aa', lineHeight: 1.5, margin: '0 0 24px 0', flexGrow: 1 }}>
                Comercializamos la gama completa de las principales marcas del país. Financiación de fábrica y entrega programada.
              </p>
              <a 
                href="/0km" 
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ED1C24', color: '#ffffff', textDecoration: 'none', padding: '13px 24px', borderRadius: '10px', fontWeight: 700, fontSize: '0.88rem', letterSpacing: '0.5px' }}
              >
                Explorar Marcas 0KM →
              </a>
            </div>
          </div>

          {/* Card Usados */}
          <div className="card-hover" style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '20px', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease' }}>
            <div style={{ position: 'relative', height: '240px', backgroundColor: '#0a0a0c', overflow: 'hidden' }}>
              <span style={{ position: 'absolute', top: '16px', left: '16px', backgroundColor: '#ED1C24', color: '#fff', fontSize: '0.72rem', fontWeight: 800, padding: '5px 12px', borderRadius: '6px', textTransform: 'uppercase', zIndex: 2, letterSpacing: '0.5px' }}>
                SELECCIONADOS
              </span>
              <img 
                src="https://lh3.googleusercontent.com/d/15T4Gc9YjvctQg4I9i0GOX1EPcGqQkWxD" 
                alt="Usados Seleccionados" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '26px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 900, margin: '0 0 8px 0', letterSpacing: '0.5px' }}>USADOS SELECCIONADOS</h2>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(237, 28, 36, 0.1)', border: '1px solid rgba(237, 28, 36, 0.25)', color: '#ED1C24', padding: '4px 10px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: 700, width: 'fit-content', marginBottom: '10px' }}>
                🛡️ 6 MESES DE GARANTÍA ESCRITA
              </div>
              <p style={{ fontSize: '0.9rem', color: '#a1a1aa', lineHeight: 1.5, margin: '0 0 24px 0', flexGrow: 1 }}>
                Unidades rigurosamente inspeccionadas, con historial verificado y entrega con toda la documentación lista.
              </p>
              <a 
                href="/usados" 
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ED1C24', color: '#ffffff', textDecoration: 'none', padding: '13px 24px', borderRadius: '10px', fontWeight: 700, fontSize: '0.88rem', letterSpacing: '0.5px' }}
              >
                Ver Catálogo de Usados →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 2. BARRA DE MÉTRICAS */}
      <section style={{ borderTop: '1px solid #1f2024', borderBottom: '1px solid #1f2024', backgroundColor: '#111215', padding: '36px 16px', margin: '40px 0 60px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', textAlign: 'center' }}>
          {metrics.map((m, i) => (
            <div key={i}>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#ED1C24', letterSpacing: '-0.5px', marginBottom: '4px' }}>
                {m.number}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#a1a1aa', fontWeight: 600 }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <main style={{ maxWidth: '1150px', margin: '0 auto', padding: '0 16px' }}>

        {/* 3. MINI CATÁLOGO: ÚLTIMOS INGRESOS */}
        <section style={{ marginBottom: '70px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#ED1C24', letterSpacing: '1px', textTransform: 'uppercase' }}>STOCK EN SALÓN</span>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 900, margin: '4px 0 0 0' }}>Últimos Usados Ingresados</h2>
            </div>
            <a href="/usados" style={{ color: '#ED1C24', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem' }}>
              Ver todo el stock completo →
            </a>
          </div>

          {loading ? (
            <p style={{ color: '#71717a' }}>Cargando vehículos destacados...</p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {featuredVehicles.map((v) => (
                <div key={v.id} style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ height: '190px', backgroundColor: '#0a0a0c', overflow: 'hidden' }}>
                    {v.photos && v.photos[0] ? (
                      <img src={v.photos[0]} alt={`${v.brand} ${v.line}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#52525b' }}>Sin foto</div>
                    )}
                  </div>
                  <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <h3 style={{ margin: '0 0 4px 0', fontSize: '1.15rem', fontWeight: 800, textTransform: 'uppercase' }}>{v.brand} {v.line}</h3>
                    <p style={{ margin: '0 0 12px 0', fontSize: '0.85rem', color: '#a1a1aa' }}>{v.version}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#71717a', borderTop: '1px solid #27272a', paddingTop: '10px', marginTop: 'auto', marginBottom: '14px' }}>
                      <span>📅 {v.year}</span>
                      <span>🛣️ {v.km ? `${Number(v.km).toLocaleString('es-AR')} km` : '—'}</span>
                    </div>
                    <a href={`/usados/${v.id}`} style={{ display: 'block', textAlign: 'center', backgroundColor: '#1f2024', color: '#ffffff', textDecoration: 'none', padding: '10px', borderRadius: '8px', fontWeight: 700, fontSize: '0.82rem', border: '1px solid #333' }}>
                      Ver Ficha y Fotos
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* 4. BANNER: FINANCIACIÓN Y CRÉDITOS PRENDARIOS */}
        <section style={{ background: 'linear-gradient(135deg, #18191D 0%, #0e0f11 100%)', border: '1px solid #2C2D31', borderRadius: '20px', padding: '40px 24px', textAlign: 'center', marginBottom: '70px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'relative', zIndex: 2, maxWidth: '720px', margin: '0 auto' }}>
            <span style={{ backgroundColor: 'rgba(237, 28, 36, 0.15)', color: '#ED1C24', border: '1px solid rgba(237, 28, 36, 0.3)', padding: '5px 14px', borderRadius: '20px', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', display: 'inline-block', marginBottom: '14px' }}>
              PLANES A MEDIDA
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 900, margin: '0 0 12px 0' }}>
              Financiación y Créditos Prendarios
            </h2>
            <p style={{ color: '#a1a1aa', fontSize: '0.95rem', lineHeight: 1.6, margin: '0 0 26px 0' }}>
              Te asesoramos para que encuentres la estructura de pago más conveniente: créditos prendarios, cuotas fijas en pesos y toma de tu vehículo usado como anticipo.
            </p>
            <a 
              href="https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20las%20opciones%20de%20financiación%20disponibles" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'inline-block', backgroundColor: '#ED1C24', color: '#ffffff', textDecoration: 'none', padding: '13px 28px', borderRadius: '10px', fontWeight: 700, fontSize: '0.9rem' }}
            >
              Consultar Opciones de Financiación →
            </a>
          </div>
        </section>

        {/* 5. PRUEBA SOCIAL / RESEÑAS DE GOOGLE */}
        <section style={{ marginBottom: '60px', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#ED1C24', letterSpacing: '1px', textTransform: 'uppercase' }}>TESTIMONIOS REALES</span>
          <h2 style={{ fontSize: '1.9rem', fontWeight: 900, margin: '4px 0 32px 0' }}>Opiniones de Quienes nos Eligen</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '18px', textAlign: 'left', marginBottom: '32px' }}>
            {reviews.map((r, i) => (
              <div key={i} style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '14px', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <p style={{ fontSize: '0.86rem', color: '#d4d4d8', lineHeight: 1.5, margin: '0 0 16px 0', fontStyle: 'italic' }}>
                  "{r.text}"
                </p>
                <div>
                  <div style={{ color: '#f59e0b', fontSize: '0.85rem', marginBottom: '6px' }}>★★★★★</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontWeight: 800, color: '#4285F4', fontSize: '0.95rem' }}>G</span>
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
            style={{ display: 'inline-block', backgroundColor: '#141518', color: '#d4d4d8', border: '1px solid #3f3f46', textDecoration: 'none', padding: '10px 22px', borderRadius: '8px', fontWeight: 700, fontSize: '0.85rem' }}
          >
            Ver más opiniones en Google Maps ↗
          </a>
        </section>

      </main>

      {/* Microanimación de hover */}
      <style jsx>{`
        .card-hover:hover {
          transform: translateY(-4px);
          border-color: #ED1C24 !important;
        }
      `}</style>

    </div>
  );
}
