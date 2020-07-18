var express = require("express");
var router = express.Router();
const DButils = require("./utils/DButils");
const recipesUtils = require("./utils/recipeUtils");

router.use(function requireLogin(req, res, next) {
  if (!req.user_id) {
    next({ status: 401, message: "Unauthorized" });
  } else {
    next();
  }
});

router.get("/favorites", async function (req, res, next) {
  try {
    const user_id = req.user_id;
    let favoritesList = [];
    let favoritesIDs = await DButils.getFavorites(user_id);

    for (let recipe_id of favoritesIDs) {
      let recipe = await recipesUtils.getRecipePreview(user_id, recipe_id);
      favoritesList.push(recipe);
    }
    res.status(200).send(favoritesList);
  } catch (error) {
    console.log(error);
    //res.send(error);
    next(error);
  }
});

router.post("/favorites", async (req, res, next) => {
  try {
    if (req.body.recipe_id) {
      await DButils.addRecipeToFavorites(req.user_id, req.body.recipe_id);
      res.status(200).send("recipe was added to favorites");
    } else {
      throw { status: 400, message: "not valid id" };
    }
  } catch (error) {
    next(error);
  }
});

/* router.delete("/favorites", async (req, res, next) => {
  try {
    if (req.body.recipe_id) {
      await DButils.deleteRecipeFromfavorites(req.user_id, req.body.recipe_id);
      res.status(200).send("recipe deleted from favorites");
    } else {
      throw { status: 400, message: "not valid id" };
    }
  } catch (error) {
    next(error);
  }
}); */

router.get("/lastWatched", async function (req, res, next) {
  try {
    const user_id = req.user_id;
    let lastWatchedList = [];
    let lastWatchedIDs = await DButils.getLastWatched(user_id);
    for (let i = 0; i < lastWatchedIDs.length; i = i + 1) {
      let recipe = await recipesUtils.getRecipePreview(
        user_id,
        lastWatchedIDs[i]
      );
      lastWatchedList.push(recipe);
    }
    res.status(200).send(lastWatchedList);
  } catch (error) {
    console.log(error);
    //res.send(error);
    next(error);
  }
});

router.post("/lastWatched", async (req, res, next) => {
  try {
    if (req.body.recipe_id) {
      await DButils.addRecipeToWatched(req.user_id, req.body.recipe_id);
      res.status(200).send("recipe was added to lastwatched");
    } else {
      throw { status: 400, message: "not valid id" };
    }
  } catch (error) {
    next(error);
  }
});

router.get("/personalRecipes", async function (req, res, next) {
  try {
    const user_id = req.user_id;
    let personalRecipes = await DButils.getPersonalRecipes(user_id);
    res.status(200).send(personalRecipes);
  } catch (error) {
    console.log(error);
    //res.send(error);
    next(error);
  }
});

router.get("/fullPersonalRecipe", async function (req, res, next) {
  try {
    const user_id = req.user_id;
    const recipeID = req.query.recipeID;
    if (!req.query.recipeID) {
      throw { status: 400, message: "not valid recipeID" };
    }
    let personalRecipes = await DButils.getFullDBRecipe(user_id, recipeID, 1);

    res.status(200).send(personalRecipes);
  } catch (error) {
    console.log(error);
    //res.send(error);
    // next(error);
  }
});

router.get("/familyRecipes", async function (req, res, next) {
  try {
    const user_id = req.user_id;
    let familyRecipes = await DButils.getFamilyRecipes(user_id);

    res.status(200).send(familyRecipes);
  } catch (error) {
    console.log(error);
    //res.send(error);
    // next(error);
  }
});
//router.get("/random", async (req, res, next) => {

router.get("/fullFamilyRecipes", async function (req, res, next) {
  try {
    const user_id = req.user_id;
    const recipeID = req.query.recipeID;
    if (!req.query.recipeID) {
      throw { status: 400, message: "not valid recipeID" };
    }
    let familyRecipes = await DButils.getFullDBRecipe(user_id, recipeID, 0);

    res.status(200).send(familyRecipes);
  } catch (error) {
    console.log(error);
    //res.send(error);
    next(error);
  }
});

module.exports = router;
