const express = require("express");
const connectDB = require("./lib/connectDB");
const userRouter = require("./routes/userRoute");
const postRouter = require("./routes/postRoute");
const commentRouter = require("./routes/commentRoute");
const webhookRouter = require("./routes/webhookroute");
const { clerkMiddleware, requireAuth } = require("@clerk/express");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(cors(process.env.CLIENT_URL));
app.use(clerkMiddleware());
app.use("/webhooks", webhookRouter);
app.use(express.json());
// app.get('/test', (req, res) => {
//     res.status(200).send('Test endpoint is working!');
//     });

// app.get("/auth-state", (req, res) => {
//   const authState = req.auth();
//   res.json(authState);
// });

// app.get("/protect", (req, res) => {
//   const { userId } = req.auth();
//   if (!userId) {
//     return res.status(401).json("Unauthorized");
//   }
//   res.status(200).json("content");
// });

// app.get("/protect2", requireAuth(), (req, res) => {});

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message || "Something went wrong",
    status: err.status,
    stack: err.stack,
  });
});

app.listen(3000, () => {
  connectDB();
  console.log("Server is running on http://localhost:3000");
});
