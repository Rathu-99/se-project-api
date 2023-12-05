const router = require("express").Router();
const { deleteUser, getUser, createDonator } = require("../controllers/userController");

router.delete("/:id", deleteUser);
router.get("/:id", getUser);
router.post("/createDonator", createDonator);

module.exports = router;
