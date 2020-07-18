import Vue from "vue";
import App from "./App.vue";
import VueAxios from "vue-axios";
import axios from "axios";
import routes from "./routes";
import VueRouter from "vue-router";
import VueCookies from "vue-cookies";

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
});

Vue.use(VueCookies);

import Vuelidate from "vuelidate";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import {
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin,
  AvatarPlugin,
  ImagePlugin,
  VBHoverPlugin,
  IconsPlugin,
  FormRadioPlugin,
  OverlayPlugin,
  InputGroupPlugin,
  ProgressPlugin,
  CollapsePlugin,
} from "bootstrap-vue";
[
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin,
  AvatarPlugin,
  VBHoverPlugin,
  IconsPlugin,
  ImagePlugin,
  FormRadioPlugin,
  OverlayPlugin,
  InputGroupPlugin,
  ProgressPlugin,
  CollapsePlugin,
].forEach((x) => Vue.use(x));
Vue.use(Vuelidate);

axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

axios.defaults.withCredentials = true;
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const shared_data = {
  base_url: "http://localhost:3000",
  //base_url: "https://assignment-3-2-mor-danielle.herokuapp.com",
  username: localStorage.username,
  lastSearch: localStorage.lastSearch,
  SavelastSearch(lastSearch) {
    localStorage.setItem("lastSearch", lastSearch);
    this.lastSearch = lastSearch;
    console.log("save LastSearch", this.lastSearch);
  },
  login(username) {
    localStorage.setItem("username", username);
    this.username = username;
    console.log("login", this.username);
  },
  logout() {
    console.log("logout");
    localStorage.removeItem("username");
    localStorage.removeItem("lastSearch");

    this.username = undefined;
    this.lastSearch = undefined;
  },
};

router.beforeEach((to, from, next) => {
  /* if (shared_data.username === undefined || !Vue.$cookies.get("session")) {
    if (
      (shared_data.username === undefined && Vue.$cookies.get("session")) ||
      (shared_data.username !== undefined && !Vue.$cookies.get("session"))
    ) {
      shared_data.logout();
    } */
  if (!Vue.$cookies.get("session")) {
    shared_data.logout();
    /*  } else next();
   }); */
  }
  next();
});

console.log(shared_data);
// Vue.prototype.$root.store = shared_data;

new Vue({
  router,
  data() {
    return {
      store: shared_data,
    };
  },
  methods: {
    toast(title, content, variant = null, append = false) {
      this.$bvToast.toast(`${content}`, {
        title: `${title}`,
        toaster: "b-toaster-top-center",
        variant: variant,
        solid: true,
        appendToast: append,
        autoHideDelay: 3000,
      });
    },
  },
  render: (h) => h(App),
}).$mount("#app");
