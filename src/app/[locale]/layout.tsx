import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getMessages } from 'next-intl/server';
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
  const t = await getTranslations({ locale, namespace: 'MetadataHome' });

  return {
    title: {
      template: `%s | ${t('title')}`,
      default: t('title'),
    },

    description: t('description'),
    keywords: t('keywords'),
    metadataBase: new URL(BASE_URL_ENV),
    category: 'Web Development',
    creator: 'Andrei Florian Bratila',

    classification: 'Web Developer',
    alternates: {
      languages: {
        en: `${BASE_URL_ENV}/en`,
        ro: `${BASE_URL_ENV}/ro`,
        ca: `${BASE_URL_ENV}/ca`,
      },
    },
    openGraph: {
      title: t('OpenGraphTitle'),
      description: t('description'),
      type: 'website',
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
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className="antialiased"
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <SmoothScrolling>
              <CustomCursor />
              <Toaster />

              {children}
            </SmoothScrolling>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
