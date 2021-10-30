const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);

app.listen(3002, () => {
  console.log(`server started listening`);
});
