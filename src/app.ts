import express from "express";
import swaggerui from "swagger-ui-express";
import { swaggerDocument } from "./swagger";
import compression from "compression";

const dotenv = require("dotenv");
dotenv.config();

const APP_PORT = process.env.APP_PORT;
const APP_URL = process.env.APP_URL || "localhost";
const app = express();
const PORT = process.env.PORT || APP_PORT || 9000;

app.use(compression());

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.use("/api-doc", swaggerui.serve, swaggerui.setup(swaggerDocument));

app.listen(PORT, () => {
  return console.log(`Express is listening at ${APP_URL}:${PORT}`);
});
