import { SVGProps } from 'react';

const FolderIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <title>Folder</title>
    <path
      fill="currentColor"
      d="M19.435 4.034c.132.208-.095.45-.335.396-.47-.14-.99-.21-1.52-.21h-3.3a.5.5 0 0 1-.4-.2l-1.15-1.53c-.14-.2-.008-.49.237-.49h2.753c1.561 0 2.936.81 3.715 2.034Z"
    />
    <path
      fill="currentColor"
      d="M20.14 6.54a4.18 4.18 0 0 0-1.45-.67c-.36-.1-.73-.15-1.11-.15h-3.72c-.58 0-.62-.05-.93-.46l-1.4-1.86C10.88 2.53 10.37 2 8.74 2H6.42C3.98 2 2 3.98 2 6.42v11.16C2 20.02 3.98 22 6.42 22h11.16c2.44 0 4.42-1.98 4.42-4.42v-7.44c0-1.49-.73-2.8-1.86-3.6Zm-5.75 9.8H9.6c-.39 0-.69-.31-.69-.7 0-.38.3-.7.69-.7h4.79c.39 0 .7.32.7.7 0 .39-.31.7-.7.7Z"
    />
  </svg>
);

export default FolderIcon;
