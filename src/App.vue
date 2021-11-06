<template>
  <div class="nav">
    <Header class="header" />

    <ShoppingCart
      class="shopping"
      :souhaits="souhaits"
      :panier="panier"
      @addCart="addCart"
      @suppFilmPanier="suppFilmPanier"
      @viderPanier="viderPanier"
    />
  </div>

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

    suppFilmPanier(film) {
      let index = this.souhaits.findIndex((f) => f.title === film.title);
      if (index !== -1) this.souhaits.splice(index, 1);

      let indexDeux = this.panier.findIndex((f) => f.title === film.title);

      if (indexDeux !== -1) this.panier.splice(indexDeux, 1);
    },

    viderPanier() {
      this.panier = [];
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

// .nav {
//   z-index: 755;
//   position: sticky;
//   top: 0;
//   right: 0;
// }
</style>
