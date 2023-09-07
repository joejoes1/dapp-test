import logo from '@/assets/img/logo.svg';
import { SignInButton } from '../signInButton';

const AppHeader = () => {
  return (
    <header className="sm:border-b border-lightGray app-offset-container min-h-[6.25rem]">
      <div className="flex flex-row justify-between app-max-container mx-auto h-full items-center relative flex-wrap">
        <div className="sm:mx-auto w-[6.125rem] h-[.9988rem] sm:w-[9.26rem] sm:h-[1.5106rem]">
          <img src={logo} alt="" />
        </div>
        <div className="sm:absolute right-0">
          <SignInButton />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
