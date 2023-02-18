<template>
  <div class="poster-bg" :style="readyBg"></div>
</template>

<script>
export default {
  name: "PosterBg",
  props: {
    url: String,
    default: () => "",
  },
  data: () => ({
    defaultBg: "linear-gradient(130deg, #928dab 0%, #5c4e97 100%)",
  }),
  computed: {
    readyBg() {
      return {
        "background-image": this.whatUse,
      };
    },
    whatUse() {
      return this.url ? `url(${this.url})` : this.defaultBg;
    },
  },
};
</script>

<style lang="scss" src="../scss/poster-bg.scss" scoped />
