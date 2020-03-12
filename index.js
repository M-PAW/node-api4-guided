const server = require('./api/server.js');

// Make the port be assigned by the server
// heroku will plae the .PORT environment value to their server
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});


