<template>
  <div class="container">
    <h1 class="title">Login</h1>
    <b-form @submit.prevent="onLogin">
      <b-form-group
        id="input-group-Username"
        label-cols-sm="3"
        label="Username:"
        label-for="Username"
      >
        <b-form-input
          id="Username"
          v-model="$v.form.username.$model"
          type="text"
          :state="validateState('username')"
        ></b-form-input>
        <b-form-invalid-feedback id="req">
          Username is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-Password"
        label-cols-sm="3"
        label="Password:"
        label-for="Password"
      >
        <b-form-input
          id="Password"
          type="password"
          v-model="$v.form.password.$model"
          :state="validateState('password')"
        ></b-form-input>
        <b-form-invalid-feedback>
          Password is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-button type="submit" id="Loginbutton">Login</b-button>
      <div class="mt-2" id="RegisterSug">
        Do not have an account yet?
        <router-link to="register"> Register in here</router-link>
      </div>
    </b-form>
    <b-alert
      class="mt-2"
      v-if="form.submitError"
      variant="warning"
      dismissible
      show
    >
      Login failed: {{ form.submitError }}
    </b-alert>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
        submitError: undefined,
      },
    };
  },
  validations: {
    form: {
      username: {
        required,
      },
      password: {
        required,
      },
    },
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Login() {
      try {
        const response = await this.axios.post(
          this.$root.store.base_url + "/Login",
          //   "https://assignment-3-2-mor-danielle.herokuapp.com/Login",
          {
            username: this.form.username,
            password: this.form.password,
          }
        );
        // console.log(response);
        // this.$root.loggedIn = true;
        console.log(this.$root.store.login);
        this.$root.store.login(this.form.username);
        this.$router.push("/");
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
    onLogin() {
      // console.log("login method called");
      this.form.submitError = undefined;
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      // console.log("login method go");

      this.Login();
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
  padding-bottom: 10px;
}
#Loginbutton {
  background: none;

  border-left: solid 1px #ededed;
  border-right: solid 1px #ededed;
  border-bottom: solid 1px #ededed;
  border-top: solid 1px #ededed;
  padding-bottom: 10px;

  font-family: "Sofia";
  margin-left: 30%;
  width: 35%;
  font-size: 28px;
  text-align: center;
  color: white;

  /* z-index: 100;
     margin-top: 50px; */
}
#Loginbutton:hover {
  background: rgba(206, 203, 203, 0.55); /* Black see-through */
}
#RegisterSug {
  margin-left: 10%;
}
</style>
