import { SVGProps } from 'react';

const OpenedEyeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <title>Opened Eye</title>
    <g fill="currentColor" clipPath="url(#a)">
      <path d="M23.82 11.531c-.213-.239-5.366-5.86-11.82-5.86-6.454 0-11.607 5.621-11.82 5.86a.703.703 0 0 0 0 .938c.213.239 5.366 5.86 11.82 5.86 6.454 0 11.607-5.621 11.82-5.86a.703.703 0 0 0 0-.938ZM12 16.921A4.928 4.928 0 0 1 7.078 12 4.928 4.928 0 0 1 12 7.078 4.928 4.928 0 0 1 16.922 12 4.928 4.928 0 0 1 12 16.922Z" />
      <path d="M12.703 10.594c0-.708.351-1.33.886-1.713A3.47 3.47 0 0 0 12 8.484 3.52 3.52 0 0 0 8.484 12 3.52 3.52 0 0 0 12 15.516a3.514 3.514 0 0 0 3.456-2.923c-1.416.456-2.753-.615-2.753-2Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default OpenedEyeIcon;
