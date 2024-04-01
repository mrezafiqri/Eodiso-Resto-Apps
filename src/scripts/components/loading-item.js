class LoadingItem extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  connectedCallback() {
    this.render();
  }

  updateStyle() {
    this._style.textContent = `
      #loader {
        margin-inline: auto;
        margin-block: 5rem;
        border: 16px solid #a9b388;
        border-radius: 50%;
        border-top: 16px solid #5f6f52;
        width: 120px;
        height: 120px;
        animation: spin .5s linear infinite;
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
  }

  render() {
    this.updateStyle();

    const loaderElement = `
      ${this._style.outerHTML}

      <div id="loader"></div>
    `;

    this._shadowRoot.innerHTML = loaderElement;
  }
}

customElements.define("loading-item", LoadingItem);
