import { SVGProps } from 'react';

const MoonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <title>Moon</title>
    <path
      fill="currentColor"
      d="M22.465 13.484a.773.773 0 0 0-.647.14 8.254 8.254 0 0 1-2.504 1.463 7.84 7.84 0 0 1-2.841.507 8.273 8.273 0 0 1-5.852-2.42 8.273 8.273 0 0 1-2.42-5.85c0-.957.17-1.886.45-2.73.31-.9.76-1.716 1.351-2.419a.718.718 0 0 0-.112-1.013c-.197-.14-.422-.197-.647-.14-2.392.647-4.473 2.081-5.964 3.994A11.097 11.097 0 0 0 1 11.768a11.1 11.1 0 0 0 3.263 7.877 11.05 11.05 0 0 0 7.877 3.263c2.588 0 4.98-.9 6.893-2.391a11.091 11.091 0 0 0 3.938-6.16.682.682 0 0 0-.506-.873Z"
    />
  </svg>
);

export default MoonIcon;
