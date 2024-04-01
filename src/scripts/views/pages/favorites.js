import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";

const Favorites = {
  async render() {
    return `
      <hero-bar></hero-bar>
      <div class="title-main">
        <h1>Your Favorite Restaurants</h1>
      </div>

      <h2 class="text-favorite__empty">No favorite restaurant selected...</h2>

      <section id="content">
        <div class="row">
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const textEmptyFavorite = document.querySelector(".text-favorite__empty");
    textEmptyFavorite.scrollIntoView();

    if (restaurants.length !== 0) {
      textEmptyFavorite.style.display = "none";
    }

    restaurants.forEach((restaurant) => {
      const restoItemElement = document.createElement("resto-item");
      restoItemElement.restaurantList = restaurant;

      const restoContainerElement = document.querySelector("#content .row");
      restoContainerElement.appendChild(restoItemElement);
    });
  },
};

export default Favorites;
