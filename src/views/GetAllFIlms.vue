<template>
  <div class="section"></div>
</template>

<script>
import axios from "axios";

export default {
  name: "GetAllFilms",
  data() {
    return {
      films: [],
      genres: [],
    };
  },
  methods: {
    async getItems() {
      await axios
        .get(
          "https://api.themoviedb.org/3/list/10?api_key=6dc646632d1c11debbc7e874ea32f797"
        )
        .then((response) => {
          this.films = response.data.items;
        });
    },
  },

  mounted() {
    this.getItems();
  },
};
</script>

<style lang="scss" scoped>
.section {
  height: 100%;
  display: flex;
  background-color: #3894b2;
  flex-direction: column;

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    li {
      list-style: none;
    }
    .container-film {
      margin: 2rem;
      background-color: green;
      flex-direction: column;
      width: 200px;
      height: 200px;
      display: flex;
      align-items: center;
      padding: 45px;
      border-radius: 25px;
      background: linear-gradient(72deg, #343a40 0%, #0d0d0d 80%);
      background: -webkit-linear-gradient(72deg, #343a40 0%, #0d0d0d 80%);
      background: -moz-linear-gradient(72deg, #343a40 0%, #0d0d0d 80%);
      .film-title {
        width: 100%;
        text-align: center;
        font-size: 1.5rem;
        font-weight: 600;
        color: white;
        &:hover {
          text-decoration: underline white 5px;
        }
      }

      .film-average {
        margin: 1rem;
        font-size: 1.4rem;
      }

      .film-date {
        margin: 2rem;
        font-size: 1rem;
      }
      p {
        width: 45%;
      }
      img {
        width: 50px;
        height: 50px;
        border-radius: 20px;
        margin: 1rem;
      }
    }
  }
}
</style>
