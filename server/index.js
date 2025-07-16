const express = require("express");
const connectDB = require("./lib/connectDB");
const userRouter = require("./routes/userRoute");
const postRouter = require("./routes/postRoute");
const commentRouter = require("./routes/commentRoute");
const webhookRouter = require("./routes/webhookroute");

require("dotenv").config();

const app = express();
app.use(express.json());
// app.get('/test', (req, res) => {
//     res.status(200).send('Test endpoint is working!');
//     });

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);
app.use("/webhooks", webhookRouter);

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
