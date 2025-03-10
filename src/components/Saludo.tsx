'use client';

import { motion } from 'framer-motion';

export const SalutingHand = () => {
  return (
    <motion.span
      initial={{ rotate: -15, y: 0 }} // Comienza con una inclinación y posición original
      animate={{
        rotate: [15, -15], // Rota entre 15 y -15 grados
        y: [0, -10, 0], // Se mueve hacia arriba y luego vuelve
      }}
      transition={{
        duration: 1, // Duración del ciclo completo
        repeat: Infinity, // Repite infinitamente
        repeatType: 'reverse', // Invierte la animación después de cada ciclo
        ease: 'easeInOut', // Suaviza la animación
      }}
      className="ml-fl-xs text-fl-3xl" // Tamaño más grande para el emoji
    >
      👋
    </motion.span>
  );
};
