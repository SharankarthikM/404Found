const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend server is running successfully!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
