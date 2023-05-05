const express = require("express");
const router = express.Router();

//Bring  Article models
let Article = require("../models/article");
//User Model
let User = require("../models/user");

//Add Route
router.get("/add", ensureAuthenticated, (req, res) => {
  res.render("add_article", {
    title: "Add Article",
  });
});

//Add submit Post Route
router.post("/add", function (req, res) {
  req.checkBody("title", "Title is required").notEmpty();
  req.checkBody("body", "Body is required").notEmpty();

  //Get Errors
  let errors = req.validationErrors();
  if (errors) {
    res.render("add_article", {
      title: "Add Article",
      errors: errors,
    });
    req.validationErrors(null); // clear the validation errors
  } else {
    const article = new Article({
      title: req.body.title,
      author: req.user._id,
      body: req.body.body,
    });
    article
      .save()
      .then(() => {
        req.flash("success", "Article Added");
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

// Load Edit form
router.get("/edit/:id", ensureAuthenticated, function (req, res) {
  Article.findById(req.params.id)
    .exec()
    .then(function (article) {
      //Avoid direct edit in link
      if (article.author != req.user._id) {
        req.flash("danger", "Not AUthorised");
        res.redirect("/");
      }
      // console.log(article);
      res.render("edit_article", {
        title: "Edit Article",
        article: article,
      });
    });
});
//Update edit  submit
router.post("/edit/:id", async function (req, res) {
  try {
    const { title, author, body } = req.body;
    const query = { _id: req.params.id };
    // console.log("query", query);
    const updatedArticle = await Article.findOneAndUpdate(
      query,
      { $set: { title, author, body } },
      { returnOriginal: false }
    );
    // console.log("updatedArticle", updatedArticle);
    req.flash("success", "Article Updated");
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});
//Get single Article
router.get("/:id", function (req, res) {
  let article; // Declare article variable here

  Article.findById(req.params.id)
    .exec()
    .then(function (result) {
      article = result; // Assign the result to the article variable
      return User.findById(article.author).exec();
    })
    .then(function (user) {
      const authorName = user ? user.name : "Unknown";
      res.render("article", {
        article: article,
        author: authorName,
      });
    })
    .catch(function (err) {
      console.log(err);
      return res.status(500).send(err);
    });
});
//Access Control
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.flash("danger", "please Login");
    res.redirect("/users/login");
  }
}
//Delete Article
router.delete("/:id", async (req, res) => {
  if (!req.user._id) {
    res.status(500).send();
  }
  const query = { _id: req.params.id };
  try {
    const article = await Article.findById(req.params.id);
    if (article.author != req.user._id) {
      res.status(500).send();
    } else {
      // Use the Article model to remove the article
      const result = await Article.deleteOne(query);
      res.send("Success");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Error deleting article");
  }
});

module.exports = router;
