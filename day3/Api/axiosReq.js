const axios = require("axios");

axios
  .get("https://api.chucknorris.io/jokes/random")
  .then((response) => {
    console.log(response.data.url);
    console.log(response.data.value);
  })
  .catch((error) => {
    console.log(error);
  });
