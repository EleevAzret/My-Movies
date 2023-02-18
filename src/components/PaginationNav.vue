<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          :data-page="1"
          @click.prevent="onClickPage"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <template v-for="i in pagePerComp" :key="i">
        <li class="page-item">
          <a
            class="page-link"
            :class="isActive(i)"
            href="#"
            @click.prevent="onClickPage"
            :data-page="i"
            >{{ i }}</a
          >
        </li>
      </template>
      <li class="page-item">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          :data-page="allPages"
          @click.prevent="onClickPage"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "PaginationNav",
  data: () => ({
    max: 6,
    min: 0,
  }),
  computed: {
    ...mapGetters("movies", ["currentPage", "allPages"]),
    pagePerComp() {
      if (this.allPages > this.max) {
        return this.max - this.min;
      } else {
        return this.allPages;
      }
    },
  },
  methods: {
    ...mapActions("movies", ["changeCurrentPage", "fetchMovies"]),
    onClickPage(e) {
      this.changeCurrentPage(e.target.dataset.page);
      this.fetchMovies();
    },
    isActive(num) {
      return num == this.currentPage ? "active" : "";
    },
  },
};
</script>

<style lang="scss" scoped />
