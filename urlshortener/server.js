const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/shorten', (req, res) => {
  const originalUrl = req.query.url;
  const shortenedUrl = generateShortUrl(originalUrl);
  res.json({ shortUrl: shortenedUrl });
});

function generateShortUrl(originalUrl) {
  // Implement your URL shortening logic here
  // Example: Generating a random short URL
  return 'https://johnmbithi.co.ke/' + Math.random().toString(36).substring(7);
}

const port = 2000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

