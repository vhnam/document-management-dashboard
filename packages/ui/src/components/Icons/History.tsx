import { SVGProps } from 'react';

const HistoryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <title>History</title>
    <path
      fill="currentColor"
      d="M23 12a11 11 0 1 1-22 0 .786.786 0 1 1 1.571 0A9.443 9.443 0 1 0 6.8 4.143h.487a.786.786 0 1 1 0 1.571H4.929a.786.786 0 0 1-.786-.786V2.571a.786.786 0 0 1 1.571 0v.404A10.998 10.998 0 0 1 23 12Zm-3.928 0A7.072 7.072 0 1 1 12 4.928 7.08 7.08 0 0 1 19.072 12Zm-4.279.918-2.007-1.338V8.07a.786.786 0 0 0-1.572 0V12a.786.786 0 0 0 .35.654l2.357 1.571a.786.786 0 1 0 .872-1.307Z"
    />
  </svg>
);

export default HistoryIcon;
