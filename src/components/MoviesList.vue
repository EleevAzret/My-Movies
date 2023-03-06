<template>
  <div class="list">
    <div class="row row-cols-auto justify-content-space-between gy-4">
      <template v-if="isExist">
        <div class="col-md" v-for="(movie, key) in list" :key="key">
          <MovieItem
            :movie="movie"
            @mouseover="onMouseOver(movie.poster.url)"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import MovieItem from "./MovieItem.vue";

export default {
  name: "MoviesList",
  components: {
    MovieItem,
  },
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
  },
  methods: {
    onMouseOver(url) {
      this.$emit("changeBg", url);
    },
  },
};
</script>

<style lang="scss" src="../scss/list.scss" scoped />
