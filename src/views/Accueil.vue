<template>
  <div class="home">
    <div class="block">
      <h1>Welcome to E-film</h1>
      <p>An association (coming soon) of the efrei</p>
      <p>This website is</p>
      <p>created by louis blesse and aymeric maillot</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss">
.block {
  background-color: #032b53;
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  color: #b5dfff;
  h1 {
    font-size: 45px;
  }
  p {
    margin: 25px;
    font-size: 25px;
  }
}
</style>
