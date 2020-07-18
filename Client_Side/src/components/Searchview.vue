<template>
  <b-container>
    <b-overlay :show="show" rounded="sm" @shown="onShown" @hidden="onHidden">
      <b-col><h1 class="title">Search For Recipes:</h1></b-col>

      <b-form @submit.prevent="onSearch" @reset.prevent="onReset">
        <b-form-group>
          <b-form-group
            id="input-group-recipeName"
            label-cols-sm="3"
            label="Search:"
            label-align-sm="right"
            label-for="recipeName"
          >
            <b-form-input
              id="recipeName"
              v-model="$v.form.recipeName.$model"
            ></b-form-input>
          </b-form-group>
          <b-button
            :class="visible ? null : 'collapsed'"
            :aria-expanded="visible ? 'true' : 'false'"
            aria-controls="collapse-4"
            @click="visible = !visible"
          >
            More filters
          </b-button>
          <b-collapse id="collapse-4" v-model="visible" class="mt-2">
            <b-card class="filters">
              <b-form-group
                id="input-group-cuisine"
                label-cols-sm="3"
                label="Cuisine:"
                label-align-sm="right"
                label-for="cuisine"
              >
                <b-form-select
                  id="cuisine"
                  multiple
                  :options="Cuisine"
                  v-model="cuisine"
                ></b-form-select>
              </b-form-group>

              <b-form-group
                id="input-group-diet"
                label-cols-sm="3"
                label="Diet:"
                label-align-sm="right"
                label-for="diet"
              >
                <b-form-select
                  id="diet"
                  v-model="diet"
                  :options="Diet"
                ></b-form-select>
              </b-form-group>
              <b-form-group
                id="input-group-intolerance"
                label-cols-sm="3"
                label="Intolerance:"
                label-align-sm="right"
                label-for="intolerance"
              >
                <b-form-select
                  id="intolerance"
                  multiple
                  v-model="intolerance"
                  :options="Intolerance"
                ></b-form-select>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="Amount of Recipes:"
                label-align-sm="right"
                class="mb-0"
              >
                <b-form-radio-group
                  class="pt-2"
                  :options="['5', '10', '15']"
                  v-model="$v.form.amountOfRecipes.$model"
                ></b-form-radio-group>
              </b-form-group>
            </b-card>
          </b-collapse>
        </b-form-group>
        <b-row>
          <!--           <b-col cols="5"> </b-col>
 -->
          <b-col>
            <div>
              <span id="Reset"
                ><b-button type="reset" class="buttons">Reset</b-button></span
              >
              <b-button
                ref="show"
                style="width:250px;"
                type="submit"
                class="buttons"
                id="Search"
                >Search</b-button
              >
            </div>
          </b-col>
        </b-row>
      </b-form>

      <b-alert
        class="mt-2"
        v-if="form.submitError"
        variant="warning"
        dismissible
        show
      >
        Search failed: {{ form.submitError }}
      </b-alert>

      <template v-slot:overlay>
        <div class="text-center">
          <b-icon icon="stopwatch" font-scale="3" animation="cylon"></b-icon>
          <p id="cancel-label">Please wait...</p>
          <b-button
            ref="cancel"
            variant="outline-danger"
            size="sm"
            aria-describedby="cancel-label"
            @click="show = false"
          >
            Cancel
          </b-button>
        </div>
      </template>
    </b-overlay>
  </b-container>
</template>

<script>
import Cuisine from "../assets/Cuisine";
import Diet from "../assets/Diet";
import Intolerance from "../assets/Intolerance";
import required from "vuelidate/lib/validators";

export default {
  name: "Search",
  /*   props: {
    show,
  }, */
  data() {
    return {
      visible: false,
      form: {
        recipeName: "",
        amountOfRecipes: "5",
        submitError: undefined,
      },

      cuisine: [],
      diet: null,
      intolerance: [],

      Cuisine: [{ value: null, text: "" }],
      Diet: [{ value: null, text: "" }],
      Intolerance: [{ value: null, text: "" }],

      errors: [],
      validated: false,
      show: false,
    };
  },
  validations: {
    form: {
      recipeName: {
        // required,
      },

      amountOfRecipes: {
        //   required,
      },
    },
  },
  mounted() {
    // console.log("mounted");
    this.Cuisine.push(...Cuisine);
    this.Diet.push(...Diet);
    this.Intolerance.push(...Intolerance);

    // console.log($v);
  },

  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Search() {
      try {
        var par = {
          amountOfRecipes: this.form.amountOfRecipes,
        };
        console.log(par);

        if (this.form.recipeName != "") {
          par.recipeName = this.form.recipeName;
        }
        if (this.cuisine.length > 0 && this.cuisine[0] != null) {
          par.Cuisine = "";
          for (let i = 0; i < this.cuisine.length - 1; i++) {
            par.Cuisine += this.cuisine[i];
            par.Cuisine += ", ";
          }
          par.Cuisine += this.cuisine[this.cuisine.length - 1];
          console.log(par.Cuisine);
        }
        if (this.diet != null) {
          par.Diet = this.diet;
        }
        if (this.intolerance.length > 0 && this.intolerance[0] != null) {
          par.Intolerances = "";
          for (let i = 0; i < this.intolerance.length - 1; i++) {
            par.Intolerances += this.intolerance[i];
            par.Intolerances += ", ";
          }
          par.Intolerances += this.intolerance[this.intolerance.length - 1];
          console.log(par.Intolerances);
        }

        const response = await this.axios.get(
          this.$root.store.base_url + "/recipes/search",
          // "https://assignment-3-2-mor-danielle.herokuapp.com/recipes/search",
          {
            params: par,
          }
        );
        //this.$router.push("/login");
        this.$emit("results", response.data.data);
        this.show = false;
        this.visible = false;
        console.log(response);
        // WHAT TO DO WITH THE RES ?
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
    onSearch() {
      console.log("search method called");
      this.show = true;
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      // console.log("register method go");
      this.Search();
    },
    onReset() {
      this.form = {
        recipeName: "",
        cuisine: null,
        diet: null,
        intolerance: null,
        amountOfRecipes: "",
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    onShown() {
      // Focus the cancel button when the overlay is showing
      this.$refs.cancel.focus();
    },
    onHidden() {
      // Focus the show button when the overlay is removed
      this.$refs.show.focus();
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 500px;
  color: azure;
  font-family: "Sofia";
}
.title {
  /*   padding-bottom: 10%;
 */
  color: azure;
  text-align: center;
  font-family: "Sofia";
  font-size: 40px;
  /*   padding-bottom: 10px;
 */
}
#Reset {
  padding-left: 10%;
}
#Search {
  margin-left: 35%;
}
.buttons {
  width: 30%;
  background: none;
  position: absolute;
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
.filters {
  background: none;
}
#input-group-recipeName .lable {
  color: azure;
  text-align: center;
  font-family: "Sofia";
}
</style>
