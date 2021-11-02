<template>
  <div class="all">
    <div class="ligne">
      <div class="section-film-affich">
        <div class="right">
          <img
            :src="
              'https://www.themoviedb.org/t/p/w220_and_h330_face/' +
                filmAffiche.backdrop_path
            "
            :alt="filmAffiche.original_title"
          />
        </div>
        <div class="left">
          <div class="header">
            <div class="title">
              <h2>{{ filmAffiche.title }}</h2>
            </div>
            <div class="icons">
              <svg
                @click="addFilmForSouhait(filmAffiche)"
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="22px"
                height="22px"
                viewBox="0 0 1280.000000 1189.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <metadata>
                  Created by potrace 1.15, written by Peter Selinger 2001-2017
                </metadata>
                <g
                  transform="translate(0.000000,1189.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="#0080ff"
                >
                  <path
                    d="M2980 11763 c-848 -26 -1656 -457 -2177 -1163 -739 -1002 -839 -2418
-277 -3927 742 -1992 2563 -4072 5324 -6084 234 -171 529 -379 545 -385 18 -7
441 293 890 630 1976 1483 3442 3004 4339 4499 570 950 892 1837 993 2742 21
188 24 685 5 855 -52 462 -163 855 -343 1214 -166 330 -337 565 -602 823 -215
209 -424 359 -687 492 -449 228 -892 322 -1410 299 -991 -43 -1937 -632 -2597
-1618 -171 -255 -391 -672 -513 -972 -35 -87 -67 -155 -71 -150 -4 4 -35 77
-70 162 -82 201 -255 547 -362 727 -626 1046 -1484 1677 -2483 1828 -114 17
-375 32 -504 28z"
                  />
                </g>
              </svg>

              <svg
                @click="addFilmPanier(filmAffiche)"
                width="22px"
                height="22px"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="plus"
                class="svg-inline--fa fa-plus fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                ></path>
              </svg>
            </div>
          </div>
          <div class="description">
            <p>{{ filmAffiche.description }}</p>
          </div>
          <div class="plus">
            <button @click="this.$router.push('/movie/' + filmAffiche.id)">
              <span>En savoir plus</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 
 -->

    <div class="first-part">
      <!-- Section Films affiche -->

      <!-- Fin section films affiches -->
      <!-- Section filtres  -->

      <div class="right">
        <div class="section-filtre">
          <div class="header">
            <nav>
              <button @click="filtre = []"><span>All Genres</span></button>
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
                @click="toggleToFiltre(genre.id)"
                :class="{ selected: this.filtre.includes(genre.id) }"
              >
                <span> {{ genre.name }} </span>
              </button>
            </div>
          </div>
          <div class="section-Rating" v-show="rating">
            <div class="title"></div>
            <div class="both">
              <div class="best-film">
                <button
                  @click="changeRating(2)"
                  :class="{ selected: currentRating === 2 }"
                >
                  <span>Meilleur films</span>
                </button>
              </div>
              <div class="last-film">
                <button
                  @click="changeRating(1)"
                  :class="{ selected: currentRating === 1 }"
                >
                  <span>Moins bon films</span>
                </button>
              </div>
            </div>
          </div>
          <div class="section-sortie" v-show="sortie">
            <div class="title"></div>
            <div class="both">
              <div class="best-film">
                <button
                  @click="changeRelease(2)"
                  :class="{ selected: currentRelease === 2 }"
                >
                  <span>récent</span>
                </button>
              </div>
              <div class="last-film">
                <button
                  @click="changeRelease(1)"
                  :class="{ selected: currentRelease === 1 }"
                >
                  <span>vieux</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- Fin section filtres -->
      </div>

      <!-- Début section listes de films -->
    </div>
    <div class="second-part">
      <div class="list-film">
        <div class="research">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="caret-left"
            class="svg-inline--fa fa-caret-left fa-w-6"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192 512"
            weight="112px"
            height="65px"
            @click="changePage(-1)"
            margin-right="55px"
          >
            <path
              fill="white"
              d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"
            ></path>
          </svg>
          <!-- <button>gauche</button> -->
          <input type="text" placeholder="Avatar..." v-model="champFilm" />

          <svg
            @click="changePage(+1)"
            weight="112px"
            height="65px"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="caret-right"
            class="svg-inline--fa fa-caret-right fa-w-6"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192 512"
          >
            <path
              fill="white"
              d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
            ></path>
          </svg>
        </div>
        <ul class="liste-films">
          <li
            class="container-film"
            v-for="(film, index) in getFilmsFiltered()"
            :key="index"
          >
            <img
              @click="changeFilmAffiche(film)"
              :src="
                'https://www.themoviedb.org/t/p/w220_and_h330_face/' +
                  film.backdrop_path
              "
              :alt="film.original_title"
            />
            <p class="film-title">
              {{ film.original_title }}
            </p>
          </li>
        </ul>
      </div>
    </div>
    <!-- Fin de section liste de films  -->
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
      filtre: [],
      filmAffiche: {
        id: 0,
        name: "",
        image: "",
        description: "",
      },
      note: "",
      champFilm: "",
      currentRating: 0,
      currentRelease: 0,
      genre: true,
      sortie: false,
      rating: false,
      currentPage: 10,
    };
  },

  watch: {
    champFilm: function() {
      this.search();
    },
  },

  methods: {
    changeFilmAffiche(film) {
      this.filmAffiche.id = film.id;
      this.filmAffiche.title = film.title;

      this.filmAffiche.description = film.overview;
      this.filmAffiche.backdrop_path = film.backdrop_path;
    },

    async changePage(n) {
      this.currentPage += n;
      let hasResult = false;
      while (hasResult === false) {
        await axios
          .get(
            "https://api.themoviedb.org/3/list/" +
              this.currentPage +
              "?api_key=6dc646632d1c11debbc7e874ea32f797"
          )
          .then((response) => {
            if (response.data.items.length != 0) {
              this.films = response.data.items;
              this.getGenres();
              hasResult = true;
            } else {
              this.currentPage += n;
            }
          });
      }
    },

    async search() {
      if (this.champFilm == "") {
        this.getItems();
      } else {
        await axios
          .get(
            "https://api.themoviedb.org/3/search/movie?api_key=6dc646632d1c11debbc7e874ea32f797&query=" +
              this.champFilm
          )
          .then((response) => {
            console.log(response.data.results[0]);

            this.films = response.data.results;
            for (let index = 0; index < this.films.length; index++) {
              if (this.films[index].backdrop_path == null) {
                this.films.splice(index);
              }
            }
          });
      }
    },

    fonctionGenres() {
      this.genre = true;
      if (this.rating || this.sortie) {
        this.rating = false;
        this.sortie = false;
      }
    },

    fonctionSortie() {
      this.sortie = true;
      if (this.rating || this.genre) {
        this.rating = false;
        this.genre = false;
      }
    },

    fonctionRating() {
      this.rating = true;
      if (this.genre || this.sortie) {
        this.genre = false;
        this.sortie = false;
      }
    },

    changeRating(nb) {
      if (this.currentRating === nb) this.currentRating = 0;
      else this.currentRating = nb;
    },

    changeRelease(nb) {
      if (this.currentRelease === nb) this.currentRelease = 0;
      else this.currentRelease = nb;
    },

    getFilmsFiltered() {
      let films = [];
      for (let film of this.films) {
        if (
          this.filtrerGenre(film.genre_ids) &&
          this.filtrerRating(film) &&
          this.filtrerRelease(film)
        ) {
          films.push(film);
        }
      }
      return films;
    },

    toggleToFiltre(genre_id) {
      if (!this.filtre.includes(genre_id)) {
        this.filtre.push(genre_id);
      } else {
        let index = this.filtre.findIndex((i) => i === genre_id);
        if (index !== -1) this.filtre.splice(index, 1);
      }
    },

    async getItems() {
      await axios
        .get(
          "https://api.themoviedb.org/3/list/10?api_key=6dc646632d1c11debbc7e874ea32f797"
        )
        .then((response) => {
          this.films = response.data.items;
          this.filmAffiche = response.data.items[0];
          let test = response.data.items[0].vote_average;
          this.note = Math.round(test);

          // début partie filtre date
          let annee = parseInt(
            response.data.items[0].release_date.substring(0, 3)
          );
          if (annee <= 2010) {
            console.log("je suis un vieux film");
          } else {
            console.log("je suis un films récents");
          }
          // partie fin films date

          this.filmAffiche.description = response.data.items[0].overview;
          // fin récup 20% films
        });
    },

    filtrerRating(film) {
      if (this.currentRating === 1) {
        return film.vote_average <= 5;
      } else if (this.currentRating === 2) {
        return film.vote_average > 5;
      } else return true;
    },

    filtrerRelease(film) {
      let annee = parseInt(film.release_date.substring(0, 3));
      if (this.currentRelease === 1) {
        return annee <= 2010;
      } else if (this.currentRelease === 2) {
        return annee > 2010;
      } else return true;
    },

    filtrerGenre(genre_ids) {
      if (this.filtre.length === 0) return true;
      for (let i = 0; i < this.filtre.length; i++) {
        if (!genre_ids.includes(this.filtre[i])) return false;
      }
      return true;
    },

    filtrerUselessGenres(id) {
      for (let i = 0; i < this.films.length; i++) {
        for (let j = 0; j < this.films[i].genre_ids.length; j++) {
          if (this.films[i].genre_ids[j] == id) return true;
        }
      }
      return false;
    },

    addFilmForSouhait(film) {
      this.$emit("addFilmForSouhait", film);
    },

    addFilmPanier(film) {
      this.$emit("addFilmPanier", film);
    },

    async getGenres() {
      await axios
        .get(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=6dc646632d1c11debbc7e874ea32f797"
        )
        .then((response) => {
          this.genres = [];
          for (let index = 0; index < response.data.genres.length; index++) {
            if (this.filtrerUselessGenres(response.data.genres[index].id))
              this.genres.push(response.data.genres[index]);
          }
        });
    },
  },

  mounted() {
    this.getItems().then(() => this.getGenres());
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
.all {
  height: 100%;
  width: 100%;
  background-color: #042444;
  span {
    color: #b5dfff;
    font-family: "Poppins";
  }

  display: flex;
  flex-direction: column;

  .ligne {
    display: flex;
    flex-direction: row;
    width: 100%;
    .section-film-affich {
      margin: auto auto;
      display: flex;
      justify-content: center;
      align-self: center;
      background-color: #032b53;

      width: 100%;
      height: 100%;

      .left {
        width: 100%;
        height: 350px;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        flex-wrap: wrap;
        .header {
          flex-direction: flex;
          flex-wrap: wrap;
          display: flex;
          width: 100%;
          color: #b5dfff;
          font-family: "Open Sans", sans-serif;
          .title {
            h2 {
              width: 100%;
            }
          }
          .icons {
            display: flex;
            align-items: center;
            svg {
              margin: 0 25px;
              text-align: start;
              align-self: center;
              path {
                fill: #b5dfff;
                &:hover {
                  fill: #042444;
                }
              }
            }
          }
        }

        .description {
          width: 75%;
          text-align: justify;
          p {
            font-family: "Open Sans", sans-serif;
            color: #b5dfff;
            font-weight: 600;
          }
        }

        .plus {
          align-self: flex-start;

          button {
            margin: 12px 6px;
            padding: 15px;
            border-radius: 10px;
            border: none;
            span {
              color: black;
            }
            background: #b5dfff;
          }
        }
      }
      .right {
        display: flex;
        width: 40%;
        align-self: center;
        justify-content: center;

        img {
          height: 20%;
          width: 50%;
        }
      }
    }
  }

  .first-part {
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap-reverse;
    justify-content: space-around;
    margin-bottom: 25px;
    .right {
      display: flex;
      flex-direction: column;

      .section-filtre {
        display: flex;
        flex-direction: column;

        .selected {
          background: #b5dfff;
          span {
            color: #032b53;
          }
        }

        button {
          margin: 12px 6px;
          padding: 15px;
          border-radius: 10px;
          border: none;
          span {
            color: white;
          }
          background: #032b53;
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
          flex-direction: row;
          align-items: center;
          width: 100%;
          margin: auto;
          .col-2 {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
          }
          button {
            margin: 2px 2px;
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
  }

  .second-part {
    display: flex;
    .research {
      display: flex;
      align-self: center;
      justify-content: center;

      input {
        display: flex;
        margin: auto 5px;
        border-radius: 10px;
        background: #b5dfff;
        height: 50px;
        border: none;
        width: 20vw;

        &::placeholder {
          font-family: Poppins;
          color: #032b53;
        }

        &:focus {
          color: #032b53;
          outline: none;
        }
      }
      svg {
        display: flex;
        align-self: center;
      }
    }

    .list-film {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
    }

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
