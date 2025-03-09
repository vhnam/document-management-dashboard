import { SVGProps } from 'react';

const AddIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <title>Add</title>
    <rect width={2} height={18} x={11} y={3} fill="currentColor" rx={1} />
    <rect
      width={2}
      height={18}
      x={21}
      y={11}
      fill="currentColor"
      rx={1}
      transform="rotate(90 21 11)"
    />
  </svg>
);

export default AddIcon;
