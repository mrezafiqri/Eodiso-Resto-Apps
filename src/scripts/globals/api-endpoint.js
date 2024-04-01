import CONFIG from "./config";

const API_ENDPOINT = {
  GET_LIST_RESTO: `${CONFIG.BASE_URL}list`,
  GET_DETAIL_RESTO: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  SEARCH_RESTO: (keyword) => `${CONFIG.BASE_URL}search?q=${keyword}`,
  ADD_RIVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
