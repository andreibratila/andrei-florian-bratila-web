import Link from 'next/link';

import { FuzzyText } from '@/components/ui/FuzzyText';

import styles from './nots-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1>
        <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover={true}>
          404
        </FuzzyText>
      </h1>

      <p className={styles.subheading}>Página No Encontrada</p>
      <p className={styles.description}>
        ¡Ups! Parece que has viajado a lo desconocido.
      </p>
      <Link href="/" className={styles.button}>
        Volver al Inicio
      </Link>
      <footer className={styles.footer}>
        © {new Date().getFullYear()} Andrei Florian Bratila. Todos los derechos
        reservados.
      </footer>
    </div>
  );
}
