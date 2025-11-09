//import the model
const dbConnect = require("../config/database");
const Todo = require("../models/Todo");

//define route handler

exports.createTodo = async (req,res) => {
    try{
        //extract title and description from request body
        const {title, description} = req.body;
        //create a new todo obj and insert in database
        const response = await Todo.create({title,description});

        //send json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Created successfully'
            }
        );

    }
    catch(error){
        console.error(err);
        console.log(err),
        res.ststus(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })

    }
}
