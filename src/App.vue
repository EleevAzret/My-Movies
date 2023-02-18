<template>
  <div id="app">
    <PosterBg :url="url" />
    <MoviesList :list="moviesList" @changeBg="onChangePoster" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MoviesList from "./components/MoviesList.vue";
import PosterBg from "./components/PosterBg.vue";

export default {
  name: "App",
  components: {
    MoviesList,
    PosterBg,
  },
  data: () => ({
    url: "",
  }),
  computed: {
    ...mapGetters("movies", ["moviesList"]),
  },
  methods: {
    ...mapActions("movies", ["fetchMovies"]),
    onChangePoster(poster) {
      this.url = poster;
    },
  },
};
</script>

<style src="./scss/app.scss" lang="scss" />
