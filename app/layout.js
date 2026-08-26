import { Inter } from 'next/font/google';

const inter = Inter({
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
    <html lang="es" className={inter.className}>
      <head>
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: inherit; font-weight: 400; background-color: #0B0C0E; color: #ffffff; -webkit-font-smoothing: antialiased; }
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
        
        {/* HEADER / NAVBAR FULL-WIDTH */}
        <header style={{ backgroundColor: '#0B0C0E', borderBottom: '1px solid #1F2024', position: 'sticky', top: 0, zIndex: 100, width: '100%' }}>
          <div style={{ width: '100%', padding: '14px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            
            {/* Logo solo (sin textos repetidos) */}
            <a href="/" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <img 
                src="/logo.png.png" 
                alt="Cogno Automotores" 
                style={{ height: '48px', width: 'auto', objectFit: 'contain' }} 
              />
            </a>

            {/* Navegación */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '26px', flexWrap: 'wrap' }}>
              <a href="/quienes-somos" style={{ color: '#d4d4d8', fontSize: '0.9rem', fontWeight: 500 }}>Quiénes somos</a>
              <a href="/" style={{ color: '#d4d4d8', fontSize: '0.9rem', fontWeight: 500 }}>Elegí tu vehículo</a>
              <a href="/0km" style={{ color: '#d4d4d8', fontSize: '0.9rem', fontWeight: 500 }}>Unidades 0Km</a>
              <a href="/usados" style={{ color: '#d4d4d8', fontSize: '0.9rem', fontWeight: 500 }}>Inventario de Usados</a>
              <a 
                href="https://wa.me/5493584029424?text=Hola!%20Quiero%20hacer%20una%20consulta" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ backgroundColor: '#ED1C24', color: '#ffffff', padding: '9px 20px', borderRadius: '8px', fontSize: '0.86rem', fontWeight: 600, letterSpacing: '0.3px' }}
              >
                WhatsApp
              </a>
            </nav>

          </div>
        </header>

        <main>{children}</main>

        {/* FOOTER FULL-WIDTH CON LOGO */}
        <footer style={{ backgroundColor: '#070709', borderTop: '1px solid #1F2024', padding: '48px 40px', marginTop: '70px', color: '#71717a', fontSize: '0.88rem' }}>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <img 
                src="/logo.png.png" 
                alt="Cogno Automotores" 
                style={{ height: '52px', width: 'auto', objectFit: 'contain' }} 
              />
              <div>
                <div style={{ fontWeight: 600, color: '#ffffff', fontSize: '1.05rem', marginBottom: '2px' }}>COGNO AUTOMOTORES S.A.</div>
                <div style={{ fontWeight: 300, color: '#a1a1aa' }}>La propuesta confiable — Río Cuarto, Córdoba</div>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontWeight: 600, color: '#ffffff', textTransform: 'uppercase', fontSize: '0.76rem', letterSpacing: '1px', marginBottom: '4px' }}>Contacto & Salón</div>
              <div style={{ fontWeight: 300, color: '#a1a1aa' }}>Av. Marcelo T. de Alvear 1580</div>
              <div style={{ color: '#ED1C24', fontWeight: 600, marginTop: '2px' }}>+54 9 3584 02-9424</div>
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}
