<template>
  <ul class="pagination" v-if="data.length > 5 || currentPage > 1">
    <li class="pagination-item" title="Первая страница">
      <button type="button" @click="onClickFirstPage" :disabled="isInFirstPage">
        <i class="pagination__moves"></i>first<i class="pagination__moves"></i>
      </button>
    </li>
    <li class="pagination-item" title="Предыдущая страница">
      <button
        type="button"
        @click="onClickPreviousPage"
        :disabled="isInFirstPage"
      >
        <i class="pagination__moves">prev</i>
      </button>
    </li>
    <li class="pagination-item" v-for="(page, index) in pages" :key="index">
      <button
        type="button"
        @click="onClickPage(page.number)"
        :disabled="page.isDisabled"
        :class="{ active: isPageActive(page.number) }"
      >
        {{ page.number }}
      </button>
    </li>
    <li class="pagination-item" title="Следующая страница">
      <button type="button" @click="onClickNextPage" :disabled="isInLastPage">
        <i class="pagination__moves">next</i>
      </button>
    </li>
    <li class="pagination-item" title="Последняя страница">
      <button type="button" @click="onClickLastPage" :disabled="isInLastPage">
        <i class="pagination__moves">last</i> <i class="pagination__moves"></i>
      </button>
    </li>
  </ul>
  <Picture
    v-for="(picture, index) in paginatedData"
    :title="picture.title ? picture.title : 'Без названия'"
    :url="picture.url"
    :date="picture.date"
    :key="picture.id"
    :index="index"
  />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Picture from "./Picture";
export default {
  name: "PicturePaginated",
  components: {
    Picture,
  },
  emits: ["pagechanged"],
  props: {
    data: {
      type: Array,
      required: true,
    },
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    paginatedData() {
      let start = (this.currentPage - 1) * this.perPage,
        end = start + this.perPage;
      return this.data.slice(start, end);
    },
    startPage() {
      if (this.currentPage === 1) return 1;
      if (this.currentPage === this.totalPages)
        return (
          this.totalPages -
          this.maxVisibleButtons +
          (this.maxVisibleButtons - 1)
        );
      return this.currentPage - 1;
    },
    endPage() {
      return Math.min(
        this.startPage + this.maxVisibleButtons - 1,
        this.totalPages
      );
    },
    pages() {
      let range = [];
      for (let i = this.startPage; i <= this.endPage; i += 1) {
        range.push({
          number: i,
          isDisabled: i === this.currentPage,
        });
      }
      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
  },
  methods: {
    onClickFirstPage() {
      this.$emit("pagechanged", 1);
    },
    onClickPreviousPage() {
      this.$emit("pagechanged", this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit("pagechanged", page);
    },
    onClickNextPage() {
      this.$emit("pagechanged", this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit("pagechanged", this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    },

    onPageChange(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  padding: 0;
  margin: auto;
  list-style-type: none;
  margin-bottom: 25px;

  & .pagination-item button {
    margin: 0;
    padding: 0.25rem 0.5rem;
    font-size: 1.1rem;
    border: none;
    border-radius: 0.25rem;
    background: none;
    cursor: pointer;

    &.active {
      color: red;
    }
  }
}
</style>