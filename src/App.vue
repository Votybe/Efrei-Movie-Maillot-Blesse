<template>
  <div id="nav">
    <Header />
  </div>
  <ShoppingCart
    class="shopping"
    :souhaits="souhaits"
    :panier="panier"
    @addCart="addCart"
  />
  <router-view
    @addFilmForSouhait="addFilmForSouhait"
    @addFilmPanier="addFilmPanier"
  />
</template>

<script>
import Header from "./components/Header";
import ShoppingCart from "./components/ShoppingCart.vue";

export default {
  name: "app",
  data() {
    return {
      panier: [],
      souhaits: [],
    };
  },
  components: {
    Header,
    ShoppingCart,
  },
  methods: {
    addCart(film) {
      if (this.panier.findIndex((f) => f.title === film.title) === -1)
        this.panier.push(film);
      let index = this.souhaits.findIndex((f) => f.title === film.title);
      this.souhaits.splice(index, 1);
    },
    addFilmPanier(film) {
      if (this.panier.findIndex((f) => f.title === film.title) === -1) {
        this.panier.push(film);
      }
      if (this.souhaits.findIndex((f) => f.title === film.title) !== -1) {
        let index = this.souhaits.findIndex((f) => f.title === film.title);
        this.souhaits.splice(index, 1);
      }
    },
    addFilmForSouhait(film) {
      if (this.panier.findIndex((f) => f.title === film.title) === -1) {
        if (this.souhaits.findIndex((f) => f.title === film.title) === -1)
          this.souhaits.push(film);
      } else {
        let index = this.souhaits.findIndex((f) => f.title === film.title);
        this.souhaits.splice(index, 1);
      }
    },
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
.shopping {
  position: fixed;
  z-index: 10;
  right: 0;
  top: 0;
}
</style>
