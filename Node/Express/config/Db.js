import mongoose  from "mongoose";

function dbConnection(){
    mongoose.connect(process.env.db)
    .then(res => console.log("Database Connected"))
    .catch(err => console.log("Databse it's not connected"))
}

export default dbConnection