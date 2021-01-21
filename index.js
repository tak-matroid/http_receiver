const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/detection', function (req, res) {
    console.log(JSON.stringify(req.body, null, 2));
    res.status(200).send('hello');
});

app.listen(6006, '0.0.0.0', function() {
    let addr = this.address();
    console.log(`listening on ${addr.address}:${addr.port}`);
});
