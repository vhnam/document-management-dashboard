import {
  DashboardIcon,
  FolderIcon,
  ImageIcon,
  OtherIcon,
  VideoIcon,
} from '@repo/ui/components';
import Image from 'next/image';
import Menu from '../Menu';

const Sidebar = () => {
  return (
    <aside className="basis-[20rem] flex flex-col justify-between pb-10">
      <ul className="px-9 flex flex-col gap-5 w-full">
        <li>
          <Menu active icon={<DashboardIcon />}>
            Dashboard
          </Menu>
        </li>
        <li>
          <Menu icon={<FolderIcon />}>Documents</Menu>
        </li>
        <li>
          <Menu icon={<ImageIcon />}>Images</Menu>
        </li>
        <li>
          <Menu icon={<VideoIcon />}>Video, Audio</Menu>
        </li>
        <li>
          <Menu icon={<OtherIcon />}>Others</Menu>
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
