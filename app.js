const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

// Routes
const indexRoute = require('./routes/index');
const userRoute = require('./routes/user');

app.use('/', indexRoute);
app.use('/user', userRoute);

// Server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
