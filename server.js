const express = require('express');
const PORT = process.env.PORT || 5000;
const history = require('connect-history-api-fallback');

express()
    .use(
        history({
            // verbose: true
        })
    )
    .use(express.static(__dirname + "/dist"))
    .listen(PORT, () => console.log(`Listening on ${PORT}`));