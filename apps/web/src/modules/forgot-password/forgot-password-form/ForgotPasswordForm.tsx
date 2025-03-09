import { Button, TextField } from '@repo/ui/components';

const ForgotPasswordForm = () => {
  return (
    <div>
      <h1 className="h1 text-text-light-01 dark:text-text-dark-03 mb-6">
        Forgot your password?
      </h1>
      <p className="body2 mb-12 text-text-light-01 dark:text-text-dark-03">
        Enter your email address and we will send you instructions on how to
        reset your password.
      </p>

      <div className="mb-9">
        <TextField
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your Email"
          id="forgot-password__email__textfield"
        />
      </div>

      <Button type="submit" className="w-full h-16 py-6 mb-12">
        Recover Email
      </Button>
    </div>
  );
};

export default ForgotPasswordForm;
