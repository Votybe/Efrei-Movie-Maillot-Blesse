<template>
  <div class="section">
    <ul>
      <li v-for="(film, index) in films" :key="index">
        <div class="container-film">
          <img
            :src="
              'https://www.themoviedb.org/t/p/w220_and_h330_face/' +
                film.backdrop_path
            "
            :alt="film.original_title"
          />
          <p class="film-title">
            {{ film.original_title }}
          </p>
        </div>
      </li>
    </ul>
  </div>
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
@import url("https://fonts.googleapis.com/css2?family=Ephesis&display=swap");

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
      position: relative;
      margin: 2rem;
      background-color: green;
      flex-direction: column;
      width: 350px;
      height: 470px;
      display: flex;
      align-items: center;
      background: linear-gradient(72deg, #343a40 0%, #0d0d0d 80%);
      background: -webkit-linear-gradient(72deg, #343a40 0%, #0d0d0d 80%);
      background: -moz-linear-gradient(72deg, #343a40 0%, #0d0d0d 80%);
      .film-title {
        background-color: #0d0d0d;
        padding: 20px;
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
        font-size: 2rem;
        max-width: 80%;
        font-weight: 600;
        color: white;
        font-family: Ephesis;
      }
      img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
      }
    }
  }
}
</style>
