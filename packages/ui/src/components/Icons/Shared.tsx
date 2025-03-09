import { SVGProps } from 'react';

const SharedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <title>Shared</title>
    <g fill="currentColor" clipPath="url(#a)">
      <path d="M12 8.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4.21 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM2.946 13.494a1 1 0 0 0 1.104-.884 7.944 7.944 0 0 1 2.923-5.333 1 1 0 0 0-1.258-1.554A9.932 9.932 0 0 0 2.06 12.39a1.001 1.001 0 0 0 .885 1.104Zm11.722 7.55a8.084 8.084 0 0 1-5.334 0 1 1 0 0 0-.666 1.888c2.157.758 4.508.758 6.666 0a1 1 0 0 0-.666-1.887Zm5.284-8.434a1 1 0 1 0 1.989-.22 9.98 9.98 0 0 0-3.272-6.343 1 1 0 0 0-1.334 1.49 7.977 7.977 0 0 1 2.617 5.073ZM19.791 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SharedIcon;
