import { SVGProps } from 'react';

const InviteFriendsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <title>Invite Friends</title>
    <path
      fill="currentColor"
      d="M17.5 23H4.667a2.207 2.207 0 0 1-2.2-2.2 9.528 9.528 0 0 1 4.847-8.294A7.305 7.305 0 0 0 12 14.2a7.232 7.232 0 0 0 3.498-.895c-.133.28-.2.585-.198.895v1.1h-1.1a2.2 2.2 0 1 0 0 4.4h1.1v1.1a2.206 2.206 0 0 0 2.2 2.2ZM12 12.733A5.867 5.867 0 1 0 12 1a5.867 5.867 0 0 0 0 11.733Z"
    />
    <path
      fill="currentColor"
      d="M20.8 16.767h-2.567V14.2a.733.733 0 1 0-1.466 0v2.567H14.2a.734.734 0 0 0 0 1.466h2.567V20.8a.734.734 0 1 0 1.466 0v-2.567H20.8a.733.733 0 0 0 0-1.466Z"
    />
  </svg>
);

export default InviteFriendsIcon;
