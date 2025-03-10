import { useTranslations } from 'next-intl';

import { TitleSubtitleH2 } from '@/components';
import type { LocaleI } from '@/i18n';

import { TechnologySection } from './components/TechnologySection';
import {
  backendTechnologies,
  frontendTechnologies,
  serverTechnologies,
} from './data';

export const Section2 = ({ locale }: { locale: LocaleI }) => {
  const t = useTranslations('Tecnologies');

  return (
    <section className="mt-fl-3xl 2xl:container max-2xl:mx-fl-3xs-3xl">
      <TitleSubtitleH2 title={t('title')} subtitle={t('subtitle')} />

      <TechnologySection
        title={t('frontend')}
        technologies={frontendTechnologies}
        locale={locale}
        legendText={`${t('showLegend')}`}
        className="grid-cols-2 gap-x-fl-sm gap-y-fl-sm overflow-hidden md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 2xl:gap-x-fl-md"
      />
      <div className="grid gap-x-fl-sm md:grid-cols-2 xl:gap-x-fl-sm 2xl:gap-x-fl-3xl">
        <TechnologySection
          title={t('backend')}
          technologies={backendTechnologies}
          locale={locale}
          legendText={`${t('showLegend')}`}
          className="grid-cols-2 gap-x-fl-sm gap-y-fl-sm xl:grid-cols-3 xl:gap-x-fl-sm 2xl:grid-cols-3 2xl:gap-x-fl-md"
          linkClassName="md:hidden"
        />
        <TechnologySection
          title={t('servidor')}
          technologies={serverTechnologies}
          locale={locale}
          legendText={`${t('showLegend')}`}
          className="grid-cols-2 gap-x-fl-sm gap-y-fl-sm xl:grid-cols-3 xl:gap-x-fl-sm 2xl:grid-cols-3 2xl:gap-x-fl-md"
          linkClassName="md:hidden"
        />
      </div>
    </section>
  );
};
