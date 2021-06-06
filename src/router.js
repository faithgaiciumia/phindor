import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Inventory from "./views/Inventory.vue";
import Transactions from "./views/Transactions.vue";
import Analytics from "./views/Analytics.vue";
import Market from "./views/Market.vue";
import Employees from "./views/Employees.vue";
import Categories from "./views/Categories.vue";
import HelpCenter from "./views/HelpCenter.vue";
import Settings from "./views/Settings.vue";
import Login from "./views/Login.vue";
import Signup from "./views/Signup.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/inventory",
      name: "inventory",
      component: Inventory,
    },
    {
      path: "/transactions",
      name: "transactions",
      component: Transactions,
    },
    {
      path: "/analytics",
      name: "analytics",
      component: Analytics,
    },
    {
      path: "/market",
      name: "market",
      component: Market,
    },
    {
      path: "/employees",
      name: "employees",
      component: Employees,
    },
    {
      path: "/categories",
      name: "categories",
      component: Categories,
    },
    {
      path: "/help",
      name: "help",
      component: HelpCenter,
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings,
    },
  ],
});
