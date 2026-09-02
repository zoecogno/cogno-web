'use client';

import { useState } from 'react';

export default function RootLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <html lang="es">
   <head>
  <title>Cogno Automotores | 0km y Usados Seleccionados en Río Cuarto</title>
  <meta name="description" content="Concesionaria líder en Río Cuarto. Venta de 0km de todas las marcas y amplia selección de usados garantizados por 6 meses. Financiación a medida y toma de usados." />
  <meta name="google-site-verification" content="h7YIJ4ZDqRDbo5yc44yJp6MzjsIerURzPM12F00fl9k" />
  <meta name="keywords" content="Cogno Automotores, Autos 0km Río Cuarto, 0km multimarca Río Cuarto, Camionetas 0km Río Cuarto, Comprar 0km Río Cuarto, Pickups 0km Río Cuarto, Autos usados Río Cuarto, Usados seleccionados Río Cuarto, Concesionaria Río Cuarto, Venta de autos 0km y usados, Venta de autos Río Cuarto,Comprar autos Río Cuarto, Financiación de autos Río Cuarto, Toma de usados Río Cuarto, Permuta de autos Río Cuarto, Autos con garantía Río Cuarto, Pickups Río Cuarto, Toyota Río Cuarto, Ford Río Cuarto, Volkswagen Río Cuarto, Chevrolet Río Cuarto, Fiat Río Cuarto, Peugeot Río Cuarto, Concesionarias en Córdoba, Autos usados Córdoba sur" /> 
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" href="/icon.png?v=10" type="image/png" />

  {/* OpenGraph / WhatsApp / Redes Sociales */}
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="es_AR" />
  <meta property="og:url" content="https://cognoautomotores.com.ar" />
  <meta property="og:site_name" content="Cogno Automotores" />
  <meta property="og:title" content="Cogno Automotores | 0km y Usados Seleccionados" />
  <meta property="og:description" content="Tu próximo vehículo lo encontrás acá. Entrega inmediata, financiación y 6 meses de garantía en usados." />
  <meta property="og:image" content="https://cognoautomotores.com.ar/logo-black.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Cogno Automotores | 0km y Usados Seleccionados en Río Cuarto" />
  <meta name="twitter:description" content="Venta de vehículos 0km de todas las marcas y usados garantizados en Río Cuarto." />
  <meta name="twitter:image" content="https://cognoautomotores.com.ar/logo-black.png" />
</head>
      <body style={{ margin: 0, backgroundColor: '#0B0C0E', color: '#ffffff', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        
        {/* ESTILOS GLOBALES DE NAVBAR Y FOOTER */}
        <style>{`
          .nav-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 1540px;
            margin: 0 auto;
            padding: 16px 24px;
          }
          .nav-links-desktop {
            display: flex;
            align-items: center;
            gap: 32px;
          }
          .nav-item {
            color: #d4d4d8;
            text-decoration: none;
            font-size: 1.05rem;
            font-weight: 500;
            transition: color 0.2s ease;
          }
          .nav-item:hover {
            color: #ED1C24;
          }
          .hamburger-btn {
            display: none;
            background: transparent;
            border: none;
            color: #ffffff;
            font-size: 1.8rem;
            cursor: pointer;
            padding: 4px;
          }

          /* FOOTER STYLES */
          .footer-grid {
            display: grid;
            grid-template-columns: 1.5fr 1fr 1fr;
            gap: 40px;
            max-width: 1400px;
            margin: 0 auto;
            padding: 50px 24px 30px 24px;
          }
          .footer-link {
            color: #a1a1aa;
            text-decoration: none;
            font-size: 0.95rem;
            display: inline-block;
            margin-bottom: 10px;
            transition: color 0.2s ease;
          }
          .footer-link:hover {
            color: #ED1C24;
          }

          /* RESPONSIVE MÓVIL */
          @media (max-width: 860px) {
            .nav-links-desktop {
              display: none;
            }
            .hamburger-btn {
              display: block;
            }
            .mobile-menu-drawer {
              display: flex;
              flex-direction: column;
              background-color: #141518;
              border-bottom: 1px solid #27272a;
              padding: 20px 24px;
              gap: 18px;
            }
            .mobile-menu-drawer .nav-item {
              font-size: 1.15rem;
              padding: 8px 0;
              border-bottom: 1px solid #1f2024;
            }
            .footer-grid {
              grid-template-columns: 1fr;
              gap: 30px;
              padding: 40px 20px 30px 20px;
            }
          }
        `}</style>

        {/* HEADER / NAVBAR */}
        <header style={{ backgroundColor: 'rgba(11, 12, 14, 0.95)', borderBottom: '1px solid #27272a', position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(10px)' }}>
          <div className="nav-container">
            
            {/* Logo Navbar */}
            <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img 
                src="/logo.png.png" 
                alt="Cogno Automotores" 
                style={{ height: '42px', width: 'auto', display: 'block' }} 
              />
            </a>

            {/* Links de navegación en PC */}
            <nav className="nav-links-desktop">
              <a href="/" className="nav-item">Home</a>
              <a href="/quienes-somos" className="nav-item">¿Quiénes somos?</a>
              <a href="/0km" className="nav-item">Unidades 0KM</a>
              <a href="/usados" className="nav-item">Inventario de Usados</a>
            </nav>

            {/* Botón menú hamburguesa en celulares */}
            <button className="hamburger-btn" onClick={toggleMenu} aria-label="Abrir Menú">
              {mobileMenuOpen ? '✕' : '☰'}
            </button>

          </div>

          {/* Menú desplegable móvil */}
          {mobileMenuOpen && (
            <div className="mobile-menu-drawer">
              <a href="/" className="nav-item" onClick={closeMenu}>Home</a>
              <a href="/quienes-somos" className="nav-item" onClick={closeMenu}>¿Quiénes somos?</a>
              <a href="/0km" className="nav-item" onClick={closeMenu}>Unidades 0KM</a>
              <a href="/usados" className="nav-item" onClick={closeMenu}>Inventario de Usados</a>
            </div>
          )}
        </header>

        {/* CONTENIDO DE LA PÁGINA */}
        <main>{children}</main>

        {/* FOOTER GENERAL */}
        <footer style={{ backgroundColor: '#070709', borderTop: '1px solid #27272a', marginTop: '40px' }}>
          <div className="footer-grid">
            
            {/* Columna 1: Marca & Descripción */}
            <div>
              <img 
                src="/logo.png.png" 
                alt="Cogno Automotores" 
                style={{ height: '48px', width: 'auto', marginBottom: '16px', display: 'block' }} 
              />
              <p style={{ color: '#a1a1aa', fontSize: '0.92rem', lineHeight: 1.6, maxWidth: '380px', margin: 0, fontWeight: 300 }}>
                Más de 35 años brindando confianza, respaldo y garantía en la compra y venta de vehículos nuevos y usados seleccionados en Río Cuarto y la región.
              </p>
            </div>

            {/* Columna 2: Navegación Rápida */}
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ED1C24', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
                NAVEGACIÓN
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <a href="/" className="footer-link">Home</a>
                <a href="/quienes-somos" className="footer-link">¿Quiénes somos?</a>
                <a href="/0km" className="footer-link">Unidades 0KM</a>
                <a href="/usados" className="footer-link">Catálogo de Usados</a>
              </div>
            </div>

            {/* Columna 3: Contacto & Ubicación */}
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ED1C24', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
                CONTACTO
              </div>
              <p style={{ color: '#d4d4d8', fontSize: '0.92rem', margin: '0 0 8px 0' }}>
                 Av. Marcelo T. de Alvear 1580
              </p>
              <p style={{ color: '#a1a1aa', fontSize: '0.86rem', margin: '0 0 14px 0' }}>
                Río Cuarto, Córdoba, Argentina
              </p>
              <p style={{ color: '#d4d4d8', fontSize: '0.92rem', margin: '0 0 8px 0' }}>
                 WhatsApp Comercial: +54 9 358 402-9424
              </p>
              <p style={{ color: '#a1a1aa', fontSize: '0.86rem', margin: 0 }}>
                Lunes a Viernes de 9:00 a 18:00 hs
              </p>
            </div>

          </div>

          {/* Barra inferior de Copyright */}
          <div style={{ borderTop: '1px solid #1a1b1e', padding: '18px 24px', textAlign: 'center', color: '#71717a', fontSize: '0.82rem' }}>
            © {new Date().getFullYear()} Cogno Automotores S.A. Todos los derechos reservados.
          </div>
        </footer>

        {/* BOTÓN FLOTANTE WHATSAPP */}
        <a 
          href="https://wa.me/5493584029424?text=Hola!%20Quiero%20hacer%20una%20consulta" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            backgroundColor: '#25D366',
            color: '#ffffff',
            width: '58px',
            height: '58px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
            zIndex: 999,
            textDecoration: 'none'
          }}
          aria-label="Contactar por WhatsApp"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </a>

      </body>
    </html>
  );
}
