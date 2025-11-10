 //import the model
const Todo = require("../models/Todo");

//define route handler
exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        // Find the existing todo first
        const existingTodo = await Todo.findById(id);
        
        // Check if todo exists
        if (!existingTodo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found"
            });
        }

        // Update the todo with new: true to get the updated document
        const todo = await Todo.findByIdAndUpdate(
            id,
            {
                title, 
                description, 
                updatedAt: Date.now()
            },
            { new: true, runValidators: true }
        );

        res.status(200).json({
            success: true,
            data: todo,
            message: "Todo updated successfully"
        });
    }
    catch (error) {
        console.error("Error in updateTodo: ", error);
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Server error"
        });
  
      }
  }