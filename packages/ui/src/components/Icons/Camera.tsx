import { SVGProps } from 'react';

const CameraIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <title>Camera</title>
    <path
      fill="currentColor"
      d="M14.674 12.825a2.675 2.675 0 1 0-5.35 0 2.675 2.675 0 0 0 5.35 0Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.352 6.225A4.352 4.352 0 0 0 1 10.577v5.548a5.5 5.5 0 0 0 5.5 5.5h11a5.5 5.5 0 0 0 5.5-5.5v-5.548a4.352 4.352 0 0 0-4.352-4.352 1.74 1.74 0 0 1-1.6-1.055l-.34-.795a3.3 3.3 0 0 0-3.034-2h-3.348a3.3 3.3 0 0 0-3.033 2l-.34.795a1.74 1.74 0 0 1-1.6 1.055ZM12 8.9a3.925 3.925 0 1 1 0 7.85 3.925 3.925 0 0 1 0-7.85Z"
      clipRule="evenodd"
    />
  </svg>
);

export default CameraIcon;
