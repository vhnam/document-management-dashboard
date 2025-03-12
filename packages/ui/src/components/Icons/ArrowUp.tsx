import { SVGProps } from 'react';

const ArrowUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <title>Arrow Up</title>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M13.553 7.178 9 2.625 4.448 7.178M9 15.374V2.752"
    />
  </svg>
);

export default ArrowUpIcon;
