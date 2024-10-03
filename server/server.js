const express = require("express");
const pg = require("pg");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const db = new pg.Pool({
  connectionString: process.env.DB_CONN_STRING,
});

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Swap Travel Stories API!");
});

// GET endpoint to fetch all reviews
app.get("/reviews", async (req, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM reviews ORDER BY id DESC");
    res.json(rows);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST endpoint to add a new review
app.post("/reviews", async (req, res) => {
  const { name, country, review } = req.body;

  try {
    const { rows } = await db.query(
      "INSERT INTO reviews (name, country, review) VALUES ($1, $2, $3) RETURNING *",
      [name, country, review]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error("Error adding review:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
