import {
  DashboardIcon,
  FolderIcon,
  ImageIcon,
  OtherIcon,
  VideoIcon,
} from '@repo/ui/components';
import Image from 'next/image';
import { Routes } from '../../enums/Routes';
import Menu from '../Menu';

export type SidebarMenuType =
  | 'dashboard'
  | 'documents'
  | 'images'
  | 'videos'
  | 'others';

export interface SidebarProps {
  activeMenu: SidebarMenuType;
}

const Sidebar = ({ activeMenu }: SidebarProps) => {
  return (
    <aside className="basis-[20rem] flex flex-col justify-between pb-6">
      <ul className="px-9 flex flex-col gap-3 w-full">
        <li>
          <Menu
            active={activeMenu === 'dashboard'}
            icon={<DashboardIcon />}
            href={Routes.DASHBOARD}
          >
            Dashboard
          </Menu>
        </li>
        <li>
          <Menu
            active={activeMenu === 'documents'}
            icon={<FolderIcon />}
            href={Routes.DOCUMENTS}
          >
            Documents
          </Menu>
        </li>
        <li>
          <Menu
            active={activeMenu === 'images'}
            icon={<ImageIcon />}
            href={Routes.IMAGES}
          >
            Images
          </Menu>
        </li>
        <li>
          <Menu
            active={activeMenu === 'videos'}
            icon={<VideoIcon />}
            href={Routes.VIDEOS}
          >
            Video, Audio
          </Menu>
        </li>
        <li>
          <Menu
            active={activeMenu === 'others'}
            icon={<OtherIcon />}
            href={Routes.OTHERS}
          >
            Others
          </Menu>
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
