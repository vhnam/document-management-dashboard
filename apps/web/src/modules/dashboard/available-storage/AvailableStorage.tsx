'use client';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const AvailableStorage = () => {
  const chartRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Clear any existing chart
    d3.select(chartRef.current).selectAll('*').remove();

    // Chart configuration
    const width = 200;
    const height = 200;
    const margin = 20;
    const radius = Math.min(width, height) / 2 - margin;
    const percentage = 65; // 65% used space

    // Create SVG
    const svg = d3
      .select(chartRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    // Create scale for the gauge
    const scale = d3
      .scaleLinear()
      .domain([0, 100])
      .range([-Math.PI / 2, Math.PI * 1.5]);

    // Create arc generator
    const arc = d3
      .arc()
      .innerRadius(radius * 0.7)
      .outerRadius(radius)
      .startAngle(-Math.PI / 2);

    // Background arc
    svg
      .append('path')
      .datum({ endAngle: Math.PI * 1.5 })
      .attr('class', 'fill-default-white/20')
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      .attr('d', arc as any);

    // Foreground arc (progress)
    svg
      .append('path')
      .datum({ endAngle: scale(percentage) })
      .attr('class', 'fill-default-white')
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      .attr('d', arc as any);

    // Add percentage text
    svg
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '0.3em')
      .attr('class', 'fill-default-white h2')
      .text(`${percentage}%`);
  }, []);

  return (
    <div className="flex items-center gap-4 px-3 bg-default-brand rounded-[1.25rem]">
      <svg ref={chartRef} />
      <div>
        <strong className="h3 text-default-white">Available Storage</strong>
        <p className="subtitle1 text-default-white">82GB / 128GB</p>
      </div>
    </div>
  );
};

export default AvailableStorage;
