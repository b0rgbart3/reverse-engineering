// Requiring necessary npm packages
// Express as our server
var express = require("express");
// For saving session data as cookies
var session = require("express-session");
// Requiring passport as we've configured it
// This is authentication middlewear
var passport = require("./config/passport");

// Setting up port and requiring models for syncing
// Use the environment Port value for the live server, otherwise 8080
var PORT = process.env.PORT || 8080;
// Include the data models and the Sequelize configuration
// which handles our db calls based on these data models
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
// provision express to handle JSON data
app.use(express.json());
// Allow public access to the public folder so we can easily serve
// HTML, CSS, and client side JS files
app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));

// Configure Passport
// Initializing our passport middlewear
app.use(passport.initialize());
// using passport to create a session
app.use(passport.session());

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
