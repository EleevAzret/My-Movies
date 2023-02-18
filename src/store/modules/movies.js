import axios from "@/plugins/axios";
import topFilms from "../mocks/topFilms";
import mutations from "../mutations";

function serializeResponse(movies) {
  return movies.reduce((acc, movie) => {
    acc[movie.id] = movie;
    return acc;
  }, {});
}

const { MOVIES, PAGES, CURRENT_PAGE } = mutations;

const moviesStore = {
  namespaced: true,
  state: {
    moviesPerPage: 12,
    currentPage: 1,
    movies: {},
    pages: 0,
  },
  getters: {
    moviesList: ({ movies }) => movies,
    moviesPerPage: ({ moviesPerPage }) => moviesPerPage,
    currentPage: ({ currentPage }) => currentPage,
    allPages: ({ pages }) => pages,
  },
  mutations: {
    [MOVIES](state, value) {
      state.movies = value;
    },
    [PAGES](state, pages) {
      if (pages > 20) {
        state.pages = 20;
      } else {
        state.pages = pages;
      }
    },
    [CURRENT_PAGE](state, page) {
      state.currentPage = page;
    },
  },
  actions: {
    initMovieStore: {
      handler({ dispatch }) {
        dispatch("fetchMovies");
      },
      root: true,
    },
    async fetchMovies({ getters, commit }) {
      try {
        const { moviesPerPage, currentPage } = getters;
        const response = await axios.get(
          `${topFilms}&limit=${moviesPerPage}&page=${currentPage}`
        );
        const movies = serializeResponse(response.docs);
        commit(MOVIES, movies);
        commit(PAGES, response.pages);
      } catch (err) {
        console.log(err);
      }
    },
    changeCurrentPage({ commit }, page) {
      commit(CURRENT_PAGE, page);
    },
  },
};

export default moviesStore;
