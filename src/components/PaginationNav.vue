<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          data-page="1"
          @click.prevent="onChangePage"
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
            @click.prevent="onChangePage"
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
          :data-page="lastPage"
          @click.prevent="onChangePage"
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
      return this.allPages.slice(this.min - 1, this.max);
    },
    lastPage() {
      return this.allPages.length;
    },
  },
  watch: {
    "$route.query": {
      handler: "onChangeQuery",
      immediate: true,
    },
  },
  methods: {
    onChangeQuery({ pageNum = 1 }) {
      this.changePage(Number(pageNum));
    },
    onChangePage(e) {
      let paginationNum = Number(e.currentTarget.dataset.page);
      this.changePage(paginationNum);
    },
    isActive(num) {
      return num == this.currentPage ? "active" : "";
    },
    changePage(pageNum) {
      this.$router.push({ query: { pageNum } });
      this.$emit("changePage", pageNum);
      this.changePagination(pageNum);
    },
    changePagination(paginationNum) {
      if (paginationNum <= 4) {
        this.min = 1;
        this.max = 6;
        return;
      }

      this.min = paginationNum - 4;

      if (paginationNum >= this.allPages.length - this.max) {
        this.max = paginationNum + 1;
        this.min = paginationNum - 4;
        return;
      }

      this.max = this.min + 5;
    },
  },
};
</script>

<style lang="scss" src="../scss/pagination.scss" scoped />
