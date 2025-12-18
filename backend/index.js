import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;
const BASE_URL = "https://api.animechan.io/v1";
app.use(cors({
  origin: "https://anime-quote-generator-pi.vercel.app/"
}));

app.get("/quote", async (req, res) => {
  try {
    const response = await fetch(`${BASE_URL}/quotes/random`);
    const quote = await response.json();
    res.json(quote);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
