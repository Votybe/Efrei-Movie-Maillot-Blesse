<template>
  <div class="home">
    <div class="block">
      <h1>Welcome to E-film</h1>
      <p>An association (coming soon) of the efrei</p>
      <p>This website is</p>
      <p>created by Louis BLESSE and Aymeric MAILLOT</p>
      <button @click="this.$router.push('/getallfilms')">Voir nos films</button>
      <img
        class="image"
        src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-night-facebook-video-post-flyer-template-aaf731562408d38bd01f1bb9fe47af4c_screen.jpg?ts=1567092997"
        alt=""
      />
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
.home {
  overflow-y: hidden;
}
.block {
  background-color: #032b53;
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  color: #b5dfff;

  .image {
    margin-top: 25px;
    width: 275px;
    height: 275px;
  }

  h1 {
    font-size: 45px;
  }
  p {
    margin: 25px;
    font-size: 25px;
  }
  button {
    padding: 20px;
    border-radius: 15px;
    background-color: #032b53;
    border: #b5dfff solid 3px;
    color: #b5dfff;
    transition: 0.5s;

    &:hover {
      background-color: #b5dfff;
      color: #032b53;
    }
  }
}
</style>
