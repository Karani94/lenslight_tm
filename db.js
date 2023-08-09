const mongoose = require("mongoose");

const db = () => {
  mongoose
    .connect(process.env.DATA_UNI, {
      dbName: "lenslight_tm",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to the DB succesully");
    })
    .catch((err) => {
      console.log(`DB connection err:, ${err}`);
    });
};

module.exports = db;
