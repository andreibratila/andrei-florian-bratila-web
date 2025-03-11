'use client';

import { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';

import { HoverMouseButtonType } from '../../components/cursor/HoverMouseButtonType';

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(resolvedTheme === 'dark');
  }, [resolvedTheme]);

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <HoverMouseButtonType>
      <label
        className="containerDarkMode"
        htmlFor="toggle"
        aria-label="toggle-dark-mode"
      >
        <input
          type="checkbox"
          id="toggle"
          checked={isDark}
          onChange={toggleTheme}
        />
        <span className="slider round">
          <div className="background"></div>
          <div className="star"></div>
          <div className="star"></div>
        </span>
      </label>
    </HoverMouseButtonType>
  );
}
