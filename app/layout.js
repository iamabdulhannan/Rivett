import { Bebas_Neue, Montserrat, Playfair_Display } from 'next/font/google';
import './globals.css';

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata = {
  title: 'Rivett Manufacturing | Premium Clothing & Garment Manufacturer | Private Label Production',
  description: 'Rivett Manufacturing produces premium trousers, shirts, t-shirts, polos, hoodies, track suits, jackets, and sleeveless tops under private label for UK & US fashion brands. Low MOQ, techpack to bulk production.',
  keywords: 'clothing manufacturer, garment manufacturer, shirt manufacturer, trouser manufacturer, private label clothing, t-shirt manufacturer, polo shirt manufacturer, hoodie manufacturer, jacket manufacturer, tracksuit manufacturer, sleeveless manufacturer, custom clothing production, UK clothing manufacturer, US apparel supplier, techpack to production, CMT manufacturer, bulk clothing order',
  authors: [{ name: 'Rivett Manufacturing' }],
  openGraph: {
    title: 'Rivett Manufacturing | Premium Clothing & Garment Manufacturer',
    description: 'Full-range clothing manufacturer: trousers, shirts, t-shirts, hoodies, track suits & jackets. Private label, low MOQ, techpack to production. UK & US brands.',
    type: 'website',
    url: 'https://www.rivettmfg.com',
    siteName: 'Rivett Manufacturing',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rivett Manufacturing | Premium Clothing & Garment Manufacturer',
    description: 'Custom garment manufacturing for fashion brands. Low MOQ, private label, techpack-to-production.',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
  alternates: {
    canonical: 'https://www.rivettmfg.com',
  },
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bebas.variable} ${montserrat.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Rivett Manufacturing',
              description: 'Premium clothing manufacturer offering private label production for UK and US fashion brands.',
              url: 'https://www.rivettmfg.com',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'sales',
                availableLanguage: ['English'],
              },
              areaServed: ['US', 'GB', 'EU'],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What is the minimum order quantity (MOQ) for production?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Our minimum order quantity starts at 200 pieces per style per color.' },
                },
                {
                  '@type': 'Question',
                  name: 'How long does sample development take?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Sample development typically takes 10-15 days from techpack receipt.' },
                },
                {
                  '@type': 'Question',
                  name: 'Do you offer private label garment manufacturing?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Yes, we specialize in private label garment manufacturing for fashion brands worldwide.' },
                },
                {
                  '@type': 'Question',
                  name: 'Do you ship internationally to the UK and US?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Yes, we regularly ship to the UK and US with FOB and CIF shipping terms.' },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-body text-gray-800 antialiased">{children}</body>
    </html>
  );
}
