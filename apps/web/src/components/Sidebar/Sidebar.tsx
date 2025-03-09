import {
  DashboardIcon,
  FolderIcon,
  ImageIcon,
  OtherIcon,
  VideoIcon,
} from '@repo/ui/components';
import Image from 'next/image';
import Menu from '../Menu';

export type ActiveMenuType =
  | 'dashboard'
  | 'documents'
  | 'images'
  | 'videos'
  | 'others';

export interface SidebarProps {
  activeMenu: ActiveMenuType;
}

const Sidebar = ({ activeMenu }: SidebarProps) => {
  return (
    <aside className="basis-[20rem] flex flex-col justify-between pb-10">
      <ul className="px-9 flex flex-col gap-5 w-full">
        <li>
          <Menu
            active={activeMenu === 'dashboard'}
            icon={<DashboardIcon />}
            href="/dashboard"
          >
            Dashboard
          </Menu>
        </li>
        <li>
          <Menu
            active={activeMenu === 'documents'}
            icon={<FolderIcon />}
            href="/documents"
          >
            Documents
          </Menu>
        </li>
        <li>
          <Menu active={activeMenu === 'images'} icon={<ImageIcon />}>
            Images
          </Menu>
        </li>
        <li>
          <Menu active={activeMenu === 'videos'} icon={<VideoIcon />}>
            Video, Audio
          </Menu>
        </li>
        <li>
          <Menu active={activeMenu === 'others'} icon={<OtherIcon />}>
            Others
          </Menu>
        </li>
      </ul>
      <div className="justify-center flex">
        <Image
          src="/folder.webp"
          alt="Folder"
          width={253}
          height={209}
          priority
        />
      </div>
    </aside>
  );
};

export default Sidebar;
