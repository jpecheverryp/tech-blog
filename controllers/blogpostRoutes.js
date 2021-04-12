const router = require('express').Router();
const { User, BlogPost } = require('../models');
const withAuth = require("../utils/auth");

router.get('/:id', withAuth, async (req, res) => {
    try {
        const blogpostsData = await BlogPost.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: {
                        exclude: ['password']
                    }
                }],

        });
        if (blogpostsData === null) {
            res.status(404).send('Post not found')
        }
        res.status(200).json(blogpostsData)
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;