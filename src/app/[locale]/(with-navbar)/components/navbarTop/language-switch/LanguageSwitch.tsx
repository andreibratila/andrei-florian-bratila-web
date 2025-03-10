'use client';

import { useState } from 'react';

import { usePathname } from 'next/navigation';

import { useClickAway } from '@uidotdev/usehooks';

import { HoverMouseButtonType } from '@/app/[locale]/components/cursor/HoverMouseButtonType';
import { LinkCustom } from '@/components/ui/LinkCustom';
import type { LocaleI } from '@/i18n';

import { languages } from './dataLanguages';

export const LanguageSwitch = ({ locale }: { locale: LocaleI }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const ref = useClickAway<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  // Obtener el idioma actual desde la URL
  const segments = pathname.split('/').filter(Boolean).slice(1).join('/');

  const { name, Flag } = languages[locale];

  return (
    <div className="relative" ref={ref}>
      <HoverMouseButtonType>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center rounded-lg border border-white px-fl-2xs text-dark-text shadow-md dark:text-dark-text"
        >
          <Flag className="mr-fl-2xs h-5 w-5" />
          {name}
          <span className="ml-fl-2xs rotate-90">{'>'}</span>
        </button>
      </HoverMouseButtonType>
      {isOpen && (
        <div className="absolute right-0 mt-fl-2xs rounded-lg border border-gray-200 bg-dark-bg shadow-lg">
          {Object.entries(languages).map(([, { name, Flag, path }]) => (
            <HoverMouseButtonType key={path}>
              <LinkCustom
                locale={path}
                href={segments}
                className="inline-flex w-full items-center rounded-lg px-4 py-2 text-left text-dark-text hover:bg-gray-700 dark:text-dark-text dark:hover:bg-gray-700"
              >
                <Flag className="mr-2 h-5 w-5" />
                {name}
              </LinkCustom>
            </HoverMouseButtonType>
          ))}
        </div>
      )}
    </div>
  );
};
