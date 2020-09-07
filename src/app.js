const express = require('express');
const init_app = require('./loaders');
const configs = require('./config');

const app = express();
const PORT = configs.SERVER_PORT;


init_app(app);


app.listen(PORT, () => {
    console.log(`start the server at ${PORT}`);
});

