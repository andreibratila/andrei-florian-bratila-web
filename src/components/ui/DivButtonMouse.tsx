'use client';

import { useRef, useState } from 'react';

import { motion } from 'framer-motion';

import { cn } from '@/utils';

export const DivButtonMouse = ({
  durationAnimation,
  children,
  className,
  divBg,
  divText,
  divPosition,
  ComponentOptional,
  ...props
}: {
  durationAnimation: number;
  children: React.ReactNode;
  className?: string;
  divBg?: string;
  divText?: string;
  divPosition?: string;
  ComponentOptional?: React.ReactNode;
}) => {
  const boundsRef = useRef<HTMLDivElement | null>(null);
  const [clipPath, setClipPath] = useState('circle(0% at 0% 0%)');

  const handleMouseEnter = () => {
    setClipPath('circle(100% at 50% 50%)');
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!boundsRef.current) return;
    const { left, top, width, height } =
      boundsRef.current.getBoundingClientRect();
    const offsetX = ((e.clientX - left) / width) * 100;
    const offsetY = ((e.clientY - top) / height) * 100;

    setClipPath(`circle(0% at ${offsetX}% ${offsetY}%)`);
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={boundsRef}
      className={`relative ${className}`}
      {...props}
    >
      {children}
      <motion.div
        className={cn(
          divBg ?? 'bg-dark-bg dark:bg-light-bg',
          divText ?? 'text-dark-text dark:text-light-text',
          divPosition ?? 'grid place-items-center',
          `absolute bottom-0 left-0 right-0 top-0 rounded-lg max-md:hidden`,
        )}
        animate={{
          clipPath,
        }}
        transition={{ duration: durationAnimation, ease: 'easeInOut' }}
        aria-hidden
      >
        {ComponentOptional ? ComponentOptional : children}
      </motion.div>
    </motion.div>
  );
};
