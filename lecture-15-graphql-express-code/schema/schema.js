const { response } = require("express");
const graphql = require("graphql");
const axios = require("axios").default;
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLInt,
} = graphql;

// const HelloWorldType = new GraphQLObjectType({
//   name: "HelloWorld",
//   description: "Just greeting the user",
//   fields: {
//     greet: {
//       type: GraphQLString,
//       resolve(parentValue, args) {
//         return "Hello geeks";
//       },
//     },
//   },
// });

const ProductsType = new GraphQLObjectType({
  name: "Products",
  description: "List of all products",
  fields: {
    id: { type: GraphQLInt },
    category: { type: GraphQLString },
    image: { type: GraphQLString },
    price: { type: GraphQLString },
    title: { type: GraphQLString },
  },
});

const UserType = new GraphQLObjectType({
  name: "Users",
  description: "List of users",
  fields: {
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    age: { type: GraphQLString },
  },
});

const RootQueryType = new GraphQLObjectType({
  name: "Geeks",
  fields: {
    greetings: {
      type: GraphQLString,
      resolve(parentValue, args) {
        return "Hello Sumit";
      },
    },
    products: {
      type: new GraphQLList(ProductsType),
      resolve(parentValue, args) {
        return axios
          .get("https://fakestoreapi.com/products/")
          .then((response) => response.data);
      },
    },
    Users: {
      type: new GraphQLList(UserType),
      resolve(parentValue, args) {
        return axios
          .get("http://localhost:3000/users")
          .then((response) => response.data);
      },
    },
  },
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        id: { type: GraphQLInt },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
      },
      resolve(parentValue, { id, firstName, age }) {
        return axios
          .post("http://localhost:3000/users", { id, firstName, age })
          .then((response) => response.data);
      },
    },
    updateUser: {
      type: UserType,
      args: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
      },
      resolve(parentValue, { id, name }) {
        return axios
          .patch(`http://localhost:3000/users/${id}`, { firstName: name })
          .then((response) => response.data);
      },
    },
    updateUserUsingPut: {
      type: UserType,
      args: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
      },
      resolve(parentValue, { id, name }) {
        return axios
          .put(`http://localhost:3000/users/${id}`, { firstName: name })
          .then((response) => response.data);
      },
    },
    deleteUser: {
      type: UserType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve(parentValue, { id }) {
        return axios
          .delete(`http://localhost:3000/users/${id}`)
          .then((response) => response.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation,
});

// RootQuery - routes REST world
// schema - controllers
// resolvers - services

// query = GET
// mutation = POST,PUT,DELETE,PATCH
// subscription not part of course - Polling and websockets
