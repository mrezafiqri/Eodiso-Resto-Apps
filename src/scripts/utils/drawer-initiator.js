const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener("click", (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener("click", (event) => {
      this._closeDrawer(event, drawer);
    });

    drawer.addEventListener("click", (event) => {
      this._closeDrawer(event, drawer);
    });

    document.addEventListener("keyup", (event) => {
      this._removeDrawer(event, button, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle("active");
    document.querySelector(".icon").classList.toggle("bx-x");
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove("active");
    document.querySelector(".icon").classList.remove("bx-x");
  },

  _removeDrawer(event, button, drawer) {
    event.stopPropagation();
    if (this._containsDrawer(event, button, drawer)) {
      drawer.classList.remove("active");
      document.querySelector(".icon").classList.remove("bx-x");
    }
  },

  _containsDrawer(event, button, drawer) {
    return event.key === "Tab" && !button.contains(event.target) && !drawer.contains(event.target);
  },
};

export default DrawerInitiator;
