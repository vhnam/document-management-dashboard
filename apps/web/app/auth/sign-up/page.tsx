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

const SignUpPage = () => {
  return (
    <div className="py-[7.5rem] px-[8.75rem]">
      <div>
        <h1 className="h1 text-text-light-01 dark:text-text-dark-03 mb-12">
          Create Account
        </h1>

        <div className="flex flex-col gap-8 mb-9">
          <TextField
            label="Username"
            name="username"
            placeholder="Enter your Username"
            id="signup__username__textfield"
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your Email"
            id="signup__email__textfield"
          />
          <PasswordField
            label="Password"
            name="password"
            placeholder="Enter Password"
            id="signup__password__textfield"
          />
          <PasswordField
            label="Confirm Password"
            name="confirmPassword"
            placeholder="Confirm Password"
            id="signup__confirm-password__textfield"
          />
        </div>

        <Button type="submit" className="w-full h-16 py-6 mb-12">
          Create Account
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
              Already have an account?&nbsp;
              <Link href="/auth/login" className="text-default-brand">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
