<template>
  <div class="main-picture">
    <p class="main-picture__title">Главная</p>
    <div class="main-picture__container">
      <img
        v-if="getMainPicture"
        :src="getMainPicture"
        class="main-picture__picture"
        a
        lt="mainpic"
      />
      <p v-else class="main-picture__loader">Загрузка...</p>
      <button @click="fetchPicture" class="main-picture__button">
        Загрузить
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "MainPicture",
  computed: mapGetters(["getPicturesStore", "getMainPicture"]),
  methods: mapActions(["fetchPicture"]),
  mounted() {
    this.fetchPicture();
  },
};
</script>

<style scoped lang="scss">
.main-picture {
  margin: auto;
  display: flex;
  justify-content: space-between;
  width: 866px;
  border: 1px solid #707070;

  &__container {
    display: flex;
    flex-direction: column;
    width: 752px;
  }

  &__title {
    margin: 0;
    padding-top: 67px;
    padding-left: 30px;
    font-size: 22px;
    line-height: 25px;
    color: #707070;
  }

  &__picture {
    width: 453px;
    max-width: 752px;
    height: 252px;
    padding-top: 79px;
    padding-left: 93px;
    margin-bottom: 31px;
  }

  &__loader {
    margin: 0;
    padding-top: 150px;
    padding-left: 280px;
    margin-bottom: 193px;
  }

  &__button {
    padding: 0;
    border: none;
    border-radius: 2px;
    box-shadow: 0px 2px 2px #0000003d;
    margin-left: 236px;
    margin-bottom: 70px;
    width: 168px;
    height: 36px;
    background: #006896;
    font-size: 16px;
    line-height: 19px;
    color: #fff;
  }
}
</style>