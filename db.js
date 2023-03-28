const mongoose = require("mongoose");
var mongoUrl= 'mongodb+srv://rahul4:test123@cluster0.ar70d.mongodb.net/foodie'

mongoose.connect(mongoUrl, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo DB Connection Successfull");
});

db.on("error", () => {
  console.log(`Mongo DB Connection failed`);
});

module.exports = mongoose;
