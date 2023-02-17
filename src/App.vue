<template>
  <div id="app">
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions("movies", ["fetchMovies"]),
  },
};
</script>

<style src="./scss/app.scss" lang="scss" />
