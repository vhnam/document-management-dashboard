import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface FolderShapeProps {
  width: number;
  height: number;
}

const FolderShape = ({ width, height }: FolderShapeProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear any existing content
    d3.select(svgRef.current).selectAll('*').remove();

    // Create SVG with viewBox for better scaling
    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', `0 0 ${width} ${height}`)
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
  }, [width, height]);

  return <svg ref={svgRef} className="w-full h-full" />;
};

export default FolderShape;
