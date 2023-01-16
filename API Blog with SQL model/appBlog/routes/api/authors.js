const router = require("express").Router();
const { checkSchema } = require("express-validator");
const { newAuthor, checkError } = require("../../helpers/validators");
//CRUD
const {
  getAll,
  getById,
  create,
  update,
  deleteById,
} = require("../../models/author");

//GET http://localhost:3000/api/authors
router.get("/", async (req, res) => {
  try {
    const rows = await getAll();
    res.json(rows);
  } catch (error) {
    res.json({ error: error.message });
  }
});

//GET author by id

router.get("/:idAuthor", async (req, res) => {
  try {
    const { idAuthor } = req.params;
    const author = await getById(idAuthor);
    res.json(author);
  } catch (error) {
    res.json({ error: error.message });
  }
});

//POST http://localhost:3000/api/authors
//POST with validators
router.post("/", checkSchema(newAuthor), checkError, async (req, res) => {
  try {
    const result = await create(req.body);
    res.json(result);
  } catch (error) {
    res.json({ error: error.message });
  }
});

//PUT http://localhost:3000/api/authors/idAuthor
router.put("/:idAuthor", async (req, res) => {
  try {
    const result = await update(req.params.idAuthor, req.body);
    res.json(result);
  } catch (error) {
    res.json({ error: error.message });
  }
});

//DELETE http://localhost:3000/api/authors/idAuthor
router.delete("/:idAuthor", async (req, res) => {
  try {
    const result = await deleteById(req.params.idAuthor);
    res.json(result);
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = router;
