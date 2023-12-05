const router = require("express").Router();
const { createDonator, getDonator, getDonee, createDonee, createRider, getRider } = require("../controllers/userController");

router.post("/createDonator", createDonator);
router.get("/donator", getDonator);
router.route("/donee").post(createDonee).get(getDonee);
router.route("/rider").post(createRider).get(getRider);

module.exports = router;
