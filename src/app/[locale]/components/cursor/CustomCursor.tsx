'use client';

import { useEffect, useRef } from 'react';

import { AnimatePresence, motion, useMotionValue } from 'framer-motion';

import { useMobileDetect } from '@/hooks/useIsMobileAgent';
import { useCursorStore } from '@/store/useCursorStore';

import { CircleCursor } from './CircleCursor';

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null); // Ref al cursor principal

  const type = useCursorStore((state) => state.type);
  const text = useCursorStore((state) => state.text);

  const mouse = {
    x: useMotionValue(-100),
    y: useMotionValue(-100),
  };

  const cursorSize = () => {
    switch (type) {
      case 'withText':
        return { width: 30, height: 50 };
      case 'withBig':
        return { width: 40, height: 40 };
      case 'button':
        return { width: 15, height: 15 };
      default:
        return { width: 15, height: 15 };
    }
  };

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      const cursorCurrent = cursorRef.current;
      if (!cursorCurrent) return;

      const { clientX, clientY } = e;
      mouse.x.set(clientX);
      mouse.y.set(clientY);
    };

    window.addEventListener('mousemove', updateCursor);
    return () => {
      window.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  const isDesktop = useMobileDetect().isDesktop();
  const cursorVisible = type === 'withBalls' && (
    <CircleCursor isDesktop={isDesktop} mouseX={mouse.x} mouseY={mouse.y} />
  );

  return (
    <>
      {/* Cursor con efecto de bolas */}
      <AnimatePresence>{cursorVisible}</AnimatePresence>

      {/* Cursor principal con rotación y escalado */}
      <motion.div
        ref={cursorRef} // Ref al cursor principal
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border dark:bg-red-500"
        style={{
          display: isDesktop ? 'block' : 'none',
          x: mouse.x,
          y: mouse.y,
        }}
        animate={{
          width: cursorSize().width,
          height: cursorSize().height,

          outline:
            type === 'button'
              ? '16px solid rgba(239, 68, 68, 1)'
              : '10px solid rgba(239, 68, 68, 1)', // Cambia grosor del borde
          outlineOffset: type === 'button' ? '0px' : '10px', // Cambia separación del borde
          background:
            type === 'button' ? 'rgb(15, 13, 14, 0)' : 'rgb(15, 13, 14, 1)',
        }}
        transition={{
          duration: 0.1,
          ease: 'easeIn',
        }}
      >
        {type === 'withText' && (
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm text-white">
            {text}
          </span>
        )}
      </motion.div>
    </>
  );
};
