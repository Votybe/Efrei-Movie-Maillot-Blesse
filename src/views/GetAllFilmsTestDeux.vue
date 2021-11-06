<template>
  <div class="all">
    <div class="first-part">
      <!-- Section Films affiche -->
      <div class="section-film-affich">
        <div class="left">
          <div class="title">
            <h2>{{ filmAffiche.title }}</h2>
          </div>
          <div class="description">
            <p>{{ filmAffiche.description }}</p>
          </div>
          <div class="plus">
            <button><span>En savoir plus</span></button>
          </div>
        </div>
        <div class="right">
          <img
            :src="
              'https://www.themoviedb.org/t/p/w220_and_h330_face/' +
                filmAffiche.backdrop_path
            "
            :alt="filmAffiche.original_title"
          />
        </div>
      </div>
      <!-- Fin section films affiches -->
      <!-- Section filtres  -->
      <div class="section-filtre">
        <div class="header">
          <nav>
            <button @click="filtre = -1"><span>All Genres</span></button>
            <button @click="fonctionGenres"><span>Genres</span></button>
            <button @click="fonctionSortie"><span>Sortie</span></button>
            <button @click="fonctionRating"><span>Popularité</span></button>
          </nav>
        </div>
        <div class="section-genre" v-show="genre">
          <div class="col-2">
            <button
              v-for="(genre, index) in genres"
              :key="index"
              @click="filtre = genre.id"
            >
              <span> {{ genre.name }} </span>
            </button>
          </div>
        </div>
        <div class="section-Rating" v-show="rating">
          <div class="title"></div>
          <div class="both">
            <div class="best-film">
              <button><span>Meilleur films</span></button>
            </div>
            <div class="last-film">
              <button><span>Moins bon films</span></button>
            </div>
          </div>
        </div>
        <div class="section-sortie" v-show="sortie">
          <div class="title"></div>
          <div class="both">
            <div class="best-film">
              <button><span>récent</span></button>
            </div>
            <div class="last-film">
              <button><span>vieux</span></button>
            </div>
          </div>
        </div>
      </div>
      <!-- Fin section filtres -->
      <!-- Début section listes de films -->

      <!-- Fin de section liste de films  -->
    </div>
    <div class="second-part">
      <div class="list-film">
        <input type="text" placeholder="Avatar..." />
        <ul class="liste-films">
          <li v-for="(film, index) in films" :key="index">
            <div class="container-film" v-if="filtrer(film.genre_ids)">
              <!-- <img
              src="../assets/add.jpg"
              @click="getFilm(film)"
              class="item-add"
              alt="add.jpg"
            />
            <img
              class="item-like"
              @click="getFilmForSouhait(film)"
              src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-like-instagram-flatart-icons-outline-flatarticons.png"
            /> -->
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
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "GetAllFilmsTest",
  components: {},
  data() {
    return {
      films: [],
      genres: [],
      filtre: -1,
      souhaits: [],
      panier: [],
      filmAffiche: {
        description: "",
      },
      genre: false,
      sortie: false,
      rating: false,
    };
  },

  methods: {
    fonctionGenres() {
      this.genre = !this.genre;
      if (this.rating || this.sortie) {
        this.rating = false;
        this.sortie = false;
      }
    },
    fonctionSortie() {
      this.sortie = !this.sortie;
      if (this.rating || this.genre) {
        this.rating = false;
        this.genre = false;
      }
    },

    fonctionRating() {
      this.rating = !this.rating;
      if (this.genre || this.sortie) {
        this.genre = false;
        this.sortie = false;
      }

      //   this. = !this.rating;

      //   if (this.rating) {
      //     this.genre = false;
      //   }
    },
    // addCart(film) {
    //   if (this.panier.findIndex((f) => f.title === film.title) === -1)
    //     this.panier.push(film);
    //   let index = this.souhaits.findIndex((f) => f.title === film.title);
    //   this.souhaits.splice(index, 1);
    // },

    async getItems() {
      await axios
        .get(
          "https://api.themoviedb.org/3/list/10?api_key=6dc646632d1c11debbc7e874ea32f797"
        )
        .then((response) => {
          this.films = response.data.items;
          this.filmAffiche = response.data.items[0];
          let nouvellechaine = "";
          for (let i = 0; i < response.data.items[0].overview.length; i++) {
            nouvellechaine = nouvellechaine.concat(
              response.data.items[0].overview[i]
            );
            if (
              nouvellechaine.length >=
              response.data.items[0].overview.length / 2
            ) {
              nouvellechaine = nouvellechaine.concat("...");
              break;
            }
          }
          this.filmAffiche.description = nouvellechaine;
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
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
.all {
  height: 100%;
  width: 100%;
  background: rgb(8, 2, 2);
  background: linear-gradient(
    254deg,
    rgba(8, 2, 2, 1) 33%,
    rgba(15, 30, 33, 1) 82%
  );
  span {
    color: white;
    font-family: "Poppins";
  }

  display: flex;
  flex-direction: column;
  .first-part {
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap-reverse;
    justify-content: space-around;
    .section-film-affich {
      display: flex;
      justify-content: center;
      align-self: center;

      background: rgb(134, 8, 207);
      background: linear-gradient(
        254deg,
        rgba(134, 8, 207, 1) 29%,
        rgba(81, 11, 174, 1) 100%
      );
      width: 35%;
      height: 75%;
      border-radius: 15px;
      .left {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .title {
          margin-top: 30px;
          width: 100%;
          height: 10%;

          color: white;
          font-family: "Open Sans", sans-serif;
          h2 {
            text-align: center;
          }
        }
        .description {
          margin-top: 30px;
          margin-left: 20px;
          width: 75%;
          height: 50%;
          text-align: justify;
          p {
            font-family: "Open Sans", sans-serif;
            color: white;
            font-weight: 600;
          }
        }

        .plus {
          align-self: center;

          button {
            margin: 12px 6px;
            padding: 15px;
            border-radius: 10px;
            border: none;
            span {
              color: white;
            }
            background: rgb(8, 2, 2);
            background: linear-gradient(
              254deg,
              rgba(8, 2, 2, 1) 33%,
              rgba(15, 30, 33, 1) 82%
            );
          }
        }
      }
      .right {
        width: 50%;
        align-self: center;
        justify-content: center;
        img {
          height: 75%;
          width: 150px;
        }
      }
    }

    .section-filtre {
      width: 500px;
      height: 400px;
      display: flex;
      flex-direction: column;
      button {
        margin: 12px 6px;
        padding: 15px;
        border-radius: 10px;
        border: none;
        span {
          color: white;
        }
        background: rgb(134, 8, 207);
        background: linear-gradient(
          254deg,
          rgba(134, 8, 207, 1) 29%,
          rgba(81, 11, 174, 1) 100%
        );
      }
      .header {
        height: 40%;

        nav {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      .section-genre {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 60%;
        margin: auto;
        .col-2 {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
        }
        button {
          margin: 2px 2px;
          width: 30%;
          padding: 20px;
        }
      }
      .section-Rating {
        display: flex;
        flex-direction: column;
        align-items: center;
        button {
          width: 100%;
        }
      }

      .section-sortie {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        button {
          width: 100%;
        }
      }
    }
  }

  .second-part {
    text-align: center;
    input {
      margin-bottom: 25px;
      text-align: center;
      padding: 15px;
      border-radius: 10px;
      background: rgb(134, 8, 207);
      background: linear-gradient(
        254deg,
        rgba(134, 8, 207, 1) 29%,
        rgba(81, 11, 174, 1) 100%
      );
      border: none;
      width: 20%;

      &::placeholder {
        font-family: Poppins;
        color: white;
      }
      &:focus {
        color: white;
        outline: none;
      }
    }
    margin-top: 25px;
    .liste-films {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      text-align: center;
      width: 100%;
      li {
        list-style: none;
      }
      .container-film {
        position: relative;
        margin: 5px 4px;
        img {
          width: 250px;
          height: 250px;
        }
      }
      .film-title {
        text-align: center;
        position: absolute;
        bottom: 0;
        color: white;
        font-size: 20px;
      }
    }
  }
}
</style>
