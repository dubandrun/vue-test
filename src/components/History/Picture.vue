<template>
  <div class="picture">
    <div class="picture__img-container">
      <img 
        :src="url" 
        alt="picture" 
        class="picture__img" 
      />
      <button
        @click="deleteCurrentPicture"
        class="picture__delete-icon"
        :index="index"
      ></button>
    </div>
    <div class="picture__description">
      <p class="picture__title">{{ title }}</p>
      <p class="picture__loading-date">{{ date }}</p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Picture",
  props: {
    title: {
      type: String, 
      default: ""
    }, 
    url: {
      type: String, 
      default: ""
    }, 
    date: {
      type: String, 
      default: ""
    }, 
    index: {
      type: Number, 
      default: 0
    }
  },
  methods: {
    ...mapMutations(["deletePicture"]),
    deleteCurrentPicture(e) {
      this.deletePicture(e.target.getAttribute("index"));
    },
  },
};
</script>

<style scoped lang="scss">
.picture {
  display: flex;
  justify-content: space-between;
  width: 658px;
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 72px;
  }

  &__img {
    width: 169px;
    height: 88px;
  }

  &__img-container {
    position: relative;
    height: 88px;
  }

  &__delete-icon {
    padding: 0;
    opacity: 54%;
    background: url(../../assets/images/trash-icon.svg) center no-repeat;
    border: none;
    outline: none;
    width: 14px;
    height: 18px;
    position: absolute;
    top: 67px;
    right: 5px;
    cursor: pointer;
  }

  &__description {
    width: 462px;
    height: 88px;
  }

  &__title {
    margin: 0;
    margin-bottom: 5px;
    width: inherit;
    font-size: 22px;
    font-weight: bold;
    line-height: 25px;
    color: #707070;
  }

  &__loading-date {
    margin: 0;
    width: inherit;
    font-size: 22px;
    line-height: 25px;
    color: #707070;
  }
}
</style>