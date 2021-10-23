<template>
  <div id="nav">
    <Header />
  </div>
  <router-view />
</template>

<script>
import Header from "./components/Header";
export default {
  name: "app",

  components: {
    Header,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  button {
    cursor: pointer;
    user-select: none;
  }
}
</style>
