var express = require("express");
var router = express.Router();
const axios = require("axios");
const DButils = require("./utils/DButils");
const recipesUtils = require("./utils/recipeUtils");

const api_domain = "https://api.spoonacular.com/recipes";

router.get("/recipeFullInforamation", async (req, res, next) => {
  try {
    if(!req.query.recipe_id){
      throw { status: 400, message: "Bad Request" }; // check status?????
    }
    const recipe = await recipesUtils.getRecipeFull(req.query.recipe_id);
    res.status(200).send({ data: recipe.data });
  } catch (error) {
    next(error);
  }
});


//#region example1 - make serach endpoint
router.get("/search", async (req, res, next) => {
  try {
    var {
      recipeName,
      Cuisine,
      Diet,
      Intolerances,
      amountOfRecipes,
    } = req.query;
    if (!amountOfRecipes){
      amountOfRecipes=5;
    }
    const search_response = await axios.get(`${api_domain}/search`, {
      params: {
        query: recipeName,
        cuisine: Cuisine,
        diet: Diet,
        intolerances: Intolerances,
        number: amountOfRecipes,
        instructionsRequired: true,
        apiKey: process.env.spooncular_apiKey,
      },
    });
    let recipes = await Promise.all(
      search_response.data.results.map((recipe_raw) =>
      recipesUtils.getRecipePreview(req.user_id, recipe_raw.id)
      )
    );
    recipes = recipes.map((recipe) => recipe.data);
    res.status(200).send({ data: recipes });
  } catch (error) {
    next(error);
  }
});


router.get("/random", async (req, res, next) => {
  try {  
   //let numberOfrecipes =process.env.number_of_random;
   let recipesrandom = await recipesUtils.random(req.user_id);
  
  while(recipesrandom[0] === undefined || recipesrandom[1] ===undefined || recipesrandom[2] === undefined){
    
    recipesrandom = await recipesUtils.random(req.user_id);

   }
     
   recipesrandom = recipesrandom.map((recipe) => recipe.data);
  
   

   res.status(200).send({ data: recipesrandom });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

