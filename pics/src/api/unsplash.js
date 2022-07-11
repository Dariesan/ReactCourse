import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID XR8ZIUpUpV90ZrimdBcjkeUMAnwc-aakiLLrY4pEZQc",
  },
});
