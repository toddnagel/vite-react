import { IWalletHandler } from './IWalletHandler';

export const xamanHandler: IWalletHandler = {
  async connect({ auth0Id, walletId, accessToken, showToast, connectWallet, loadWallets, authorizeXamanAccount }) {
    // ...existing Xaman connect logic...
  },
  async disconnect({ clearXamanSession, showToast, loadWallets, auth0Id, accessToken }) {
    // ...existing Xaman disconnect logic...
  },
  async repair(args) {
    // ...existing Xaman repair logic if needed...
  }
};
