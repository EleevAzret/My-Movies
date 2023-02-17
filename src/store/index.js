import { createStore } from "vuex";
import movies from "./modules/movies.js";

const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    movies,
  },
});

store.dispatch("initMovieStore");

export default store;
