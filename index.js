const express = require("express");
const app = express();

//lode config from .env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middlware to parse json request body 
app.use (express.json());

//imports routes for TODO API
const todoRoutes = require("./routes/todos")

//mount the todo API routes
app.use("/api/v1/",todoRoutes);

//start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//connect to database
const dbConnect = require ("./config/database");
dbConnect();

//default route
app.get("/", (req,res) => {
    res.send(`<h1>This is my HOMEPAGE baby</h1>`);
})