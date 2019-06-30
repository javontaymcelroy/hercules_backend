exports.seed = function(knex) {
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
            "The deadlift is going to develop almost every muscle in the body.",
          targetRegionArea: "Legs",
          reps: 5,
          amountLifted: 120,
          customImg:
            "https://s27689.pcdn.co/wp-content/uploads/2019/01/shutterstock_430898461.png"
        },
        {
          user_id: 1,
          id: 2,
          exerciseTitle: "Back Workouts",
          date: "06 11 2019",
          description:
            "The deadlift is going to develop almost every muscle in the body.",
          targetRegionArea: "Back",
          reps: 12,
          amountLifted: 50,
          customImg:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/athlete-doing-pull-up-on-horizontal-bar-royalty-free-image-938471372-1560937066.jpg"
        },
        {
          user_id: 1,
          id: 3,
          exerciseTitle: "Shoulders Workouts",
          date: "06 11 2019",
          description:
            "The deadlift is going to develop almost every muscle in the body.",
          targetRegionArea: "Shoulders",
          reps: 5,
          amountLifted: 45,
          customImg:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/caucasian-man-with-bare-chest-lifting-weights-on-royalty-free-image-482145023-1535386379.jpg"
        }
      ]);
    });
};
