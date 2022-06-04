require("dotenv").config({ path: "./config.env" });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", require("./routes/auth"));
// app.use("/api/user", require("./routes/user"));
app.use("/api/post", require("./routes/post"));
// app.use("/api/private", require("./routes/private"));
// app.use("/api/search", require("./routes/search"));
// app.use("/api/message", require("./routes/message"));

const mongoDB = "mongodb://127.0.0.1/assignment";
mongoose.connect(
  mongoDB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  },
  (err) => {
    if (err) console.error(err);
    console.log("connected to MongoDB database!");
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const index = app.listen(8000, () => console.log("listening to port 8000"));

process.on("unhandledRejection", (error) => {
  console.log(`Logged Error: ${error}`);
  index.close(() => process.exit(1));
});
