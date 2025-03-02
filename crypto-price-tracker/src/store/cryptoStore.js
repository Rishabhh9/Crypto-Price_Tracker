import { create } from 'zustand';
import { fetchCryptoPrices } from '../api/coingecko';

const useCryptoStore = create((set) => ({
  prices: {},
  loading: false,
  error: null,
  fetchPrices: async (ids) => {
    set({ loading: true, error: null });
    try {
      const data = await fetchCryptoPrices(ids);
      set({ prices: data, loading: false });
    } catch (error) {
      set({ error: 'Failed to fetch prices', loading: false });
    }
  },
}));

export default useCryptoStore;
