<template>
  <div id="nav">
    <router-link to="/">Accueil</router-link> |
    <router-link to="/getallfilms">Tous nos films</router-link>
  </div>
  <router-view />
</template>

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
