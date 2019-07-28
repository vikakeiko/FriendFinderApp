const express = require("express");

var app = express();

var PORT = process.env.PORT || 9090;

app.use(express.urlencoded({ extended: true })); //uses QS
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
