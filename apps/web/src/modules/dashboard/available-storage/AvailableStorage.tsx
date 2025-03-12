"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

const GAUGE_STROKE_WIDTH = 18;

interface StorageDetails {
  used: number;
  total: number;
}

interface ArcData {
  startAngle: number;
  endAngle: number;
  innerRadius: number;
  outerRadius: number;
}

const AvailableStorage = () => {
  const chartRef = useRef<SVGSVGElement>(null);

  const storageDetails: StorageDetails = {
    used: 82,
    total: 128,
  };

  useEffect(() => {
    if (!chartRef.current) return;

    // Clear any existing chart
    d3.select(chartRef.current).selectAll("*").remove();

    // Chart configuration
    const width = 200;
    const height = 200;
    const margin = 0;
    const radius = Math.min(width, height) / 2 - margin;
    const percentage = Math.round(
      (storageDetails.used / storageDetails.total) * 100
    );

    // Angle configuration (270 degrees)
    const startAngle = -Math.PI * 0.75; // -135 degrees
    const endAngle = Math.PI * 0.75; // 135 degrees

    // Create SVG
    const svg = d3
      .select(chartRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    // Create scale for the gauge
    const scale = d3
      .scaleLinear()
      .domain([0, 100])
      .range([startAngle, endAngle]);

    // Create arc generators - separate for background and foreground
    const backgroundArc = d3
      .arc<ArcData>()
      .innerRadius(radius - GAUGE_STROKE_WIDTH)
      .outerRadius(radius)
      .cornerRadius(8)
      .startAngle((d) => d.startAngle)
      .endAngle((d) => d.endAngle);

    const foregroundArc = d3
      .arc<ArcData>()
      .innerRadius(radius - GAUGE_STROKE_WIDTH)
      .outerRadius(radius)
      .cornerRadius(8)
      .startAngle((d) => d.startAngle)
      .endAngle((d) => d.endAngle);

    // Background arc
    svg
      .append("path")
      .datum({
        startAngle,
        endAngle,
        innerRadius: radius - GAUGE_STROKE_WIDTH,
        outerRadius: radius,
      })
      .attr("class", "fill-default-white/20")
      .attr("d", backgroundArc);

    // Foreground arc (progress) with animation
    const foregroundPath = svg
      .append("path")
      .datum({
        startAngle,
        endAngle: startAngle,
        innerRadius: radius - GAUGE_STROKE_WIDTH,
        outerRadius: radius,
      })
      .attr("class", "fill-default-white")
      .attr("d", foregroundArc);

    // Animate the foreground arc
    foregroundPath
      .transition()
      .duration(1500)
      .ease(d3.easeElastic)
      .attrTween("d", () => {
        const interpolate = d3.interpolate(startAngle, scale(percentage));
        return (t: number): string => {
          const d: ArcData = {
            startAngle,
            endAngle: interpolate(t),
            innerRadius: radius - GAUGE_STROKE_WIDTH,
            outerRadius: radius,
          };
          return foregroundArc(d) || "";
        };
      });

    // Add percentage text with animation
    const text = svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "-0.2em")
      .attr("class", "fill-default-white text-4xl font-semibold")
      .text("0%");

    // Add "Space Used" label
    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "1.5em")
      .attr("class", "fill-default-white text-lg")
      .text("Space Used");

    // Animate the percentage text
    text
      .transition()
      .duration(1500)
      .tween("text", function () {
        const interpolate = d3.interpolateNumber(0, percentage);
        return function (t) {
          this.textContent = `${Math.round(interpolate(t))}%`;
        };
      });
  }, [storageDetails]);

  return (
    <div className="flex flex-col gap-4 p-4 bg-default-brand rounded-[1.25rem]">
      <div className="flex items-center gap-4">
        <svg ref={chartRef} />
        <div>
          <strong className="h3 text-default-white">Available Storage</strong>
          <p className="subtitle1 text-default-white">
            {storageDetails.used}GB / {storageDetails.total}GB
          </p>
        </div>
      </div>
    </div>
  );
};

export default AvailableStorage;
