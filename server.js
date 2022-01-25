const express = require('express');
const path = require('path');
// const history = require('connect-history-api-fallback');

const app = express();
const port = process.env.PORT || 8080;
// const root = `${__dirname}/public`
// app.use(history());

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'css')));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
// app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(port);
console.log('Server started at http://localhost:' + port);