import {
  DashboardIcon,
  FolderIcon,
  ImageIcon,
  OtherIcon,
  VideoIcon,
} from '@repo/ui/components';
import Image from 'next/image';
import { Routes } from '../../enums/Routes';
import SidebarItem from './SidebarItem';

export type SidebarItemType =
  | 'dashboard'
  | 'documents'
  | 'images'
  | 'videos'
  | 'others';

export interface SidebarProps {
  activeSidebarItem: SidebarItemType;
}

const Sidebar = ({ activeSidebarItem }: SidebarProps) => {
  return (
    <aside className="basis-[20rem] flex flex-col justify-between pb-6">
      <ul className="px-9 flex flex-col gap-3 w-full">
        <li>
          <SidebarItem
            active={activeSidebarItem === 'dashboard'}
            icon={<DashboardIcon />}
            href={Routes.DASHBOARD}
          >
            Dashboard
          </SidebarItem>
        </li>
        <li>
          <SidebarItem
            active={activeSidebarItem === 'documents'}
            icon={<FolderIcon />}
            href={Routes.DOCUMENTS}
          >
            Documents
          </SidebarItem>
        </li>
        <li>
          <SidebarItem
            active={activeSidebarItem === 'images'}
            icon={<ImageIcon />}
            href={Routes.IMAGES}
          >
            Images
          </SidebarItem>
        </li>
        <li>
          <SidebarItem
            active={activeSidebarItem === 'videos'}
            icon={<VideoIcon />}
            href={Routes.VIDEOS}
          >
            Video, Audio
          </SidebarItem>
        </li>
        <li>
          <SidebarItem
            active={activeSidebarItem === 'others'}
            icon={<OtherIcon />}
            href={Routes.OTHERS}
          >
            Others
          </SidebarItem>
        </li>
      </ul>
      <div className="justify-center flex">
        <Image
          src="/folder.webp"
          alt="Folder"
          width={240}
          height={240}
          priority
          style={{
            width: '15rem',
            height: '15rem',
          }}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
