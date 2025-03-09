import { SVGProps } from 'react';

const ListIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <title>List</title>
    <rect width={20} height={3} x={2} y={4} fill="currentColor" rx={1.5} />
    <rect width={20} height={3} x={2} y={10.5} fill="currentColor" rx={1.5} />
    <rect width={20} height={3} x={2} y={17} fill="currentColor" rx={1.5} />
  </svg>
);

export default ListIcon;
