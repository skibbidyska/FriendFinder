const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const apiRoutes = require('./app/routing/apiRoutes');
const htmlRoutes = require('./app/routing/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/app/public/assets')));

app.listen(PORT, function () {
    console.log(`Listening on port: ${PORT}`);
});


apiRoutes(app);
htmlRoutes(app);
