const router = require('express').Router();
const { BlogPost } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newPostData = {
            title: req.body.text,
            text: req.body.title,
            user_id: req.session.user_id
        }
        res.json(newPostData);
        // const blogPostData = await BlogPost.create(req.body);
        // res.status(200).json(blogPostData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;