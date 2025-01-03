require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');

const app = express();
const PORT = 5000 || process.env.PORT;

const path = require('node:path');
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', require('./server/routes/main'));

app.listen(PORT, () => {
  console.log(`Server started on : http://127.0.0.1:${PORT}`);
});
