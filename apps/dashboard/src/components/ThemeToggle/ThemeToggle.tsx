'use client';

import { IconButton, MoonIcon, SunIcon } from '@repo/ui/components';
import { useTheme } from '../../providers/ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
};

export default ThemeToggle;
