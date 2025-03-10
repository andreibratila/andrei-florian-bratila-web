'use client';

import { motion } from 'framer-motion';

export const Bubbles = () => {
  const bubbles = Array.from({ length: 15 });
  return (
    <div className="absolute inset-0 -z-10">
      {bubbles.map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-blue-400 opacity-60"
          style={{
            width: `${Math.random() * 50 + 20}px`,
            height: `${Math.random() * 50 + 20}px`,
            left: `${Math.random() * 100}%`,
          }}
          initial={{
            y: '-100%', // Inicia justo por encima del viewport
            opacity: 0.6, // Opacidad inicial
          }}
          animate={{
            y: '110vh', // Termina muy por debajo del viewport
            opacity: 0, // Se desvanece al salir
          }}
          transition={{
            duration: Math.random() * 5 + 5, // Duración aleatoria
            repeat: Infinity, // Repetir indefinidamente
            delay: Math.random() * 3, // Retraso aleatorio para cada burbuja
          }}
        />
      ))}
    </div>
  );
};
