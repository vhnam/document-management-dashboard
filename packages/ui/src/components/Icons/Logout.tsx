import { SVGProps } from 'react';

const LogoutIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <title>Logout</title>
    <path
      fill="currentColor"
      d="M11.9 10.9c-.66 0-1.1-.44-1.1-1.1V2.1c0-.66.44-1.1 1.1-1.1.66 0 1.1.44 1.1 1.1v7.7c0 .66-.44 1.1-1.1 1.1Z"
    />
    <path
      fill="currentColor"
      d="M11.9 23C6.4 23 2 18.6 2 13.1c0-3.52 1.87-6.82 4.95-8.58.55-.33 1.21-.11 1.54.44.33.44.11 1.1-.44 1.43C5.74 7.82 4.2 10.35 4.2 13.1c0 4.29 3.41 7.7 7.7 7.7s7.7-3.41 7.7-7.7c0-2.75-1.54-5.28-3.85-6.71-.55-.33-.77-.99-.44-1.43.33-.55.99-.66 1.54-.44 3.08 1.76 4.95 5.06 4.95 8.58 0 5.5-4.4 9.9-9.9 9.9Z"
    />
  </svg>
);

export default LogoutIcon;
