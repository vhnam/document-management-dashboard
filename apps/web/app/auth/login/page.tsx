import { Button, Divider } from '@repo/ui/components';
import Image from 'next/image';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className="py-[7.5rem] px-[8.75rem]">
      <div>
        <h1 className="h1 text-text-light-01 dark:text-text-dark-03">Login</h1>
        <div>
          <Link href="#" className="text-default-brand subtitle2">
            Forgot Password?
          </Link>
        </div>
        <Button type="submit" className="w-full py-6">
          Login
        </Button>
        <div className="flex flex-col gap-8">
          <Divider>or</Divider>
          <div>
            <Button>
              <Image
                width={24}
                height={24}
                src="/facebook.webp"
                alt="Facebook"
              />
            </Button>
          </div>
          <div className="text-center">
            <p className="body2 text-text-light-01 dark:text-text-dark-03">
              Don't have an account?{' '}
              <Link href="#" className="text-default-brand">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
