<template>
  <div>
    <h3 class="title">{{ title }}</h3>
    <div class="cards-list">
      <b-row v-for="r in recipes" :key="r.data.id">
        <RecipePreview class="recipePreview" :recipe="r.data" />
      </b-row>
    </div>
  </div>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      recipes: [],
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      try {
        const response = await this.axios.get(
          this.$root.store.base_url + "/users/lastWatched"
          //     "https://assignment-3-2-mor-danielle.herokuapp.com/users/lastWatched"
        );
        console.log(response);
        const recipes = response.data;

        this.recipes = [];
        this.recipes.push(...recipes);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}

.title {
  padding-bottom: 10px;
  text-align: center;
  font-family: "Sofia";
  font-size: 40px;
  color: azure;
  text-shadow: 2px 2px 4px #000000;
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
