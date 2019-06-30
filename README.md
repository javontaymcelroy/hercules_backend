# 🏋️‍♂️ HERCULES API BACKEND  🏋️‍♀️

🗒Hercules is a workout app journal that allows users to track their workout progress! Users can also create, read, update, and delete their exercises.

## 🏁 Getting Started

For Front-End Devs: https://hercules-backend.herokuapp.com/ 👈 Link to the API!

For Backend Devs: To get this project started on your local machine, clone the repo and open the directory in your chosen terminal and run yarn to install the dependacies. Then, making sure you're in the root folder of the app, run yarn server and you should be good to go! :)


## ⚡️  Endpoints

### Onboarding Process

| Request        | Route           | Description  |
| ------------- |:-------------:| -----:|
| POST      | /register | expects an object that takes in { username, firstName, lastName, emailAddress, password } |
| POST      | /login | expects an object that takes in { username, password }, returns a token for the user. |
| POST      | /logout | destroys the session and logs out the user. |

### Example of Register object:

```
{
    "username": "johnwickseed",
    "firstName": "John",
    "lastName": "Appleseed",
    "emailAddress": "johnappleseed@gmail.com",
    "password": "password"
}
```

### 👩‍💻 Users Endpoints 👨‍💻

| Request        | Route           | Description  |
| ------------- |:-------------:| -----:|
| GET      | /users | returns a list of all users in the database. PROTECTED |
| GET      | /users/:id | Returns user by ID. PROTECTED |
| GET      | /user/exercise/:id | returns exercises ONLY belonging to a specific user. |

### Example of Return:

```
[
    {
        "id": 1,
        "username": "admin",
        "password": "admin"
    },
    {
        "id": 3,
        "username": "test",
        "password": "$kf032$10$1qwt3&#3*Hfx6hHoNfBRhrkuEF4545FtIIiQufnrng#YT$%Yu"
    }
]
```

### 🏃‍♀️ Exercise Endpoints 🏋️‍♀️


| Request        | Route           | Description  |
| ------------- |:-------------:| -----:|
| GET      | /dashboard?page=1 | returns 1 exercise per page. PAGINATION! 🔥 |
| GET      | /exercises | returns a list of all exercises that exists within the database. |
| GET      | /exercise/:id | returns an OBJECT of a single exercise by the id. |
| POST      | /exercise| expects an json object that requires the fields { exerciseTitle, date, description, targetRegionArea, reps (integer), amountLifted (integer), customImg } |
| PUT      | /exercise/:id | allows updating to the exercise object. |
| DELETE      | /exercise/:id | deletes object exercise from the array. |

### Example of Exercise object:

```
{
    "user_id": 3,
    "exerciseTitle": "Quick Shoulder Workout",
    "date": "06 11 2019",
    "description": "The deadlift is going to develop almost every muscle in the body. It’s predominantly working the hamstrings, glutes, and lower back; but you’re also using calves and quads. Not to mention the back, lats, shoulders, traps in the upper body; and the core for stabilizing yourself with a heavy weight.",
    "targetRegionArea": "Back",
    "reps": 6,
    "amountLifted": 85,
    "customImg": "https://s27689.pcdn.co/wp-content/uploads/2019/01/shutterstock_430898461.png"
}
```

### 🏃‍♀️ Progress Tracking Endpoints 🏋️‍♀️


| Request        | Route           | Description  |
| ------------- |:-------------:| -----:|
| GET      | /exercise/:id/progressTracking | returns all progress tracking data from specific exercise. 🔥 |
| POST      | /trackProgress | expects a json object that requires the fields {  "exercise_id": 2 "date": "May 16, 2019", "reps": integer, "amountLifted": integer }. |

### Example of Progress Tracking object:

```
{
    "exercise_id": 2,
    "date": "May 16, 2019",
    "reps": 25,
    "amountLifted": 65
}
```
