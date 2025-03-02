"use client";

import { useState, useEffect } from 'react';
import useCryptoStore from '../store/cryptoStore';

const CRYPTO_IDS = ['bitcoin', 'ethereum', 'ripple', 'litecoin', 'dogecoin'];

export default function Dashboard() {
  const { prices, loading, error, fetchPrices } = useCryptoStore();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPrices(CRYPTO_IDS);
  }, []);

  const filteredCryptos = CRYPTO_IDS.filter(id => 
    id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Crypto Price Tracker</h1>
      <input 
        type="text" 
        placeholder="Search cryptocurrencies" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => fetchPrices(CRYPTO_IDS)}>Refresh</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {filteredCryptos.map(id => (
          <li key={id}>
            {id}: ${prices[id]?.usd || 'N/A'}
          </li>
        ))}
      </ul>
    </div>
  );
}
