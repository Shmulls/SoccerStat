const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connectToDatabase } = require("./db");
const authRoutes = require("./routes/auth");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// Connect to the database before starting the Express server
connectToDatabase()
  .then((database) => {
    db = database;

    // Set up routes after database connection is established
    app.use("/api/auth", authRoutes(db));

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  });

// Sample route using the database connection
app.get("/test-db", async (req, res) => {
  try {
    // Attempt to ping the database
    await db.command({ ping: 1 });
    res.json({ message: "Successfully connected to MongoDB!" });
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).json({ error: "Failed to connect to the database" });
  }
});
