import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { Toaster } from '@/components/ui/sonner';
import { BASE_URL_ENV } from '@/config';
import { LocaleI, routing } from '@/i18n';

import '../globals.css';
import { CustomCursor, SmoothScrolling, ThemeProvider } from './components';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
type PropsMetadata = {
  params: Promise<{ locale: LocaleI }>;
};
export async function generateMetadata({
  params,
}: PropsMetadata): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),

    alternates: {
      languages: {
        en: `${BASE_URL_ENV}/en`,
        ro: `${BASE_URL_ENV}/ro`,
        ca: `${BASE_URL_ENV}/ca`,
      },
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
