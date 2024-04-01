import CONFIG from "../globals/config";

class RestoItem extends HTMLElement {
  set restaurantList(value) {
    this._restoItem = value;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="card">
        <div class="card-img">
          <img class="card-img-item" src="${CONFIG.BASE_IMAGE_URL}${this._restoItem.pictureId}" alt="Foto ${this._restoItem.name}" loading="lazy">            
        </div>
        <div class="card-body">
          <h2 class="card-title">
            <a class="card-title-item" href="${`/#/detail/${this._restoItem.id}`}" aria-label="Name place, ${this._restoItem.name}">${this._restoItem.name}</a>
          </h2>
          <div class="card-group">
            <div class="card-location" tabindex="0" aria-label="${this._restoItem.city} city">
              <i class='icon bx bxs-location-plus'></i>
              <p class="text-location">${this._restoItem.city}</p>
            </div>
            <div class="card-stars">
              <i class='icon bx bxs-star'></i>
              <span class="text-star">${this._restoItem.rating}</span>
            </div>
          </div>
          <p class="card-desc">${this._restoItem.description}</p>
        </div>
      </div>
    `;
  }
}

customElements.define("resto-item", RestoItem);
