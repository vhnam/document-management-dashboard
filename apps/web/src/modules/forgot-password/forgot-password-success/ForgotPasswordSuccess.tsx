import { Button } from '@repo/ui/components';
import Image from 'next/image';

interface ForgotPasswordSuccessProps {
  mailTo: string | null;
}

const ForgotPasswordSuccess = ({ mailTo }: ForgotPasswordSuccessProps) => {
  return (
    <div className="mb-5 flex items-center flex-col">
      <h1 className="h1 text-text-light-01 dark:text-text-dark-03 mb-9">
        Check your email
      </h1>

      <div className="mb-6">
        <Image src="/mail.webp" alt="Mail" width={230} height={202} />
      </div>

      {mailTo && (
        <>
          <p className="body2 mb-12 text-text-light-01 dark:text-text-dark-03">
            We've sent an email to <strong>{mailTo}</strong> to verify your
            account.
          </p>

          <Button type="button" className="w-full h-16 py-6 mb-12">
            Open My Email
          </Button>
        </>
      )}
    </div>
  );
};

export default ForgotPasswordSuccess;
