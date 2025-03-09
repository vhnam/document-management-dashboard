import { SVGProps } from 'react';

const DashboardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <title>Dashboard</title>
    <path
      fill="currentColor"
      d="M9.708 2h-6.25A1.46 1.46 0 0 0 2 3.458v3.75a1.46 1.46 0 0 0 1.458 1.459h6.25a1.46 1.46 0 0 0 1.459-1.459v-3.75A1.46 1.46 0 0 0 9.708 2Zm0 8.333h-6.25A1.46 1.46 0 0 0 2 11.792v8.75A1.46 1.46 0 0 0 3.458 22h6.25a1.46 1.46 0 0 0 1.459-1.458v-8.75a1.46 1.46 0 0 0-1.459-1.459Zm10.834 5h-6.25a1.46 1.46 0 0 0-1.459 1.459v3.75A1.46 1.46 0 0 0 14.292 22h6.25A1.46 1.46 0 0 0 22 20.542v-3.75a1.46 1.46 0 0 0-1.458-1.459Zm0-13.333h-6.25a1.46 1.46 0 0 0-1.459 1.458v8.75a1.46 1.46 0 0 0 1.459 1.459h6.25A1.46 1.46 0 0 0 22 12.208v-8.75A1.46 1.46 0 0 0 20.542 2Z"
    />
  </svg>
);

export default DashboardIcon;
