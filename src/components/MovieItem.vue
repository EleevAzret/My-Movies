<template>
  <div class="movie-item">
    <img
      :src="posterBg"
      :alt="movie.alternativeName"
      class="movie-item__poster"
    />
    <div class="movie-item__wrap">
      <div class="movie-item__info">
        <h5 class="movie-item__title">{{ movie.name }}</h5>
        <span class="movie-item__year">{{ movie.year }}</span>
      </div>
      <div class="movie-item__btns row">
        <div class="col">

        </div>
        <div class="col">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  computed: {
    posterBg() {
      return this.movie.poster.url;
    },
  },
};
</script>

<style lang="scss" src="../scss/movie-item.scss" scoped />
