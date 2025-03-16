import { Button, UploadIcon } from '@repo/ui/components';
import { Logo } from '../Icons';
import { SearchField } from '../SearchField';
import { ProfileMenu } from '../ProfileMenu';

const Header = () => {
  return (
    <header className="px-10 py-8 flex items-center justify-between">
      <div className="flex items-center gap-[9.75rem]">
        <div className="flex gap-3 items-center">
          <Logo status="private" />
          <span className="h2 font-medium text-default-brand">Storage</span>
        </div>
        <SearchField className="w-[30.1875rem]" placeholder="Search ..." />
      </div>
      <div className="flex items-center gap-12">
        <Button startAdornment={<UploadIcon className="text-default-white" />}>
          Upload
        </Button>
        <ProfileMenu />
      </div>
    </header>
  );
};

export default Header;
