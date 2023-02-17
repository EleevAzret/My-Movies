<template>
  <div id="app">
    <button @click="onClick" type="button" class="btn btn-success">
      Success
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions("movies", ["fetchMovies"]),
    onClick() {
      this.fetchMovies();
    },
  },
};
</script>

<style src="./scss/app.scss" lang="scss" />
