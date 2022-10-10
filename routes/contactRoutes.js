const express = require("express");

const upload = require("../config/multerConfig");
const contactController = require("../controllers/contactController");

const router = express.Router();

router.post("/add", upload.single("image"), contactController.addContact);
router.get("/list", contactController.listContact);
router.post("/get-by-id", contactController.getById);

module.exports = router;
