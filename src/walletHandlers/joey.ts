import type { IWalletHandler } from './IWalletHandler';
import { disconnectWallet } from '../services/walletService';
// Joey Wallet handler implementation
export const joeyHandler: IWalletHandler = {
  async connect() {
    // Joey connect is handled via hook/UI, not here
    return Promise.resolve();
  },
  async disconnect({ auth0Id, accessToken }: { auth0Id: string; accessToken?: string }) {
    await disconnectWallet(auth0Id, accessToken);
  },
  async repair() {
    // Implement Joey repair logic if needed
  },
};
