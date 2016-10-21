var http = require('http');

http.createServer(function (rq,rs) {
	throw new Error('Esta excepción se capturará');
}).listen(3000);
