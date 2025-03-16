'use client';

import { MoonIcon, SunIcon } from '@repo/ui/components';
import { Theme, useTheme } from '../../providers/ThemeProvider';
import { cn } from '@repo/utils/ui';

export interface ThemeToggleProps {
  shouldDisable?: boolean;
}

const buttonClasses: Record<Theme, string> = {
  dark: 'bg-text-dark-02 justify-end',
  light: 'bg-default-brand justify-start',
};

const ThemeToggle = ({ shouldDisable = false }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={shouldDisable ? undefined : toggleTheme}
      aria-label="Toggle theme"
      className={cn(
        'flex flex-start rounded-full w-16 flex items-center p-1',
        buttonClasses[theme]
      )}
    >
      <span className="bg-default-white dark:bg-text-dark-01 text-accent-orange dark:text-text-dark-03 rounded-full p-1">
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </span>
    </button>
  );
};

export default ThemeToggle;
