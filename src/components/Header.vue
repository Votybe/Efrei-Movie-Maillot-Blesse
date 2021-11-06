<template>
  <div class="header">
    <div class="title">E-film</div>
    <div class="heart"></div>

    <div class="link">
      <router-link to="/">Accueil</router-link>
      <router-link to="/getallfilms">Tous nos films</router-link>
      <router-link to="/">Page 4</router-link>
      <router-link to="/">Page 5</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.header {
  height: 9vh;
  display: flex;
  width: 100%;
  background-color: #042444;

  .title {
    color: #b5dfff;
    width: 25%;
    text-align: center;
    align-self: center;
    font-size: 30px;
  }

  .link {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    a {
      text-align: end;
      text-decoration: none;
      font-size: 20px;
      color: #b5dfff;
      margin: 0 2px;
      align-self: center;
      font-weight: 800;

      &:last-child {
        margin-right: 75px;
      }
      &:hover {
        text-decoration-line: underline;
      }
    }
  }
}
</style>
