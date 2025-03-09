import { PropsWithChildren } from 'react';
import Header from '../../src/components/Header';
import Sidebar from '../../src/components/Sidebar';

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-default-white dark:bg-text-dark-02 h-screen">
      <Header />
      <div className="flex h-[calc(100vh-7.5rem)]">
        <Sidebar />
        <div className="basis-[calc(100vw-20rem)] px-10">
          <div className="bg-[#F2F4F8] dark:bg-text-dark-01 w-full rounded-[2rem] p-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
