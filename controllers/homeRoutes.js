const router = require("express").Router();
const { User, BlogPost } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const blogpostsData = await BlogPost.findAll({
      include: [{ model: User }]
    });
    if (blogpostsData) {
      blogposts = blogpostsData.map(r => r.dataValues);
      blogposts.forEach(element => {
        element.user = element.user.dataValues;
        // --------------------- Date time
        const day = element.createdAt.getDate() + '';
        const month = (element.createdAt.getMonth()) + '';
        const year = element.createdAt.getFullYear() + '';
        element.createdAt = `${month}/${day}/${year}`
        delete element.user.password;
      });
    }
    res.render("homepage", {
      logged_in: req.session.logged_in,
      blogposts
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });

    const user = userData.get({ plain: true });
    res.render("dashboard", {
      ...user,
      logged_in: true,
    });
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
