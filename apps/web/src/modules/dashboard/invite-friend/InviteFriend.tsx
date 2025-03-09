import {
  Button,
  FacebookIcon,
  IconButton,
  TwitterIcon,
} from '@repo/ui/components';
import Image from 'next/image';

const InviteFriend = () => {
  return (
    <div className="px-8 py-6 bg-default-white dark:bg-text-dark-02 rounded-[1.25rem]">
      <strong className="h2 text-text-light-01 dark:text-text-dark-03 mb-7 block">
        Invite a Friend
      </strong>

      <div className="flex items-center gap-2 rounded-full border-dashed border-default-brand border p-2 mb-6">
        <input
          type="text"
          className="w-[calc(100%-1rem)] uppercase px-4 button text-text-light-01 placeholder:text-text-light-02/50 dark:text-text-dark-03 dark:placeholder:text-text-dark-03/30 bg-transparent focus:outline-none"
          value="HKP1098HUO5TH12"
          readOnly
        />
        <Button className="shadow-none">Copy</Button>
      </div>

      <ul className="flex justify-center gap-6">
        <li>
          <IconButton className="bg-default-white dark:bg-default-white/10">
            <Image
              src="/messenger.webp"
              width={24}
              height={24}
              alt="Messenger"
            />
          </IconButton>
        </li>
        <li>
          <IconButton className="bg-default-white dark:bg-default-white/10">
            <FacebookIcon />
          </IconButton>
        </li>
        <li>
          <IconButton className="bg-default-white dark:bg-default-white/10">
            <TwitterIcon />
          </IconButton>
        </li>
        <li>
          <IconButton className="bg-default-white dark:bg-default-white/10">
            <Image
              src="/instagram.webp"
              width={24}
              height={24}
              alt="Instagram"
            />
          </IconButton>
        </li>
      </ul>
    </div>
  );
};

export default InviteFriend;
