import { SVGProps } from 'react';

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <title>Close</title>
    <path
      fill="currentColor"
      d="M19.074 4.926c-3.902-3.901-10.247-3.901-14.15 0-3.9 3.9-3.9 10.248 0 14.15A9.976 9.976 0 0 0 12 22a9.975 9.975 0 0 0 7.074-2.925c3.901-3.9 3.901-10.248 0-14.15Zm-2.948 10.022a.833.833 0 1 1-1.179 1.18L12 13.178l-2.946 2.947a.834.834 0 0 1-1.18-1.179L10.822 12 7.874 9.053a.833.833 0 1 1 1.179-1.18L12 10.822l2.947-2.947a.833.833 0 1 1 1.18 1.179L13.178 12l2.947 2.948Z"
    />
  </svg>
);

export default CloseIcon;
