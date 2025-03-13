import Image from 'next/image';
import { PropsWithChildren } from 'react';

import { Logo } from '../../src/components/Icons';

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex h-screen">
      <div className="basis-5/12 bg-default-brand dark:bg-text-dark-02 py-8 px-16">
        <div className="flex gap-3 items-center mb-24">
          <Logo status="public" />
          <span className="h2 font-medium text-default-white dark:text-default-brand">
            Storage
          </span>
        </div>

        <div className="flex flex-col gap-4 mb-16">
          <strong className="h1 text-default-white">
            Manage your files the best way
          </strong>
          <p className="body-1 text-default-white">
            Awesome, we've created the perfect place for you to store all your
            documents.
          </p>
        </div>

        <div className="justify-center flex">
          <Image
            src="/folder.webp"
            alt="Folder"
            width={342}
            height={342}
            priority
          />
        </div>
      </div>
      <div className="basis-7/12 bg-default-white dark:bg-text-dark-01 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
