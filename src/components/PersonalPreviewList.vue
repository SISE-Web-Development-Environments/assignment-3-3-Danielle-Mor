<template>
  <b-container>
    <h1 class="title">
      {{ title }}
      <slot></slot>
    </h1>
    <div class="cards-list">
      <b-card-group rows>
        <b-col v-for="r in recipes" :key="r.data.id" cols="4">
          <PersonalRecipePreview class="recipePreview" :recipe="r.data" />
        </b-col>
      </b-card-group>
    </div>
  </b-container>
</template>

<script>
import PersonalRecipePreview from "./PersonalRecipePreview.vue";
export default {
  name: "PersonalPreviewList",
  components: {
    PersonalRecipePreview,
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
          this.$root.store.base_url + "/users/personalRecipes"
          //  "https://assignment-3-2-mor-danielle.herokuapp.com/users/personalRecipes"
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
/* .container {
  min-height: 400px;
} */
.title {
  padding-top: 15px;
  padding-bottom: 50px;
  color: azure;
  text-align: center;
  font-family: "Sofia";
  text-shadow: 2px 2px 4px #000000;
  font-size: 50px;
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
