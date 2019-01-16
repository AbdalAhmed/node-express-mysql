const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

const bodyParser = require('body-parser');

app.use(bodyParser.json()),
app.use(express.json());
app.listen(port);

var userRoutes = require('./app/routes/userRoutes');
userRoutes(app);
