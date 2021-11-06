<template>
  <div class="amelioration">
    <h2>Here we shows all features that we can add in the futur :</h2>
    <ul>
      <li>Add a system of login / inscription</li>
      <li>Add a view of favorites for all films</li>
      <li>Add a system of payment like stripe, paypal</li>
      <li>
        A Blog for allows to the users to comment each film and give her notice
        of the movie
      </li>
      <li>And much more ...</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.amelioration {
  background-color: #032b53;
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  color: #b5dfff;
  h2 {
    font-size: 35px;
  }
  ul {
    li {
      text-align: center;
      list-style: none;
      margin: 5px 0;
      font-size: 25px;
    }
  }
}
</style>
