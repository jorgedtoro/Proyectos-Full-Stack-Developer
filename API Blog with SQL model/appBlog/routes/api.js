const router = require("express").Router();

const apiAuthorsRouter = require("./api/authors");
const apiPostsRouter = require("./api/posts");

//delegamos las peticiones con /api/authors
router.use("/authors", apiAuthorsRouter);
//delegamos las peticiones con /api/posts
router.use("/posts", apiPostsRouter);

module.exports = router;
