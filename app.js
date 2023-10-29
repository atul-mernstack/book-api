const express=require("express");
const app=express();

const book=require("./routes/bookRoutes");


//configure dot env
const dotenv = require("dotenv");
dotenv.config({ path: "config/.env" });


app.use(express.json());



app.use("/api/v1", book);



module.exports = app;
