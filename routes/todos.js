const express = require("express");
const router = express.Router();

//import the controller
const {createTodo}= require("../controllers/createTodo");
const {getTodo,getTodobyId}= require("../controllers/getTodo");

//define API routes
router.post("/createTodo", createTodo); 
router.get("/getTodos",getTodo);  
router.get("/getTodos/:id",getTodobyId)
module.exports = router;