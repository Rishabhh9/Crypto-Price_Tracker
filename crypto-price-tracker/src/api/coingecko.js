import axios from 'axios';

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

export const fetchCryptoPrices = async (ids) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/simple/price`, {
      params: {
        ids: ids.join(','),
        vs_currencies: 'usd'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching crypto prices:', error);
    throw error;
  }
};
