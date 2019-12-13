exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { quantity: "1 lb", name: "ground beef" },
        { quantity: "1 can", name: "tomato sauce" },
        { quantity: "1 cup", name: "cheese" },
        { quantity: "1 cup", name: "diced veggies" },
        { quantity: "1 egg", name: "raw egg" },
        { quantity: "1 cup", name: "bread crumbs" },
        { quantity: "1 pk", name: "lasagna noodles" }
      ]);
    });
};
