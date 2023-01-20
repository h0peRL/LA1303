import { renderHome, renderNotFound, renderLogin } from "./sites.js";
import { Router } from "./router.js";

export const routes = {
  login: { hash: "#login", function: renderLogin },
  home: { hash: "#home", function: renderHome },
  error: { function: renderNotFound },
};

export let router = new Router(routes);

const app = document.getElementById("app");
router.urlResolve();
