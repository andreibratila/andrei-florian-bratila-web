import { useTranslations } from 'next-intl';

import { JobCard, TitleSubtitleH1 } from '@/components';
import type { JobTradcutionI } from '@/interface';

export default function Projects() {
  const t = useTranslations();
  const experiences: JobTradcutionI = t.raw('Jobs');

  return (
    <main className="pt-fl-3xl">
      <div className="2xl:container max-2xl:mx-fl-3xs-3xl">
        <TitleSubtitleH1
          title={experiences.title}
          subtitle={experiences.description}
        />
        <div className="flex flex-col space-y-fl-md">
          {experiences.items.map((exp) => (
            <JobCard key={exp.title} exp={exp} />
          ))}
        </div>
      </div>
    </main>
  );
}
