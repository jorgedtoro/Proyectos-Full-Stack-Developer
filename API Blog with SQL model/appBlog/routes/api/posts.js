const router = require("express").Router();
const { checkSchema } = require("express-validator");
const { newPost, checkError } = require("../../helpers/validators");
const {
  createPost,
  getAllPosts,
  getPostById,
  getAuthorPosts,
  updatePost,
  deletePost,
} = require("../../models/post");

//CRUD DE POSTS

//get

router.get("/", async (req, res) => {
  try {
    const result = await getAllPosts();
    res.json(result);
  } catch (error) {
    res.json({ error: error.message });
  }
});

//get author's posts
router.get("/autor/:idAuthor", async (req, res) => {
  const { idAuthor } = req.params;

  const posts = await getAuthorPosts(idAuthor);
  if (posts) {
    res.json(posts);
  } else {
    res.json({ error: "posts not found" });
  }
});

//get post by id

router.get("/:idPost", async (req, res) => {
  const { idPost } = req.params;
  const post = await getPostById(idPost);
  if (post) {
    res.json(post);
  } else {
    res.json({ error: "post not found" });
  }
});

//post with validators
router.post("/", checkSchema(newPost), checkError, async (req, res) => {
  try {
    const newPost = await createPost(req.body);
    res.json(newPost);
  } catch (error) {
    res.json({ error: error.message });
  }
});

//put
router.put("/:idPost", async (req, res) => {
  const { idPost } = req.params;
  const newPost = await updatePost(idPost, req.body);
  if (newPost) {
    res.json(newPost);
  } else {
    res.json({ error: "post not found" });
  }
});

//delete

router.delete("/:idPost", async (req, res) => {
  const { idPost } = req.params;
  try {
    const result = await deletePost(idPost);
    res.json(result);
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = router;
