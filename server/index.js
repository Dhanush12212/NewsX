import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());


app.get('/api/news', async (req, res) => {
  try {
    const country = req.query.country || 'us';
    const category = req.query.category || 'general';
    const page = req.query.page || 1;
    const pageSize = req.query.pageSize || 10;

    const apiKey = process.env.NEWS_API_KEY;

    console.log("Making request to NewsAPI with key:", apiKey ? " key exists" : " key missing");

    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      console.error(" NewsAPI returned error:", data);
      return res.status(response.status).json({ error: data.message || 'Error fetching news' });
    }

    res.json(data);
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
