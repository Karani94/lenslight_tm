const express = require("express");
const app = express();
const dotenv = require("dotenv");
const db = require("./db");
const pageRoute = require("./routes/pageRoute");
const photoRoute = require("./routes/photoRoute");

const port = process.env.PORT || 3000;

dotenv.config();

//connection to the DB
db();

//ejs template engine
app.set("view engine", "ejs");

//static files middleware
app.use(express.static("public"));

app.use("/", pageRoute);
app.use("/photos", photoRoute);
app.use(express.json());

app.listen(port, () => {
  console.log(`Application running on port: ${port}`);
});
