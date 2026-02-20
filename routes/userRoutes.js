const express = require("express");

const router =express.Router();

const{getUsers,createUsers, add, updateUsers} = require("../controllers/userController.js");
const logger = require("../middlewares/logger.js")

router.get("/getusers", logger,getUsers);
router.post("/createusers",createUsers);
router.put("/updateUser",updateUsers);
router.post("/",add);
module.exports = router;