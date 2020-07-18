import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/users/Favorites",
    name: "favorites",
    component: () => import("./pages/FavoritesPage"),
  },
  {
    path: "/users/PersonalRecipes",
    name: "personal",
    component: () => import("./pages/PersonalPage"),
  },
  {
    path: "/users/FamilyRecipes",
    name: "family",
    component: () => import("./pages/FamilyRecipesPage"),
  },
  {
    path: "/recipes/recipeFullInforamation",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
    path: "/users/FamilyRecipe",
    name: "familyRecipe",
    component: () => import("./pages/FamilyRecipeViewPage"),
  },
  {
    path: "/users/PersonalRecipe",
    name: "personalRecipe",
    component: () => import("./pages/PersonalRecipeViewPage"),
  },
  {
    path: "/About",
    name: "about",
    component: () => import("./pages/AboutPage"),
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
];

export default routes;
