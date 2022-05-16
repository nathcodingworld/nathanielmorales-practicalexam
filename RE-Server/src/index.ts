import express from "express";
import mongoose from "mongoose";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./Apollo/typeDefs";
import resolvers from "./Apollo/resolvers";
import cors from "cors";
import auth from "./Auth/Auth";
import "dotenv/config";
import bodyParser from "body-parser";
import http from "http";

const port = process.env.PORT || 5000;
const Database = process.env.DATABASE || "mongodb://localhost:27017";

const app = express();
const server = http.createServer(app);
const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req, res }),
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(auth);

server.listen(port, () => {
  console.log(`listening at port ${port}`);
  mongoose.connect(Database, (err) => {
    if (err) console.log(`can't connect to database`);
    else {
      console.log(`connected to database`);
      (async () => {
        await apollo.start();
        apollo.applyMiddleware({ app });
        console.log("apollo aplied");
      })();
    }
  });
});
