const express = require("express");
const auth = require("json-server-auth");
const jsonServer = require("json-server");
const http = require("http");

const app = express();

const server = http.createServer(app);

const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();

const rules = auth.rewriter({
  user: 640,
  categories: 660,
  tags: 660,
  posts: 660,
  comments: 660,
  likeDislike: 660,
});

app.use(middlewares);
app.use(rules);
app.use(auth);
app.use(router);

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
