import { PropsWithChildren } from 'react';
import PrivateLayout from '../../src/components/PrivateLayout';

const DocumentsLayout = ({ children }: PropsWithChildren) => {
  return <PrivateLayout activeSidebarItem="videos">{children}</PrivateLayout>;
};

export default DocumentsLayout;
