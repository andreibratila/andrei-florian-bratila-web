import { CustomDialog, HeaderDialog } from '@/components';
import type { LocaleI } from '@/i18n';

import { TraductionComponent } from './components/TraductionComponent';

export default async function CVDownload({
  params,
}: Readonly<{
  params: Promise<{ locale: LocaleI }>;
}>) {
  const locale = (await params).locale;

  return (
    <CustomDialog styleDialogContent="px-fl-xl">
      <HeaderDialog title="Download CV" />
      <TraductionComponent locale={locale} />
    </CustomDialog>
  );
}
