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
          
          /* BOTÓN FLOTANTE WHATSAPP */
          .whatsapp-float {
            position: fixed;
            bottom: 26px;
            right: 26px;
            background-color: #25D366;
            color: #ffffff;
            width: 58px;
            height: 58px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4);
            z-index: 9999;
            transition: transform 0.25s ease, box-shadow 0.25s ease;
          }
          .whatsapp-float:hover {
            transform: scale(1.1);
            box-shadow: 0 12px 30px rgba(37, 211, 102, 0.6);
          }
        `}</style>
      </head>
      <body>
        
        {/* HEADER / NAVBAR FULL-WIDTH */}
        <header style={{ backgroundColor: '#0B0C0E', borderBottom: '1px solid #1F2024', position: 'sticky', top: 0, zIndex: 100, width: '100%' }}>
          <div style={{ width: '100%', padding: '14px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            
            {/* Logo solo */}
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

        {/* BOTÓN FLOTANTE DE WHATSAPP GLOBAL */}
        <a 
          href="https://wa.me/5493584029424?text=Hola!%20Quiero%20hacer%20una%20consulta" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="whatsapp-float"
          aria-label="Contactar por WhatsApp"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.838.814 2.796.814 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.768-5.766zm9.969 5.766c0 5.485-4.467 9.949-9.97 9.949-1.677 0-3.25-.42-4.633-1.156l-5.397 1.413 1.442-5.263c-.834-1.441-1.312-3.109-1.312-4.943 0-5.485 4.467-9.949 9.97-9.949 5.503 0 9.97 4.464 9.97 9.949z" />
          </svg>
        </a>

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
