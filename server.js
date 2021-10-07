const express = require("express");
require("dotenv").config();
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

const port = process.env.PORT || 8082;

// Use Routes & Mount router on the app
app.use("/api/books", router);

// Build for Heroku
if (process.env.NODE_ENV == "PRODUCTION") {
  app.use(
    express.static(path.resolve(__dirname, "./frontend/mern-frontend/build"))
  );

  // Step 2:
  app.get("*", function (request, response) {
    response.sendFile(
      path.resolve(__dirname, "./frontend/mern-frontend/build", "index.html")
    );
  });
} else {
  app.get("/", (req, res) => res.send("Hello World!"));
}



app.listen(port, () => console.log(`Server running on port ${port}`));
