const express = require("express");
const router = express.Router();
const photoController = require("../controllers/photoController");

router.route("/").post(photoController.createPhoto);

module.exports = router;
