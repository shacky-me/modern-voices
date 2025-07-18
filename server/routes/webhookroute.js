const express = require("express");
const { clerkWebhook } = require("../controllers/webhookController");
const bodyParser = require("body-parser");
const router = express.Router();

router.post(
  "/clerk",
  bodyParser.raw({ type: "application/json" }),
  clerkWebhook
);

module.exports = router;
