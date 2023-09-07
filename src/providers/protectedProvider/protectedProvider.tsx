import { SUPPORTED_CHAIN_IDS } from '@/libs/chains';
import { useWeb3React } from '@web3-react/core';
import { PropsWithChildren, createContext, useEffect, useMemo, useRef } from 'react';
import { Id, toast } from 'react-toastify';

export interface IProtectedContext {}

export const ProtectedContext = createContext<IProtectedContext>({});

const ProtectedContextProvider = ({ children }: PropsWithChildren) => {
  const contextWeb3 = useWeb3React();
  const wrongNetworkToastId = useRef<Id>();

  const isWrongNetwork = useMemo(() => {
    if (contextWeb3.isActive && contextWeb3.chainId) {
      return !SUPPORTED_CHAIN_IDS.includes(contextWeb3.chainId);
    }
    return false;
  }, [contextWeb3.chainId, contextWeb3.isActive]);

  useEffect(() => {
    if (isWrongNetwork) {
      wrongNetworkToastId.current = toast('You are not connected to the correct network', {
        type: 'error',
        autoClose: false,
        closeOnClick: false,
        closeButton: false,
        draggable: false,
      });
    } else if (wrongNetworkToastId.current) {
      toast.dismiss(wrongNetworkToastId.current);
      wrongNetworkToastId.current = undefined;
    }
  }, [isWrongNetwork]);

  return <ProtectedContext.Provider value={{}}>{children}</ProtectedContext.Provider>;
};

export default ProtectedContextProvider;
