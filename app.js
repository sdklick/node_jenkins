const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const name = req.query.name;
  res.send(`sumanta Compose CI/CD Working by ${name}🚀`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});