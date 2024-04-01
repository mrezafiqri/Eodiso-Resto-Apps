class HeroBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section id="hero">
        <div class="row">
          <h1 class="hero-title">Eodis'o Resto and Cafe</h1>
          <p class="hero-text">
            Confused about looking for a restaurant, find the best restaurant here!!!
          </p>
        </div>
      </section>
    `;
  }
}

customElements.define("hero-bar", HeroBar);
