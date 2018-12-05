/*
*  Home assignment #1
*
*/
// Dependencies
var http = require('http');
var url = require('url');
// Create HTTP server
var httpServer = http.createServer(function(req, res){
	// Get the URL and parse it
	var parsedUrl = url.parse(req.url, true);
	// Get the path
	var path = parsedUrl.pathname;
	var trimmedPath = path.replace(/^\/+|\/+$/g, '');
	// Get the http method
	var method = req.method.toLowerCase();
	// Check for assignment conditions
	if (method=='post'&& trimmedPath=='hello'){
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify({'You are here:':'Hello page'}));
	} else {
		res.end();
	}
});
// Start the HTTP server
httpServer.listen(2222, function(){
	console.log("The server is listening on port 2222");
});

