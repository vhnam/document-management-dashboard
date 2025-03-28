import { PropsWithChildren } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import type { SidebarItemType } from '../Sidebar';

export interface PrivateLayoutProps extends PropsWithChildren {
  activeSidebarItem: SidebarItemType;
}

const PrivateLayout = ({ activeSidebarItem, children }: PrivateLayoutProps) => {
  return (
    <div className="bg-default-white dark:bg-text-dark-02 h-screen">
      <Header />
      <div className="flex h-[calc(100vh-7.5rem)]">
        <Sidebar activeSidebarItem={activeSidebarItem} />
        <div className="basis-[calc(100vw-20rem)] px-10 overflow-auto pb-10">
          <div className="bg-[#F2F4F8] dark:bg-text-dark-01 w-full rounded-[2rem] p-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateLayout;
