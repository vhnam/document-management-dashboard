import { Button, SearchField, UploadIcon } from '@repo/ui/components';
import Image from 'next/image';
import { Logo } from '../Icons';

const Header = () => {
  return (
    <header className="px-10 py-8 bg-default-white dark:bg-text-dark-02 flex items-center justify-between">
      <div className="flex items-center gap-32">
        <div className="flex gap-3 items-center">
          <Logo status="private" />
          <span className="h2 text-default-brand">Storage</span>
        </div>
        <SearchField className="w-[30.1875rem]" placeholder="Search ..." />
      </div>
      <div className="flex items-center gap-12">
        <Button startAdornment={<UploadIcon className="text-default-white" />}>
          Upload
        </Button>
        <div className="flex items-center gap-4">
          <Image
            src="/avatar.webp"
            width={48}
            height={48}
            alt="Avatar"
            className="rounded-full"
          />
          <p className="h5 text-text-light-01 dark:text-text-dark-03">
            Mitchel
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
