<template>
  <div>
    <Searchview v-on:results="updateResults"></Searchview>
    <!-- :hidden="isHidden" -->
    <b-container v-if="isHidden">
      <h1 class="massages">
        The Results:
        <slot></slot>
      </h1>
      <b-row>
        <b-col v-if="recipes.length == 0">
          <h3 class="massages2">
            Sorry , nothing to Show!
          </h3>
          <h2 class="massages2">Try Somthing else</h2>
        </b-col>
        <div v-else class="cards-list">
          <b-button class="buttons" @click="SortByPrep"
            >Sort By Preparation</b-button
          >
          <b-button class="buttons" @click="SortByPopularity"
            >Sort By Popularity</b-button
          >
          <b-card-group rows>
            <b-col v-for="r in recipes" :key="r.id" cols="4">
              <RecipePreview class="recipePreview" :recipe="r" />
            </b-col>
          </b-card-group>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Searchview from "../components/Searchview";
import RecipePreview from "../components/RecipePreview.vue";

export default {
  components: {
    Searchview,
    RecipePreview,
  },
  mounted() {
    if (this.$root.store.username) {
      if (
        typeof this.$root.store.lastSearch !== "string" &&
        !(this.$root.store.lastSearch instanceof String)
      ) {
        this.updateResults(this.$root.store.lastSearch);
      }
    }
  },
  methods: {
    updateResults(results) {
      this.recipes = results;
      if (this.$root.store.username) {
        this.$root.store.SavelastSearch(results);
      }
      console.log(results);
      this.isHidden = true;
    },
    SortByPrep() {
      this.recipes.sort((a, b) => {
        return a.timeToPrepare - b.timeToPrepare;
      });
    },
    SortByPopularity() {
      this.recipes.sort((a, b) => {
        return b.popularity - a.popularity;
      });
    },
  },

  data() {
    return {
      isHidden: false,

      recipes: [],
    };
  },
};
</script>

<style>
.buttons {
  width: 30%;
  background: none;
  border-left: solid 1px #ededed;
  border-right: solid 1px #ededed;
  border-bottom: solid 1px #ededed;
  border-top: solid 1px #ededed;
  font-family: "Sofia";
  font-size: 28px;
  text-align: center;
  color: white;
}
.buttons:hover {
  background: rgba(206, 203, 203, 0.55); /* Black see-through */
}
.title {
  padding-top: 50px;
  padding-bottom: 30px;
  color: azure;
  text-align: center;
  font-family: "Sofia";
  font-size: 40px;
}
.massages {
  padding-top: 150px;
  padding-bottom: 30px;
  color: azure;
  text-align: center;
  font-family: "Sofia";
}
.massages2 {
  color: azure;
  text-align: center;
  font-family: "Sofia";
}
.cards-list {
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

@media all and (max-width: 500px) {
  .cards-list {
    /* On small screens, we are no longer using row direction but column */
    flex-direction: column;
  }
}
</style>
