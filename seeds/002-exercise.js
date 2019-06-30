exports.seed = function(knex) {
  return knex("exercises")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("exercises").insert([
        {
          user_id: 1,
          exerciseTitle: "Banded Glute Bridge",
          date: "06 11 2019",
          description:
            "Lie on your back with your hands at your sides, knees bent, and feet flat on floor hip-width apart. Loop a medium-strength resistance band around your thighs, just above your knees. Squeeze your glutes and abs and push through your heels to lift your hips a few inches off the floor until your body forms a straight line from your shoulders to your knees. Hold this position. Press your legs out and back 10 times, maintaining tension in the band as you pulse in and out. Slowly lower your hips to return to the starting position.",
          targetRegionArea: "Legs",
          reps: 30,
          amountLifted: 0,
          customImg:
            "https://bootybymich.com/wp-content/uploads/2018/03/friday-week1_banded-glute-bridge-2-.jpg"
        },
        {
          user_id: 1,
          exerciseTitle: "Side Lunges",
          date: "06 20 2019",
          description:
            "Stand with your feet together. Take a big step out to the right with your right foot and bend your right knee, pushing your hips back to lower into a side lunge. Keep your left leg straight and your chest lifted. Make sure your right knee stays over your toes and doesn't push beyond them. Push through your right foot to return to standing, and then repeat on the opposite side.",
          targetRegionArea: "Legs",
          reps: 35,
          amountLifted: 25,
          customImg:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/side-lunge-1543424933.jpg"
        },
        {
          user_id: 1,
          exerciseTitle: "Reverse Lunge to Overhead Press With Knee Drive",
          date: "06 25 2019",
          description:
            "Start standing with your feet shoulder-width apart. Hold a dumbbell in your right hand and rest it on your shoulder. Step back (about 2 feet) with your right foot, landing on the ball of your right foot and keeping your heel off the ground. Bend both knees to create two 90-degree angles with your legs. In this position, your shoulders should be directly above your hips and your chest should be upright. Your left shin should be perpendicular to the floor and your left knee should be stacked above your left ankle. Your butt and core should be engaged. Push through the heel of your left foot to stand up straight. As you do, press the weight directly overhead and drive your right knee in toward your chest. This is 1 rep. Hold for a beat, and then step back into a reverse lunge to immediately go into the next rep.",
          targetRegionArea: "Shoulders",
          reps: 5,
          amountLifted: 45,
          customImg:
            "https://media.self.com/photos/5ade431c3cf6f501f025053a/2:1/pass/woman-lunging.jpg"
        },
        {
          user_id: 1,
          exerciseTitle: "Crouching Tiger Push-up",
          date: "06 31 2019",
          description:
            "Start in high plank, with your palms flat on the floor, hands shoulder-width apart (or wider if that's how you usually do push-ups), shoulders stacked above your wrists, legs extended, and core engaged. Bend your elbows and lower your chest toward the floor. Keep your body low, bend your knees, shift your hips back toward your heels, and straighten your arms. Your knees should be hovering a few inches off the floor. Lift your hips toward the ceiling and straighten your legs. You should now be in Downward Facing Dog. Slowly roll your body forward back to high plank. These are quite challenging. If you try them out and your strength just isn't there yet, try focusing on regular push-ups and come back to these once you've built up more upper-body strength.",
          targetRegionArea: "Biceps",
          reps: 10,
          amountLifted: 0,
          customImg: "https://cloudfront.timesnownews.com/media/Push-up.jpg"
        },
        {
          user_id: 1,
          exerciseTitle: "Squat",
          date: "07 1 2019",
          description:
            "Stand with your feet shoulder-width apart, toes turned out slightly, gripping the sides of the kettlebell handle with both hands at chest height. Bend your knees and push your butt back as you lower into a squat. Only squat as deeply as your mobility allows. Push through your heels to return to standing. Squeeze your glutes at the top.",
          targetRegionArea: "Legs",
          reps: 35,
          amountLifted: 40,
          customImg:
            "https://www.verywellfit.com/thmb/iR8CxbDZqkHNO2P6cIgpet16osE=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-559688779-5953ae105f9b584bfe718493.jpg"
        },
        {
          user_id: 1,
          exerciseTitle: "Offset Load Bulgarian Split Squat",
          date: "07 4 2019",
          description:
            "Stand with your back to a bench or similar elevated surface. With your left foot on the floor a few feet in front of the bench, place the top of your right foot on the bench, shoelaces down. Hold a dumbbell in your left hand by your side. Brace your core and bend your knees to lower down into a split squat. Your left knee should ideally form a 90-degree angle so that your thigh is parallel to the ground, and your right knee is hovering above the floor. (Quick position check: your left foot should be stepped out far enough that you can do this without letting your left knee go past your left toes—if you can't, hop your left foot out a bit farther away from the bench.) Driving through your left heel, stand back up to starting position.",
          targetRegionArea: "Legs",
          reps: 25,
          amountLifted: 40,
          customImg:
            "https://i.pinimg.com/originals/56/62/47/566247a1b3fd15f96b21fb686695ee70.jpg"
        },
        {
          user_id: 1,
          exerciseTitle: "Jumping Rope",
          date: "07 5 2019",
          description:
            "Stand tall, with your back straight and core engaged. Hold one handle in each hand. Keep your elbows at waist height as you swing the rope forward. Jump as you hear the rope strike the ground in front of you. Move at a speed that works for you—the faster you go, the more intense it will feel.",
          targetRegionArea: "Legs",
          reps: 50,
          amountLifted: 0,
          customImg:
            "https://life.spartan.com/wp-content/uploads/2018/07/jump_rope.jpg"
        },
        {
          user_id: 1,
          exerciseTitle: "Downward Facing Dog",
          date: "07 6 2019",
          description:
            "Start on your hands and knees, with your hands stacked under your shoulders and knees under your hips. Spread your hands wide and press your index finger and thumb into your mat. Lift your tailbone and press your butt up and back, drawing your hips toward the ceiling. Straighten your legs as best as you can and press your heels gently toward the floor. Your head should be relaxed between your arms, facing your knees. Your back should be flat.",
          targetRegionArea: "Legs",
          reps: 25,
          amountLifted: 0,
          customImg:
            "https://cdn.prod.openfit.com/uploads/2017/05/29100223/downward-facing-dog-micki-duran-yoga52.jpg"
        },
        {
          user_id: 1,
          exerciseTitle: "Donkey Kicks",
          date: "07 6 2019",
          description:
            "Start on all fours with your knees under your hips and hands under your shoulders. Flex your right foot and lift it off the floor as you kick it back behind you and straighten your leg completely. Think about using your glutes to lift your leg. If you start to feel any tension in your lower back, don't lift your leg as high. Do all your reps on one side, and then repeat with the other leg.",
          targetRegionArea: "Legs",
          reps: 35,
          amountLifted: 0,
          customImg:
            "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/S9BPJEp7ioxrxk50/young-woman-doing-a-butt-firming-fitness-workout-for-strength-training-her-legs-and-glutes-fit-girl-doing-donkey-kick-kickbacks-exercise-toning-her-body-outside-in-summer_hanfcmgge_thumbnail-full01.png"
        },
        {
          user_id: 1,
          exerciseTitle: "Hip Thrusts",
          date: "07 11 2019",
          description:
            "Sit on the floor with your back in front of a bench or similar elevated surface. Bend your knees and place your feet flat on the ground, hip-distance apart. Rest your upper back on the edge of the bench. Hold a heavy dumbbells (as shown) or a pair of medium-weight dumbbells at the crease in your hips, resting the weights on your body. You can also do this move without weights or with a barbell, if you're comfortable using one. Drive through your heels to lift your hips toward the ceiling as your upper back stays in place on the bench.Pause and squeeze your glutes at the top. In a slow and controlled motion, lower your butt back to the ground.",
          targetRegionArea: "Legs",
          reps: 25,
          amountLifted: 100,
          customImg:
            "https://cdn-ami-drupal.heartyhosting.com/sites/muscleandfitness.com/files/media/barbell-hip-thruster-1109.jpg"
        },
        {
          user_id: 1,
          exerciseTitle: "Rear Delt Raise",
          date: "07 14 2019",
          description:
            "The rear delt raise, also known as the rear deltoid raise, or rear shoulder raise is an exercise in weight training. This exercise is an isolation exercise that heavily works the posterior deltoid muscle.",
          targetRegionArea: "Shoulders",
          reps: 25,
          amountLifted: 60,
          customImg:
            "https://focusphysique.com/wp-content/uploads/2018/04/Underdeveloped-Rear-Delts.jpeg"
        },
        {
          user_id: 1,
          exerciseTitle: "Bench Press",
          date: "07 25 2019",
          description:
            "The bench press is an upper-body weight training exercise in which the trainee presses a weight upwards while lying on a weight training bench. The exercise uses the pectoralis major, the anterior deltoids, and the triceps, among other stabilizing muscles.",
          targetRegionArea: "Chest",
          reps: 25,
          amountLifted: 120,
          customImg:
            "https://www.pharaohfitness.co.uk/wp-content/uploads/2017/04/Bench-Press-Feature-Image.jpg"
        }
      ]);
    });
};
