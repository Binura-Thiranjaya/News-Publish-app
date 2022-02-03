const {gql} = require ("apollo-server-express");

const newsTypeDef = gql`
    type News{
        id:ID!
        title:String!
        auther:String!
        description:String!
        category:String!
        isPublished:Boolean!
        date:String!
    }
    input NewsInput{
        title: String!
        auther:String!
        description:String!
        category:String!
        isPublished:Boolean
        date:String!
    }
    type Query{
        getAllNews:[News]
    }
    type Mutation{
        createNews(input:NewsInput!):News
    }

`;
module.exports = newsTypeDef;