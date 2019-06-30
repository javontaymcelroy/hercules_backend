exports.seed = function(knex) {
  return knex("progressTracking")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("progressTracking").insert([
        {
          exercise_id: 1,
          date: "June 11, 2019",
          reps: 12,
          amountLifted: 50
        },
        {
          exercise_id: 1,
          date: "June 15, 2019",
          reps: 10,
          amountLifted: 55
        },
        {
          exercise_id: 1,
          date: "June 20, 2019",
          reps: 14,
          amountLifted: 60
        },
        {
          exercise_id: 1,
          date: "June 30, 2019",
          reps: 8,
          amountLifted: 60
        },
        {
          exercise_id: 1,
          date: "July 4, 2019",
          reps: 4,
          amountLifted: 40
        },
        {
          exercise_id: 1,
          date: "July 8, 2019",
          reps: 20,
          amountLifted: 45
        },
        {
          exercise_id: 2,
          date: "July 19, 2019",
          reps: 3,
          amountLifted: 45
        },
        {
          exercise_id: 3,
          date: "July 4, 2019",
          reps: 20,
          amountLifted: 75
        }
      ]);
    });
};
