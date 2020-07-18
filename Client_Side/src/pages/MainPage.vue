<template>
  <div class="container">
    <b-row>
      <b-col class="text-center">
        <h1 class="title">Main Page</h1>
      </b-col>
    </b-row>
    <b-row align-h="around">
      <b-col cols="5">
        <RecipePreviewList
          title="Random Recipes"
          class="RandomRecipes center"
        />
      </b-col>
      <b-col></b-col>

      <b-col cols="5">
        <LoginPage id="Login" v-if="!$root.store.username"></LoginPage>
        <LastWatchedRecipePreviewList
          v-else
          title="Last Viewed Recipes"
          :class="{
            RandomRecipes: true,
            center: true,
          }"
          disabled
        ></LastWatchedRecipePreviewList>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import LastWatchedRecipePreviewList from "../components/LastWatchedRecipePreviewList";
import LoginPage from "./LoginPage";

export default {
  components: {
    LoginPage,
    RecipePreviewList,
    LastWatchedRecipePreviewList,
  },
};
</script>

<style lang="scss" scoped>
.title {
  padding-bottom: 5%;
  margin-top: 5%;

  color: azure;
  font-family: "Sofia";
  font-size: 60px;
  font-weight: bold;
  text-shadow: 2px 2px 4px #000000;
}
#Login {
  margin-top: 20%;
}
/* .RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); Safari 6.0 - 9.0 
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}  */
</style>
