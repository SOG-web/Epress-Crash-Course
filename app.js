const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const members = require("./db/members");
// const logger = require("./middleware/logger");

const app = express();

const port = process.env.PORT || 3000;

// Init middleware
// app.use(logger);

// Handlebars Middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage route
app.get("/", (req, res) => {
  res.render("index", { title: "Member App", members });
});

// // Set static folder
// app.use(express.static(path.join(__dirname, "public")));

app.use("/api/members", require("./routes/api/members"));

app.listen(port, () => console.log(`app listening on port ${port}!`));
