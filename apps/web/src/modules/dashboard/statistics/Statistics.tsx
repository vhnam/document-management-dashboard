import documents from '@repo/mocks/documents';
import images from '@repo/mocks/images';
import {
  FolderIcon,
  ImageIcon,
  OtherIcon,
  VideoIcon,
} from '@repo/ui/components';
import { ReactNode } from 'react';
import { Folder, IconWrapper } from '../../../components/Folder';
import { calculateTotalSize } from '../../../utils/system.utils';

interface FolderData {
  name: string;
  fileSize: number;
  icon: ReactNode;
  backgroundColor: string;
  lastUpdated: Date;
}

const FOLDERS_DATA: FolderData[] = [
  {
    name: 'Documents',
    fileSize: calculateTotalSize(documents.data),
    icon: <FolderIcon />,
    backgroundColor: 'bg-accent-red',
    lastUpdated: new Date(),
  },
  {
    name: 'Images',
    fileSize: calculateTotalSize(images.data),
    icon: <ImageIcon />,
    backgroundColor: 'bg-accent-blue',
    lastUpdated: new Date(),
  },
  {
    name: 'Video, Audio',
    fileSize: 20,
    icon: <VideoIcon />,
    backgroundColor: 'bg-accent-green',
    lastUpdated: new Date(),
  },
  {
    name: 'Others',
    fileSize: 12,
    icon: <OtherIcon />,
    backgroundColor: 'bg-accent-pink',
    lastUpdated: new Date(),
  },
];

const Statistics = () => {
  return (
    <div className="grid grid-cols-2 gap-9">
      {FOLDERS_DATA.map((folder) => (
        <Folder
          key={folder.name}
          name={folder.name}
          fileSize={folder.fileSize}
          lastUpdated={folder.lastUpdated}
          icon={
            <IconWrapper backgroundColor={folder.backgroundColor}>
              {folder.icon}
            </IconWrapper>
          }
        />
      ))}
    </div>
  );
};

export default Statistics;
