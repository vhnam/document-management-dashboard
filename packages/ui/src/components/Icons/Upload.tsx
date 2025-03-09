import { SVGProps } from 'react';

const UploadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <title>Upload</title>
    <path
      fill="currentColor"
      d="M18.753 20.732h-5.15v-5.204h1.702c.432 0 .687-.49.432-.843l-3.31-4.58a.527.527 0 0 0-.859 0l-3.31 4.58a.531.531 0 0 0 .432.843h1.702v5.204H4.624C2.05 20.589 0 18.182 0 15.572c0-1.8.976-3.368 2.423-4.217a3.275 3.275 0 0 1-.202-1.142 3.321 3.321 0 0 1 4.463-3.124 6.658 6.658 0 0 1 6.027-3.82 6.669 6.669 0 0 1 6.62 6.017C21.985 9.742 24 12.199 24 14.979c0 2.972-2.315 5.547-5.247 5.753Z"
    />
  </svg>
);

export default UploadIcon;
