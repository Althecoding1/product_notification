import express from 'express';
import fetch from 'fetch';
const PORT = 3000;
const app = express();

app.get('/', (req, res) => {

  fetch("https://dallas.craigslist.org/search/sss?query=computers&sort=rel").then( response => {
    console.log(response);
  });
});

const server = app.listen(PORT, () => {
  const { address, port } = server.address();
  console.log(`Listening on port: ${port} at address: ${address}`);
});
