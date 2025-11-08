const mongoose = require("mongoose");

const todoSchema = new mongoose.schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50,
        },
         description: {
            type:String,
            required:true,
            maxLength:50,
         },
         createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
         }
    }
);

moldule.exports = mongoose. model("Todo",todoSchema);