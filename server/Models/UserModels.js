import mongoose from "mongoose";
//Пользователи
const UserSchema=mongoose.Schema(
    {
        username:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        firstname:{
            type:String,
            required:true
        },
        lastname:{
            type:String,
            required:true
        },
        isAdmin:{
            type:Boolean,
            default:false
        },
        prifilePicture:String,
        coverPicture:String,
        about:String,
        livesin:String,
        worksAt:String,
        relationship:String,
        followersf:[],
        followingf:[]
    },
    {timestamps:true}
)

const UserModel=mongoose.model("Users ",UserSchema);
export default UserModel


