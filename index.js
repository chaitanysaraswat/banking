const express = require('express');
const app = express();

const libraryRoutes = require('./routes/library');
const bankRoutes = require('./routes/bank');

app.use(express.json());

app.use('/library', libraryRoutes);
app.use('/bank', bankRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});