const express = require('express');
const connectDB = require('./config/db');
const router = require('./routes/api/books');

const app = express();

// Connect to Database
connectDB();

// Mount router on the app
app.use('/api/books', router);

app.get('/', (req, res) => res.send('Hello World!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));