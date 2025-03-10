'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const CardTecnology = ({
  children,
  category = 'framework',
  className,
}: {
  children: React.ReactNode;
  category: string;
  className?: string;
}) => {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Usamos `useSpring` para suavizar el efecto
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 10 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 10 });

  const rotateX = useTransform(smoothY, [0, 1], [-25, 25]);
  const rotateY = useTransform(smoothX, [0, 1], [25, -25]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5); // Se mueve de forma suave porque está envuelto en useSpring
    mouseY.set(0.5);
  };

  return (
    <motion.div
      className={`${className} `}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={`${category} flex h-full w-full flex-col items-center justify-center text-nowrap rounded-xl bg-gradient-to-r p-fl-xs text-center`}
        style={{
          rotateX,
          rotateY,
          transformOrigin: 'center',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
