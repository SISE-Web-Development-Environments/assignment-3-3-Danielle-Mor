<template>
  <div>
    <h3 class="title">{{ title }}</h3>
    <div class="cards-list">
      <b-row v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-row>
    </div>
    <span class="refreshButton">
      <b-button size="lg" id="Refrashbutton" @click="updateRecipes"
        >Refrash
      </b-button>
    </span>
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
          this.$root.store.base_url + "/recipes/random"
          // "https://assignment-3-2-mor-danielle.herokuapp.com/recipes/random"
        );
        console.log(response);
        const recipes = response.data.data;

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
/* .container {
  min-height: 400px;
} */
.title {
  color: azure;
  text-align: center;
  font-family: "Sofia";
  font-size: 40px;
  padding-bottom: 10px;
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
#Refrashbutton {
  background: none;

  border-left: solid 1px #ededed;
  border-right: solid 1px #ededed;
  border-bottom: solid 1px #ededed;
  border-top: solid 1px #ededed;
  padding-bottom: 20px;
  padding-top: 20px;

  font-family: "Sofia";
  position: absolute;
  margin-left: 20%;

  width: 50%;
  font-size: 28px;
  text-align: center;
  color: white;
  margin-top: 20%;
  margin-bottom: 20%;
  /* z-index: 100;
     margin-top: 50px; */
}
#Refrashbutton:hover {
  background: rgba(206, 203, 203, 0.55); /* Black see-through */
}
.refreshButton {
}
</style>
