const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let dateObj = new Date();

  response.send(
    `${dateObj.getDate()}-${dateObj.getMonth() + 1}-${dateObj.getFullYear()}`
  );
});
app.listen(3000);
module.exports = app;
