<template>
  <div class="top-movies">
    <h4 class="top-movies__title">{{ title }}</h4>
    <MoviesList :list="moviesList" @changeBg="onChangePoster" />
    <PaginationNav @changePage="onChangePage" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MoviesList from "./MoviesList.vue";
import PaginationNav from "./PaginationNav.vue";

export default {
  name: "TopMovies",
  components: {
    MoviesList,
    PaginationNav,
  },
  data: () => ({
    title: "Top Movies",
  }),
  computed: {
    ...mapGetters("movies", ["moviesList"]),
  },
  methods: {
    ...mapActions("movies", ["fetchMovies", "changeCurrentPage"]),
    onChangePoster(url) {
      this.$emit("changeBg", url);
    },
    onChangePage(page) {
      this.changeCurrentPage(page);
      this.fetchMovies();
    },
  },
};
</script>

<style lang="scss" src="../scss/top-movies.scss" scoped />