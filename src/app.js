express = require("express");
config = require("./config");
cors = require("cors");

const app = express();

app.use(cors());
app.set("port", config.port);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = app;
