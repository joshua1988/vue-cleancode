import axios from "axios";

// NOTE: https://www.pexels.com/api/documentation/
const instance = axios.create({
  baseURL: `https://api.pexels.com/v1`,
  headers: {
    Authorization: process.env.VUE_APP_API_KEY
  }
});

function fetchImagesBySearchKeywords(query, per_page = 50) {
  return instance.get(`/search`, {
    params: {
      query,
      per_page
    }
  });
}

export { fetchImagesBySearchKeywords };
