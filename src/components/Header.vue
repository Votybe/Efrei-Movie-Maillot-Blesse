<template>
  <div class="header">
    <div class="link">
      <router-link to="/">Home</router-link>
      <router-link to="/getallfilms">Get all movies</router-link>
      <router-link to="/ameliorationavenir">Add features</router-link>
      <router-link to="/creatoroffilm">Creator of WebSite</router-link>
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
    justify-content: flex-start;
    margin-left: 25px;
    flex-wrap: wrap;
    width: 100%;
    a {
      text-align: start;
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
