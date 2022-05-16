const express = require("express");
const { PrixControllers } = require("../controllers/prix.controllers");
const { DateControllers } = require("../controllers/date.controllers");
const router = express.Router();
router.get("/prix", PrixControllers);
router.get("/date", DateControllers);

module.exports = router;
