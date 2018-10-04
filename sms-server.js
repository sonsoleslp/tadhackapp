// content of index.js
const http = require('http')
const https = require('https')
const port = 3000
const { exec } = require('child_process');

const requestHandler = (request, response) => {
	console.log(request.url, ("http://" + request.headers.host +"/sms"),request.method.toLowerCase())
  if ((request.url === ("/" + request.headers.host +"/sms") || request.url === "/sms" ) && request.method.toLowerCase() === "post")  {
  	var options = {
  	  hostname: 'api4.apidaze.io',
  	  port: 443,
  	  path: '/cacb5da2/sms/send',
  	  method: 'POST',
  	  body: "api_secret=cc4fbb351b7f3b981b9b02db63bc0875&number=34667854803&subject=Your+order&body=The+Drone+is+Coming",
  	  headers: {
  	  	"Content-Type":"application/x-www-form-urlencoded"
  	  }
  	};
  	var req = https.request(options, function(res) {
  	  console.log('Status: ' + res.statusCode);
  	  console.log('Headers: ' + JSON.stringify(res.headers));
  	  res.setEncoding('utf8');
  	  res.on('data', function (body) {
  	    console.log('Body: ' + body);
  	  });
  	});
  	req.on('error', function(e) {
  	  console.log('problem with request: ' + e.message);
  	});
  	// write data to request body
  	req.write("api_secret=cc4fbb351b7f3b981b9b02db63bc0875&number=34667854803&subject=Your+order&body=The+Drone+is+Coming");
  	req.end();
  }
  response.end()
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})