const mongoose = require ("mongooose");

require("dotenv").config();

// Database connection function

const dbConnect = () => {
    mongoose.connect(process.env.Database_URL,{
        useNewParser:true,
        useUnifiedTopology:true,
    })
    .then(() => console.log("DB ka connection is successful"))
    .catch( (error) => {
        console.log("DB connection is failed");
        console.log(error.message);

        // Exit process with failure

        process.exit(1);

    });
}

module.exports = dbConnect
