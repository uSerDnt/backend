const { default: mongoose } = require("mongoose");
mongoose.set("strictQuery", true); //thay doi
const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connect thanh cong");
  } catch (error) {
    console.log("Database error");
  }
};
module.exports = dbConnect;
