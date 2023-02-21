<template>
  <MoviesList :list="moviesList" :title="title" @changeBg="onChangePoster" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MoviesList from "./MoviesList.vue";

export default {
  name: "TopMovies",
  components: {
    MoviesList,
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
