import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light';

  const storedTheme = window.localStorage.getItem('theme');
  return storedTheme === 'dark' ? 'dark' : 'light';
};

export const useDarkMode = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const root = window.document.documentElement;
    const nextTheme: Theme = theme === 'dark' ? 'dark' : 'light';

    root.classList.remove(nextTheme === 'dark' ? 'light' : 'dark');
    root.classList.add(nextTheme);
    window.localStorage.setItem('theme', nextTheme);
  }, [theme]);

  const toggleTheme = (): void => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return [theme, toggleTheme];
};