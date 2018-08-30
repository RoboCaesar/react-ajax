const axios = require('axios');


export function basicPing() {
  axios.get('/sayhello')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error)
  })
  .then(() => {

  });
}
