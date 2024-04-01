import RestaurantDbSource from "../../data/restaurant-db-source";
import "../../components/component";

const Home = {
  async render() {
    return `
      <hero-bar></hero-bar>

      <div class="title-main">
        <h1>Explore Restaurant</h1>
      </div>

      <section id="content">
        <loading-item></loading-item>
        <div class="row">

        </div>
      </section>
    `;
  },

  async afterRender() {
    const listResto = await RestaurantDbSource.listRestaurant();
    const restoContainerElement = document.querySelector("#content .row");
    const loadingElement = document.querySelector("loading-item");

    loadingElement.style.display = "none";
    listResto.forEach(async (restaurant) => {
      const restoItemElement = document.createElement("resto-item");
      restoItemElement.restaurantList = await restaurant;
      restoContainerElement.appendChild(restoItemElement);
    });
  },
};

export default Home;
