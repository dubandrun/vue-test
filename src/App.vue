<template>
  <div id="app">  
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue"

export default {
  components: {
    Header
  },
}
</script>

<style lang="scss">
body {
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: beige;
  margin: 0 auto;
}

#app {
  margin: auto;
  max-width: 1024px;
}

</style>