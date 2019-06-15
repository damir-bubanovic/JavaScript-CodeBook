/*

!!ULTRA - APIs - CREATING A RESTFUL API WITH RESTIFY!!

> You want to create a RESTful web service, but it doesn’t need to provide a browserfriendly
interface


Create-Read-Update-Delete (CRUD) of an API:
	• GET: Get the data
	• POST: Create new data
	• PUT: Update data
	• DEL: Remove data

*/

/*
SOLUTION:
> The Restify Node module is ideal for creating a service that needs to support a REST
API, but without having to fuss with templates and other frontend devices
+) Once installed, using Restify is as easy as setting up a server, and routing requests
*/
+)
var restify = require('restify');

var server = restify.createServer({name: 'Examples'});
server.use(restify.bodyParser());

server.get('/api/get/:widget', function retrieve(req, res, next) {
	res.send('data is ' + req.params.widget);
	next();
});

server.post('/api/post/', function create(req, res, next) {
	console.log(req.params);
	res.send('created widget ' + req.params.param1);
	return next();
});

server.listen(8080, function() {
	console.log('%s listening at %s', server.name, server.url);
});


/*
EXAMPLE:
+) A complete though small RESTful API to manage widgets
*/
+)
var restify = require('restify');
var widget = require('save')('widget');

var server = restify.createServer({name: 'Examples'});
server.use(restify.fullResponse());
server.use(restify.bodyParser());

// GET
server.get('/api/:widget', function retrieve(req, res, next) {
	widget.findOne({_id: req.params.widget}, function (err, obj) {
		
		if (err) {
			return next (
			new restify.InvalidArgumentError(JSON.stringify(error.errors)));
		}
		
		if (obj) {
			res.send(200,obj);
		} else {
			res.send(404);
		}
		return next();
	});
});

// POST
server.post('/api/create', function create(req, res, next) {
	widget.create(req.params, function (err,widget) {
		console.log(widget);
		res.send(201, widget._id);
	});
	return next();
});

// PUT
server.put('/api/:id', function(req, res, next) {
	
	if (req.params.cost === undefined) {
		return next(new
		restify.InvalidArgumentError('cost must be supplied'));
	}
	
	widget.update({_id: req.params.id, name: req.params.name, cost: req.params.cost}, function (error, obj) {
		if (error) {
			return next(new restify.InvalidArgumentError(JSON.stringify(error.errors)));
		}
		res.send(200);
		return next();
	});
});

server.del('/api/:id', function (req, res, next) {
	widget.delete(req.params.id, function(err) {
		if (err) {
			console.log(err);
			return next (new restify.ResourceNotFoundError(JSON.stringify(err.errors)));
		}
	});
	res.send(200);
	return next();
});

server.listen(8080, function() {
	console.log('%s listening at %s', server.name, server.url);
});


/*
EXAMPLE:
+) Testing a RESTful API using the Restify client API
*/
+)
var restify = require('restify');
var assert = require('assert');

var client = restify.createStringClient({
	url: 'http://examples.burningbird.net:8080'
});

function handleError(err) {
	console.log(err);
	process.exit(1);
}


// POST
client.post('/api/create', {name: 'super gidget', cost: '12.35'},
function(err, req, res, data) {
	if(err) {
		return handleError(err);
	}
	
	if (res.statusCode == '201') {
		console.log('POST id ' + data);
		
		// GET
		var id = data;
		client.get('/api/' + id, function (err, req, res, data) {
			
			if(err) {
				return handleError(err);
			}
			
			if(res.statusCode == '200') {
				console.log(data);
				
				// PUT
				client.put('/api/' + id, {name: 'super gidget', cost: '15,76'},
				function(err, req, res, data) {
					if(err) {
						return handleError(err);
					}					
					console.log('PUT ' + res.statusCode);
					
					// DEL
					client.del('/api/' + id, function(err, req, res) {
						if(err) {
							return handleError(err);
						}
						console.log('DEL ' + res.statusCode);
						process.exit(1);
					});
				});
			}
		});
	}
});