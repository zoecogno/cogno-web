import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Cogno Automotores — La propuesta confiable',
  description: 'Venta de vehículos 0km multimarca y usados seleccionados garantizados.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={poppins.className}>
      <head>
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: inherit; background-color: #0B0C0E; color: #ffffff; }
          a { text-decoration: none; }
          @keyframes marqueeAnim {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .marquee-content {
            display: inline-flex;
            animation: marqueeAnim 25s linear infinite;
            will-change: transform;
          }
        `}</style>
      </head>
      <body>
        
        {/* HEADER / NAVBAR */}
        <header style={{ backgroundColor: '#0B0C0E', borderBottom: '1px solid #1F2024', position: 'sticky', top: 0, zIndex: 100 }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            
            {/* Logo */}
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img 
                src="/logo.png" 
                alt="Cogno Automotores" 
                style={{ height: '36px', width: 'auto' }} 
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.5px', lineHeight: 1 }}>
                  COGNO <span style={{ color: '#ED1C24' }}>AUTOMOTORES</span>
                </span>
                <span style={{ fontSize: '0.62rem', color: '#a1a1aa', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: '3px' }}>
                  La propuesta confiable
                </span>
              </div>
            </a>

            {/* Navegación */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '22px', flexWrap: 'wrap' }}>
              <a href="/quienes-somos" style={{ color: '#d4d4d8', fontSize: '0.86rem', fontWeight: 500 }}>Quiénes somos</a>
              <a href="/" style={{ color: '#d4d4d8', fontSize: '0.86rem', fontWeight: 500 }}>Elegí tu vehículo</a>
              <a href="/0km" style={{ color: '#d4d4d8', fontSize: '0.86rem', fontWeight: 500 }}>Unidades 0Km</a>
              <a href="/usados" style={{ color: '#d4d4d8', fontSize: '0.86rem', fontWeight: 500 }}>Inventario de Usados</a>
              <a 
                href="https://wa.me/5493584029424?text=Hola!%20Quiero%20hacer%20una%20consulta" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ backgroundColor: '#ED1C24', color: '#ffffff', padding: '8px 18px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.3px' }}
              >
                WhatsApp
              </a>
            </nav>

          </div>
        </header>

        <main>{children}</main>

        {/* FOOTER */}
        <footer style={{ backgroundColor: '#070709', borderTop: '1px solid #1F2024', padding: '40px 20px', marginTop: '60px', color: '#71717a', fontSize: '0.85rem' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '1.05rem', marginBottom: '4px' }}>COGNO AUTOMOTORES</div>
              <div>La propuesta confiable — Río Cuarto, Córdoba</div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontWeight: 600, color: '#ffffff', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px', marginBottom: '4px' }}>Contacto & Salón</div>
              <div>Av. Marcelo T. de Alvear 1580</div>
              <div style={{ color: '#ED1C24', fontWeight: 600, marginTop: '2px' }}>+54 9 3584 02-9424</div>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
