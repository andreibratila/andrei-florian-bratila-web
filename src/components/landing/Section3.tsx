import { useTranslations } from 'next-intl';

import { HoverMouseButtonType } from '@/app/[locale]/components/cursor/HoverMouseButtonType';
import { DivButtonMouse, JobCard, TitleSubtitleH2 } from '@/components';
import type { LocaleI } from '@/i18n';
import { JobTradcutionI } from '@/interface';

import { LinkCustom } from '../ui/LinkCustom';

// Para manejar la internacionalización
export const Section3 = ({ locale }: Readonly<{ locale: LocaleI }>) => {
  const t = useTranslations();
  const experiences: JobTradcutionI = t.raw('Jobs');

  return (
    <section className="mt-fl-3xl">
      <div className="2xl:container max-2xl:mx-fl-3xs-3xl">
        <TitleSubtitleH2
          title={experiences.title}
          subtitle={experiences.description}
        />
        <div className="flex flex-col space-y-fl-md">
          {experiences.items.map((exp) => (
            <JobCard key={exp.title} exp={exp} />
          ))}
        </div>
      </div>
      <div className="mt-fl-xl flex justify-center bg-gradient-to-r from-blue-800 via-indigo-500 to-blue-500 p-fl-xl">
        <HoverMouseButtonType>
          <LinkCustom
            locale={locale}
            href="jobs"
            className="text-fl-lg font-semibold dark:text-light-link"
          >
            <DivButtonMouse
              durationAnimation={0.4}
              divBg="bg-dark-bg"
              divText="text-dark-text"
              // divText="text-light-text"
              className="grid h-full w-full place-items-center rounded-xl border-2 border-dark-bg bg-light-bg px-fl-xs py-fl-3xs shadow-[3px_3px_0px_black]"
            >
              {experiences.link}
            </DivButtonMouse>
          </LinkCustom>
        </HoverMouseButtonType>
      </div>
    </section>
  );
};
