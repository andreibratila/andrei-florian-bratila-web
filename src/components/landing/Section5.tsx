import { useTranslations } from 'next-intl';

import { TitleSubtitleH2 } from '@/components';
import { FormContact, InformacionContacto } from '@/components/ui/contact';

export const Section5 = () => {
  const t = useTranslations('Contact');

  return (
    <section className="mt-fl-2xl 2xl:container max-2xl:mx-fl-3xs-3xl">
      <TitleSubtitleH2 title={t('title')} subtitle={t('subtitle')} />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Información de contacto */}
        <InformacionContacto />
        {/* Formulario de contacto */}
        <FormContact />
      </div>
    </section>
  );
};
