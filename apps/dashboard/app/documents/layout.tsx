import { PropsWithChildren } from 'react';
import PrivateLayout from '../../src/components/PrivateLayout';

const DocumentsLayout = ({ children }: PropsWithChildren) => {
  return (
    <PrivateLayout activeSidebarItem="documents">{children}</PrivateLayout>
  );
};

export default DocumentsLayout;
