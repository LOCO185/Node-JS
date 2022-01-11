const request = require('request');

request(
    "https://api.chucknorris.io/jokes/random",
    { json: true},
    (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        console.log(body.url);
        console.log(body.value);
    }
);