import http from "node:http";
import { exec } from "node:child_process";

const server = http.createServer((req, res) => {
  const name = new URL(req.url, "http://localhost").searchParams.get("name");
  exec(`echo Hello ${name}`, (err, out) => res.end(out));
});

server.listen(3000, () => console.log("Server running on port 3000"));
