<template>
  <div class="searching-movies">
    <MoviesList :list="moviesList" @changeBg="onChangePoster" />
    <PaginationNav @changePage="onChangePage" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MoviesList from "./MoviesList.vue";
import PaginationNav from "./PaginationNav.vue";


export default {
  name: "SearchingMovies",
  components: {
    MoviesList,
    PaginationNav,
  },
  computed: {
    ...mapGetters("movies", ["moviesList"]),
  },
  methods: {
    ...mapActions("movies", ["searchMovies", "changeCurrentPage"]),
    onChangePoster(url) {
      this.$emit("changeBg", url);
    },
    onChangePage(page) {
      this.changeCurrentPage(page);
      this.searchMovies();
    },
  },
};
</script>

<style>

</style>