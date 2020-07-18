<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Sofia"
    />
    <div id="nav">
      <b-navbar class="bd-navbar " type="dark">
        <b-navbar-brand tag="h1" class="mb-0">Recipes</b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>

            <!-- <router-link :to="{ name: 'main' }">Vue Recipes</router-link>| -->
            <b-nav-item to="/search">Search</b-nav-item>
            <!-- <router-link :to="{ name: 'search' }">Search</router-link>|-->
            <b-nav-item to="/about">About</b-nav-item>
            <!-- <router-link :to="{ name: 'About' }">About</router-link>|-->
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <span v-if="!$root.store.username">
              <b-navbar-nav>
                <b-icon
                  align="bottom"
                  shift-v="-12"
                  icon="person-fill"
                ></b-icon>

                <p class="mb-0 hello"><b>hello, Guest:</b></p>
                <b-nav-item to="/register" right>Register</b-nav-item>
                <b-nav-item to="/login" right>Login</b-nav-item>
              </b-navbar-nav>
            </span>
            <span v-else>
              <b-navbar-nav>
                <b-icon
                  align="bottom"
                  shift-v="-10.3"
                  icon="person-fill"
                ></b-icon>
                <p class="mb-0 hello">
                  <b> hello, {{ $root.store.username }}: </b>
                </p>
                <b-nav-item-dropdown
                  id="my-nav-dropdown"
                  text="Profile"
                  toggle-class="nav-link-custom"
                  right
                >
                  <b-dropdown-item to="/users/Favorites"
                    >Favorites</b-dropdown-item
                  >
                  <b-dropdown-item to="/users/PersonalRecipes"
                    >Personal</b-dropdown-item
                  >
                  <b-dropdown-item to="/users/FamilyRecipes"
                    >Family</b-dropdown-item
                  >
                </b-nav-item-dropdown>
                <b-nav-form>
                  <b-button variant="outline-light" @click="Logout"
                    >Logout</b-button
                  >
                </b-nav-form>
              </b-navbar-nav>
            </span>
          </b-navbar-nav>
          <!-- Navbar dropdowns -->
        </b-collapse>
      </b-navbar>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  /*   updated() {
    this.$nextTick(function() {
      console.log(this.$cookies.get("session"));
      if (!this.$cookies.get("session")) {
      //  this.$root.store.logout();
      }
    });
  }, */
  methods: {
    Logout() {
      this.$root.store.logout();

      this.$bvToast.toast("User logged out successfully", {
        title: "Logout",
        variant: "info",
        toaster: "b-toaster-top-center",
      });

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";
.bd-navbar {
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25),
    inset 0 -1px 5px rgba(0, 0, 0, 0.25);
  background-color: #030303be;

  color: #f6f6fa;
  font-family: "Sofia";
}
.hello {
  color: #f6f6fa;
  align-self: center;
  align-items: center;
}
body {
  /*  background: url("./assets/background.jpeg") no-repeat fixed; */
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("./assets/background.jpeg") no-repeat fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 20px;

  /*   color: #f3f7f7;
 */
}
</style>
