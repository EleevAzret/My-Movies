<template>
  <div class="list">
    <div class="container">
      <h2 class="list__title">{{ typeOfList }}</h2>
      <div class="row row-cols-auto">
        <template v-if="isExist">
          <div class="col" v-for="(movie, key) in list" :key="key">
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoviesList",
  props: {
    list: Object,
    default: () => ({}),
  },
  data: () => ({
    typeOfList: "Top Movies",
  }),
  computed: {
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
  },
};
</script>

<style lang="scss" src="../scss/list.scss" />
