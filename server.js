const http = require('http');
const port = 8080;

//Handles any HTTP requests
const requestHandler = (request, response) => {
  response.end('Handling a request on port ${port}')
};

//Creates a server & passes in the requestHandler function
const server = http.createServer(requestHandler);

//Starts the server listening on port 8080
server.listen(port, (err) => {
  if (err) {
    return console.log('You have an error: $(err)');
  }

  console.log('server is listening on ${port}');
  
})
