<template>
  <div class="shoppingCart">
    <svg
      @click="toggleCart()"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="shopping-cart"
      class="svg-inline--fa fa-shopping-cart fa-w-18 panier"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path
        fill=" #b5dfff"
        d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
      ></path>
    </svg>

    <div class="title-border" v-if="display">
      <div class="list-achat">
        <h2>shopping list</h2>
        <ul>
          <li
            class="item_panier"
            v-for="(element, index) in panier"
            :key="index"
          >
            <p class="title-itemP">{{ element.title }}</p>
            <p>{{ element.vote_average }} €</p>
            <button @click="suppFilmPanier(element)">x</button>
          </li>
          <input
            class="adresse"
            v-if="panier.length !== 0"
            type="text"
            placeholder="Delivery adress"
          />
          <button
            class="payerMoi"
            @click="$emit('viderPanier')"
            v-if="panier.length !== 0"
          >
            Buy
          </button>
        </ul>
      </div>
      <div class="list-souhait">
        <h2>wish list</h2>
        <ul>
          <li
            class="item_panier"
            v-for="(souhait, index) in souhaits"
            :key="index"
          >
            <p>{{ souhait.title }}</p>
            <button @click="addCart(souhait)">+</button>
          </li>
        </ul>
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
      default: () => [],
    },
    souhaits: {
      type: Array,
      default: () => [],
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
    suppFilmPanier(film) {
      this.$emit("suppFilmPanier", film);
    },
    viderPanier() {},
  },
};
</script>

<style lang="scss" scoped>
.shoppingCart {
  padding-top: 25px;
  background-color: #042444;
  position: fixed;
  z-index: 10;
  right: 0;
  top: 0;
}

.panier {
  position: absolute;
  right: 20px;
  height: 30px;
  width: 30px;
  display: flex;
}

button {
  background-color: #b5dfff;
  border: none;
}

.title-border {
  display: flex;
  flex-direction: row;

  justify-content: space-evenly;
  align-items: stretch;
  width: 500px;
  height: 900px;
  h2 {
    display: flex;
    margin: 0 1rem;
    color: #b5dfff;
    justify-content: center;
  }

  li {
    color: white;
    margin: 14px 0;
    color: #b5dfff;
  }

  li {
    width: 100%;
    text-align: center;
    display: flex;
    list-style-type: none;
    justify-content: space-evenly;

    .title-itemP {
      width: 125px;
    }
    button {
      text-align: center;
      margin-left: 5px;
      width: 25px;
      height: 25px;
    }
  }
  .list-souhait {
    display: flex;
    flex-direction: column;
    width: 250px;
  }

  .list-achat {
    display: flex;
    flex-direction: column;
    width: 250px;
    .adresse {
      background-color: #0c3e6f;
      border: none;
      padding: 8px;
      width: 100%;
      margin: 8px 0;
      &::placeholder {
        color: #b5dfff;
      }
      &:focus {
        border: none;
        color: #b5dfff;
      }
    }
    .payerMoi {
      width: 100%;
      background-color: #0c3e6f;
      padding: 5px;
      color: white;
    }
  }
}
</style>
