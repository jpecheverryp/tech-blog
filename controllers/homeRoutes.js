const router = require("express").Router();
const { User, BlogPost } = require("../models");
const withAuth = require("../utils/auth");
const blogPostParser = require("../utils/blogPostParser")

router.get("/", async (req, res) => {
  try {
    const blogpostsData = await BlogPost.findAll({
      include: [{ model: User }],
      attributes: { exclude: ['password'] }
    });
    if (blogpostsData) {
      const blogposts = blogPostParser(blogpostsData);
      res.render("homepage", {
        logged_in: req.session.logged_in,
        blogposts,
        allowSelectPosts: true
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    let username = await User.findByPk(req.session.user_id);
    username = username.dataValues.username;
    const blogpostsData = await BlogPost.findAll({
      where: {
        user_id: req.session.user_id
      },
      include: [{ model: User }],
      attributes: {exclude: ['password']},
    });
    if(blogpostsData) {
      const blogposts = blogPostParser(blogpostsData);
      res.render("dashboard", {
        logged_in: req.session.logged_in,
        blogposts,
        isDashboard: true,
        username,
        allowSelectPosts: true
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

module.exports = router;
