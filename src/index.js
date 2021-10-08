app = require("./app");

const server = app.listen(app.get("port"), () => {
  console.log("Server run in port:", app.get("port"));
});

exports.module = server;
