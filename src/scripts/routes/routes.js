import DetailResto from "../views/pages/detail-resto";
import Favorites from "../views/pages/favorites";
import Home from "../views/pages/home";

const routes = {
  "/": Home,
  "/detail/:id": DetailResto,
  "/favorite": Favorites,
};

export default routes;
