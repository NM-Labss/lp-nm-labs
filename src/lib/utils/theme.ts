// Theme utility functions
export type Theme = 'light' | 'dark' | 'system';

export function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function applyTheme(theme: Theme): void {
  if (typeof window === 'undefined') return;
  
  const root = document.documentElement;
  const resolvedTheme = theme === 'system' ? getSystemTheme() : theme;
  
  // Apply the theme by toggling the 'dark' class
  if (resolvedTheme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  
  // Store theme preference
  localStorage.setItem('theme', theme);
}

export function getStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'system';
  const storedTheme = localStorage.getItem('theme') as Theme;
  return storedTheme || 'system';
}
