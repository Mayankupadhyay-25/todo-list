const mongoose = require("mongoose");

require("dotenv").config();

// Database connection function
const dbConnect = () => {
    mongoose
        .connect(process.env.DATABASE_URL || process.env.Database_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("DB connection is successful"))
        .catch((error) => {
            console.log("DB connection failed");
            console.log(error.message);
            // Exit process with failure
            process.exit(1);
        });
};

module.exports = dbConnect;
