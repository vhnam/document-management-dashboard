"use client";

import { ReactNode } from "react";
import FolderShape from "./FolderShape";
import FolderContent from "./FolderContent";

const FOLDER_DIMENSIONS = {
  width: 226,
  height: 212,
} as const;

export interface FolderProps {
  name: string;
  icon: ReactNode;
  fileSize: number;
  lastUpdated: Date;
}

const Folder = ({ icon, name, fileSize, lastUpdated }: FolderProps) => {
  return (
    <div className="relative mt-6">
      <div className="absolute -top-6 text-default-white">{icon}</div>
      <div className="relative">
        <FolderShape
          width={FOLDER_DIMENSIONS.width}
          height={FOLDER_DIMENSIONS.height}
        />
        <FolderContent
          name={name}
          fileSize={fileSize}
          lastUpdated={lastUpdated}
        />
      </div>
    </div>
  );
};

export default Folder;
