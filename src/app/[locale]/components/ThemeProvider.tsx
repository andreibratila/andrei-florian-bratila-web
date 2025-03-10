'use client';

import { useEffect, useState } from 'react';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

import Loading from '@/app/Loading';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <Loading />;
  }
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange={true}
    >
      {children}
    </NextThemesProvider>
  );
};
