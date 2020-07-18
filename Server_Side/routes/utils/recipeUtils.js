var express = require("express");
const axios = require("axios");
const DButils = require("./DButils");
const api_domain = "https://api.spoonacular.com/recipes";


function getRecipeInfo(id) {
    try{
        return axios.get(`${api_domain}/${id}/information`, {
            params: {
              includeNutrition: false,
              apiKey: process.env.spooncular_apiKey,
            },
          });
    }  
    catch(error){
        console.log(error);
    }
  }
  
  async function getRecipeFull(recipeID) {
    recipe = await getRecipeInfo(recipeID);
    const {
      id,
      title,
      readyInMinutes,
      aggregateLikes,
      vegetarian,
      vegan,
      glutenFree,
      image,
      extendedIngredients,
      analyzedInstructions
    } = recipe.data;
  
    return {
      data: {
        id: id,
        recipeName: title,
        timeToPrepare: readyInMinutes,
        popularity: aggregateLikes,
        vegetarian: vegetarian,
        vegan: vegan,
        glutenFree: glutenFree,
        recipeImage: image,
        ingredients: getIngridients(extendedIngredients),
        instructions: getInstructions(analyzedInstructions)
      },
    };
  }
  
  function getIngridients(extendedIngredients) {
    let ingridiendstrings = new Array(extendedIngredients.length);
    for (i in extendedIngredients) {
      ingridiendstrings[i] = extendedIngredients[i].originalString;
    }
    return ingridiendstrings;
  }
  
  function getInstructions(analyzedInstructions) {
    let instructions = new Map();
    let k=1;
    for (i in analyzedInstructions) {
      for(j in analyzedInstructions[i].steps){
            instructions[k]=analyzedInstructions[i].steps[j].step;
            k++;
      }
    }
    return instructions;
  }
  
  async function random(user_id) {
    const random_response = await axios.get(`${api_domain}/random`, {

      params: {      
        number: process.env.number_of_random, 
        apiKey: process.env.spooncular_apiKey
      },
    });
    let recipesrandom = random_response.data.recipes;
    for(let i = 0 ; i<3;i=i+1){
      if(recipesrandom[i].instructions != ""){
        recipesrandom[i]= await getRecipePreview(user_id, recipesrandom[i].id);
      }else{
        recipesrandom[i]= undefined;
      }
    }
  /*  let recipesrandom = await Promise.all(
    random_response.data.recipes.map((recipe_raw) => {
      if(recipe_raw.instructions !== ""){
       getRecipePreview(user_id, recipe_raw.id);
      }
    }
      )
    ); */
    return recipesrandom;
  
  }
  async function getRecipePreview(user_id, recipeID) {
    recipe = await getRecipeInfo(recipeID);
  
    const {
      id,
      title,
      readyInMinutes,
      aggregateLikes,
      vegetarian,
      vegan,
      glutenFree,
      image,
      servings
    } = recipe.data;
    let indications= {
      watched: false,
      favorite: false
    };
    if(user_id){
      indications = await DButils.getIndications(user_id, recipeID); 
    }
   
    return {
      data: {
        id: id,
        recipeName: title,
        timeToPrepare: readyInMinutes,
        popularity: aggregateLikes,
        vegetarian: vegetarian,
        vegan: vegan,
        glutenFree: glutenFree,
        recipeImage: image,
        amountOfServings: servings,
        watched: indications.watched,
        favorite: indications.favorite,
      },
    };
  }

  module.exports = {
    getRecipeInfo: getRecipeInfo,
    getRecipeFull: getRecipeFull,
    getIngridients: getIngridients,
    getInstructions: getInstructions,
    getRecipePreview: getRecipePreview,
    random:random
}
  
