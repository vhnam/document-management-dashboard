'use client';

import { cn } from '@repo/utils/ui';

interface BackdropProps {
  show: boolean;
  onClick?: () => void;
  className?: string;
}

const Backdrop = ({ show, onClick, className }: BackdropProps) => {
  if (!show) {
    return null;
  }

  const handleInteraction = () => {
    onClick?.();
  };

  return (
    <div
      className={cn(
        'fixed inset-0 bg-text-light-01/30 dark:bg-text-dark-01/70 backdrop-blur-[2px] transition-opacity',
        className
      )}
      onClick={handleInteraction}
      onKeyDown={handleInteraction}
      role="presentation"
      tabIndex={-1}
    />
  );
};

export default Backdrop;
