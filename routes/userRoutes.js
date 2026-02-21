const express = require("express");

const router =express.Router();

const{getUsers,createUsers, deleteUsers} = require("../controllers/userController.js");
const logger = require("../middlewares/logger.js")

router.get("/getusers", logger,getUsers);
router.post("/createusers",createUsers);
router.delete("/delete/:id", deleteUsers);
module.exports = router;