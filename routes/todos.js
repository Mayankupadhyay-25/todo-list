const express = require("express");
const router = express.Router();

//import the controller
const {createTodo} = require("../controllers/createTodo");
const {getTodo,getTodobyId}= require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo");

//define API routes
router.post("/todos", createTodo); 
router.get("/todos", getTodo);  
router.get("/todos/:id", getTodobyId);
router.put("/todos/:id", updateTodo);

module.exports = router;