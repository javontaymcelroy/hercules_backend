exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("exercises")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("exercises").insert([
        {
          user_id: 1,
          id: 1,
          exerciseTitle: "Deadlifts",
          date: "06 11 2019",
          description:
            "The deadlift is going to develop almost every muscle in the body. It’s predominantly working the hamstrings, glutes, and lower back; but you’re also using calves and quads. Not to mention the back, lats, shoulders, traps in the upper body; and the core for stabilizing yourself with a heavy weight.",
          targetRegionArea: "Legs",
          reps: 5,
          amountLifted: 120,
          customImg:
            "https://s27689.pcdn.co/wp-content/uploads/2019/01/shutterstock_430898461.png"
        }
      ]);
    });
};
