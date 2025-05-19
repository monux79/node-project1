const express = require('express');
const ip = require('ip');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`Your local IP address is: ${ip.address()}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
