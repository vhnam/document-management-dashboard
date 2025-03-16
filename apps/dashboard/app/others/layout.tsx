import { PropsWithChildren } from 'react';
import PrivateLayout from '../../src/components/PrivateLayout';

const DocumentsLayout = ({ children }: PropsWithChildren) => {
  return <PrivateLayout activeSidebarItem="others">{children}</PrivateLayout>;
};

export default DocumentsLayout;
