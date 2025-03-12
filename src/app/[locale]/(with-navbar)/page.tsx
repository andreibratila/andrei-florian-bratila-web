import { ScrollVelocity } from '@/components';
import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
} from '@/components/landing';

export default async function Home() {
  return (
    <>
      <Section1 />
      <ScrollVelocity
        texts={[
          '📚 Continuous Learning  - 💡 Creativity - 🎯 Focus - 🤔 Critical Thinking - 🔍 Attention to Detail -',
          '🚀 Innovation - 🌍 Adaptability - 📈 Customer Satisfaction - 🔒 Security -',
        ]}
        velocity={80}
        classNameSection="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-800 py-fl-xs flex flex-col space-y-fl-2xs text-white"
      />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      {/* <Squares /> */}
    </>
  );
}
{
  /* <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"> */
}
