'use client';

import { useCursorStore } from '@/store';

export const HoverMouseButtonType = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const setCursor = useCursorStore((state) => state.setCursor);
  return (
    <div
      onMouseEnter={() => setCursor('button')}
      onMouseLeave={() => setCursor('default')}
    >
      {children}
    </div>
  );
};
