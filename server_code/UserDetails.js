const mongoose =require('mongoose')

const UserDetailsScema = new mongoose.Schema(
    {
        f_name:String,
        l_name:String,
        mail:{type:String,unique:true},
        password:String,
    },
    {
        collection:'UserInfo'
    }
);

mongoose.model("UserInfo",UserDetailsScema)