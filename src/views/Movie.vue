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
              <div class="section">
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

  height: 100%;
  width: 100%;

  overflow-x: hidden;
  span,
  p,
  h2,
  h1 {
    color: #b5dfff;
  }

  .movie-container {
    display: flex;
    flex-wrap: wrap;
    height: 100%;

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
      flex-wrap: wrap;
      .movie-image {
        display: flex;
        justify-content: center;
        width: 100%;
        img {
          display: flex;
          margin: 0 auto;
        }
      }
      .movie-details {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        margin: auto;
        // margin-top:85px;

        .movie-first-part {
          display: flex;

          justify-content: center;

          .first-row,
          .second-row {
            p {
              margin: 15px 0;
            }
          }
        }
        .movie-second-part {
          display: flex;
          flex-direction: row;
          justify-content: center;
          h3 {
            color: #b5dfff;
          }
          p {
            margin: 0 5px;
          }
        }
        .movie-third-part {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 25px 0;
          flex-wrap: wrap;
          p {
            color: #b5dfff;
            max-width: 500px;
            text-align: center;
          }
        }

        .movie-fourth-part {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          .section {
            display: flex;
            flex-direction: column;
            .first-row {
              margin: 5px 5px;
            }
            .second-row {
              text-align: center;
            }
            img {
              width: 50px;
              height: 50px;
            }
          }
        }
      }
    }
  }
}
</style>
