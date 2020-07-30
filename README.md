# Passport: a demo 
Sequelize Homework: Reverse Engineering Code
This is a demo of using the npm package 'Passport' to add authentication to any website

# Table of contents
1. [User Story](#User_Story)
2. [Live Demo](#Live_Demo)
3. [Code Base](#Code_Base)
4. [Features](#Features)
5. [Technologies](#Technologies)
6. [Business Context](#Business_Context)
7. [Credits](#Credits)


<a name="User_Story"></a>
## User Story
```
AS A developer

I WANT a walk-through of the codebase

SO THAT I can use it as a starting point for a new project
```

<a name="Live_Demo"></a>
## Live Demo

[![IMAGE ALT TEXT HERE](demo.jpg)](https://www.youtube.com/embed/6SFcKODuEXs)



<a name="Code_Base"></a>
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

### Config/config.json
- Includes 3 objects of DB credentials for the 3 different environments

### Config/middleware/isAuthenticated.js
- middlwear that checks to see if the user object exists on the request object, so we know if the user has logged in or not.

### Models
#### Models/index.js

- Here we create our Sequelize instance - which is our DB ORM.  We use the Node file system methods to get all the names of the js files in the models folder and create an associated Sequelize databse model with each of those files.  In this case we only have one other file in this folder, which is called User.js

#### Models/user.js
- This is the model for the User data that we store in the database.  There are basically just two fields, email address and password.  Here we create a couple of extra helper methods. We add a "Hook" method that will execute before the user data gets stored as a record in the database.  It uses the npm package 'Bcrypt' to create a hash using the users password and a salt value of 10 so that we can store a hash string in the database instead of the actual password string.  We have another helper method "ValidatePassword" which again uses bcrypt to compare the password the user enters in the login form against the hash we have stored in our database to see if they match.  If they do it will pass the user object along the request.

### Public/js
#### Public/js/signup.js
This is client side javascript that takes the data that the user enters into the form input fields and creates a ajax put request to send that data to our server's /api/signup route.

#### Public/js/login.js
This is client side javascript that takes the data that the user enters into the form input fields and creates a ajax put request to send that data to our server's /api/login route.

### Routes
#### Routes/api-routes.js
Here we handle all of our api routes, including the post requests to api/login and api/signup.  api/login uses passport to authenticate the user, and api/signup uses Sequelize to add a new User Object to our database.

#### Routes/html-routes.js
Here we handle all of the user-facing public html routes - checking the request object to see if we have a user object, which means the user has logged in.  If they are logged in, they get redirected to the members page, otherwise they get sent back to the root route.



<a name="Features"></a>
## Features
1)  Basic User Authentication
2)  Includes email address, password
3)  Passes user object in the request object

<a name="Technologies"></a>
## Technologies
1) Node.js
2) Passport
3) Express 
4) Express-Session
5) mysql
6) Sequelize
7) bcrypt


<a name="Business_Context"></a>
## Business Context
When joining a new team, you will be expected to inspect a lot of code that you have never seen before. Rather than having a team member explain every line for you, you will dissect the code by yourself, saving any questions for a member of your team.

<a name="Acceptance_Criteria"></a>
## Acceptance Critera
```md
GIVEN a Node.js application using Sequelize and Passport
WHEN I follow the walkthrough
THEN I understand the codebase
```

<a name="Credits"></a>

**on github:** <a href='github.com/b0rgBart3'>b0rgBart3</a>

[![](https://github.com/b0rgBart3.png?size=90)](https://github.com/remarkablemark)

Email: borgBart3@gmail.com
