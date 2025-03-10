'use client';

import { useCursorStore } from '@/store';

export const Section1Client = ({ children }: { children: React.ReactNode }) => {
  const setCursor = useCursorStore((state) => state.setCursor);
  return (
    <section
      onMouseEnter={() => setCursor('withBalls')}
      onMouseLeave={() => setCursor('default')}
      className="flex flex-col pt-fl-3xl 2xl:container max-2xl:mx-fl-3xs-3xl"
    >
      {children}
    </section>
  );
};
