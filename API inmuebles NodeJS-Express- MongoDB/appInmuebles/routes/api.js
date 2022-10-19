const router = require("express").Router();

const apiInmueblesRouter = require("./api/inmuebles");

router.use("/inmuebles", apiInmueblesRouter);

//resto
//de enlaces
//para futuros archivos

//

module.exports = router;
