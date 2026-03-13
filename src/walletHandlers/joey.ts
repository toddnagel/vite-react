import { IWalletHandler } from './IWalletHandler';

export const joeyHandler: IWalletHandler = {
  async connect({ auth0Id, walletId, accessToken, joeyActions, joeyAccounts, showToast, connectWallet, loadWallets }) {
    // ...existing Joey connect logic...
  },
  async disconnect({ joeyActions, showToast, loadWallets, auth0Id, accessToken }) {
    // ...existing Joey disconnect logic...
  },
  async repair(args) {
    // ...existing Joey repair logic if needed...
  }
};
