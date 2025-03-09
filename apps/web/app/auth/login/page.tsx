import {
  Button,
  Checkbox,
  Divider,
  FacebookIcon,
  GoogleIcon,
  IconButton,
  PasswordField,
  TextField,
} from '@repo/ui/components';
import Link from 'next/link';

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
            href="/auth/forgot-password"
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
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
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

export default LoginPage;
