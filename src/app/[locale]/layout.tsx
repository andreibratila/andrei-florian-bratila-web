import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

// import  from './components/ThemeProvider';

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
// Dentro de tu layout o página
import { Toaster } from '@/components/ui/sonner';
import { LocaleI, routing } from '@/i18n';

import '../globals.css';
import { CustomCursor, SmoothScrolling, ThemeProvider } from './components';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
// export async function generateStaticParams() {
//   const locales = ['en', 'es', 'ro', 'ca']; // Idiomas soportados
//   return locales.map((locale) => ({
//     locale, // Define los parámetros locales
//     params: {
//       locale,
//     },
//   }));
// }

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
