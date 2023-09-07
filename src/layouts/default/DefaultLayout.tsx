import { AppFooter } from '@/components/appFooter';
import { AppHeader } from '@/components/appHeader';
import { Overlay } from '@/components/overlay';
import { PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col h-full">
      <AppHeader />
      <main className="w-full app-offset-container min-h-[37.5rem]">
        <div className="app-max-container mx-auto">{children}</div>
      </main>
      <AppFooter />
      <Overlay />
      <ToastContainer />
    </div>
  );
};

export default DefaultLayout;
