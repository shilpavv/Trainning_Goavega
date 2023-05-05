const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const expressValidator = require("express-validator");
const { body, validationResult } = require("express-validator");
const flash = require("connect-flash");
const expressMessages = require("express-messages");
const config=require("./config/database");
const passport=require('passport')
const connectDB = async () => {
  const conn = await mongoose.connect(config.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB Connected: ${conn.connection.host}`);
};
connectDB();

//init App
const app = express();

//Bring models
let Article = require("./models/article");

//Load View Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//Body Parser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//Set Public Folder
app.use(express.static(path.join(__dirname, "public")));

//Express Session Middleware
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
  })
);

//Express Messages Middleware
app.use(require("connect-flash")());
app.use(function (req, res, next) {
  res.locals.messages = require("express-messages")(req, res);
  next();
});

//Express Validation Middleware
app.use(expressValidator({
  errorFormatter: function (param, msg, value) {
    var namespace = param.split('.')
      , root = namespace.shift()
      , formParam = root;
    while (namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));
// Passport Config
require('./config/passport')(passport);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('*', function(req, res, next) {
  res.locals.user = req.user || null;
  next();
});


//Home Route
async function getItems() {
  const Items = await Article.find({});
  return Items;
}
app.get("/", function (req, res) {
  getItems().then(function (articles) {
    // console.log("articles",articles)
    res.render("index", { title: "Article List", articles: articles });
  });
});

//Route files
let  articles=require('./routes/articles')
let  users=require('./routes/users')

app.use('/articles',articles)
app.use('/users',users)
//Start Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`the server is running in  ${PORT}`);
});
