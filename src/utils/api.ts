// src/utils/api.ts
import axios from "axios";

const API_URL = "https://api.coingecko.com/api/v3";

export const fetchCryptos = async () => {
  try {
    const response = await axios.get(`${API_URL}/coins/markets`, {
      params: {
        vs_currency: "usd",
        ids: "bitcoin,ethereum,ripple,litecoin,cardano",
        sparkline: "true",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
