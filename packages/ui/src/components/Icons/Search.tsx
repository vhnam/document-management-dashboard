import { SVGProps } from 'react';

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <title>Search</title>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.5 19a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17ZM22 22l-2-2"
    />
  </svg>
);

export default SearchIcon;
