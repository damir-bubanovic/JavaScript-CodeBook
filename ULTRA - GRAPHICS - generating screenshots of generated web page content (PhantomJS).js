/*

!!ULTRA - GRAPHICS - GENERATING SCREENSHOTS OF GENERATED WEB PAGE CONTENT (PHANTOMJS)!!

> You want to add functionality to take screenshots of a web page within your JavaScript
application

*/

/*
SOLUTION:
+) Use a command line, such as PhantomJS, that provides this capability either directly or
via Node interface. The following code will take a screenshot of the O’Reilly main
website
*/
+)
var phantom = require('phantom');

var pageUrl = "http://oreilly.com";

phantom.create(function (ph) {
	ph.createPage(function (page) {
		page.open(pageUrl, function(status) {
			console.log(status);
			setTimeout(function(){
				page.render('screenshot.png', function(finished){
					console.log('rendering '+pageUrl+' done');
					ph.exit();
				});
			}, 15000);
		});
	});
}); 