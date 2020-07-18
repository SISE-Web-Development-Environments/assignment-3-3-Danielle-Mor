<template>
  <div id="recipe-preview">
    <div class="card_title title-white">
      <p>{{ recipe.recipeName }}</p>
    </div>
    <b-row>
      <b-col>
        <router-link :to="{ name: 'recipe', params: { recipe_id: recipe.id } }">
          <div class="card 1">
            <div class="card_image">
              <img :src="recipe.recipeImage" />
            </div>
            <p class="watched">
              <b-icon v-if="recipe.watched" class="h3" icon="eye-fill"></b-icon>
              <b-icon v-else class="h3" icon="eye-slash"></b-icon>
            </p>

            <p class="timeAndLikes">
              {{ recipe.timeToPrepare }} Minutes |
              {{ this.recipe.popularity }} Likes
            </p>
            <p
              class="diets"
              v-if="recipe.glutenFree || recipe.vegetarian || recipe.vegan"
            >
              <span v-if="recipe.glutenFree"> Gluten Free</span>
              <span v-if="recipe.glutenFree && recipe.vegetarian">
                | Vegetarian</span
              >
              <span v-else-if="recipe.vegetarian"> Vegetarian</span>
              <span
                v-if="(recipe.glutenFree || recipe.vegetarian) && recipe.vegan"
              >
                | Vegan</span
              >
              <span v-else-if="recipe.vegan">Vegan</span>
            </p>
          </div>
        </router-link>
      </b-col>
    </b-row>
    <b-col cols="12">
      <b-button
        v-if="recipe.favorite"
        size="lg"
        id="favButton"
        @click="postFavorites"
        :disabled="true"
      >
        Recipe In Favorites
        <b-icon icon="heart-fill" style="color: #fa0404;"></b-icon>
      </b-button>
      <b-button v-else size="lg" id="favButton" @click="postFavorites">
        Add To Favorites
        <b-icon icon="heart"></b-icon>
      </b-button>
    </b-col>
  </div>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async postFavorites() {
      try {
        //if (window.$cookies.isKey("session")) {
        // if (!recipe.favorite) {
        const response = await this.axios.post(
          this.$root.store.base_url + "/users/favorites",
          // "https://assignment-3-2-mor-danielle.herokuapp.com/users/favorites",
          {
            recipe_id: this.recipe.id,
          }
        );

        this.recipe.favorite = true;
        this.disableFavButton = true;
        console.log(response);
        //  }
        //  }
      } catch (err) {
        console.log(err.response);
      }
    },
  },
};
</script>

<style scoped>
#recipe-preview {
  margin: 60px auto;
}

.card {
  margin: 2px auto;

  width: 360px;
  height: 300px;
  border-radius: 40px;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: 0.4s;
  text-align: center;
}

.card .card_image {
  width: inherit;
  height: inherit;
  border-radius: 40px;
}

.card .card_image img {
  width: inherit;
  height: inherit;
  border-radius: 40px;
  object-fit: cover;
}

.card .card_title {
  text-align: center;
  border-radius: 0px 0px 40px 40px;
  font-family: "Sofia";
  font-weight: bold;
  font-size-adjust: inherit;
  height: 40px;
}

.card:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
}

.title-white {
  height: 140px;
  text-align: center;
  font-family: "Sofia";
  font-size: 30px;
  color: white;
  background: rgba(0, 0, 0, 0.55); /* Black see-through */
}

.title-black {
  color: black;
}

.watched {
  color: rgb(250, 246, 246);
  position: absolute;
  top: 7%;
  left: 10%;
  background: rgba(0, 0, 0, 0.55); /* Black see-through */
  height: 30px;
  width: 40px;
}

.timeAndLikes {
  font-family: "Sofia";
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.55); /* Black see-through */
  color: #f1f1f1;
  width: 100%;
  opacity: 1;
  color: white;
  font-size: 24px;
  text-align: center;
  height: 12.3%;
  overflow: hidden;
}
.diets {
  font-family: "Sofia";
  position: absolute;
  bottom: 15%;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.55); /* Black see-through */
  color: #f1f1f1;
  /*     color: #fa0404;
 */
  width: 100%;
  opacity: 1;
  color: white;
  font-size: 24px;
  text-align: center;
  height: 12.3%;
  overflow: hidden;
}
#favButton {
  background: rgba(0, 0, 0, 0.55); /* Black see-through */
  border: none;
  font-family: "Sofia";
  position: absolute;
  width: 100%;
  font-size: 28px;
  text-align: center;
  color: white;

  /* z-index: 100;
     margin-top: 50px; */
}
/* #favButton:hover {
  background: rgba(224, 213, 213, 0.55);
} */

/*
.card {
  margin: 30px auto;
  width: 300px;
  height: 300px;
  border-radius: 40px;
  background-image: url('https://i.redd.it/b3esnz5ra34y.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-repeat: no-repeat;
box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
  transition: 0.4s;
}
*/
/* .overlay:hover {
  object-fit: cover;
  padding-bottom: 63.8%;
} */
/* .image:hover {
  box-shadow: 10px 20px 40px 0 rgba(0, 0, 0, 0.15),
    20px 20px 55px 0 rgba(255, 217, 0, 0.5);
} */
</style>
