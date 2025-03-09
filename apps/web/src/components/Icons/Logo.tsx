import { SVGProps } from 'react';

export type LogoStatus = 'public' | 'private';

export interface LogoProps extends SVGProps<SVGSVGElement> {
  status?: LogoStatus;
}

const logoVariantStyles = {
  public: {
    bigCircle: 'fill-default-white/20 dark:fill-default-brand/20',
    smallCircle: 'fill-default-white dark:fill-default-brand',
  },
  private: {
    bigCircle: 'fill-[#CAD2FF] dark:fill-[#E7EAFF]',
    smallCircle: 'fill-default-brand',
  },
};

export const Logo = ({ status = 'private', ...props }: LogoProps) => {
  const logoStyle = logoVariantStyles[status];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={53}
      height={52}
      fill="none"
      {...props}
    >
      <title>Storage</title>
      <rect width={48} height={48} rx={24} className={logoStyle.bigCircle} />
      <rect
        width={32}
        height={32}
        x={21}
        y={20}
        className={logoStyle.smallCircle}
        rx={16}
      />
    </svg>
  );
};
