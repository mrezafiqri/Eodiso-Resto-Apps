import API_ENDPOINT from "../globals/api-endpoint";

class RestaurantDbSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.GET_LIST_RESTO);
    const responeJson = await response.json();
    return responeJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.GET_DETAIL_RESTO(id));
    return response.json();
  }

  static async searchRestaurant(keyword) {
    const response = await fetch(API_ENDPOINT.SEARCH_RESTO(keyword));
    const responeJson = response.json();
    return responeJson.restaurants;
  }

  static async addReview(data) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(API_ENDPOINT.ADD_RIVIEW, options);
    return response.json();
  }
}

export default RestaurantDbSource;
