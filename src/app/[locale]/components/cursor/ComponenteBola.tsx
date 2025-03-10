'use client';

import {
  type MotionValue,
  motion,
  useSpring,
  useTransform,
} from 'framer-motion';

interface ComponenteBolaProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  offsetX: number;
  offsetY: number;
  color: string;
  size: string;
  index: number;
  baseDamping: number;
}

export const ComponenteBola = ({
  mouseX,
  mouseY,
  offsetX,
  offsetY,
  color,
  size,
  index,
  baseDamping,
}: ComponenteBolaProps) => {
  // Crear springs sincronizados con los valores globales
  const xSpring = useSpring(mouseX, {
    damping: baseDamping + index * 3,
    stiffness: 300 - index * 20,
  });
  const ySpring = useSpring(mouseY, {
    damping: baseDamping + index * 3,
    stiffness: 300 - index * 20,
  });

  const x = useTransform(xSpring, (val) => val + offsetX);
  const y = useTransform(ySpring, (val) => val + offsetY);

  return (
    <motion.div
      className="fixed left-0 top-0 z-[9999] rounded-full"
      style={{
        x,
        y,
        backgroundColor: color,
        height: size,
        width: size,
      }}
    />
  );
};
