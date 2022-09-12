const express = require("express");
const router = express.Router();
//Import Books Data fom book controller
const bookController = require("../controllers/book-controller");
//Set the router path
router.get("/", bookController.getAllBooks);
router.post("/", bookController.addbook);
router.get("/:id", bookController.getById);
//export from app.js
module.exports = router;
