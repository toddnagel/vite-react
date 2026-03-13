import { IWalletHandler } from './IWalletHandler';

export const xamanHandler: IWalletHandler = {
  async connect({ auth0Id, walletId, accessToken, showToast, connectWallet, loadWallets }) {
    // ...existing Xaman connect logic...
  },
  async disconnect({ showToast, loadWallets, auth0Id, accessToken }) {
    // ...existing Xaman disconnect logic...
  },
  async repair() {
    // ...existing Xaman repair logic if needed...
  }
};
