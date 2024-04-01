import CONFIG from "../globals/config";

class DeskripsiResto extends HTMLElement {
  set restaurantDetail(value) {
    this._descripsiResto = value;
    this.render();
  }

  render() {
    this.innerHTML = `
      <h1 class="detail_resto__title" tabindex="0" aria-label="Deskripsi ${this._descripsiResto.name}">${this._descripsiResto.name}</h1>

      <article class="detail_resto__card">
        <div class="detail_resto__left-content">
          <img
            src="${CONFIG.BASE_IMAGE_URL}${this._descripsiResto.pictureId}"
            alt="Image ${this._descripsiResto.name}"
            class="detail_resto__image"
            loading="lazy"
          />
        </div>
        <div class="detail_resto__right-content">
          <h2 class="detail_resto__item">
            <i class="icon-loc bx bxs-location-plus"></i> 
            ${this._descripsiResto.city}, ${this._descripsiResto.address}
          </h2>
          <h2 class="detail_resto__item italic">
            <i class="icon-star bx bxs-star"></i> ${this._descripsiResto.rating} / 5.0
          </h2>
          <p class="detail_resto__description">
            ${this._descripsiResto.description}
          </p>
          <p class="detail_resto__menu">Foods Menu : 
            <span>
            ${this._descripsiResto.menus.foods.map((food) => food.name).join(", ")}.
            </span>
          </p>
          <p class="detail_resto__menu">Drinks Menu : 
            <span>
            ${this._descripsiResto.menus.drinks.map((drink) => drink.name).join(", ")}.
            </span>
          </p>
          <p class="detail_resto__category">Category : 
            <span>
            ${this._descripsiResto.categories.map((categori) => categori.name).join(", ")}.
            </span>
          </p>
        </div>
      </article>

      <div class="horizontal-line"></div>

      <h2 class="customer_riviews__title">Customer Reviews</h2>
      <article class="customer_riviews__card">
        ${this._descripsiResto.customerReviews.map((customer) => `
          <div class="customer_riviews__item">
            <div class="customer_riviews__item-icons">
              <i class="icon-user bx bxs-user-circle"></i>
            </div>
            <div class="customer_riviews__item-group">
              <h3 class="customer_riviews__subtitle">${customer.name}</h3>
              <div class="horizontal-line remove-margin"></div>
              <p class="customer_riviews__text">
                ${customer.review}
              </p>
              <p class="customer_riviews__date">${customer.date}.</p>
            </div>
          </div>
        `).join("")}
      </article>

      <article class="form_riviews__container">
        <button class="btn_custom button_add__review">Add a Review</button>

        <div class="form_group">
          <form action="">
            <div class="form_input_group">
              <label for="name">Nama</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                class="form_input_group__name"
                required
              />
            </div>
            <div class="form_input_group">
              <label for="reviews">Reviews</label>
              <textarea
                name="reviews"
                id="reviews"
                rows="3"
                class="form_input_group__reviews"
                placeholder="Reviews"
              ></textarea>
              <p class="handler_input_requied">*Input cannot be empty!!!</p>
            </div>
            <button type="submit" class="btn_custom button_submit" aria-label="send preview">
              Send
            </button>
          </form>
        </div>
      </article>
    `;
  }
}

customElements.define("deskripsi-resto", DeskripsiResto);
