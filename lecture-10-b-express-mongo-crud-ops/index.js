const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dbConfig = require("./dbConfig/dbConfig");
const dotenv = require("dotenv");
const routes = require("./Routes/routes");
const cors = require("cors");
// app.use(express.json());
dotenv.config();
dbConfig.connect(process.env.DATABASE_URL);
app.use(bodyParser.json());
app.use(cors());
routes.userRoutes(app);

// app.get("/", (req, res) => {
//   console.log("In default route");
//   res.send("Server started successfully");
// });

// app.get(
//   "/protected",
//   auth,
//   (req, res, next) => {
//     console.log("new route");
//     next();
//     res.send("Able to access protected route");
//   },
//   logger
// );

// function auth(req, res, next) {
//   console.log(req.query);
//   if (req.query.isLoggedIn === "true") {
//     next();
//   } else {
//     res.send("Not authenticated");
//   }
// }

// function logger(req, res, next) {
//   console.log("In middleware logger", req.originalUrl);
// }
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server has been started at PORT:${PORT}`);
});
