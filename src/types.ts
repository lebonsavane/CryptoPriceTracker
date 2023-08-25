export interface Crypto {
  market_cap_rank: number;
  market_cap: number;
  price_change_24h: number;
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  image: string;
  sparkline_in_7d: {
    price: [];
  };
}
