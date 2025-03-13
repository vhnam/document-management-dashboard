import { PropsWithChildren } from 'react';
import PrivateLayout from '../../src/components/PrivateLayout';

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return <PrivateLayout activeMenu="dashboard">{children}</PrivateLayout>;
};

export default DashboardLayout;
