'use client';

import { MotionValue, motion } from 'framer-motion';

import { ComponenteBola } from './ComponenteBola';

const CIRCLE_COUNT = 6;
const HEXAGON_RADIUS = 50;
const BASE_DAMPING = 10;
const COLORS = [
  '#FFF333',
  '#FFC300',
  '#DAF7A6',
  '#581845',
  '#900C3F',
  '#C70039',
];

// Genera la posición hexagonal para las bolas del cursor
const getHexagonPosition = (index: number) => {
  const angle = (-60 - index * 60) * (Math.PI / 180);
  return {
    x: Math.cos(angle) * HEXAGON_RADIUS,
    y: Math.sin(angle) * HEXAGON_RADIUS,
  };
};

// Genera una posición aleatoria para el cursor
const getRandomPosition = () => {
  return `${(Math.random() * 2 - 1) * 100}vw`;
};

interface CircleCursorProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  isDesktop: boolean;
}

export const CircleCursor = ({
  mouseX,
  mouseY,
  isDesktop,
}: CircleCursorProps) => {
  const positions = Array.from({ length: CIRCLE_COUNT }).map((_, index) =>
    getHexagonPosition(index),
  );

  return (
    <motion.div
      className="fixed left-0 top-0 z-[9999]"
      initial={{
        display: isDesktop ? 'block' : 'none',
        x: getRandomPosition(),
        y: getRandomPosition(),
        opacity: 0,
      }}
      animate={{
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: 'easeOut',
        },
      }}
      exit={{
        x: getRandomPosition(),
        y: getRandomPosition(),
        opacity: 0,
        transition: {
          duration: 0.6,
          ease: 'easeInOut',
        },
      }}
    >
      {positions.map((position, index) => (
        <ComponenteBola
          key={index}
          mouseX={mouseX}
          mouseY={mouseY}
          offsetX={position.x}
          offsetY={position.y}
          color={COLORS[index]}
          size="16px"
          index={index}
          baseDamping={BASE_DAMPING}
        />
      ))}
    </motion.div>
  );
};
