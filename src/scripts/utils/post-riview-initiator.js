import RestaurantDbSource from "../data/restaurant-db-source";
import UrlParser from "../routes/url-parser";

const PostRiview = async () => {
  const url = UrlParser.parseActiveUrlWithoutCombiner();
  const name = document.querySelector(".form_input_group__name");
  const review = document.querySelector(".form_input_group__reviews");
  const containerReviewCard = document.querySelector(".customer_riviews__card");

  const inputRequiredText = document.querySelector(".handler_input_requied");

  if (name.value === "" || review.value === "") {
    inputRequiredText.style.display = "block";
    return;
  }
  inputRequiredText.style.display = "none";

  const data = {
    id: url.id,
    name: name.value,
    review: review.value,
  };

  const getDate = new Date().toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const reviewElement = `
    <div class="customer_riviews__item">
      <div class="customer_riviews__item-icons">
        <i class="icon-user bx bxs-user-circle"></i>
      </div>
      <div class="customer_riviews__item-group">
        <h3 class="customer_riviews__subtitle">${data.name}</h3>
        <div class="horizontal-line remove-margin"></div>
        <p class="customer_riviews__text">
          ${data.review}
        </p>
        <p class="customer_riviews__date">${getDate}.</p>
      </div>
    </div>
  `;

  await RestaurantDbSource.addReview(data);
  containerReviewCard.innerHTML += reviewElement;
  name.value = "";
  review.value = "";
};

export default PostRiview;
