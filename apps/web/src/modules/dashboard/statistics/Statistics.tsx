import documents from '@repo/mocks/documents';
import images from '@repo/mocks/images';
import medias from '@repo/mocks/medias';
import otherFiles from '@repo/mocks/others';
import {
  FolderIcon,
  ImageIcon,
  OtherIcon,
  VideoIcon,
} from '@repo/ui/components';
import { ReactNode } from 'react';
import { Folder, IconWrapper } from '../../../components/Folder';
import { calculateTotalSize } from '../../../utils/file.utils';

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
    lastUpdated: new Date(documents.lastUpdated),
  },
  {
    name: 'Images',
    fileSize: calculateTotalSize(images.data),
    icon: <ImageIcon />,
    backgroundColor: 'bg-accent-blue',
    lastUpdated: new Date(images.lastUpdated),
  },
  {
    name: 'Video, Audio',
    fileSize: calculateTotalSize(medias.data),
    icon: <VideoIcon />,
    backgroundColor: 'bg-accent-green',
    lastUpdated: new Date(medias.lastUpdated),
  },
  {
    name: 'Others',
    fileSize: calculateTotalSize(otherFiles.data),
    icon: <OtherIcon />,
    backgroundColor: 'bg-accent-pink',
    lastUpdated: new Date(otherFiles.lastUpdated),
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
