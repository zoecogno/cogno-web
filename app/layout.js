import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: inherit; background-color: #0B0C0E; color: #ffffff; -webkit-font-smoothing: antialiased; overflow-x: hidden; }
          a { text-decoration: none; }

          .nav-bar-container {
            width: 100%;
            max-width: 1480px;
            margin: 0 auto;
            padding: 16px 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 16px;
          }

          .nav-links-box {
            display: flex;
            align-items: center;
            gap: 28px;
            flex-wrap: wrap;
          }

          .nav-link {
            color: #e4e4e7;
            font-size: 0.98rem;
            font-weight: 600;
            transition: color 0.2s ease;
          }
          .nav-link:hover {
            color: #ED1C24;
          }

          @media (max-width: 768px) {
            .nav-bar-container {
              justify-content: center;
              flex-direction: column;
              text-align: center;
              gap: 14px;
            }
            .nav-links-box {
              justify-content: center;
              gap: 16px;
            }
            .nav-link {
              font-size: 0.88rem;
            }
          }

          .whatsapp-float {
            position: fixed;
            bottom: 24px;
            right: 24px;
            background-color: #25D366;
            color: #ffffff;
            width: 58px;
            height: 58px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 8px 24px rgba(37, 211, 102, 0.45);
            z-index: 9999;
          }
        `}</style>
      </head>
      <body>
        
        {/* NAVBAR */}
        <header style={{ backgroundColor: '#0B0C0E', borderBottom: '1px solid #1F2024', position: 'sticky', top: 0, zIndex: 100 }}>
          <div className="nav-bar-container">
            <a href="/" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <img src="/logo.png.png" alt="Cogno Automotores" style={{ height: '48px', width: 'auto', objectFit: 'contain' }} />
            </a>

            <nav className="nav-links-box">
              <a href="/quienes-somos" className="nav-link">Quiénes somos</a>
              <a href="/" className="nav-link">Elegí tu vehículo</a>
              <a href="/0km" className="nav-link">Unidades 0Km</a>
              <a href="/usados" className="nav-link">Inventario de Usados</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        {/* BOTÓN WHATSAPP FLOTANTE */}
        <a href="https://wa.me/5493584029424?text=Hola!%20Quiero%20hacer%20una%20consulta" target="_blank" rel="noopener noreferrer" className="whatsapp-float">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.838.814 2.796.814 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.768-5.766zm9.969 5.766c0 5.485-4.467 9.949-9.97 9.949-1.677 0-3.25-.42-4.633-1.156l-5.397 1.413 1.442-5.263c-.834-1.441-1.312-3.109-1.312-4.943 0-5.485 4.467-9.949 9.97-9.949 5.503 0 9.97 4.464 9.97 9.949z" />
          </svg>
        </a>

        {/* FOOTER */}
        <footer style={{ backgroundColor: '#070709', borderTop: '1px solid #1F2024', padding: '40px 24px', marginTop: '70px' }}>
          <div style={{ maxWidth: '1480px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <img src="/logo.png.png" alt="Cogno" style={{ height: '48px', width: 'auto' }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: '1.05rem', color: '#ffffff' }}>COGNO AUTOMOTORES S.A.</div>
                <div style={{ fontWeight: 300, color: '#a1a1aa', fontSize: '0.88rem' }}>La propuesta confiable — Río Cuarto, Córdoba</div>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontWeight: 700, fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', color: '#ffffff' }}>Contacto & Salón</div>
              <div style={{ fontWeight: 300, color: '#a1a1aa', fontSize: '0.9rem' }}>Av. Marcelo T. de Alvear 1580</div>
              <div style={{ color: '#ED1C24', fontWeight: 700, fontSize: '0.95rem' }}>+54 9 3584 02-9424</div>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
