<template>
  <div class="creator">
    <h2>Two developpeur for the site :</h2>
    <div class="explication">
      <div class="aymeric">
        <img src="../assets/aymeric.png" alt="" />
        <p>Aymeric Maillot</p>
        <p>Developpeur Web</p>
      </div>
      <div class="louis">
        <img src="../assets/louis.png" alt="" />
        <p>Louis Blesse</p>
        <p>Developpeur Web</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.creator {
  background-color: #032b53;
  width: 100%;
  height: 100vh;
  color: #b5dfff;
  align-items: center;
  flex-direction: column;
  font-size: 25px;
  display: flex;
  .explication {
    display: flex;
    flex-direction: row;
    justify-content: center;
    .louis,
    .aymeric {
      text-align: center;
      margin: 5px 5px;
      p {
        margin: 5px 0;
      }
    }
  }
  img {
    width: 155px;
    height: 155px;
    margin: 12px 15px;
  }
}
</style>
