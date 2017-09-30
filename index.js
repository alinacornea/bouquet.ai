var express = require('express');
var app = express();
var path = require('path');

/* routing app.METHOD(PATH, HANDLER);
* app-instance of express;
* METHOD is the HTTP request method, in lowercase.
* PATH is a path on the server.
* HANDLER is the function executed when the route is matched.
*/
app.set('port', (process.env.PORT || 3000));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname +'/index.html'));
});

app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!')
});
