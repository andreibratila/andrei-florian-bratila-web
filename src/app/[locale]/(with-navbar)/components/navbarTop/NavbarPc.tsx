import { useTranslations } from 'next-intl';

import { HoverMouseButtonType } from '@/app/[locale]/components/cursor/HoverMouseButtonType';
import { Link, type LocaleI } from '@/i18n';

import ThemeSwitch from '../ThemeSwitch';
import { LanguageSwitch } from './language-switch/LanguageSwitch';

export const NavbarPc = ({ locale }: { locale: LocaleI }) => {
  const t = useTranslations('NavbarTop'); // Traducciones específicas para esta página

  return (
    <div className="hidden items-end justify-between p-fl-xs 2xl:container max-2xl:mx-fl-3xs-3xl md:flex">
      <ThemeSwitch />
      <div className="flex items-center justify-between" id="navbar-language">
        <ul className="flex space-x-fl-xs">
          <li>
            <HoverMouseButtonType>
              <Link
                href="/"
                locale={locale}
                className="text-dark-text dark:text-dark-text"
              >
                {t('home')}
              </Link>
            </HoverMouseButtonType>
          </li>
          <li>
            <HoverMouseButtonType>
              <Link
                locale={locale}
                href="/jobs"
                className="text-dark-text dark:text-dark-text"
              >
                {t('jobs')}
              </Link>
            </HoverMouseButtonType>
          </li>
          <li>
            <HoverMouseButtonType>
              <Link
                locale={locale}
                href="/certificates"
                className="text-dark-text dark:text-dark-text"
              >
                {t('certificates')}
              </Link>
            </HoverMouseButtonType>
          </li>
          <li>
            <LanguageSwitch locale={locale} />
          </li>
        </ul>
      </div>
    </div>
  );
};
