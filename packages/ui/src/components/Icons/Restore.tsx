import { SVGProps } from 'react';

const RestoreIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <title>Restore</title>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.333 3.666A8.333 8.333 0 0 0 5 11.999a1 1 0 1 1-2 0C3 6.292 7.626 1.666 13.333 1.666s10.334 4.626 10.334 10.333c0 1.583-.357 3.086-.995 4.43a1 1 0 1 1-1.807-.859 8.297 8.297 0 0 0 .802-3.57 8.333 8.333 0 0 0-8.334-8.334ZM4.817 15.953a1 1 0 0 1 1.373.34 8.328 8.328 0 0 0 7.143 4.04 8.296 8.296 0 0 0 4.294-1.19 1 1 0 1 1 1.033 1.713 10.296 10.296 0 0 1-5.326 1.477c-3.76 0-7.05-2.01-8.857-5.007a1 1 0 0 1 .34-1.373Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.668 7a1 1 0 0 1 1 1v4.333H18a1 1 0 0 1 0 2h-5.333a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1ZM.78 7.168a1 1 0 0 1 1.386.277l2.112 3.168 3.168-2.112a1 1 0 0 1 1.11 1.665l-4 2.666a1 1 0 0 1-1.387-.277l-2.667-4a1 1 0 0 1 .277-1.387Z"
      clipRule="evenodd"
    />
  </svg>
);

export default RestoreIcon;
