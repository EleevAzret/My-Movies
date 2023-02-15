import axios from "@/plugins/axios";

const moviesStore = {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async fetchMovies(context) {
      console.log(context);
      const response = await axios.get('/movie?search=1999&field=year');
      console.log(response.data);
    }
  },
};

export default moviesStore;