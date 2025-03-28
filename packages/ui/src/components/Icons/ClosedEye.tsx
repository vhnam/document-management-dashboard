import { SVGProps } from 'react';

const ClosedEyeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <title>Closed Eye</title>
    <path
      fill="currentColor"
      d="M20.03 3.97a.75.75 0 0 0-1.06 0l-2.38 2.38A10.854 10.854 0 0 0 12 5.25c-6.094 0-10.89 6.03-11.09 6.287a.75.75 0 0 0 0 .926 20.792 20.792 0 0 0 5.117 4.45L3.97 18.97a.75.75 0 1 0 1.06 1.06l15-15a.75.75 0 0 0 0-1.06ZM8.25 12A3.755 3.755 0 0 1 12 8.25a3.67 3.67 0 0 1 2.047.642l-5.155 5.156A3.67 3.67 0 0 1 8.25 12ZM23.09 11.537a20.952 20.952 0 0 0-3.837-3.61l-3.556 3.556c.03.171.047.343.053.516A3.754 3.754 0 0 1 12 15.75a3.66 3.66 0 0 1-.516-.052l-2.55 2.55c.99.324 2.024.493 3.066.503 6.094 0 10.889-6.031 11.09-6.288a.75.75 0 0 0 0-.925Z"
    />
  </svg>
);

export default ClosedEyeIcon;
