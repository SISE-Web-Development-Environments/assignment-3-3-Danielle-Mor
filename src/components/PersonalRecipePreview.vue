<template>
  <div id="recipe-preview">
    <div class="card_title title-white">
      <p>{{ recipe.recipeName }}</p>
    </div>
    <b-row>
      <b-col>
        <router-link
          :to="{
            name: 'personalRecipe',
            params: { recipe_id: recipe.recipeID },
          }"
          class="recipe-preview"
        >
          <div class="card 1">
            <div class="card_image">
              <img :src="recipe.recipeImage" />
            </div>

            <p class="timeAndLikes">
              {{ recipe.timeToPrepare }}
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
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  margin: 40px auto;
  width: 350px;
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
  background: rgba(224, 213, 213, 0.55); /* Black see-through */
  height: 20px;
  width: 20px;
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
  width: 100%;
  opacity: 1;
  color: white;
  font-size: 24px;
  text-align: center;
  height: 12.3%;
  overflow: hidden;
}
</style>
