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
          <div type="button" class="btn btn-outline-danger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
          </div>
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
