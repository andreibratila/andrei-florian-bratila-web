import type { LocaleI } from '@/i18n';

import { Footer, Navbar } from './components';

export default async function NavbarsLayout({
  children,
  modal,
  params,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
  params: Promise<{ locale: LocaleI }>;
}>) {
  const locale = (await params).locale;
  return (
    <div className="bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text">
      {modal}
      <Navbar locale={locale} />
      {/* <NavbarTop locale={locale} /> */}
      {children}
      <Footer />
    </div>
  );
}
