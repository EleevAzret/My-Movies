<template>
  <div class="loader-wrap" v-if="isShowLoader">
    <div class="spinner-grow text-info" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "VLoader",
  computed: {
    ...mapGetters(["isShowLoader"]),
  },
}
</script>

<style lang="scss" scoped>
  .loader-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(#000, .75);
    display: flex;
    justify-content: center;
    align-items: center;

    & > .spinner-grow {
      width: 5rem;
      height: 5rem;
    }
  }
</style>