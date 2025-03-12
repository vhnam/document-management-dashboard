'use client';

import { ReactNode, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Divider } from '@repo/ui/components';
import { format } from '@repo/utils/date';

export interface FolderProps {
  name: string;
  icon: ReactNode;
  fileSize: number;
  lastUpdated: Date;
}

const FOLDER_WIDTH = 226;
const FOLDER_HEIGHT = 212;

const Folder = ({ icon, name, fileSize, lastUpdated }: FolderProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear any existing content
    d3.select(svgRef.current).selectAll('*').remove();

    // Create SVG with viewBox for better scaling
    const svg = d3
      .select(svgRef.current)
      .attr('width', FOLDER_WIDTH)
      .attr('height', FOLDER_HEIGHT)
      .attr('viewBox', `0 0 ${FOLDER_WIDTH} ${FOLDER_HEIGHT}`)
      .attr('preserveAspectRatio', 'xMidYMid meet');

    svg
      .append('path')
      .attr(
        'd',
        'M0.132502 100.681V82.104C-0.672656 73.4707 1.29755 56.3449 31.836 54.2126C59.8842 52.2541 65.8534 48.3007 80.5529 22.5299C92.6528 1.31679 111.126 0.915018 128.043 0.54708C130.259 0.498881 132.449 0.451262 134.594 0.357517C145.962 -0.139365 181.067 -0.03252 206.485 0.165991C217.309 0.250522 226 9.03362 226 19.8243V192.286C226 203.174 217.146 212 206.225 212H19.775C8.85358 212 0 203.174 0 192.286V100.681H0.132502Z'
      )
      .attr(
        'class',
        'fill-default-white stroke-default-white dark:fill-text-dark-02 dark:stroke-text-dark-02 stroke-[0.5]'
      );
  }, [name]);

  return (
    <div className="relative mt-6">
      <div className="absolute -top-6 text-default-white">{icon}</div>
      <div className="relative">
        <svg ref={svgRef} className="w-full h-full" />
        <div className="absolute inset-0 flex flex-col justify-between text-text-light-01 dark:text-text-dark-03 py-[1.25rem] px-4">
          <p className="text-right h4">{fileSize}GB</p>
          <strong className="text-center block h5">{name}</strong>
          <Divider />
          <div>
            <p className="text-center body1 text-text-light-02 dark:text-text-dark-03">
              Last updated
            </p>
            <p className="text-center body1">
              {format(lastUpdated, 'HH:mm MMM D, YYYY')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
