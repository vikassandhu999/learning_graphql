const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Post {
        id : ID
        title : String
        description: String
    }

    type User {
        id: ID
        name: String
        email: String
    }

    type LoginTokens {
        accessToken: String
    }

    type Query {
        ping : String
        getAllPosts: [Post]
        getPost(id : ID): Post
    }

    input PostInput {
        title : String
        description : String
    }

    input RegisterUserInput {
        name: String
        email: String
        password: String
    }

    input LoginUserInput {
        email: String
        password: String
    }

    type Mutation {
        registerUser(dto : RegisterUserInput) : User
        loginUser(dto : LoginUserInput) : LoginTokens
        createPost(post : PostInput) : Post
        deletePost(id : ID) : String
        updatePost(id : ID,post: PostInput) : Post
    }
`;

module.exports = typeDefs;
