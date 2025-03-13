'use client';

import { Divider, IconButton } from '@repo/ui/components';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Routes } from '../../../enums/Routes';
import ForgotPasswordForm from '../forgot-password-form';
import ForgotPasswordSuccess from '../forgot-password-success';
import Image from 'next/image';

const ForgotPasswordContainer = () => {
  const searchParams = useSearchParams();
  const status = searchParams.get('status');
  const mailTo = searchParams.get('mailto');

  return (
    <div className="py-[7.5rem] px-[8.75rem]">
      <div>
        {status === 'success' ? (
          <ForgotPasswordSuccess mailTo={mailTo} />
        ) : (
          <ForgotPasswordForm />
        )}

        <div className="flex flex-col gap-8">
          <Divider>or</Divider>

          <div className="flex items-center gap-8 justify-center">
            <IconButton className="dark:bg-default-white/10">
              <Image
                src="/logo/facebook.webp"
                width={24}
                height={24}
                alt="Facebook"
              />
            </IconButton>
            <IconButton className="dark:bg-default-white/10">
              <Image
                src="/logo/google.webp"
                width={24}
                height={24}
                alt="Google"
              />
            </IconButton>
          </div>

          <div className="text-center">
            <p className="body2 text-text-light-01 dark:text-text-dark-03">
              Don't have an account?&nbsp;
              <Link href={Routes.SIGN_UP} className="text-default-brand">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordContainer;
