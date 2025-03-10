import { useTranslations } from 'next-intl';

import { LocaleI } from '@/i18n';

import { CVDownloadClient } from './CVDownloadClient';

export const TraductionComponent = ({
  locale,
}: Readonly<{ locale: LocaleI }>) => {
  const t = useTranslations('LandingSection1'); // Traducciones específicas para esta página

  return <CVDownloadClient locale={locale} buttonTraduction={t('button')} />;
};
