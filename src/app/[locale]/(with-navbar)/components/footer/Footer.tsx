import { FaArrowUp } from 'react-icons/fa';

import { useTranslations } from 'next-intl';

import { FooterBootonScrollUp } from './FooterBootonScrollUp';
import { FooterMotionDIv } from './FooterMotionDIv';

export const Footer = () => {
  const year = new Date().getFullYear();
  const t = useTranslations('Footer'); // Traducciones específicas para esta página

  return (
    <footer className="mt-fl-3xl flex flex-col place-content-center place-items-center overflow-y-hidden">
      {/* Animación con SVG que se activa cerca del fondo */}
      <FooterMotionDIv>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -13.25 72 13.25"
          className="w-full fill-dark-bg dark:fill-gray-800 min-[550px]:h-20"
        >
          <path
            d="m0 0c17 0 25-3 28-8 5-7 11-7 16 0 3 5 11 8 28 8"
            // fill="#000000"
          />
        </svg>
        {/* Botón para volver arriba */}
        <div className="absolute left-1/2 top-3 -translate-x-1/2 transform">
          <FooterBootonScrollUp>
            <FaArrowUp size={20} className="max-[550px]:" />
          </FooterBootonScrollUp>
        </div>
      </FooterMotionDIv>

      {/* Texto de derechos de autor */}
      <div className="z-10 -mt-[1px] h-32 w-full place-content-center place-items-center bg-dark-bg text-fl-sm dark:bg-gray-800 min-[550px]:h-20">
        <p className="px-fl-2xs text-center text-dark-text dark:text-dark-text">
          Copyright © {year} Andrei Florian Bratila, {t('copyright')}
        </p>
      </div>
    </footer>
  );
};
