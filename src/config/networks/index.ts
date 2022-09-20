export enum SupportedChainId {
  BSC = 56,
  ETHEREUM = 1,
}

const Bsc = 'https://res.cloudinary.com/sushi-cdn/image/fetch/f_auto,c_limit,w_64,q_auto/https://raw.githubusercontent.com/sushiswap/icons/master/network/bsc.jpg'
const Mainnet = 'https://res.cloudinary.com/sushi-cdn/image/fetch/f_auto,c_limit,w_64,q_auto/https://raw.githubusercontent.com/sushiswap/icons/master/network/mainnet.jpg'

export const NETWORK_ICON: Record<number, string> = {
  [SupportedChainId.ETHEREUM]: Mainnet,
  [SupportedChainId.BSC]: Bsc,
}

export const NETWORK_LABEL: Record<number, string> = {
  [SupportedChainId.ETHEREUM]: 'Ethereum',
  [SupportedChainId.BSC]: 'Binance Smart Chain',
}

export const NETWORK_LABEL_SHORT: Record<number, string> = {
  [SupportedChainId.ETHEREUM]: 'ETH',
  [SupportedChainId.BSC]: 'BSC',
}
