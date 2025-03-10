import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { FuzzyText } from '@/components/ui/FuzzyText';

import styles from './nots-found.module.css';

export default function NotFound() {
  const t = useTranslations('NotFound'); // Traducciones específicas para esta página

  return (
    <div className={styles.container}>
      <h1>
        <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover={true}>
          404
        </FuzzyText>
      </h1>

      <p className={styles.subheading}>{t('title')}</p>
      <p className={styles.description}>{t('subtitle')}</p>
      <Link href="/" className={styles.button}>
        {t('button')}
      </Link>
      <footer className={styles.footer}>
        © {new Date().getFullYear()} {t('footer')}
      </footer>
    </div>
  );
}
