'use client';

import { useLenis } from 'lenis/react';

import { HoverMouseButtonType } from '@/app/[locale]/components/cursor/HoverMouseButtonType';

export const FooterBootonScrollUp = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const lenis = useLenis();

  const scrollToTop = () => {
    lenis?.scrollTo(0, {
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    }); // Scroll suave al inicio
  };
  return (
    <HoverMouseButtonType>
      <button
        onClick={scrollToTop}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700 focus:outline-none"
      >
        {children}
      </button>
    </HoverMouseButtonType>
  );
};
