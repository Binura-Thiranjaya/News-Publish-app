const newsModel = require("../models/news.model");

const newsResolvers={
    Query:{
        getAllNews:async(_,args)=>{
            try{
                console.log("GET ALL NEWS");
                return await newsModel.find();
            }catch(error){
                console.error(error);
                throw error;
            }
        },
    },
    Mutation:{
        createNews:async(_,args)=>{
            try{
                console.log("Create News");
                const news = args.input;
                return await newsModel.create(news);
            }catch(error){
                console.error(error);
                throw error;
            }
        },
    },
};
module.exports = newsResolvers;