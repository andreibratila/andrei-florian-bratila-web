'use client';

import { useState } from 'react';

import { Menu, X } from 'lucide-react';

import { HoverMouseButtonType } from '@/app/[locale]/components/cursor/HoverMouseButtonType';
import { LinkCustom } from '@/components/ui/LinkCustom';
import type { LocaleI } from '@/i18n';

import ThemeSwitch from '../ThemeSwitch';
import { LanguageSwitch } from './language-switch/LanguageSwitch';

export const NavbarMobile = ({
  locale,
  homeTraduction,
  jobsTraduction,
  certificatesTraduction,
}: {
  locale: LocaleI;
  homeTraduction: string;
  jobsTraduction: string;
  certificatesTraduction: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative z-50 flex place-content-between place-items-center px-fl-xs py-fl-2xs md:hidden">
        <ThemeSwitch />
        <div className="flex space-x-fl-xs">
          <div className="mt-fl-3xs">
            <LanguageSwitch locale={locale} />
          </div>
          <button
            onClick={toggleMenu}
            className="text-dark-text transition-transform duration-300 hover:scale-110 dark:text-dark-text"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 transform bg-black bg-opacity-80 backdrop-blur-lg transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex h-screen w-screen flex-col items-center justify-center space-y-6 text-2xl text-white">
          <li onClick={toggleMenu}>
            <HoverMouseButtonType>
              <LinkCustom
                className="text-dark-text dark:text-dark-text"
                locale={locale}
              >
                {homeTraduction}
              </LinkCustom>
            </HoverMouseButtonType>
          </li>
          <li onClick={toggleMenu}>
            <HoverMouseButtonType>
              <LinkCustom
                className="text-dark-text dark:text-dark-text"
                locale={locale}
                href="jobs"
              >
                {jobsTraduction}
              </LinkCustom>
            </HoverMouseButtonType>
          </li>
          <li onClick={toggleMenu}>
            <HoverMouseButtonType>
              <LinkCustom
                className="text-dark-text dark:text-dark-text"
                locale={locale}
                href="certificates"
              >
                {certificatesTraduction}
              </LinkCustom>
            </HoverMouseButtonType>
          </li>
          {/* <li>
            <LanguageSwitchMobile locale={locale} />
          </li> */}
        </ul>
      </div>
    </>
  );
};
