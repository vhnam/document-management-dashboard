import {
  Button,
  Checkbox,
  Divider,
  IconButton,
  PasswordField,
  TextField,
} from '@repo/ui/components';
import Link from 'next/link';
import { Routes } from '../../../src/enums/Routes';
import Image from 'next/image';

const LoginPage = () => {
  return (
    <div className="py-[7.5rem] px-[8.75rem]">
      <div>
        <h1 className="h1 text-text-light-01 dark:text-text-dark-03 mb-12">
          Login
        </h1>

        <div className="flex flex-col gap-8 mb-9">
          <TextField
            label="Username"
            name="username"
            placeholder="Enter your Username"
            id="login__username__textfield"
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your Email"
            id="login__email__textfield"
          />
          <PasswordField
            label="Password"
            name="password"
            placeholder="Enter Password"
            id="login__password__textfield"
          />
        </div>

        <div className="flex items-center justify-between mb-12">
          <Checkbox id="login__remember-me__checkbox" label="Remember me" />
          <Link
            href={Routes.FORGOT_PASSWORD}
            className="text-default-brand subtitle2"
          >
            Forgot Password?
          </Link>
        </div>

        <Button type="submit" className="w-full h-16 py-6 mb-12">
          Login
        </Button>

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

export default LoginPage;
