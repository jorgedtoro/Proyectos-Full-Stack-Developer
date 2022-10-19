const router = require("express").Router();

//importamos el modelo
const Inmueble = require("../../models/inmueble.model");

//acciones CRUD

router.get("/", (req, res) => {
  Inmueble.find()
    .then((inmuebles) => res.json(inmuebles))
    .catch((err) => res.json({ error: err.message }));
});

router.post("/", (req, res) => {
  Inmueble.create(req.body)
    .then((inmueble) => res.json(inmueble))
    .catch((err) => res.json({ error: err.message }));
});

router.put("/:inmuebleId", (req, res) => {
  Inmueble.findByIdAndUpdate(req.params.inmuebleId, req.body, { new: true })
    .then((inmueble) => res.json(inmueble))
    .catch((err) => res.json({ error: err.message }));
});

router.delete("/:inmuebleId", (req, res) => {
  Inmueble.findByIdAndDelete(req.params.inmuebleId)
    .then((inmueble) => {
      res.json(inmueble);
    })
    .catch((err) => res.json({ error: err.message }));
});
module.exports = router;
