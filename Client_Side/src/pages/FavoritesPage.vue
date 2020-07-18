<template>
  <div>
    <p v-if="!this.$root.store.username" class="massages">
      You Need To Login In Order To See This
    </p>
    <div v-else>
      <FavoritesPreviewList
        title="Favorite Recipes"
        class="RandomRecipes center"
      />
    </div>
  </div>
</template>

<script>
import FavoritesPreviewList from "../components/FavoritesPreviewList";

export default {
  components: {
    FavoritesPreviewList,
  },
  data() {
    return {};
  },
};
</script>

<style>
.massages {
  padding-top: 300px;
  color: azure;
  text-align: center;
  font-family: "Sofia";
  font-size: 50px;
  text-shadow: 2px 2px 4px #000000;
}
</style>
