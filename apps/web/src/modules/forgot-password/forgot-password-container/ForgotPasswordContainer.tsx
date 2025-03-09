'use client';

import {
  Divider,
  FacebookIcon,
  GoogleIcon,
  IconButton,
} from '@repo/ui/components';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import ForgotPasswordForm from '../forgot-password-form';
import ForgotPasswordSuccess from '../forgot-password-success';

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
              <FacebookIcon />
            </IconButton>
            <IconButton className="dark:bg-default-white/10">
              <GoogleIcon />
            </IconButton>
          </div>

          <div className="text-center">
            <p className="body2 text-text-light-01 dark:text-text-dark-03">
              Don't have an account?&nbsp;
              <Link href="/auth/sign-up" className="text-default-brand">
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
