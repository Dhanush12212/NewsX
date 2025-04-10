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

    const apiKey = process.env.NEWS_API_KEY || "6362cac7cc0445e390bbdab03c0f31b4";
    console.log("[DEBUG] API Key:", apiKey);
    console.log("[DEBUG] Query Params:", { country, category, page, pageSize });

    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;
    console.log("[DEBUG] Fetching URL:", url);

    const response = await fetch(url);
    console.log("[DEBUG] Response status:", response.status);

    const data = await response.json();
    console.log("[DEBUG] Response JSON:", data);

    if (!response.ok) {
      console.error("[ERROR] NewsAPI Error:", data);
      return res.status(response.status).json({ error: data.message || 'Error fetching news' });
    }

    res.json(data);
  } catch (error) {
    console.error("[CATCH] Unhandled Exception:", error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});
 

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
