<template>
  <div class="movie">
    <div class="movie-container">
      <div class="header">
        <h1>{{ film.original_title }}</h1>
        <p>{{ film.tagline }}</p>
      </div>
      <div class="movie-body">
        <div class="movie-image">
          <img
            :src="
              'https://www.themoviedb.org/t/p/w220_and_h330_face/' +
                film.backdrop_path
            "
            :alt="film.original_title"
          />
        </div>
        <div class="movie-details">
          <div class="movie-first-part">
            <div class="first-row">
              <p>Time : {{ film.runtime }}</p>
              <p id="test">Rating : {{ film.vote_average }} / 10</p>
            </div>
            <div class="second-row">
              <p>Revenue : {{ film.revenue }}</p>
              <p>Original language :{{ film.original_language }}</p>
            </div>
          </div>
          <div class="movie-second-part">
            <h3>Genres :</h3>
            <p v-for="(genre, index) in film.genres" :key="index">
              {{ genre.name }}
            </p>
          </div>

          <div class="movie-third-part">
            <p>{{ film.overview }}</p>
          </div>
          <div class="movie-fourth-part">
            <div
              v-for="(production_companie, index) in film.production_companies"
              :key="index"
            >
              <div class="first-row">
                <p>{{ production_companie.name }}</p>
              </div>
              <div class="second-row">
                <img
                  :src="
                    'https://www.themoviedb.org/t/p/original/' +
                      production_companie.logo_path
                  "
                  :alt="production_companie.name"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      film: {
        runtime: "",
      },
    };
  },
  methods: {},
  async mounted() {
    let result = await axios.get(
      "https://api.themoviedb.org/3/movie/" +
        this.$route.params.id +
        "?api_key=6dc646632d1c11debbc7e874ea32f797"
    );
    this.film = result.data;

    console.log(this.film);
  },
};
</script>

<style lang="scss" scoped>
.movie {
  background-color: #032b53;

  height: 100vh;
  width: 100vw;
  display: flex;
  overflow-x: hidden;
  span,
  p,
  h2,
  h1 {
    color: #b5dfff;
  }

  .movie-container {
    display: flex;
    flex-direction: column;
    .header {
      display: flex;
      width: 100%;
      flex-direction: column;
      margin-bottom: 30px;
      h1 {
        margin: 0 auto;
      }
      p {
        margin: 0 auto;
        font-size: 25px;
      }
    }

    .movie-body {
      display: flex;
      width: 100%;
      .movie-image {
        height: 100%;
        width: 30%;
        background-color: pink;
        img {
          text-align: center;
        }
      }
      .movie-details {
        display: flex;
        flex-direction: column;
        width: 70%;
        .movie-first-part {
          display: flex;
          justify-content: center;
          #test {
            margin-right: 53px;
          }
        }
        .movie-second-part {
          display: flex;
          flex-direction: row;
          justify-content: center;
          p {
            margin: 0 5px;
          }
        }
        .movie-third-part {
          display: flex;
          justify-content: center;
          p {
            width: 25%;
          }
        }

        .movie-fourth-part {
          display: flex;
          flex-direction: row;
          justify-content: center;

          img {
            width: 50px;
            height: 50px;
          }
        }
      }
    }
  }
}
</style>
