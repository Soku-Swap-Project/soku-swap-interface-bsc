// export enum SupportedChainId {
//   BSC = 56,
//   ETHEREUM = 1,
// }

export enum SupportedChainId {
  ETHEREUM = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GOERLI = 5,
  KOVAN = 42,
  BSC = 56,
  POLYGON = 137,
  AVALANCHE = 43114,
  MOONRIVER = 1285,
  FANTOM = 250,
  HARMONY = 1666600000,
  ARBITRUM = 42161,
  AURORA = 1313161554,
}

const Arbitrum =
  'https://res.cloudinary.com/sushi-cdn/image/fetch/f_auto,c_limit,w_64,q_auto/https://raw.githubusercontent.com/sushiswap/icons/master/network/arbitrum.jpg'
const Avalanche =
  'https://res.cloudinary.com/sushi-cdn/image/fetch/f_auto,c_limit,w_64,q_auto/https://raw.githubusercontent.com/sushiswap/icons/master/network/avalanche.jpg'
const Bsc =
  'https://res.cloudinary.com/sushi-cdn/image/fetch/f_auto,c_limit,w_64,q_auto/https://raw.githubusercontent.com/sushiswap/icons/master/network/bsc.jpg'
const Fantom =
  'https://res.cloudinary.com/sushi-cdn/image/fetch/f_auto,c_limit,w_64,q_auto/https://raw.githubusercontent.com/sushiswap/icons/master/network/fantom.jpg'
const Goerli =
  'https://res.cloudinary.com/sushi-cdn/image/fetch/f_auto,c_limit,w_64,q_auto/https://raw.githubusercontent.com/sushiswap/icons/master/network/goerli.jpg'
const Harmony =
  'https://res.cloudinary.com/sushi-cdn/image/fetch/f_auto,c_limit,w_64,q_auto/https://raw.githubusercontent.com/sushiswap/icons/master/network/harmonyone.jpg'
const Heco =
  'https://res.cloudinary.com/sushi-cdn/image/fetch/f_auto,c_limit,w_64,q_auto/https://raw.githubusercontent.com/sushiswap/icons/master/network/heco.jpg'
const Kovan =
  'https://res.cloudinary.com/sushi-cdn/image/fetch/f_auto,c_limit,w_64,q_auto/https://raw.githubusercontent.com/sushiswap/icons/master/network/kovan.jpg'
const Mainnet =
  'https://res.cloudinary.com/sushi-cdn/image/fetch/f_auto,c_limit,w_64,q_auto/https://raw.githubusercontent.com/sushiswap/icons/master/network/mainnet.jpg'
const Matic =
  'https://res.cloudinary.com/sushi-cdn/image/fetch/f_auto,c_limit,w_64,q_auto/https://raw.githubusercontent.com/sushiswap/icons/master/network/polygon.jpg'
const Moonbeam =
  'https://res.cloudinary.com/sushi-cdn/image/fetch/f_auto,c_limit,w_64,q_auto/https://raw.githubusercontent.com/sushiswap/icons/master/network/moonbeam.jpg'
const OKEx =
  'https://res.cloudinary.com/sushi-cdn/image/fetch/f_auto,c_limit,w_64,q_auto/https://raw.githubusercontent.com/sushiswap/icons/master/network/okex.jpg'
const Polygon =
  'https://res.cloudinary.com/sushi-cdn/image/fetch/f_auto,c_limit,w_64,q_auto/https://raw.githubusercontent.com/sushiswap/icons/master/network/polygon.jpg'
const Rinkeby =
  'https://res.cloudinary.com/sushi-cdn/image/fetch/f_auto,c_limit,w_64,q_auto/https://raw.githubusercontent.com/sushiswap/icons/master/network/rinkeby.jpg'
const Ropsten =
  'https://res.cloudinary.com/sushi-cdn/image/fetch/f_auto,c_limit,w_64,q_auto/https://raw.githubusercontent.com/sushiswap/icons/master/network/ropsten.jpg'
const Moonriver =
  'https://res.cloudinary.com/sushi-cdn/image/fetch/f_auto,c_limit,w_64,q_auto/https://raw.githubusercontent.com/sushiswap/icons/master/network/moonriver.jpg'

export const NETWORK_ICON: Record<number, string> = {
  [SupportedChainId.ETHEREUM]: Mainnet,
  [SupportedChainId.ROPSTEN]: Ropsten,
  [SupportedChainId.RINKEBY]: Rinkeby,
  [SupportedChainId.KOVAN]: Kovan,
  [SupportedChainId.FANTOM]: Fantom,
  [SupportedChainId.BSC]: Bsc,
  [SupportedChainId.POLYGON]: Polygon,
  [SupportedChainId.ARBITRUM]: Arbitrum,
  [SupportedChainId.AVALANCHE]: Avalanche,
  [SupportedChainId.HARMONY]: Harmony,
  [SupportedChainId.MOONRIVER]: Moonriver,
}

export const NETWORK_LABEL: Record<number, string> = {
  [SupportedChainId.ETHEREUM]: 'Ethereum',
  [SupportedChainId.RINKEBY]: 'Rinkeby',
  [SupportedChainId.ROPSTEN]: 'Ropsten',
  [SupportedChainId.KOVAN]: 'Kovan',
  [SupportedChainId.FANTOM]: 'Fantom',
  [SupportedChainId.POLYGON]: 'Polygon',
  [SupportedChainId.ARBITRUM]: 'Arbitrum',
  [SupportedChainId.BSC]: 'Binance Smart Chain',
  [SupportedChainId.AVALANCHE]: 'Avalanche',
  [SupportedChainId.HARMONY]: 'Harmony',
  [SupportedChainId.MOONRIVER]: 'Moonriver',
}

export const NETWORK_LABEL_SHORT: Record<number, string> = {
  [SupportedChainId.ETHEREUM]: 'ETH',
  [SupportedChainId.RINKEBY]: 'Rinkeby',
  [SupportedChainId.ROPSTEN]: 'Ropsten',
  [SupportedChainId.KOVAN]: 'Kovan',
  [SupportedChainId.FANTOM]: 'Fantom',
  [SupportedChainId.POLYGON]: 'MATIC',
  [SupportedChainId.ARBITRUM]: 'Arbitrum',
  [SupportedChainId.BSC]: 'BSC',
  [SupportedChainId.AVALANCHE]: 'Avalanche',
  [SupportedChainId.HARMONY]: 'Harmony',
  [SupportedChainId.MOONRIVER]: 'Moonriver',
}
