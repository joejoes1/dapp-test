import { Web3ReactHooks } from '@web3-react/core';
import { AddEthereumChainParameter, Connector } from '@web3-react/types';
import { buildInjectedConnector } from './injected';
import { CHAIN_INFO } from './chains';
import { NoMetaMaskError } from '@web3-react/metamask';

export interface Connection {
  connector: Connector;
  hooks: Web3ReactHooks;
  type: ConnectionType;
}

export enum ConnectionType {
  INJECTED = 'INJECTED',
}

export const PRIORITIZED_CONNECTORS: { [key in ConnectionType]: Connection } = {
  [ConnectionType.INJECTED]: buildInjectedConnector(),
};

export function getConnection(c: Connector | ConnectionType) {
  if (c instanceof Connector) {
    const connection = Object.values(PRIORITIZED_CONNECTORS).find((connection) => connection.connector === c);
    if (!connection) {
      throw Error('Unsupported Connector');
    }
    return connection;
  } else {
    switch (c) {
      case ConnectionType.INJECTED:
        return PRIORITIZED_CONNECTORS[ConnectionType.INJECTED];
    }
  }
}

export const switchNetwork = async (chainId: number, connectionType: ConnectionType | null) => {
  if (!connectionType) {
    return;
  }

  const { connector } = getConnection(connectionType);

  const chainInfo = CHAIN_INFO[chainId];
  const addChainParameter: AddEthereumChainParameter = {
    chainId,
    chainName: chainInfo.label,
    rpcUrls: [chainInfo.rpcUrl],
    nativeCurrency: chainInfo.nativeCurrency,
    blockExplorerUrls: [chainInfo.explorer],
  };
  await connector.activate(addChainParameter);
};

export const tryActivateConnector = async (connector: Connector): Promise<ConnectionType | undefined> => {
  await connector.activate();
  const connectionType = getConnection(connector).type;
  return connectionType;
};

// @TODO: Кнопка выхода
export const tryDeactivateConnector = async (connector: Connector): Promise<null | undefined> => {
  connector.deactivate?.();
  connector.resetState();
  return null;
};

export function onConnectionError(error: Error) {
  console.debug(`web3-react error: ${error}`);
}
