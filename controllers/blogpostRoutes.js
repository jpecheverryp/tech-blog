const router = require('express').Router();
const { User, BlogPost } = require('../models');
const withAuth = require("../utils/auth");
const blogPostParser = require("../utils/blogPostParser")

router.get('/:id', withAuth, async (req, res) => {
    try {
        let blogpostData = await BlogPost.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: {
                        exclude: ['password']
                    }
                }],

        });
        if (blogpostData) {
            blogpostData = [blogpostData]
            const blogposts = blogPostParser(blogpostData);
            console.log('IM HERE ------========---------');
            console.log(blogposts);
            res.render("singlepost", {
              logged_in: req.session.logged_in,
              blogposts
            });
          };
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;