import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url)); // 'dirname' 'fileURLToPath' used for finding the directory of the local file; means it doesn't have to type out the whole path name

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});