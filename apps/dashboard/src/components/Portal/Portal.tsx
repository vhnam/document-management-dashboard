'use client';

import { useEffect, useState, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import Backdrop from '../Backdrop';

interface PortalProps extends PropsWithChildren {
  onMount?: () => void;
  hasBackdrop?: boolean;
  onBackdropClick?: () => void;
}

const Portal = ({
  children,
  onMount,
  hasBackdrop,
  onBackdropClick,
}: PortalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    onMount?.();
    return () => setMounted(false);
  }, [onMount]);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <>
      {hasBackdrop && <Backdrop show={true} onClick={onBackdropClick} />}
      {children}
    </>,
    document.body
  );
};

export default Portal;
