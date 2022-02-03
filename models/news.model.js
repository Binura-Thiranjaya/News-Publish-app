const mongoose =require("mongoose");

const newsSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        auther:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        category:{
            type:String,
            required:true,
        },
        isPublished:{
            type:Boolean,
            required:false,
            default:false,
        },
        date:{
            type:String,
            required:true,
            default:Date,
        },
    },
    {
        collection:"news",
    }
);
module.exports = mongoose.model("News",newsSchema);