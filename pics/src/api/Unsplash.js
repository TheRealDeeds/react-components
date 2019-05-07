import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 5d202927651a6dd2538c7307f02ba88a525641eb1cc2b02bf2e3b1b428fe10f6"
  }
});
