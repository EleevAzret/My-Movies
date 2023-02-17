import axios from "@/plugins/axios";
import topFilms from "../mocks/topFilms";
import mutations from "../mutations";

function serializeResponse(movies) {
  return movies.reduce((acc, movie) => {
    acc[movie.id] = movie;
    return acc;
  }, {});
}

const { MOVIES } = mutations;

const moviesStore = {
  namespaced: true,
  state: {
    moviesPerPage: 12,
    currentPage: 1,
    movies: {},
  },
  getters: {
    moviesPerPage: ({ moviesPerPage }) => moviesPerPage,
    currentPage: ({ currentPage }) => currentPage,
  },
  mutations: {
    [MOVIES](state, value) {
      state.movies = value;
    },
  },
  actions: {
    async fetchMovies({ getters, commit }) {
      try {
        const { moviesPerPage, currentPage } = getters;
        const response = await axios.get(
          `${topFilms}&limit=${moviesPerPage}&page=${currentPage}`
        );
        const movies = serializeResponse(response.docs);
        commit(MOVIES, movies);
      } catch (err) {
        console.log(err);
      }
    },
  },
};

export default moviesStore;
