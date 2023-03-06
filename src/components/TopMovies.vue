<template>
  <MoviesList :list="moviesList" :title="title" @changeBg="onChangePoster" />
  <PaginationNav />
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
    ...mapActions("movies", ["fetchMovies"]),
    onChangePoster(url) {
      this.$emit("changeBg", url);
    },
  },
};
</script>
