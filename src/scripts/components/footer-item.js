class FooterItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="row">
        <p tabindex="0">Copyright © 2024 - Eodis'o Resto Apps</p>
      </div>
    `;
  }
}

customElements.define("footer-item", FooterItem);
