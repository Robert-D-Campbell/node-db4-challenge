const db = require("../data/db-config.js");

module.exports = {
  getRecipes,
  getIngredientList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}
function getIngredientList(recipe_id) {
  return db("ingredients").where({ recipe_id });
}
function getInstructions(recipe_id) {
  return db("instructions")
    .orderBy("step_number", "asc")
    .join("recipes", "instructions.recipe_id", "=", "recipes.id")
    .join("ingredients", "instructions.ingredient_id", "=", "ingredients.id")
    .where({ recipe_id });
}
