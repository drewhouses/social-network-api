const connection = require("../config/connection");
const { User, Reaction, Thought } = require("../models");
// const {???} = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  let userCheck = await connection.db
    .listCollections({ name: "user" })
    .toArray();
  if (userCheck.length) {
    await connection.dropCollection("user");
  }

  // Unsure if reaction check is needed since it is SCHEMA ONLY and not a model
  // let reactionCheck = await connection.db
  //   .listCollections({ name: "reaction" })
  //   .toArray();
  // if (reactionCheck.length) {
  //   await connection.dropCollection("reaction");
  // }

  const Reaction = [];
});
