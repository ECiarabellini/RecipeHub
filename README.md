# RecipeHub

## User Story

As a cooking enthusiast, I want to easily discover, save, and share recipes from a variety of cuisines, so I can explore new dishes and improve my culinary skills.

## Acceptance Criteria

GIVEN a user wants to access the application,
WHEN the user navigates to the signup page,
THEN the user can create a new account by providing a username, email, and password.
GIVEN a registered user wants to log in,
WHEN the user enters their credentials on the login page,
THEN the user is authenticated and gains access to their account.
WHEM the user logs in'
THEN they are presented with a button to Add Recipe and a list of previously add recipes.
WHEN a user chooses to add a recipe,
THEN they are presented with form to enter the necessary information.
WHEN the user creates, edits, or deletes a recipe,
THEN the changes are reflected in the user's account and are accessible to the user.
WHEN a user wants to explore recipes previoulsy created,
THEN the user can view a list of recipes and access individual recipe details.

## Description

MSU Coding Bootcamp Group Project 2: RecipeHub

The purpose of this project was to work as a team to create a real-world full-stack application. The project fulfills he following requirements:

- Use Node.js and Express.js to create a RESTful API.
- Use Handlebars.js as the templating engine.
- Use MySQL and the Sequelize ORM for the database.
- Have both GET and POST routes for retrieving and adding new data.
- Be deployed using Heroku (with data).
- Use at least one new library, package, or technology that we haven’t discussed.
- Have a polished UI.
- Be responsive and interactive (i.e., accept and respond to user input).
- Have a folder structure that meets the MVC paradigm.
- Include authentication (express-session and cookies).
- Protect API keys and sensitive information with environment variables.
- Have a clean repository that meets quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).

Future development would include:

- Allowing a user to import recipes from the web
- Improved structure of ingredients
- Add user input validation and improved error messages

## Installation

- Repo: [GitHub Repo](https://github.com/ECiarabellini/RecipeHub/)
- Deployed to Heroku: [Heroku page](https://protected-stream-88252-41be40b06e65.herokuapp.com/)

## Usage

To run:

- Run 'npm install' from the command line
- Open mysql. Type source db/schema.sql. Exit mysql.
- Run 'node seeds/index.js' from the command line to seed the database.
- Run 'npm start' to start the server.

## Credits

- Much of my content was adapted from project 14, which itself was adapted from class exercises - Emily 

- Used class examples and activities to gain insight and inspiration for creating the layouts - Nina Buscemi

- I took reference from our classes week 14 folders to help implement the functions that we would need in order for our application. I also used chatGBT to help explain and problem solve minor issues - Connor

- I utilized examples from class content as well as learning assist and chatGBT - Katelynn





## License

MIT License
