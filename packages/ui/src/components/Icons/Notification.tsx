import { SVGProps } from 'react';

const NotificationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <title>Push Notification</title>
    <path
      fill="currentColor"
      d="M11.083 23a3.443 3.443 0 0 0 3.368-2.75H7.716A3.443 3.443 0 0 0 11.083 23Zm6.428-11H17.5a6.424 6.424 0 0 1-6.417-6.416c0-.973.224-1.892.614-2.719a6.417 6.417 0 0 0-7.03 6.386v2.555a6.146 6.146 0 0 1-2.19 4.706 1.604 1.604 0 0 0-.503 1.646c.194.718.903 1.176 1.648 1.176H18.54c.78 0 1.517-.506 1.675-1.271a1.607 1.607 0 0 0-.547-1.57A6.1 6.1 0 0 1 17.51 12Z"
    />
    <path
      fill="currentColor"
      d="M22.083 5.583a4.583 4.583 0 1 1-9.167 0 4.583 4.583 0 0 1 9.167 0Z"
    />
  </svg>
);

export default NotificationIcon;
