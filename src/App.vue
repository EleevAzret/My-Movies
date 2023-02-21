<template>
  <div id="app" class="pb-3">
    <NavbarMenu />
    <PosterBg :url="url" />
    <router-view @changeBg="onChangePoster" />
    <PaginationNav />
  </div>
</template>

<script>
import NavbarMenu from "./components/NavbarMenu.vue";
import PosterBg from "./components/PosterBg.vue";
import PaginationNav from "./components/PaginationNav.vue";

export default {
  name: "App",
  components: {
    PosterBg,
    PaginationNav,
    NavbarMenu,
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

<style src="./scss/app.scss" lang="scss" />
