const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({ path: "config/.env" });

//connect to database
const connectDatabase = require("./config/database");

connectDatabase();





const server = app.listen(process.env.PORT, () => {
  console.log("Server is runing on Port : " + process.env.PORT);
});


