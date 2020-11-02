<template>
  <div class="pictures">
    <p class="pictures__title"><router-link to="/" class="pictures__to-main-page">&#8592</router-link> История</p>
    <div class="pictures__container">
      <PicturePaginated 
        :data="getPicturesStore"
        :total-pages="Math.ceil(getPicturesStore.length / 4)"
				:total="getPicturesStore.length"
				:per-page="5"
				:current-page="currentPage"
				@pagechanged="onPageChange"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PicturePaginated from "./PicturesPaginated";

export default {
  name: "PicturesHistory",
  components: {
    PicturePaginated,
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page;
    },
  },
  computed: mapGetters(["getPicturesStore"]),
};
</script>

<style scoped lang="scss">
.pictures {
  margin: auto;
  display: flex;
  width: 866px;
  min-height: 468px;
  height: auto;
  justify-content: space-between;
  border: 1px solid #707070;

  &__title {
    margin: 0;
    padding-top: 67px;
    padding-left: 35px;
    font-size: 22px;
    line-height: 25px;
    color: #707070;
  }

  &__container {
    margin-top: 25px;
    width: 658px;
  }

  &__to-main-page {
    text-decoration: none;
  }
}
</style>