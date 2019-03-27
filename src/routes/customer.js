const express = require ("express");
// Router devuelve objeto de javaScript para guardar rutas y asi reutilizarlas.
const router = express.Router();
const customerController = require("../controllers/customerController");

router.get("/", customerController.list);
router.post("/add",customerController.save);
router.get("/delete/:id", customerController.deleted);
router.get("/update/:id", customerController.edit);

router.post("/update/:id", customerController.update);


module.exports = router;