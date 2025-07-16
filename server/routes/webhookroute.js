const express = require("express");
const { clerkWebhook } = require("../controllers/webhookController");
const router = express.Router();

router.post("/clerk", clerkWebhook);

module.exports = router;
