import ReactDOM from 'react-dom/client';
import '@/assets/css/index.scss';
import { DefaultLayout } from './layouts/default';
import { AppRouter } from './components/appRouter';
import { Web3ContextProvider } from './providers/web3Provider';
import { ProtectedProvider } from './providers/protectedProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Web3ContextProvider>
    <DefaultLayout>
      <ProtectedProvider>
        <AppRouter />
      </ProtectedProvider>
    </DefaultLayout>
  </Web3ContextProvider>,
);
