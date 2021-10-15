<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/getallfilms">Get All Films</router-link>
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
