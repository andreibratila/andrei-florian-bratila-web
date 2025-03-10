import type { LocaleI } from '@/i18n';

import { CatalanFlag, EnglishFlag, RumenianFlag, SpanishFlag } from './svg';

export const languages: Record<
  LocaleI,
  { name: string; Flag: React.FC<{ className: string }>; path: LocaleI }
> = {
  en: { name: 'English', Flag: EnglishFlag, path: 'en' },
  es: { name: 'Español', Flag: SpanishFlag, path: 'es' },
  ca: { name: 'Català', Flag: CatalanFlag, path: 'ca' },
  ro: { name: 'Română', Flag: RumenianFlag, path: 'ro' },
};
