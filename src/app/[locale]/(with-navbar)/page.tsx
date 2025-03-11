import { setRequestLocale } from 'next-intl/server';

import { ScrollVelocity } from '@/components';
import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
} from '@/components/landing';
import { LocaleI } from '@/i18n';

export default async function Home({
  params,
}: Readonly<{
  params: Promise<{ locale: LocaleI }>;
}>) {
  const locale = (await params).locale;
  setRequestLocale(locale);

  return (
    <>
      <Section1 locale={locale} />
      <ScrollVelocity
        texts={[
          '📚 Continuous Learning  - 💡 Creativity - 🎯 Focus - 🤔 Critical Thinking - 🔍 Attention to Detail -',
          '🚀 Innovation - 🌍 Adaptability - 📈 Customer Satisfaction - 🔒 Security -',
        ]}
        velocity={80}
        classNameSection="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-800 py-fl-xs flex flex-col space-y-fl-2xs text-white"
      />
      <Section2 locale={locale} />
      <Section3 locale={locale} />
      <Section4 locale={locale} />
      <Section5 />
      {/* <Squares /> */}
    </>
  );
}
{
  /* <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"> */
}
