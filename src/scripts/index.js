import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.scss";
import "./components/component";
import App from "./views/app";
import swRegister from "./utils/sw-register";

const app = new App({
  button: document.querySelector(".hamburger-menu"),
  drawer: document.querySelector(".navbar"),
  content: document.querySelector("main"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});
