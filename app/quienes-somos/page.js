'use client';

export default function QuienesSomos() {
  return (
    <div style={{ backgroundColor: '#0B0C0E', minHeight: '100vh', color: '#ffffff', paddingBottom: '80px' }}>
      
      {/* 1. ENCABEZADO INSTITUCIONAL */}
      <section style={{ padding: '40px 20px 20px 20px', textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '16px' }}>
          <img 
            src="/logo.png.png" 
            alt="Cogno Automotores" 
            style={{ height: '75px', width: 'auto', display: 'inline-block' }}
          />
        </div>

        <h1 style={{ fontSize: '2.8rem', fontWeight: 600, margin: '0 0 16px 0', color: '#ffffff' }}>
          ¿Quiénes somos?
        </h1>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(237, 28, 36, 0.08)', border: '1px solid rgba(237, 28, 36, 0.4)', color: '#ED1C24', padding: '8px 20px', borderRadius: '30px', fontSize: '0.84rem', fontWeight: 700, letterSpacing: '0.8px', marginBottom: '24px', textTransform: 'uppercase' }}>
          <span>🛡️</span>
          <span>TRAYECTORIA Y COMPROMISO</span>
        </div>

        <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <p style={{ fontSize: '1.05rem', color: '#ffffff', lineHeight: 1.7, margin: 0, fontWeight: 300 }}>
            Somos <strong style={{ fontWeight: 600 }}>Cogno Automotores S.A.</strong>, una empresa familiar con más de 35 años de trayectoria en el sector automotor. Nos dedicamos a la venta de vehículos nuevos y usados, con un amplio stock y una destacada variedad de pick-ups.
          </p>
          <p style={{ fontSize: '1.05rem', color: '#ffffff', lineHeight: 1.7, margin: 0, fontWeight: 300 }}>
            <strong style={{ fontWeight: 600 }}>Nuestra historia nos respalda</strong>, y seguimos trabajando cada día para ofrecer un servicio responsable, cercano y a la altura de las expectativas de quienes nos eligen.
          </p>
        </div>

      </section>

      {/* 2. FOTO DEL SALÓN */}
      <div style={{ maxWidth: '1200px', margin: '30px auto', padding: '0 20px' }}>
        <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid #27272a', backgroundColor: '#070709' }}>
          <img 
            src="/frente-2026.jpg.jpg" 
            alt="Salón Cogno Automotores" 
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </div>

    </div>
  );
}
