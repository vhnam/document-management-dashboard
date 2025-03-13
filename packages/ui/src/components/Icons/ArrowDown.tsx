import { SVGProps } from 'react';

const ArrowDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <title>Arrow Down</title>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M18.07 14.43 12 20.5l-6.07-6.07M12 3.5v16.83"
    />
  </svg>
);

export default ArrowDownIcon;
