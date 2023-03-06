import axios from "@/plugins/axios";
import topFilms from "../mocks/topFilms";
import mutations from "../mutations";

function serializeResponse(movies) {
  return movies.reduce((acc, movie) => {
    acc[movie.id] = movie;
    return acc;
  }, {});
}

const { MOVIES, PAGES, CURRENT_PAGE, QUERY, REFRESH_CURRENT_PAGE } = mutations;

const moviesStore = {
  namespaced: true,
  state: {
    moviesPerPage: 12,
    currentPage: 1,
    movies: {},
    pages: [],
    searchQuery: "",
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
      if (pages > 21) pages = 21;
      let pagesArr = [];
      for (let i = 1; i <= pages; i++) {
        pagesArr[i - 1] = i;
      }
      state.pages = pagesArr;
    },
    [CURRENT_PAGE](state, page) {
      state.currentPage = page;
    },
    [QUERY](state, query) {
      state.searchQuery = query;
    },
    [REFRESH_CURRENT_PAGE](state) {
      state.currentPage = 1;
    },
  },
  actions: {
    initMovieStore: {
      handler({ dispatch }) {
        dispatch("fetchMovies");
      },
      root: true,
    },
    async fetchMovies({ getters, commit, dispatch }) {
      try {
        dispatch('toggleLoader', true, { root: true });
        const { moviesPerPage, currentPage } = getters;
        const response = await axios.get(
          `${topFilms}&limit=${moviesPerPage}&page=${currentPage}`
        );
        const movies = serializeResponse(response.docs);
        commit(MOVIES, movies);
        commit(PAGES, response.pages);
      } catch (err) {
        console.log(err);
      } finally {
        dispatch('toggleLoader', false, { root: true });
      };
    },
    async searchMovies({ state, getters, commit, dispatch }, query) {
      try {
        if (query && query !== state.searchQuery) {
          commit(REFRESH_CURRENT_PAGE);
          commit(QUERY, query);
        };
        const searchQuery = state.searchQuery;

        dispatch('toggleLoader', true, { root: true });
        const { moviesPerPage, currentPage } = getters;

        const response = await axios.get(
          `/movie?search=${searchQuery}&field=name&isStrict=false&sortField=votes.imdb&sortType=-1&limit=${moviesPerPage}&page=${currentPage}`
        );

        const movies = serializeResponse(response.docs);

        commit(MOVIES, movies);
        commit(PAGES, response.pages);
      } catch (err) {
        console.log(err);
      } finally {
        dispatch('toggleLoader', false, { root: true });
      };
    },
    changeCurrentPage({ commit }, page) {
      commit(CURRENT_PAGE, page);
    },
  },
};

export default moviesStore;
