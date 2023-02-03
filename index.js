const express = require('express');
const app = express();
const routes = require('./src/routes/routes');
require('dotenv').config()

const port = process.env.PORT || 8000
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`Server running on ${port}`));