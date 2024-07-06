import { timeStamp } from 'console';
import mongoose, { Schema } from "mongoose";

const dataSchema = new Schema({
name :{
    type : String,
    required :true,
    trim : true

},
email : {
   type :  String,
    trim : true , 
    required : true,
    unique : true,
    lowercase : true
},
password : {
    type : String,
    required : true,
    trim : true , 
},
role : {
    type : Number ,
    default : 0  // 0  mwans user : 1 means admin
}
 
},{timeStamp:true})

const User = mongoose.model("User", dataSchema);

export default User;
