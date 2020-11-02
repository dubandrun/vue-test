<template>
  <header class="header">
    <nav class="header__nav">
      <router-link to="/" class="header__link">Главная</router-link>
      <router-link to="/history" class="header__link">История</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  margin: auto;
  margin-bottom: 40px;
  width: 866px;
  height: 64px;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid black;

  &__nav {
    padding-left: 30px;
    width: max-content;
  }

  &__link {
    margin-right: 30px;
    font-size: 22px;
    line-height: 25px;
    color: #000;
    text-decoration: none;
  }

  &__link:last-child {
    margin-right: 0;
  }
}

.router-link-exact-active {
  color: #a5a2a2;
}
</style>