import mongoose from "mongoose";


//Rules for the user to create account etc
const userSchema = new mongoose.Schema({
    username :{
    type: String,
    required: true,
    unique: true
    },
    email :{
    type: String,
    required: true,
    unique: true
    },
    password :{
    type: String,
    required: true
    }
},
{timestamps: true}
)

const User = mongoose.model('User', userSchema)

export default User