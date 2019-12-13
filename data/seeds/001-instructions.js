exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("instructions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        {
          recipe_id: 1,
          step_number: 1,
          description: "fry meat",
          ingredient_id: 1
        },
        {
          recipe_id: 1,
          step_number: 2,
          description: "cut veggies",
          ingredient_id: 4
        },
        {
          recipe_id: 1,
          step_number: 3,
          description: "layer meat, veggies, cheese in taco shell",
          ingredient_id: 3
        },
        {
          recipe_id: 2,
          step_number: 1,
          description: "season meat",
          ingredient_id: 1
        },
        {
          recipe_id: 2,
          step_number: 2,
          description: "mix egg and bread crumbs",
          ingredient_id: 6
        },
        {
          recipe_id: 2,
          step_number: 3,
          description: "bake on 350deg",
          ingredient_id: 3
        },
        {
          recipe_id: 3,
          step_number: 1,
          description: "cook meat",
          ingredient_id: 1
        },
        {
          recipe_id: 3,
          step_number: 2,
          description: "layer meat, ricotta cheese, lasagna noodles",
          ingredient_id: 7
        },
        {
          recipe_id: 3,
          step_number: 3,
          description: "bake on 325deg",
          ingredient_id: 3
        }
      ]);
    });
};
