import { useTranslations } from 'next-intl';

import { HoverMouseButtonType } from '@/app/[locale]/components/cursor/HoverMouseButtonType';
import { CertificateCard, DivButtonMouse, TitleSubtitleH2 } from '@/components';
import type { LocaleI } from '@/i18n';
import type { CertificateTraductionI } from '@/interface';

import { LinkCustom } from '../ui/LinkCustom';

export const Section4 = ({ locale }: Readonly<{ locale: LocaleI }>) => {
  const t = useTranslations();
  const certificates: CertificateTraductionI = t.raw('Certificates');

  return (
    <section className="mt-fl-2xl">
      {/* <section className="mx-fl-3xs-3xl mt-fl-3xl"> */}
      <div className="2xl:container max-2xl:mx-fl-3xs-3xl">
        <TitleSubtitleH2
          title={certificates.title}
          subtitle={certificates.description}
        />
        <div className="grid gap-fl-xl-sm md:grid-cols-2 xl:grid-cols-3">
          {certificates.items.slice(0, 6).map((cert) => (
            <CertificateCard key={cert.title} cert={cert} />
          ))}
        </div>
      </div>

      {/* Botón de Ver Todos */}
      <div className="mt-fl-xl flex justify-center bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-800 p-fl-xl">
        <HoverMouseButtonType>
          <LinkCustom
            locale={locale}
            href="certificates"
            className="text-fl-lg font-semibold dark:text-light-link"
          >
            <DivButtonMouse
              durationAnimation={0.4}
              divBg="bg-dark-bg"
              divText="text-dark-text"
              // divText="text-light-text"
              className="grid h-full w-full place-items-center rounded-xl border-2 border-dark-bg bg-light-bg px-fl-xs py-fl-3xs shadow-[3px_3px_0px_black]"
            >
              {certificates.link}
            </DivButtonMouse>
          </LinkCustom>
        </HoverMouseButtonType>
      </div>
    </section>
  );
};
