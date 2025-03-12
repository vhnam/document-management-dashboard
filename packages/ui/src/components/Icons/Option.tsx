import { SVGProps } from 'react';

const OptionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <title>Option</title>
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M10 19c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2ZM10 5c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2ZM10 12c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2Z"
    />
  </svg>
);

export default OptionIcon;
