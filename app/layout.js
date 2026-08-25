export const metadata = {
  title: 'Cogno Automotores | La Propuesta Confiable',
  description: 'Venta de unidades 0km y usados seleccionados en Río Cuarto. Financiación a medida, toma de usados y garantía.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#0B0C0E', color: '#ffffff', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {/* Barra superior de navegación */}
        <nav style={{ borderBottom: '1px solid #1f2024', backgroundColor: '#111215', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <a href="/" style={{ textDecoration: 'none', color: '#ffffff', fontSize: '1.25rem', fontWeight: 900, letterSpacing: '1px' }}>
              COGNO <span style={{ color: '#ED1C24' }}>AUTOMOTORES</span>
            </a>
            <div style={{ fontSize: '0.72rem', color: '#71717a' }}>La propuesta confiable</div>
          </div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a href="/0km" style={{ color: '#d4d4d8', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }}>0KM</a>
            <a href="/usados" style={{ color: '#d4d4d8', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }}>Usados</a>
            <a href="/contacto" style={{ color: '#d4d4d8', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }}>Contacto</a>
            <a 
              href="https://wa.me/5493584029424" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ backgroundColor: '#ED1C24', color: '#fff', textDecoration: 'none', padding: '8px 14px', borderRadius: '8px', fontWeight: 700, fontSize: '0.8rem' }}
            >
              WhatsApp
            </a>
          </div>
        </nav>

        {children}

        {/* Pie de página */}
        <footer style={{ borderTop: '1px solid #1f2024', backgroundColor: '#111215', padding: '30px 16px', textAlign: 'center', marginTop: '60px' }}>
          <div style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '4px' }}>COGNO AUTOMOTORES</div>
          <div style={{ color: '#71717a', fontSize: '0.85rem', marginBottom: '14px' }}>La propuesta confiable</div>
          <div style={{ color: '#52525b', fontSize: '0.75rem' }}>© {new Date().getFullYear()} Cogno Automotores. Todos los derechos reservados.</div>
        </footer>
      </body>
    </html>
  );
}
