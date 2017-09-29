const { send } = require('micro')
var Highcharts = require('highcharts');

const url = require('url');
const request = require('request');

module.exports = function (req, res) {
  const { pathname } = url.parse(request.url)
  console.log(pathname)
  send(res, 200, 'Hello World! 👋')
}

// /* routing app.METHOD(PATH, HANDLER);
// * app-instance of express;
// * METHOD is the HTTP request method, in lowercase.
// * PATH is a path on the server.
// * HANDLER is the function executed when the route is matched.
// */
// app.get('/',function(req,res){
//   res.sendFile(path.join(__dirname +'/index.html'));
//   //__dirname : It will resolve to your project folder.
// });
//
//
// /*
// * start the server
// *
// */
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// });
