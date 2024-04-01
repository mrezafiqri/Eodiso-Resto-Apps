import DetailResto from "../views/pages/detail-resto";
import Favorites from "../views/pages/favorites";
import Home from "../views/pages/home";

const routes = {
  "/Eodiso-Resto-Apps/": Home,
  "/Eodiso-Resto-Apps/detail/:id": DetailResto,
  "/Eodiso-Resto-Apps/favorite": Favorites,
};

export default routes;
