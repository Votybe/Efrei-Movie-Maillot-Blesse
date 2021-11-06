<template>
  <div class="creator">
    <div class="explication">
      <div class="aymeric">
        <img src="../assets/aymeric.png" alt="" />
        <p>Aymeric Maillot</p>
        <p>Developpeur Web</p>
        <p>Etudiant à l'efrei Paris</p>
      </div>
      <div class="louis">
        <img src="../assets/louis.png" alt="" />
        <p>Louis Blesse</p>
        <p>Developpeur Web</p>
        <p>Etudiant à l'efrei Paris</p>
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
  justify-content: center;
  align-items: center;
  display: flex;
  .explication {
    display: flex;
    flex-direction: row;
    justify-content: center;
    .louis,
    .aymeric {
      text-align: center;
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
