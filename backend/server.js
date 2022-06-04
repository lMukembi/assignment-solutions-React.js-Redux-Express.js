const mysql = require("mysql");
const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:9000",
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
require("./db");
// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "connected to MySql database!" });
// });
// require("./mysql/routes/auth.routes")(app);
// require("./mysql/routes/user.routes")(app);
// // set port, listen for requests
// const PORT = process.env.PORT || 9000;
// app.listen(PORT, () => {
//   console.log(`listening to port ${PORT}`);
// });

// app.use("/comments", require("./controllers/comments"));
// app.use("/users", require("./controllers/users"));

// // Connect to MySQL on start
// db.connect(db.MODE_PRODUCTION, function (err) {
//   if (err) {
//     console.log("connected to MySql database!");
//     process.exit(1);
//   } else {
//     app.listen(3000, function () {
//       console.log("Listening on port 9000");
//     });
//   }
// });
