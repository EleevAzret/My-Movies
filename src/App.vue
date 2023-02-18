<template>
  <div id="app" class="pb-3">
    <PosterBg :url="url" />
    <MoviesList :list="moviesList" @changeBg="onChangePoster" />
    <PaginationNav :pages="allPages" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MoviesList from "./components/MoviesList.vue";
import PosterBg from "./components/PosterBg.vue";
import PaginationNav from "./components/PaginationNav.vue";

export default {
  name: "App",
  components: {
    MoviesList,
    PosterBg,
    PaginationNav,
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
