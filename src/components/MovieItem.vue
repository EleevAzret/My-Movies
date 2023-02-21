<template>
  <div class="movie-item">
    <img
      :src="posterBg"
      :alt="movie.alternativeName"
      class="movie-item__poster"
    />
    <div class="movie-item__wrap">
      <div class="movie-item__info">
        <h5 class="movie-item__title">
          {{ movie.name || movie.alternativeName }}
        </h5>
        <span class="movie-item__year">{{ movie.year }}</span>
      </div>
      <div class="movie-item__btns row">
        <div class="col">
          <div type="button" class="btn btn-outline-danger movie-item__like">
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
        <div class="movie-item__rating-wrap col align-items-center">
          <div
            class="col movie-item__rating-item movie-item__rating-item_imdb"
            v-if="isImdbRating"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#FFD700"
              class="bi bi-star-fill movie-item__star"
              viewBox="0 0 16 16"
            >
              <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
              />
            </svg>
            <span class="movie-item__rating">{{ movie.rating.imdb }}</span>
            <span class="movie-item__resource">IMDB</span>
          </div>
          <div
            class="col movie-item__rating-item movie-item__rating-item_kp"
            v-if="isKpRating"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#FFD700"
              class="bi bi-star-fill movie-item__star"
              viewBox="0 0 16 16"
            >
              <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
              />
            </svg>
            <span class="movie-item__rating">{{ kpRating }}</span>
            <span class="movie-item__resource">Кинопоиск</span>
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
    kpRating() {
      return Number(this.movie.rating.kp).toFixed(1);
    },
    isImdbRating() {
      return Boolean(this.movie.rating.imdb);
    },
    isKpRating() {
      return Boolean(this.movie.rating.kp);
    },
  },
};
</script>

<style lang="scss" src="../scss/movie-item.scss" scoped />
