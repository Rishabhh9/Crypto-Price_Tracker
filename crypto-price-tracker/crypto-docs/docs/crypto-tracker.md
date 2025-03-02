# Crypto Price Tracker Documentation

## Project Setup

### Web App (Next.js)

1. Clone the repository
2. Navigate to the `web-app` directory
3. Install dependencies: `npm install`
4. Run the development server: `npm run dev`

## API Integration

We use the CoinGecko API to fetch cryptocurrency prices. The `fetchCryptoPrices` function in `src/api/coingecko.js` handles API requests.

## State Management

We chose Zustand for state management due to its simplicity and ease of use. The `useCryptoStore` in `src/store/cryptoStore.js` manages the application state.

## Challenges & Solutions

1. API Rate Limiting: Implemented error handling and user feedback for API failures.
2. Real-time Updates: Added a manual refresh button to fetch latest prices on demand.
3. Search Functionality: Implemented client-side filtering for quick search results.

