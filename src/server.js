import http from "node:http";
import { add } from "./app.js";
//  res.end(`VERSION 2 — 2 + 3 = ${add(2, 3)}\n`);

const server = http.createServer((req, res) => {
  res.end(`2 + 3 = ${add(2, 3)}\n`);
});

server.listen(3000, () => console.log("Server running on port 3000"));
