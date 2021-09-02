/* eslint no-unused-vars: ["off", {"args": "after-used"}] */

const PostRepo = require('./repositories/PostRepo');
const loginUser = require('./usecases/user/LoginUser');
const registerUser = require('./usecases/user/RegisterUser');

const resolvers = {
  Query: {
    getAllPosts: async (_parent, _args, _context, _info) => PostRepo.getAllPosts(),
    getPost: async (_parent, args, _context, _info) => PostRepo.getPost(args.id),
  },
  Mutation: {
    registerUser: async (_parent, args, _context, _info) => registerUser(args.dto),
    loginUser: async (_parent, args, _context, _info) => loginUser(args.dto),
    createPost: async (_parent, args, _context, _info) => PostRepo.createPost(args.post),
    deletePost: async (_parent, args, _context, _info) => PostRepo.deletePost(args.id),
    updatePost: async (_parent, args, _context, _info) => PostRepo.updatePost(args.id, args.post),
  },
};

module.exports = resolvers;
