const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from web-service-js' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
