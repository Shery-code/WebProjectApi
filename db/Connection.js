const mongoose = require("mongoose");

const URI =
  "mongodb+srv://dbuser:dbuser@cluster0.quk3i.mongodb.net/reactdb?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("db connected");
};

module.exports = connectDB;
