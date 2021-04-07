const router = require('express').Router();
const { BlogPost } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newPostData = {
            title: req.body.title,
            text: req.body.text,
            user_id: req.session.user_id
        }
        const blogPostData = await BlogPost.create(newPostData);
        res.status(200).json(blogPostData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;