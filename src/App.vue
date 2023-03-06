<template>
  <div id="app" class="pb-3">
    <nav class="navbar bg-dark mb-3">
      <div class="container">
        <router-link to="/topMovies" class="navbar-brand text-info">Top Movies</router-link>
        <VSearch />
      </div>
    </nav>
    <div class="container">
      <VLoader />
      <PosterBg :url="url" />
      <router-view @changeBg="onChangePoster" />
    </div>
  </div>
</template>

<script>
import PosterBg from "./components/PosterBg.vue";
import VLoader from "./components/VLoader.vue";
import VSearch from "./components/VSearch.vue";

export default {
  name: "App",
  components: {
    PosterBg,
    VLoader,
    VSearch,
  },
  data: () => ({
    url: "",
  }),
  methods: {
    onChangePoster(poster) {
      this.url = poster;
    },
  },
};
</script>

<style lang="scss" src="./scss/app.scss" />
