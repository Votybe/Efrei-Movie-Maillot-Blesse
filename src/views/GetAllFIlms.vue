<template>
  <div class="section">
    <!-- <div class="shopping">
      <shoppingCart :souhaits="souhaits" :panier="panier" @addCart="addCart" />
    </div> -->
    <div class="ligne-une">
      <div class="film-affiche">
        <div class="partie-Une">
          <div class="title-affiche">
            <p>{{ filmAffiche.title }}</p>
          </div>
        </div>
        <div class="partie-Deux">
          <div class="overview-affiche">
            <div class="space-un">
              <p class="item-1">{{ filmAffiche.overview }}</p>
            </div>
            <div class="item-2">
              <div class="button-1">
                <button class="buttona">En savoir plus</button>
              </div>
              <div class="button-2">
                <button class="buttona">Ajouter au panier</button>
                <button class="buttona">ajouter a la liste de souhait</button>
              </div>
            </div>
          </div>

          <img
            class="image-affiche"
            :src="
              'https://www.themoviedb.org/t/p/w220_and_h330_face/' +
                filmAffiche.backdrop_path
            "
            :alt="filmAffiche.original_title"
          />
        </div>
      </div>
      <!-- Liste des genres  -->

      <div class="categorie">
        <div class="toti">
          <button @click="filtre = -1" class="tout">Tous les genres</button>
        </div>
        <div class="testGenre">
          <button
            v-for="(genre, index) in genres"
            :key="index"
            @click="filtre = genre.id"
          >
            <span>
              {{ genre.name }}
            </span>
          </button>
        </div>

        <div class="rating-film">
          <div class="best-film">
            <h3></h3>
            <button>Meilleurs films</button>
          </div>
          <div class="last-film">
            <button>Meilleurs films</button>
          </div>
        </div>
      </div>
    </div>
    <div class="ligne-deux"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "GetAllFilms",
  components: {},
  data() {
    return {
      films: [],
      genres: [],
      filtre: -1,
      souhaits: [],
      panier: [],
      filmAffiche: {},
    };
  },
  methods: {
    addCart(film) {
      if (this.panier.findIndex((f) => f.title === film.title) === -1)
        this.panier.push(film);
      let index = this.souhaits.findIndex((f) => f.title === film.title);
      this.souhaits.splice(index, 1);
    },
    async getItems() {
      await axios
        .get(
          "https://api.themoviedb.org/3/list/10?api_key=6dc646632d1c11debbc7e874ea32f797"
        )
        .then((response) => {
          this.films = response.data.items;
          this.filmAffiche = response.data.items[0];
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

    getFilm(film) {
      if (this.panier.findIndex((f) => f.title === film.title) === -1)
        this.panier.push(film);
    },

    getFilmForSouhait(film) {
      this.souhaits.push(film);
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
    console.log(this.filmAffiche);
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Ephesis&display=swap");

.section {
  height: 100vh;
  display: flex;
  background: rgb(8, 2, 2);
  background: linear-gradient(
    254deg,
    rgba(8, 2, 2, 1) 33%,
    rgba(15, 30, 33, 1) 82%
  );

  flex-direction: column;

  .panier {
    width: 50px;
    height: 50px;
    text-align: end;
  }

  .ligne-une {
    display: flex;
    justify-content: flex-start;
    height: 65%;

    .film-affiche {
      display: flex;
      height: 80%;
      flex-direction: column;
      align-self: center;

      .partie-Une {
        height: 20%;
        display: flex;
        justify-content: center;
        .title-affiche {
          font-size: 45px;
          text-align: center;
          align-self: center;
          font-family: Ephesis;
        }
      }
      .partie-Deux {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-self: center;
        height: 75%;
        .overview-affiche {
          flex-direction: column;
          width: 45%;
          .item-1 {
            margin-top: 50px;

            text-align: justify;
          }
          .item-2 {
            display: flex;
            flex-direction: column;
            .button-1 {
              width: 100%;
              text-align: center;
              button {
                border: none;
                margin-top: 50px;
                background: rgb(244, 85, 5);
                background: linear-gradient(
                  254deg,
                  rgba(244, 85, 5, 1) 33%,
                  rgba(255, 101, 0, 1) 82%
                );
                border-radius: 15px;
                padding: 25px;
              }
            }

            .button-2 {
              display: flex;
              .buttona {
                border: none;
                background: rgb(244, 85, 5);
                background: linear-gradient(
                  254deg,
                  rgba(244, 85, 5, 1) 33%,
                  rgba(255, 101, 0, 1) 82%
                );
                margin: 20px 20px;
                width: 50%;
                border-radius: 15px;
                padding: 20px;
              }
            }
          }
        }

        .image-affiche {
          width: 300px;
          height: 300px;
          border-radius: 15px;
        }
      }

      p {
        color: white;
      }
    }

    .categorie {
      width: 50%;
      height: 60%;
      align-self: center;
      justify-content: center;
      list-style: none;
      flex-wrap: wrap;
      text-decoration: underline;
      display: flex;
      .toti {
        display: flex;
        width: 75%;
        justify-content: center;
        align-items: center;
        padding: 15px;
        height: 20%;
        button {
          width: 35%;
          padding: 15px;
          height: 45px;
          border: none;
          margin: 10px 20px;
          font-size: 12px;
          border-radius: 25px;
          background: rgb(244, 85, 5);
          background: linear-gradient(
            254deg,
            rgba(244, 85, 5, 1) 33%,
            rgba(255, 101, 0, 1) 82%
          );
        }
      }
      .testGenre {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: center;
        text-align: center;

        button {
          width: 25%;
          padding: 15px;
          height: 45px;
          border: none;
          margin: 10px 20px;
          font-size: 12px;
          border-radius: 25px;
          background: rgb(244, 85, 5);
          background: linear-gradient(
            254deg,
            rgba(244, 85, 5, 1) 33%,
            rgba(255, 101, 0, 1) 82%
          );
          display: flex;
          color: white;
          align-self: center;
          justify-content: center;
        }
      }

      .rating-film {
        width: 60%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        height: 35%;

        .best-film,
        .last-film {
          color: white;
          text-align: center;
          display: flex;
          flex-direction: column;
          button {
            align-self: center;
            width: 100%;
            padding: 15px;
            height: 45px;
            border: none;
            margin: 10px 20px;
            font-size: 12px;
            border-radius: 25px;
            background: rgb(244, 85, 5);
            background: linear-gradient(
              254deg,
              rgba(244, 85, 5, 1) 33%,
              rgba(255, 101, 0, 1) 82%
            );
          }
        }
      }
    }
  }
}

.ligne-deux {
  height: 25%;

  .liste-films {
    margin-top: 25px;
    user-select: none;
    display: flex;
    flex-direction: row;
    width: 65%;
    overflow-x: hidden;
    overflow-y: hidden;
    border: solid orangered;
    // flex-wrap: wrap;
    li {
      list-style: none;
    }
    .container-film {
      user-select: none;
      position: relative;
      margin: 0 2rem;
      flex-direction: row;
      width: 150px;
      height: 200px;
      display: flex;
      align-items: center;
      transition: 0.5s;

      &:hover {
        transform: scale(1.05);
      }
      .item-add {
        height: 50px;
        width: 50px;
        top: 0;
        right: 0;
        position: absolute;
      }

      .item-like {
        height: 50px;
        width: 50px;
        top: 0;
        right: 3;
        position: absolute;
        &:hover {
          background-color: pink;
        }
      }

      .film-title {
        position: absolute;
        bottom: 0;
        width: 100%;
        font-size: 20px;
        max-width: 80%;
        font-weight: 600;
        color: white;
        font-family: Ephesis;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
