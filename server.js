const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");
const path = require("path");

// routes
const router = require("./routes/api/books");

const app = express();

// Connect to Database
connectDB();
// cors
app.use(cors({ origin: true, credentials: true }));

// Init middlware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Hello World!"));

// Use Routes & Mount router on the app
app.use("/api/books", router);

const port = process.env.PORT || 8082;

// Build for Heroku
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(port, () => console.log(`Server running on port ${port}`));
