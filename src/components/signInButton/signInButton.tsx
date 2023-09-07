import cn from 'classnames';
import { ReactComponent as MetamaskLogo } from '@/assets/img/metamask.svg';
import { ReactComponent as CopyIcon } from '@/assets/img/copy.svg';
import { AppButton } from '../appButton';
import { useWeb3React } from '@web3-react/core';
import { ConnectionType, getConnection, onConnectionError, tryActivateConnector } from '@/libs/connections';
import truncateEthAddress from '@/utils/truncateAddress';
import { useMemo } from 'react';
import copyText from '@/utils/copyText';
import * as s from './signInButton.module.scss';

export interface ISignInButtonProps {
  className?: string;
}

const connection = ConnectionType.INJECTED;

const SignInButton = ({ className }: ISignInButtonProps) => {
  const contextWeb3 = useWeb3React();
  const truncatedAddress = useMemo(
    () => (contextWeb3.account ? truncateEthAddress(contextWeb3.account) : ''),
    [contextWeb3.account],
  );
  const isActive = contextWeb3.isActive;
  const loading = contextWeb3.isActivating;

  if (loading) {
    return <span>...</span>;
  }

  const handleLogin = async () => {
    await tryActivateConnector(getConnection(connection).connector).catch(onConnectionError);
  };

  if (!isActive) {
    return (
      <AppButton tabIndex={0} className={cn(className)} onClick={handleLogin}>
        Connect Wallet
      </AppButton>
    );
  }

  const handleCopy = async () => {
    if (contextWeb3.account) {
      await copyText(contextWeb3.account, 'Address copied to clipboard');
    }
  };

  return (
    <a
      type="button"
      className={cn(
        'text-xs sm:text-sm py-7 px-10 bg-white text-accentPrimary text-center rounded-[.625rem] cursor-pointer flex flex-row gap-x-2 items-center',
        s.userButton,
      )}
      onClick={handleCopy}
    >
      <MetamaskLogo />
      {truncatedAddress}
      <CopyIcon className={s.copyIcon} />
    </a>
  );
};

export default SignInButton;
