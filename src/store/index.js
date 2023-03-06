import { createStore } from "vuex";
import movies from "./modules/movies.js";
import loader from "./modules/loader.js";

const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    movies,
    loader,
  },
});

store.dispatch("initMovieStore");

export default store;
