import { useTranslations } from 'next-intl';

import { CertificateCard, TitleSubtitleH1 } from '@/components';
import type { CertificateTraductionI } from '@/interface';

export default function Certificates() {
  const t = useTranslations();
  const certificates: CertificateTraductionI = t.raw('Certificates');

  return (
    <main className="pt-fl-3xl">
      <div className="2xl:container max-2xl:mx-fl-3xs-3xl">
        <TitleSubtitleH1
          title={certificates.title}
          subtitle={certificates.description}
        />
        <div className="grid gap-fl-xl-sm md:grid-cols-2 xl:grid-cols-3">
          {certificates.items.map((cert) => (
            <CertificateCard key={cert.title} cert={cert} />
          ))}
        </div>
      </div>
    </main>
  );
}
