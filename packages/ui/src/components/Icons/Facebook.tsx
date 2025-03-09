import { SVGProps } from 'react';

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <title>Facebook</title>
    <g clipPath="url(#a)">
      <path
        fill="#1877F2"
        d="M24 12c0-6.628-5.373-12-12-12S0 5.372 0 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.357c0-3.007 1.791-4.669 4.533-4.669 1.313 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 22.954 24 17.989 24 12Z"
      />
      <path
        fill="#fff"
        d="m16.671 15.469.532-3.47h-3.328V9.75c0-.95.465-1.874 1.956-1.874h1.513V4.922s-1.374-.235-2.686-.235c-2.742 0-4.533 1.662-4.533 4.669V12H7.078v3.469h3.047v8.385a12.096 12.096 0 0 0 3.75 0v-8.385h2.796Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default FacebookIcon;
