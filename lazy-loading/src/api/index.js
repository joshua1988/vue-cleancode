// @ts-check
import axios from "axios";

// NOTE: https://www.pexels.com/api/documentation/
const instance = axios.create({
  baseURL: `https://api.pexels.com/v1`,
  headers: {
    Authorization: process.env.VUE_APP_API_KEY
  }
});

/**
 * @typedef {object} Cat
 * @property {string} name
 * @property {string} imageUrl
 */

//  const Cat = {
//    "name": "???",
//    "imageUrl": "???"
//  }

/**
 * 
 * @param {string} query 검색 키워드
 * @param {number} per_page 1회 요청당 받아올 이미지 갯수
 * @returns {import("axios").AxiosPromise<Cat>} 결과 데이터
 */
function fetchImagesBySearchKeywords(query, per_page = 50) {
  return instance.get(`/search`, {
    params: {
      query,
      per_page
    }
  });
}

fetchImagesBySearchKeywords('cat', '10').then(res => {
  res.data.imageUrl
})
// fetchImagesBySearchKeywords().then(res => {
//   res.data.
// })

export { fetchImagesBySearchKeywords };
