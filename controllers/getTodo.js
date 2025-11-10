  //import the model
  const Todo =require("../models/Todo");
  
  //define route handler
  
  exports.getTodo = async (req,res) => {
      try{
          //fetch all todo entries from database
          const todo =await Todo.find({});

          //response with json data
          res.status(200)
          .json({
            success:true,
            data:todo,
            message:"Entire rodo data is featched successfully",
      })
    }
      catch(err){
          console.log(err);
          res.status(500)
          .json({
            success:false,
            error:err.message,
            message:"server error"
           })
  
      }
  }

  exports.getTodobyId = async (req,res) =>{
    try{
        //extract todo item on the basis of id
        const id= req.params.id;
        const todo = await Todo.findById({_id:id});

        //data forgiven id not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"no data found woth given id"
            })
        }

        //data for given id found
        res.status(200).json({
            success:true,
            data:todo,
            message:"Todo ${id} data successfully faetched",
        })
    
 
    }
    catch(err) {
          console.log(err);
          res.ststus(500)
          .json({
            success:false,
            error:err.message,
            message:"server error"
           })
  
      }
  }
