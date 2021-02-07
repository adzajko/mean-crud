const router = require('express').Router();
const authorRoutes = require('./author.routes');
const postRoutes = require('./posts.routes');


router.use(authorRoutes);
router.use(postRoutes);

router.use('*', (req, res) => {
    res.status(404).send(JSON.stringify('Not Found.'));
})

module.exports = router;