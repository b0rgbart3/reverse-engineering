# Sequelize Homework: Reverse Engineering Code

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
Our App starts in the server.js file.  We are using Express as the server middlewear.  We will use Passport and Session to create a persistent login session so we can store data related to the user's experience.  We are allowing the port number to be defined by an environment variable if it exists, and otherwise we set it to 8080.  We are using Sequelize as our database ORM, and our configuration and models are in the /models directory.   Here we create an instance of the Express server and configure it to use urlencoded data, and json data.  We configure the /public folder to be publicly accessible so we can serve client side HTML, CSS and JS files.
Then we create and initialize our Passport login session.
The configuration details for this are in the /config/passort file.
We add our html and api routes as external files to the server.  Finally, we tell Sequelize to sync our database, and when that finishes, we tell the Express server to listen on the assigned port for requests.

### Config
#### Config/passport
- Include the npm passport package, and the passport-local strategy.
- Include the db which is a Sequelize instance, exported from the /models folder.
- Create a new instance of Passport session, using the local Strategy, asking for email, and password.
- Query our DB using Sequelize to find the user.  Return error messages if the credentials don't match what is stored in our DB.  
- Export this passport instance as "passport".


## Acceptance Critera
```md
GIVEN a Node.js application using Sequelize and Passport
WHEN I follow the walkthrough
THEN I understand the codebase
```
