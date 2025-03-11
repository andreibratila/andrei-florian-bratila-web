import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { Toaster } from '@/components/ui/sonner';
import { LocaleI, routing } from '@/i18n';

import '../globals.css';
import { CustomCursor, SmoothScrolling, ThemeProvider } from './components';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
export async function generateMetadata({
  params,
}: Readonly<{
  params: Promise<{ locale: LocaleI }>;
}>) {
  const locale = (await params).locale;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'), // Título dinámico según idioma
    description: t('description'), // Descripción dinámica según idioma
    keywords: t('keywords'), // Palabras clave dinámicas
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://example.com/${locale}`,
      site_name: 'My Website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
  };
}
export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: LocaleI }>;
}>) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body
        className="antialiased"
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <SmoothScrolling>
            <CustomCursor />
            <Toaster />
            {children}
          </SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  );
}
