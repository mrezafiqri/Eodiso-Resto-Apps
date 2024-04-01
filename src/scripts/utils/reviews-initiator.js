/* eslint-disable no-param-reassign */
const RiviewInitiator = {
  init({ button, content }) {
    button.addEventListener("click", (event) => {
      this._toggleForm(event, button, content);
    });
  },

  _toggleForm(event, button, content) {
    event.stopPropagation();
    content.classList.toggle("open");
    button.textContent = content.classList.contains("open") ? "Close Form Review" : "Add a Review";
    button.ariaLabel = content.classList.contains("open") ? "Close a Review Form" : "Add a Review Form";
    document.querySelector(".form_input_group__name").focus();
  },
};

export default RiviewInitiator;
