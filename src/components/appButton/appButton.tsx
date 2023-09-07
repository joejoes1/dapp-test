import cn from 'classnames';
import { PropsWithChildren, DetailedHTMLProps } from 'react';

export interface IAppButton
  extends DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  className?: string;
}

const AppButton = ({ children, className, ...props }: PropsWithChildren<IAppButton>) => {
  return (
    <a
      role="button"
      className={cn(
        'outline-none text-base text-white px-35 py-10 bg-accentPrimary rounded-lg text-center cursor-pointer duration-150 ease-in-out shadow-button hover:bg-accentLight hover:shadow-hoverButton active:bg-assentState focus-visible:bg-accentPrimary focus-visible:shadow-focusButton',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
};

export default AppButton;
