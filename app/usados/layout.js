export const metadata = {
  title: 'Usados Seleccionados | Cogno Automotores',
  description: 'Explorá nuestro catálogo de usados seleccionados con 6 meses de garantía total. Financiación a medida y entrega inmediata en Río Cuarto.',
  openGraph: {
    title: 'Usados Seleccionados | Cogno Automotores',
    description: 'Explorá nuestro catálogo de usados seleccionados con 6 meses de garantía total. Financiación a medida y entrega inmediata.',
    url: 'https://www.cognoautomotores.com.ar/usados',
    siteName: 'Cogno Automotores',
    images: [
      {
        url: 'https://www.cognoautomotores.com.ar/logo-black.png',
        width: 1200,
        height: 630,
        alt: 'Usados Seleccionados - Cogno Automotores',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
};

export default function UsadosLayout({ children }) {
  return children;
}
