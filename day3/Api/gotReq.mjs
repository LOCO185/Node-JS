const got = require("got");

got("https://api.chucknorris.io/jokes/random")
  .then((response) => {
    console.log(response.body.url);
    console.log(response.body.value);
  })
  .catch((error) => {
    console.log(error.response.body);
  });
