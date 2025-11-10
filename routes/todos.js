const express = require("express");
const router = express.Router();

//import the controller
const {createTodo} = require("../controllers/createTodo");
const {getTodo,getTodobyId}= require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");

//define API routes
router.post("/todos", createTodo); 
router.get("/todos", getTodo);  
router.get("/todos/:id", getTodobyId);
router.put("/todos/:id", updateTodo);
router.delete("/todos/:id", deleteTodo);

module.exports = router;