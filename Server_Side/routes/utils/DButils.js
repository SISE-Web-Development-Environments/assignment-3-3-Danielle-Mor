require("dotenv").config();
const sql = require("mssql");

const config = {
  user: process.env.tedious_userName,
  password: process.env.tedious_password,
  server: process.env.tedious_server,
  database: process.env.tedious_database,
  connectionTimeout: 1500000,
  options: {
    encrypt: true,
    enableArithAbort: true,
  },
};

const pool = new sql.ConnectionPool(config);
const poolConnect = pool
  .connect()
  .then(() => console.log("new connection pool Created"))
  .catch((err) => console.log(err));

execQuery = async function (query) {
  await poolConnect;
  try {
    var result = await pool.request().query(query);
    return result.recordset;
  } catch (err) {
    console.error("SQL error", err);
    throw err;
  }
};

checkIdOnDB = async function (id) {
  const user = (
    await execQuery(`SELECT * FROM dbo.users WHERE user_id like '${id}'`)
  )[0];

  return user;
};

addRecipeToWatched = async function (user_id, recipe_id) {
  const user = await checkIdOnDB(user_id.toLowerCase());
  if (user) {
    const watchedR = (
      await execQuery(`SELECT * FROM dbo.watchedRecipes WHERE 
    recipe_id like '${recipe_id}' AND username like '${user.username}'`)
    )[0];
    if (!watchedR) {
      await execQuery(
        `INSERT INTO dbo.watchedRecipes VALUES (${recipe_id}, '${user.username}')`
      );
    }
    await updateLastWatchedForUser(user_id, recipe_id);
  }
};

getFavorites = async function (user_id) {
  const user = await checkIdOnDB(user_id.toLowerCase());
  let favoriteRecipesIDs = [];

  if (user) {
    let IDs = (
      await execQuery(
        `SELECT favorites FROM dbo.users WHERE username='${user.username}'`
      )
    )[0].favorites;
    if (IDs !== "") {
      favoriteRecipesIDs = JSON.parse(IDs);
    }
  }
  return favoriteRecipesIDs;
};

addRecipeToFavorites = async function (user_id, recipe_id) {
  try {
    const user = await checkIdOnDB(user_id.toLowerCase());
    if (user) {
      const favorites = user.favorites;
      if (favorites === "") {
        let recipesIDs = [recipe_id];
        await execQuery(
          `UPDATE users SET favorites='${JSON.stringify(
            recipesIDs
          )}' WHERE user_id = '${user.user_id}'`
        );
      } else {
        let result = await isRecipeInFavorites(user, recipe_id);
        if (result == false) {
          let forUpdaterecipesIDs = JSON.parse(favorites);
          forUpdaterecipesIDs.push(recipe_id);
          let newFavorites = JSON.stringify(forUpdaterecipesIDs);
          await execQuery(
            `UPDATE users SET favorites = '${newFavorites}' WHERE user_id = '${user.user_id}'`
          );
        }
      }
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
/* 
deleteRecipeFromfavorites = async function (user_id, recipe_id) {
  try {
    const user = await checkIdOnDB(user_id.toLowerCase());
    if (user) {
      await execQuery(`UPDATE dbo.watchedRecipes SET favorite=0 WHERE recipe_id = ${recipe_id} AND 
  username = '${user.username}'`);
    }
  } catch (error) {
    throw error;
  }
}; */

getIndications = async function (user_id, recipeID) {
  const user = await checkIdOnDB(user_id.toLowerCase());
  const watchedT = (
    await execQuery(
      `SELECT * FROM dbo.watchedRecipes WHERE username like '${user.username}' AND recipe_id = ${recipeID}`
    )
  )[0];
  if (watchedT) {
    let result = await isRecipeInFavorites(user, recipeID);
    if (result == true) {
      watchedT.favorite = true;
    } else {
      watchedT.favorite = false;
    }

    return {
      watched: true,
      favorite: watchedT.favorite,
    };
  }
  let result2 = await isRecipeInFavorites(user, recipeID);

  return {
    watched: false,
    favorite: result2,
  };
};

isRecipeInFavorites = async function (user, recipeID) {
  const favorites = user.favorites;
  if (favorites === "") {
    return false;
  }
  var forUpdaterecipesIDs = JSON.parse(favorites);
  for (let i = 0; i < forUpdaterecipesIDs.length; i = i + 1) {
    if (forUpdaterecipesIDs[i] === recipeID) {
      return true;
    }
  }
  return false;
};

updateLastWatchedForUser = async function (user_id, recipe_id) {
  try {
    const user = await checkIdOnDB(user_id.toLowerCase());
    if (user) {
      const lastWatched = user.lastWatched;
      if (lastWatched === "") {
        let recipesIDs = [recipe_id];
        await execQuery(
          `UPDATE users SET lastWatched='${JSON.stringify(
            recipesIDs
          )}' WHERE user_id = '${user.user_id}'`
        );
      } else {
        var forUpdaterecipesIDs = JSON.parse(lastWatched);
        addToLastWatched(forUpdaterecipesIDs, recipe_id);
        var newLastWatched;
        try {
          newLastWatched = JSON.stringify(forUpdaterecipesIDs);
          await execQuery(
            `UPDATE users SET lastWatched='${newLastWatched}' WHERE user_id = '${user.user_id}'`
          );
        } catch (error) {
          console.log(error);
          throw error;
        }
      }
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

addToLastWatched = async function (forUpdaterecipesIDs, recipe_id) {
  if (forUpdaterecipesIDs.length == 3) {
    if (forUpdaterecipesIDs[0] === recipe_id) {
      forUpdaterecipesIDs[0] = forUpdaterecipesIDs[2];
      forUpdaterecipesIDs[2] = recipe_id;
      return;
    }
    if (forUpdaterecipesIDs[1] === recipe_id) {
      forUpdaterecipesIDs[1] = forUpdaterecipesIDs[2];
      forUpdaterecipesIDs[2] = recipe_id;
      return;
    }
    if (forUpdaterecipesIDs[2] === recipe_id) {
      return;
    }
    forUpdaterecipesIDs[0] = forUpdaterecipesIDs[1];
    forUpdaterecipesIDs[1] = forUpdaterecipesIDs[2];
    forUpdaterecipesIDs[2] = recipe_id;
    return;
  }
  forUpdaterecipesIDs.push(recipe_id);
};

getLastWatched = async function (user_id) {
  const user = await checkIdOnDB(user_id.toLowerCase());
  let lastWatchedIDs = {};
  if (user) {
    const lastWatched = user.lastWatched;
    if (lastWatched !== "") {
      lastWatchedIDs = JSON.parse(lastWatched);
    }
  }
  return lastWatchedIDs;
};

getPersonalRecipes = async function (user_id) {
  const user = await checkIdOnDB(user_id.toLowerCase());

  let resultList = [];
  if (user) {
    const personalRecipesAllDetailes = await execQuery(
      `SELECT *
        FROM dbo.recipes 
        WHERE username like '${user.username}' AND familyOrPersonal = 1`
    );
    for (let recipe of personalRecipesAllDetailes) {
      let personalRecipesPreview = await getDBRecipePreview(recipe);
      resultList.push(personalRecipesPreview);
    }
  }
  return resultList;
};

getDBRecipePreview = async function (personalRecipesAllDetailes) {
  return {
    data: {
      recipeID: personalRecipesAllDetailes.recipe_id,
      recipeName: personalRecipesAllDetailes.recipe_name,
      timeToPrepare: personalRecipesAllDetailes.timeToPrepare,
      popularity: 0,
      vegetarian: personalRecipesAllDetailes.vegetarian,
      vegan: personalRecipesAllDetailes.vegan,
      glutenFree: personalRecipesAllDetailes.glutenFree,
      recipeImage: personalRecipesAllDetailes.recipeImage,
      amountOfServings: personalRecipesAllDetailes.amountOfServings,
    },
  };
};

getFamilyRecipes = async function (user_id) {
  const user = await checkIdOnDB(user_id.toLowerCase());

  let resultList = [];
  if (user) {
    const familyRecipesAllDetailes = await execQuery(
      `SELECT *
        FROM dbo.recipes 
        WHERE username like '${user.username}' AND familyOrPersonal = 0`
    );
    for (let recipe of familyRecipesAllDetailes) {
      let familyRecipePreview = await getDBFamilyRecipePreview(recipe);
      resultList.push(familyRecipePreview);
    }
  }
  return resultList;
};

getDBFamilyRecipePreview = async function (
  familyRecipesAllDetailes,
  isFamilyOrPersonal
) {
  let returned = {
    data: {
      recipeID: familyRecipesAllDetailes.recipe_id,
      recipeName: familyRecipesAllDetailes.recipe_name,
      timeToPrepare: familyRecipesAllDetailes.timeToPrepare,
      popularity: 0,
      vegetarian: familyRecipesAllDetailes.vegetarian,
      vegan: familyRecipesAllDetailes.vegan,
      glutenFree: familyRecipesAllDetailes.glutenFree,
      recipeImage: familyRecipesAllDetailes.recipeImage,
      amountOfServings: familyRecipesAllDetailes.amountOfServings,
    },
  };
  if (isFamilyOrPersonal == 0) {
    returned.data.author = familyRecipesAllDetailes.author;
    returned.data.relative = familyRecipesAllDetailes.relative;
    returned.data.special_event = familyRecipesAllDetailes.special_event;
  }
  return returned;
};

getFullDBRecipe = async function (user_id, recipeID, isFamilyOrPersonal) {
  const user = await checkIdOnDB(user_id.toLowerCase());

  //let resultList = [];
  let DBFullRecipe = {};
  if (user) {
    const DBRecipesAllDetailes = (
      await execQuery(
        `SELECT *
        FROM dbo.recipes 
        WHERE recipe_id like '${recipeID.toLowerCase()}' AND familyOrPersonal = '${isFamilyOrPersonal}'`
      )
    )[0];
    /*  for(let recipe  of DBRecipesAllDetailes)
    { */
    DBFullRecipe = await getDBFamilyRecipePreview(
      DBRecipesAllDetailes,
      isFamilyOrPersonal
    );
    DBFullRecipe.data.ingredients = JSON.parse(
      DBRecipesAllDetailes.ingredients
    );
    DBFullRecipe.data.instructions = JSON.parse(
      DBRecipesAllDetailes.instructions
    );
    if (isFamilyOrPersonal == 0) {
      const familyImages = await execQuery(
        `SELECT *
        FROM dbo.recipesImages 
        WHERE recipe_id like '${recipeID.toLowerCase()}'`
      );
      //let familyImagesMap = new Array();
      DBFullRecipe.data.familyImage = {};
      for (i in familyImages) {
<<<<<<< HEAD
        DBFullRecipe.data.familyImage[i] = {
          step: familyImages[i].step,
          image: familyImages[i].recipe_image,
        };
=======
        DBFullRecipe.data.familyImage[familyImages[i].step] =
          familyImages[i].recipe_image;
>>>>>>> bde681ff8daad347e9929264ecf9958f330a436c
      }
      // DBFullRecipe.data.familyImage = familyImagesMap;
    }
    //console.log(familyImages);
    // let steps = [];
  }
  return DBFullRecipe;
};

module.exports = {
  execQuery: execQuery,
  checkIdOnDB: checkIdOnDB,
  addRecipeToWatched: addRecipeToWatched,
  addRecipeToFavorites: addRecipeToFavorites,
  getIndications: getIndications,
  updateLastWatchedForUser: updateLastWatchedForUser,
  getFavorites: getFavorites,
  getLastWatched: getLastWatched,
  getPersonalRecipes: getPersonalRecipes,
  getFamilyRecipes: getFamilyRecipes,
  getFullDBRecipe: getFullDBRecipe,
  /* deleteRecipeFromfavorites: deleteRecipeFromfavorites, */
};
