const mongoose = require("mongoose");
const dbConnect = {
  connect: (url) => {
    mongoose
      .connect(url)
      .then((response) => {
        console.log("database connected");
      })
      .catch((err) => {
        console.log("database failed to connect", err);
      });
  },
};

module.exports = dbConnect;
