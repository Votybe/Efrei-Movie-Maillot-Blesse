<template>
  <div>
    <img
      class="panier"
      alt="panier"
      @click="toggleCart()"
      src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-cart-supermarket-flatart-icons-lineal-color-flatarticons.png"
    />

    <div v-if="display" class="test">
      <div class="title-border">
        <div class="list-achat">
          <h2>Liste d'achat</h2>
          <ul>
            <li class="panier" v-for="(element, index) in panier" :key="index">
              {{ element.title }}
            </li>
          </ul>
        </div>
        <div class="list-souhait">
          <h2>Liste de souhait</h2>
          <ul>
            <li
              class="panier"
              v-for="(souhait, index) in souhaits"
              :key="index"
            >
              {{ souhait.title }}
              <button @click="addCart(souhait)">Ajouter au panier</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shoppingcart",
  props: {
    panier: {
      type: Array,
    },
    souhaits: {
      type: Array,
    },
  },
  data() {
    return {
      display: false,
    };
  },
  methods: {
    toggleCart() {
      this.display = !this.display;
    },

    addCart(film) {
      this.$emit("addCart", film);
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100px;
  height: 100px;
}

.panier {
  height: 40px;
  width: 40px;
}

.title-border {
  display: flex;
  flex-direction: row;
  border: 2px solid black;

  h2 {
    display: flex;
    margin: 0 1rem;
  }
}

.test {
  display: flex;
  background-color: #fff;
  width: 25%;
}
</style>
