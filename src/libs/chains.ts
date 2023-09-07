export const GOERLI_CHAIN_ID = 5;

export type ChainInfo = {
  explorer: string;
  label: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: 18;
  };
  rpcUrl: string;
};

export const CHAIN_INFO: { [key: string]: ChainInfo } = {
  [GOERLI_CHAIN_ID]: {
    explorer: 'https://goerli.etherscan.io',
    label: 'Goerli Ethereum',
    nativeCurrency: { name: 'Ether', symbol: 'GoerliETH', decimals: 18 },
    rpcUrl: 'https://goerli.infura.io/v3/',
  },
};

export const SUPPORTED_CHAIN_IDS: number[] = [GOERLI_CHAIN_ID];
