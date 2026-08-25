'use client';

const brands = [
  {
    name: 'VOLKSWAGEN',
    desc: 'Tecnología de avanzada, confort de marcha y robustez garantizada en cada modelo de la línea alemana.',
    tag: 'GAMA COMPLETA',
    img: 'https://lh3.googleusercontent.com/d/10u5Lg969bZ23-3j3P-zL2mPj10zBvhK_'
  },
  {
    name: 'TOYOTA',
    desc: 'Líder indiscutido en durabilidad, valor de reventa superior y la máxima confiabilidad mecánica del mercado.',
    tag: 'GAMA COMPLETA',
    img: 'https://lh3.googleusercontent.com/d/1xViFbNOKlcqaUUt3cVh_DL7zWnyjII8I'
  },
  {
    name: 'FORD',
    desc: 'Potencia pura, equipamiento de seguridad de última generación y toda la versatilidad de la Raza Fuerte.',
    tag: 'GAMA COMPLETA',
    img: 'https://lh3.googleusercontent.com/d/13N24eZ776WbB7B9nLqF7P-Z_T4_0P6a_'
  },
  {
    name: 'CHEVROLET',
    desc: 'Conectividad total OnStar, diseño moderno y motores turbo altamente eficientes para todo tipo de uso.',
    tag: 'GAMA COMPLETA',
    img: 'https://lh3.googleusercontent.com/d/1_T_XQJ6_T5y5v2eL4-N-N-Z9L8_K0_1_'
  },
  {
    name: 'FIAT',
    desc: 'Diseño italiano, excelente rendimiento de combustible, innovación y la mejor relación precio-producto.',
    tag: 'GAMA COMPLETA',
    img: 'https://lh3.googleusercontent.com/d/15T4Gc9YjvctQg4I9i0GOX1EPcGqQkWxD'
  },
  {
    name: 'RENAULT',
    desc: 'Espacio interior insuperable, suspensión adaptada a nuestros caminos y gran economía de mantenimiento.',
    tag: 'GAMA COMPLETA',
    img: 'https://lh3.googleusercontent.com/d/16A2_Z7X_Q8_P0_T-Z1_K2_N4_M9_V8_0'
  },
  {
    name: 'PEUGEOT',
    desc: 'Elegancia distintiva, puesto de conducción i-Cockpit de vanguardia y tecnología de confort premium.',
    tag: 'GAMA COMPLETA',
    img: 'https://lh3.googleusercontent.com/d/17B3_Z8Y_R9_Q1_U-a2_L3_O5_N0_W9_1'
  },
  {
    name: 'CITROËN',
    desc: 'Confort de marcha inigualable, diseño audaz y soluciones prácticas pensadas para el disfrute familiar.',
    tag: 'GAMA COMPLETA',
    img: 'https://lh3.googleusercontent.com/d/18C4_a9Z_S0_R2_V-b3_M4_P6_O1_X0_2'
  },
  {
    name: 'JEEP',
    desc: 'Capacidad todoterreno legendaria, aventura sin límites y un nivel de sofisticación y confort superior.',
    tag: 'GAMA COMPLETA',
    img: 'https://lh3.googleusercontent.com/d/19D5_b0a_T1_S3_W-c4_N5_Q7_P2_Y1_3'
  },
  {
    name: 'RAM',
    desc: 'El máximo estándar en potencia, lujo, espacio interior y capacidad de remolque para trabajo y placer.',
    tag: 'GAMA COMPLETA',
    img: 'https://lh3.googleusercontent.com/d/10E6_c1b_U2_T4_X-d5_O6_R8_Q3_Z2_4'
  },
  {
    name: 'NISSAN',
    desc: 'Ingeniería japonesa de alta durabilidad, asistentes inteligentes de conducción e innovador confort de marcha.',
    tag: 'GAMA COMPLETA',
    img: 'https://lh3.googleusercontent.com/d/11F7_d2c_V3_U5_Y-e6_P7_S9_R4_a3_5'
  },
  {
    name: 'HONDA',
    desc: 'Máxima precisión mecánica, seguridad avanzada Honda Sensing y una experiencia de manejo única.',
    tag: 'GAMA COMPLETA',
    img: 'https://lh3.googleusercontent.com/d/12G8_e3d_W4_V6_Z-f7_Q8_T0_S5_b4_6'
  },
  {
    name: 'BMW',
    desc: 'El placer supremo de conducir: dinamismo inigualable, ingeniería alemana y lujo en cada detalle.',
    tag: 'GAMA PREMIUM',
    img: 'https://lh3.googleusercontent.com/d/13H9_f4e_X5_W7_a-g8_R9_U1_T6_c5_7'
  },
  {
    name: 'MERCEDES-BENZ',
    desc: 'Elegancia atemporal, seguridad de referencia mundial e innovación tecnológica de clase ejecutiva.',
    tag: 'GAMA PREMIUM',
    img: 'https://lh3.googleusercontent.com/d/14I0_g5f_Y6_X8_b-h9_S0_V2_U7_d6_8'
  },
  {
    name: 'AUDI',
    desc: 'A la vanguardia de la tecnología con tracción quattro, habitáculo digital y acabados de precisión.',
    tag: 'GAMA PREMIUM',
    img: 'https://lh3.googleusercontent.com/d/15J1_h6g_Z7_Y9_c-i0_T1_W3_V8_e7_9'
  },
  {
    name: 'BYD',
    desc: 'Líder global en movilidad eléctrica e híbrida inteligente con baterías Blade de máxima seguridad.',
    tag: 'NUEVA GENERACIÓN',
    img: 'https://lh3.googleusercontent.com/d/16K2_i7h_a8_Z0_d-j1_U2_X4_W9_f8_0'
  }
];

const marqueeBrands = [
  'AUDI', 'BYD', 'BAIC', 'TOYOTA', 'FORD', 'CHEVROLET', 'FIAT', 'RENAULT',
  'PEUGEOT', 'CITROËN', 'JEEP', 'RAM', 'NISSAN', 'HONDA', 'BMW', 'MERCEDES-BENZ'
];

export default function Catalogo0KM() {
  return (
    <div style={{ backgroundColor: '#0B0C0E', minHeight: '100vh', color: '#ffffff', paddingBottom: '60px' }}>

      {/* 1. HERO */}
      <section style={{ textAlign: 'center', padding: '60px 20px 30px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.8rem', fontWeight: 900, margin: '0 0 16px 0', letterSpacing: '-0.5px', lineHeight: 1.2 }}>
          Estás a un click de tu próximo <span style={{ color: '#ED1C24' }}>0Km</span>
        </h1>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(237, 28, 36, 0.1)', border: '1px solid rgba(237, 28, 36, 0.3)', color: '#ED1C24', padding: '6px 16px', borderRadius: '30px', fontSize: '0.78rem', fontWeight: 800, letterSpacing: '1px', marginBottom: '20px' }}>
          OPCIONES CON FINANCIACIÓN DIRECTA DE FÁBRICA
        </div>

        <p style={{ fontSize: '1rem', color: '#a1a1aa', margin: '0 auto', maxWidth: '780px', lineHeight: 1.6 }}>
          Comercializamos las principales marcas del país. Asesoramiento comercial, financiación a medida, gestoría propia y toma de tu usado.
        </p>
      </section>

      {/* 2. CINTA MARQUESINA DE MARCAS */}
      <div style={{ width: '100%', backgroundColor: '#0f1013', borderTop: '1px solid #1F2024', borderBottom: '1px solid #1F2024', padding: '14px 0', overflow: 'hidden', whiteSpace: 'nowrap', marginBottom: '50px' }}>
        <div style={{ display: 'inline-block', animation: 'marquee 28s linear infinite' }}>
          {marqueeBrands.concat(marqueeBrands).map((b, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', margin: '0 20px', fontSize: '0.82rem', fontWeight: 800, color: '#71717a', letterSpacing: '2px' }}>
              {b} <span style={{ color: '#ED1C24', marginLeft: '20px', fontSize: '0.6rem' }}>●</span>
            </span>
          ))}
        </div>
      </div>

      {/* 3. GRILLA DE 16 MARCAS (ANCHO COMPLETO) */}
      <main style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))', gap: '26px' }}>
          {brands.map((b, i) => (
            <div 
              key={i} 
              style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '18px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ position: 'relative', height: '210px', backgroundColor: '#0a0a0c', overflow: 'hidden' }}>
                <span style={{ position: 'absolute', top: '14px', right: '14px', backgroundColor: 'rgba(0,0,0,0.75)', color: '#ED1C24', border: '1px solid rgba(237, 28, 36, 0.4)', fontSize: '0.68rem', fontWeight: 800, padding: '4px 10px', borderRadius: '6px', letterSpacing: '0.5px', zIndex: 2 }}>
                  {b.tag}
                </span>
                <img src={b.img} alt={b.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#ffffff', margin: '0 0 8px 0', letterSpacing: '0.5px' }}>
                  {b.name}
                </h3>
                <p style={{ fontSize: '0.86rem', color: '#a1a1aa', lineHeight: 1.5, margin: '0 0 22px 0', flexGrow: 1 }}>
                  {b.desc}
                </p>
                <a 
                  href={`https://wa.me/5493584029424?text=Hola!%20Quiero%20consultar%20por%20unidades%200Km%20de%20la%20marca%20${encodeURIComponent(b.name)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ display: 'block', textAlign: 'center', backgroundColor: '#ED1C24', color: '#ffffff', textDecoration: 'none', padding: '12px', borderRadius: '10px', fontWeight: 800, fontSize: '0.84rem', letterSpacing: '0.5px' }}
                >
                  Consultar por {b.name} →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 4. SECCIÓN ¿POR QUÉ ELEGIRNOS? (CON ÍCONOS VECTORIALES) */}
        <section style={{ marginTop: '90px', borderTop: '1px solid #1F2024', paddingTop: '60px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#ED1C24', letterSpacing: '1.5px', textTransform: 'uppercase' }}>RESPALDO Y CONFIANZA</span>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 900, margin: '6px 0 0 0' }}>¿Por qué elegirnos para tu próximo 0Km?</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '22px' }}>
            
            {/* 1. Toma de Usados */}
            <div style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '16px', padding: '24px', display: 'flex', gap: '16px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'rgba(237, 28, 36, 0.12)', border: '1px solid rgba(237, 28, 36, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#ED1C24' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
              </div>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, margin: '0 0 6px 0' }}>Toma de Usados</h3>
                <p style={{ fontSize: '0.85rem', color: '#a1a1aa', lineHeight: 1.5, margin: 0 }}>Recibimos tu unidad usada como parte de pago con cotización transparente y justa.</p>
              </div>
            </div>

            {/* 2. Financiación */}
            <div style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '16px', padding: '24px', display: 'flex', gap: '16px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'rgba(237, 28, 36, 0.12)', border: '1px solid rgba(237, 28, 36, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#ED1C24' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
              </div>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, margin: '0 0 6px 0' }}>Financiación a Medida</h3>
                <p style={{ fontSize: '0.85rem', color: '#a1a1aa', lineHeight: 1.5, margin: 0 }}>Accedé a créditos prendarios y opciones en cuotas fijas en pesos adaptadas a tu presupuesto.</p>
              </div>
            </div>

            {/* 3. Gestoría */}
            <div style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '16px', padding: '24px', display: 'flex', gap: '16px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'rgba(237, 28, 36, 0.12)', border: '1px solid rgba(237, 28, 36, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#ED1C24' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              </div>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, margin: '0 0 6px 0' }}>Gestoría Integral Propia</h3>
                <p style={{ fontSize: '0.85rem', color: '#a1a1aa', lineHeight: 1.5, margin: 0 }}>Resolvemos toda la documentación y patentamiento sin demoras para que solo te preocupes por retirar la unidad.</p>
              </div>
            </div>

            {/* 4. Garantía */}
            <div style={{ backgroundColor: '#141518', border: '1px solid #27272a', borderRadius: '16px', padding: '24px', display: 'flex', gap: '16px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: 'rgba(237, 28, 36, 0.12)', border: '1px solid rgba(237, 28, 36, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#ED1C24' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, margin: '0 0 6px 0' }}>Garantía Oficial de Fábrica</h3>
                <p style={{ fontSize: '0.85rem', color: '#a1a1aa', lineHeight: 1.5, margin: 0 }}>Cada unidad 0km cuenta con el respaldo, garantía de fábrica y servicio de postventa oficial de cada terminal.</p>
              </div>
            </div>

          </div>
        </section>
      </main>

    </div>
  );
}
