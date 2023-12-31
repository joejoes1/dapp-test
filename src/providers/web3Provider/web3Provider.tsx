import { ConnectionType, PRIORITIZED_CONNECTORS, getConnection } from '@/libs/connections';
import { Web3ReactProvider } from '@web3-react/core';
import { Connector } from '@web3-react/types';
import { ReactNode, useEffect } from 'react';

async function connect(connector: Connector) {
  try {
    if (connector.connectEagerly) {
      await connector.connectEagerly();
    } else {
      await connector.activate();
    }
  } catch (error) {
    console.debug(`web3-react eager connection error: ${error}`);
  }
}

const connectEagerly = async () => {
  await connect(getConnection(ConnectionType.INJECTED).connector);
};

const Web3ContextProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    connectEagerly();
  }, []);

  return (
    <Web3ReactProvider
      connectors={Object.values(PRIORITIZED_CONNECTORS).map((connector) => [connector.connector, connector.hooks])}
    >
      {children}
    </Web3ReactProvider>
  );
};

export default Web3ContextProvider;
