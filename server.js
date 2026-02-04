const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS, images) from this folder
app.use(express.static(path.join(__dirname)));

// Simple health check / backend example route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Domain backend is alive.' });
});

// Fallback to index.html for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

