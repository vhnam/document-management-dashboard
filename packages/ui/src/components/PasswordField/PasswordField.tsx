'use client';

import { useMemo, useState } from 'react';
import { ClosedEyeIcon, OpenedEyeIcon } from '../Icons';
import { TextField, TextFieldProps } from '../TextField';

export interface PasswordFieldProps extends Omit<TextFieldProps, 'type'> {}

const endAdornmentIconClasses =
  'text-text-light-02 dark:text-text-dark-03 select-none cursor-pointer';

const PasswordField = ({ ...props }: PasswordFieldProps) => {
  const [isShowedPassword, setIsShowedPassword] = useState(false);

  const inputType = useMemo(
    () => (isShowedPassword ? 'text' : 'password'),
    [isShowedPassword]
  );

  const endAdornmentIcon = useMemo(
    () =>
      isShowedPassword ? (
        <OpenedEyeIcon
          className={endAdornmentIconClasses}
          onClick={() => setIsShowedPassword(false)}
        />
      ) : (
        <ClosedEyeIcon
          className={endAdornmentIconClasses}
          onClick={() => setIsShowedPassword(true)}
        />
      ),
    [isShowedPassword]
  );

  return (
    <TextField {...props} type={inputType} endAdornment={endAdornmentIcon} />
  );
};

export default PasswordField;
