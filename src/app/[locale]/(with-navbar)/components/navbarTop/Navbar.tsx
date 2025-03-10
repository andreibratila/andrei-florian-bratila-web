import { useTranslations } from 'next-intl';

import type { LocaleI } from '@/i18n';

import { NavbarMobile } from './NavbarMobile';
import { NavbarPc } from './NavbarPc';

export const Navbar = ({ locale }: { locale: LocaleI }) => {
  const t = useTranslations('NavbarTop'); // Traducciones específicas para esta página

  return (
    <nav className="fixed z-50 w-full bg-dark-bg dark:bg-gray-800">
      <NavbarPc locale={locale} />
      <NavbarMobile
        locale={locale}
        homeTraduction={t('home')}
        jobsTraduction={t('jobs')}
        certificatesTraduction={t('certificates')}
      />
    </nav>
  );
};
