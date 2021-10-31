<template>
  <div class="section-film">
    <div class="test">
      <div class="left">
        <div class="title">
          <h2>{{ filmAffiche.title }}</h2>
        </div>
        <div class="description">
          <p>{{ filmAffiche.description }}</p>
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
    <div class="left-part">
      <div class="categorie">
        <div class="section-categorie-une">
          <div class="ligne-categorie-Une">
            <p>Catégorie de films</p>
          </div>
          <div class="ligne-categorie-Deux">
            <div class="col-1">
              <button @click="filtre = -1" class="tout">
                <span>All</span>
              </button>
            </div>
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
        </div>
        <div class="section-categorie-deux">
          <div class="title">
            <h3>Popularités</h3>
          </div>
          <div class="both">
            <div class="best-film">
              <button><span>Meilleur films</span></button>
            </div>
            <div class="last-film">
              <button><span>Moins bon films</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>

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

          let nouvellechaine = "";

          for (let i = 0; i < response.data.items[0].overview.length; i++) {
            console.log("je suis la");
            nouvellechaine = nouvellechaine.concat(
              response.data.items[0].overview[i]
            );
            if (
              nouvellechaine.length >=
              response.data.items[0].overview.length / 2
            ) {
              console.log("je suis dans le if" + nouvellechaine);
              nouvellechaine = nouvellechaine.concat("...");
              break;
            }
          }
          this.filmAffiche.description = nouvellechaine;
          console.log(
            " la nouvelle chaine de caractère est " +
              this.filmAffiche.description
          );
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
.section-film {
  height: calc(100vh - 7vh);
  display: flex;
  flex-direction: column;
  background: rgb(8, 2, 2);
  background: linear-gradient(
    254deg,
    rgba(8, 2, 2, 1) 33%,
    rgba(15, 30, 33, 1) 82%
  );
  .test {
    display: flex;
    justify-content: center;
    align-self: center;

    background: rgb(134, 8, 207);
    background: linear-gradient(
      254deg,
      rgba(134, 8, 207, 1) 29%,
      rgba(81, 11, 174, 1) 100%
    );
    width: 25%;
    height: 100%;
    border-radius: 15px;
    .left {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      .title {
        margin-top: 30px;
        margin-left: 20px;
        width: 100%;
        height: 10%;
        justify-content: center;
      }
      .description {
        margin-top: 30px;
        margin-left: 20px;
        width: 75%;
        height: 50%;
        text-align: justify;
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
  .left-part {
    display: flex;
    width: 100%;
    justify-content: center;

    .categorie {
      display: flex;
      width: 50%;
      height: 45%;

      button {
        margin: 2px 2px;
        border: none;
        background: rgb(134, 8, 207);
        background: linear-gradient(
          254deg,
          rgba(134, 8, 207, 1) 29%,
          rgba(81, 11, 174, 1) 100%
        );
        width: 20%;
        height: 35px;
        padding: 25px;
        border-radius: 15px;
        &:hover {
          background: #fff;
          transition: 0.5s;
        }
        span {
          &:hover {
            color: purple;
          }
        }
      }

      margin: 10px;

      .section-categorie-deux {
        .ligne-categorie-Une {
          display: flex;
          p {
            width: 100%;
            margin: 0 auto;
            color: white;
            font-size: 30px;
            margin-bottom: 20px;
            text-align: center;
          }
        }

        .ligne-categorie-Deux {
          display: flex;
          .col-1 {
            display: flex;
            margin: 0 auto;
            justify-content: center;
            text-align: center;
            button {
              display: flex;
              span {
                color: white;
              }
            }
          }

          .col-2 {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            button {
              display: flex;
              align-items: center;
              justify-content: center;
              span {
                color: white;
              }
            }
          }
        }
      }

      .section-categorie-deux {
        .title {
          color: white;
          font-size: 30px;
        }

        .both {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          height: 80%;
          button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;

            span {
              color: white;
            }
          }
        }
      }
    }
  }

  .list-film {
    margin-top: 55px;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    input {
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

    .liste-films {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 65%;
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
