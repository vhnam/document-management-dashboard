import { SVGProps } from 'react';

const GoogleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <title>Google</title>
    <g clipPath="url(#a)">
      <path
        fill="#4285F4"
        d="M23.314 12.268c0-.836-.075-1.64-.214-2.411H12v4.559h6.343a5.421 5.421 0 0 1-2.352 3.557v2.957h3.81c2.228-2.052 3.513-5.073 3.513-8.662Z"
      />
      <path
        fill="#34A853"
        d="M12 23.785c3.182 0 5.85-1.055 7.8-2.855l-3.809-2.957c-1.055.707-2.405 1.125-3.99 1.125-3.07 0-5.668-2.073-6.595-4.86H1.468v3.055A11.781 11.781 0 0 0 12 23.785Z"
      />
      <path
        fill="#FBBC05"
        d="M5.406 14.239A7.082 7.082 0 0 1 5.036 12c0-.777.134-1.532.37-2.24V6.708H1.467A11.78 11.78 0 0 0 .214 12c0 1.902.456 3.701 1.254 5.293l3.938-3.054Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.902c1.73 0 3.284.594 4.506 1.762l3.38-3.38C17.845 1.382 15.177.214 12 .214A11.782 11.782 0 0 0 1.468 6.707l3.937 3.054C6.332 6.975 8.931 4.9 12 4.9Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default GoogleIcon;
