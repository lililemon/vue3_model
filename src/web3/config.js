import WalletConnectProvider from '@walletconnect/web3-provider';
// import Torus from '@toruslabs/torus-embed';
// import Authereum from 'authereum';

// import { Bitski } from 'bitski';
// const aa = import.meta.globEager('./constants.js')
// import Fortmatic from 'fortmatic';
// eslint-disable-next-line global-require
// const USDT_ADDRESS  = import.meta.env.VITE_USDT_ADDRESS
//
const providerOptions = {
  // https://docs.walletconnect.org/
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: 'xxxxxxxxxx', // TODO infuraId
    },
  },
  // injected: {
  //   display: {
  //     logo: "data:image/gif;base64,INSERT_BASE64_STRING",
  //     name: "Tokenpocket",
  //     description: "Connect with the provider in your Browser"
  //   },
  //   package: null
  // },
  // https://github.com/torusresearch/torus-embed#readme
  // torus: {
  //   package: Torus,
  // },
  // // https://docs.fortmatic.com/
  // fortmatic: {
  //   package: Fortmatic,
  //   options: {
  //     key: 'xxxxxxxxxx', // TODO key
  //   },
  // },
  // // https://docs.authereum.com/integration
  // authereum: {
  //   package: Authereum,
  // },
  // // https://docs.bitski.com/
  // bitski: {
  //   package: Bitski,
  //   options: {
  //     clientId: 'xxxxxxxxxx', // TODO
  //     callbackUrl: `${window.location.href}bitski-callback.html`,
  //   },
  // },
};

export {  providerOptions };
