class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="row">
        <div class="card-logo" aria-label="logo Eodis'o Resto" tabindex="0">
          <img class="logo-img" src="./favicon.png" alt="Icons Eodis'o Resto">
          <h1 class="title-text" >Eodis'o Resto</a>
        </div>
        
        <div id="hamburger">
          <button class="hamburger-menu" type="button" aria-label="button menu dropdown navigation">
            <i class="icon bx bx-menu"></i>
          </button>
        </div>

        <nav class="navbar">
          <ul class="card-navbar">
            <li><a href="#/">Home</a></li>
            <li><a href="#/favorite">Favorite</a></li>
            <li><a href="https://mrezafiqri.github.io/website-mrezafiqri/" target="_blank" rel="noopener noreferrer">About Us</a></li>
          </ul>
        </nav>

      </section>
    `;
  }
}

customElements.define("app-bar", AppBar);
