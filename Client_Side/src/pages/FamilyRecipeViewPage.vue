<template>
  <div>
    <p v-if="!this.$root.store.username" class="loginMassages">
      You Need To Login In Order To See This
    </p>
    <div v-else>
      <div id="card-container">
        <b-row id="recipe-image">
          <p id="card-title">{{ recipe.recipeName }}</p>

          <div>
            <img class="recipe-image " :src="recipe.recipeImage" />
          </div>
        </b-row>

        <b-row>
          <div id="details">
            Prep time:
            <span class="detail-value"> {{ recipe.timeToPrepare }} | </span>
            <span>
              By:
            </span>
            <span class="detail-value">
              {{ recipe.author }} Which Is My: {{ recipe.relative }} |
            </span>
            <span> Special Event: </span>

            <span class="detail-value"> {{ recipe.special_event }} </span>
          </div>
        </b-row>
        <b-row>
          <div id="card-items">
            <span class="card-item-title">Ingredients</span>
            <ul class="checkmark">
              <li v-for="(r, index) in recipe.ingredients" :key="index">
                {{ r }}
              </li>
            </ul>
          </div>

          <div id="method">
            <span class="card-item-title">Method:</span>
            <ol>
              <li v-for="(s, index) in recipe.instructions" :key="index">
                {{ recipe.instructions[index] }}
                <div
                  v-if="
                    recipe.familyImage !== undefined &&
                      recipe.familyImage[index] !== undefined
                  "
                >
                  <img
                    id="family-image"
                    :src="recipe.familyImage[index]"
                    style="width: 200px; height: 200px;"
                  />
                </div>
              </li>
            </ol>
          </div>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: null,
    };
  },
  methods: {},
  async created() {
    try {
      if (this.$root.store.username) {
        let response;
        console.log(this.$route.params.recipe_id);
        try {
          response = await this.axios.get(
            this.$root.store.base_url + "/users/fullFamilyRecipes",
            //   "https://assignment-3-2-mor-danielle.herokuapp.com/users/fullFamilyRecipes",
            {
              params: { recipeID: this.$route.params.recipe_id },
            }
          );

          console.log(response);
          //console.log("response.status", response.status);
          if (response.status !== 200) this.$router.replace("/NotFound");
        } catch (error) {
          // console.log("error.response.status", error.response.status);
          console.log(error);
          this.$router.replace("/NotFound");
          return;
        }

        let {
          instructions,
          ingredients,
          timeToPrepare,
          recipeImage,
          familyImage,
          author,
          relative,
          special_event,
          recipeName,
        } = response.data.data;

        let _recipe = {
          instructions,
          ingredients,
          timeToPrepare,
          recipeImage,
          familyImage,
          author,
          relative,
          special_event,
          recipeName,
        };
        this.recipe = _recipe;
      }
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Oxygen:400,700");

.loginMassages {
  padding-top: 300px;
  color: azure;
  text-align: center;
  font-family: "Sofia";
  font-size: 50px;
  text-shadow: 2px 2px 4px #000000;
}

#card-container {
  /*   box-shadow: 0px 0px 200px #999;
 */
  font-family: "Sofia";
  width: 65%;
  height: 385px;
  margin: 5% auto;
  color: #f9fbfc;
}

#card-title {
  box-shadow: 0px 0px 200px rgb(56, 56, 56);
  font-family: "Sofia";
  font-weight: 700;
  font-size: 35px;
  width: 66.8%;
  background: #0808087a;
  position: absolute;
  top: 25%;
  padding: 15px 20px;
  color: white;
  text-shadow: 2px 2px 4px #000000;
  border-radius: 10px;
  text-align: center;
}

#details {
  border-radius: 10px 10px 0 0;

  background: #36363652;
  border-left: solid 1px #ededed;
  border-right: solid 1px #ededed;
  font-size: 16px;
  font-family: "Sofia";
  padding: 15px 20px;
  color: #f9fbfc;
  width: 100%;
}

.detail-value {
  color: #f9fbfc;
}

#card-items {
  background: #58585852;
  width: 100%;
  font-family: "Sofia";
  padding: 20px;
  border-bottom: solid 1px #ededed;
  border-left: solid 1px #ededed;
  border-right: solid 1px #ededed;
}

.card-item-title {
  font-size: 18px;
  font-weight: 700;
}

ul.checkmark li:before {
  color: #f9fbfc;
  content: "\2713\0020";
  font-weight: 600;
  margin-left: -38px;
  margin-right: 10px;
}

.checkmark li {
  list-style-type: none;
}

li {
  margin-bottom: 3px;
}

#method {
  background: #58585852;
  border-left: solid 1px #ededed;
  border-right: solid 1px #ededed;
  border-bottom: solid 1px #ededed;
  padding: 20px;
}

#method li {
  list-style-position: inside;
  margin-bottom: 10px;
  margin-left: -38px;
  list-style-type: none;
}

#recipe-image {
  overflow: hidden;
  height: 100%;
  width: 1125px;
  background-size: cover;
  border-radius: 40px;
}
.recipe-image {
  height: 100%;
  width: 1200px;

  /*  height: inherit; */
  border-radius: 40px;
  /*   object-fit: cover;
 */
}
ol {
  counter-reset: item;
}

ol > li {
  counter-increment: item;
}

ol > li::before {
  font-weight: bold;
  content: counter(item) ".";
  margin-right: 8px;
}
</style>
