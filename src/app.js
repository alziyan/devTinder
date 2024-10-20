const express = require("express");

const app = express();

app.use((req, res) => {
  res.send("Hello alziyan ansari ");
});

app.listen(3000, (req, res) => {
  console.log("Server is running on 3000");
});
