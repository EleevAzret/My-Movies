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
          :data-page="allPages.length"
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
    min: 1,
  }),
  computed: {
    ...mapGetters("movies", ["currentPage", "allPages"]),
    pagePerComp() {
      console.log(this.allPages.slice(this.min - 1, this.max));
      return this.allPages.slice(this.min - 1, this.max);
    },
  },
  methods: {
    ...mapActions("movies", ["changeCurrentPage", "fetchMovies"]),
    onClickPage(e) {
      let paginationNum = Number(e.currentTarget.dataset.page);

      this.changeCurrentPage(paginationNum);
      this.fetchMovies();

      if (paginationNum <= 4) {
        this.min = 1;
        this.max = 6;
        return;
      }

      this.min = paginationNum - 4;

      if (paginationNum >= this.allPages.length - this.max) {
        this.max = paginationNum;
        this.min = paginationNum - 5;
        return;
      }

      this.max = this.min + 5;
    },
    isActive(num) {
      return num == this.currentPage ? "active" : "";
    },
  },
};
</script>

<style lang="scss" src="../scss/pagination.scss" scoped />
