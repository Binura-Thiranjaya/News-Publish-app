/*Import installed library*/
const express=require("express");
const {ApolloServer} =require("apollo-server-express");
const mongoose =require("mongoose");

/*Import Files*/
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers")
const databaseURL=
"mongodb+srv://binura:binura12345@testrun.ntxrf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";



async function startServer(){
    const app =express();
    const apolloServer= new ApolloServer({
        typeDefs:typeDefs,
        resolvers:resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({app:app});
    await mongoose.connect(databaseURL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
    console.log("Mongoose Conected")

    app.listen({port: 4000},()=>
    console.log('http://localhost:4000')
    );
}
startServer();