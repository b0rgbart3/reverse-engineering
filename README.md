# Passport: a demo of Passport
Sequelize Homework: Reverse Engineering Code
This is a demo of using the npm package 'Passport' to add authentication to any website


## User Story
```
AS A developer

I WANT a walk-through of the codebase

SO THAT I can use it as a starting point for a new project
```

## Business Context
When joining a new team, you will be expected to inspect a lot of code that you have never seen before. Rather than having a team member explain every line for you, you will dissect the code by yourself, saving any questions for a member of your team.

## Code Base

### Server.js
Our App starts in the server.js file.  We are using Express as the server, and enabling it to handle url encoded data and Json data.  We are including the Passport npm package to create an authentication system.  In order to do this we need to do 2 things:
  
  1) We need to have a database where we are storing our user account information.  
  
  2)  We need to have some session variables so that we can keep track of weather the user has logged in to the website or not as they navigate to different routes.  To do this we are also including the npm package "express-session".

We are using Sequelize as our database ORM, and our configuration and models are in the /models directory. For our authentication we only need one Table, one db model - the Users model, which just has two fields: an email address and a password.

Here we create an instance of the Express server and configure it to use urlencoded data, and json data.  We configure the /public folder to be publicly accessible so we can serve client side HTML, CSS and JS files.
Then we create and initialize a session data object -- and we pass that session data object to our Passport instance.The configuration details for this are in the /config/passort file.

We add our html and api routes as external files to the server.  Finally, we tell Sequelize to sync our database, and when that finishes, we tell the Express server to listen on the assigned port for requests.
-Depends On: config/passport.js, models/index.js, 

### Config
#### Config/passport

- Include the npm passport package, and the passport-local strategy.
- Include the db which is a Sequelize instance, exported from the /models folder.
- Create a new instance of Passport session, using the local Strategy, asking for email, and password.
- Query our DB using Sequelize to find the user.  Return error messages if the credentials don't match what is stored in our DB.  
- Export this passport instance as "passport".
-Depends On: /models
-Exports: passport


## Acceptance Critera
```md
GIVEN a Node.js application using Sequelize and Passport
WHEN I follow the walkthrough
THEN I understand the codebase
```
