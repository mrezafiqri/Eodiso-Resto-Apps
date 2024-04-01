import "../../components/component";
import UrlParser from "../../routes/url-parser";
import RiviewInitiator from "../../utils/reviews-initiator";
import RestaurantDbSource from "../../data/restaurant-db-source";
import LikeButtonInitiator from "../../utils/like-button-initiator";
import PostRiview from "../../utils/post-riview-initiator";

const DetailResto = {
  async render() {
    return `
    <section id="content" class="detail_resto"></section>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailRestaurantContainer = document.querySelector(".detail_resto");

    try {
      const detailRestaurantElement = document.createElement("deskripsi-resto");
      const restaurants = await RestaurantDbSource.detailRestaurant(url.id);
      detailRestaurantElement.restaurantDetail = await restaurants.restaurant;

      detailRestaurantContainer.appendChild(detailRestaurantElement);
      detailRestaurantContainer.scrollIntoView();

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector("#likeButtonContainer"),
        restaurant: {
          id: restaurants.restaurant.id,
          name: restaurants.restaurant.name,
          city: restaurants.restaurant.city,
          pictureId: restaurants.restaurant.pictureId,
          description: restaurants.restaurant.description,
          rating: restaurants.restaurant.rating,
        },
      });

      RiviewInitiator.init({
        button: document.querySelector(".button_add__review"),
        content: document.querySelector(".form_group"),
      });

      const buttonSubmitRiview = document.querySelector(".button_submit");
      buttonSubmitRiview.addEventListener("click", (event) => {
        event.preventDefault();
        PostRiview();
      });
    } catch (error) {
      detailRestaurantContainer.innerHTML = `
      <h2 class="text-disconnected">Page is not accessible! <br> Please check your internet connection.</h2>
      `;
    }
  },
};

export default DetailResto;
