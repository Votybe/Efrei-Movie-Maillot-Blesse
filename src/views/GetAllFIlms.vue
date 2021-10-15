<template>
  <div class="section">
    <div class="categorie">
      <li @click="filtre = -1">ce que tu veux</li>
      <li
        v-for="(genre, index) in genres"
        :key="index"
        @click="filtre = genre.id"
      >
        {{ genre.name }}
      </li>
    </div>
    <ul>
      <li v-for="(film, index) in films" :key="index">
        <div class="container-film" v-if="filtrer(film.genre_ids)">
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
      filtre: -1,
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

    filtrer(genre_ids) {
      if (this.filtre == -1) return true;
      for (let i = 0; i < genre_ids.length; i++) {
        if (genre_ids[i] == this.filtre) return true;
      }
      return false;
    },

    filtrerGenres(id) {
      for (let i = 0; i < this.films.length; i++) {
        for (let j = 0; j < this.films[i].genre_ids.length; j++) {
          if (this.films[i].genre_ids[j] == id) return true;
        }
      }
      return false;
    },

    async getGenre() {
      await axios
        .get(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=6dc646632d1c11debbc7e874ea32f797"
        )
        .then((response) => {
          for (let index = 0; index < response.data.genres.length; index++) {
            if (this.filtrerGenres(response.data.genres[index].id))
              this.genres.push(response.data.genres[index]);
          }
        });
    },
  },
  mounted() {
    this.getItems().then(() => this.getGenre());
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

  .categorie {
    margin-top: 2rem;
    width: 50%;
    border: solid black 3px;
    display: flex;
    flex-direction: row;
    list-style: none;
    flex-wrap: wrap;
    align-self: center;
    text-decoration: underline;
    cursor: pointer;

    li {
      margin: 1rem 0.5rem;
    }
  }

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
