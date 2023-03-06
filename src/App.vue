<template>
  <div id="app" class="pb-3">
    <VLoader />
    <PosterBg :url="url" />
    <router-view @changeBg="onChangePoster" />
  </div>
</template>

<script>
import PosterBg from "./components/PosterBg.vue";
import VLoader from "./components/VLoader.vue";

export default {
  name: "App",
  components: {
    PosterBg,
    VLoader,
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
