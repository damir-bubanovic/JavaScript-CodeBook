/*

!!ULTRA - APIs - ENABLING A MOBILE-LIKE NOTIFICATION IN THE DESKTOP BROWSER!!

> You need a way to notify a user that an event has occurred or a long-running process is
finished, even if your web page isn’t loaded into the tab that’s currently active

The Notification takes two arguments—a title string and an object with options:
	• body: The text message in the body of the notification
	• tag: A tag to help identify notifications for global changes
	• icon: A custom icon
	• lang: Language of notification
	• dir: Direction of language
You can also code four event handlers:
	• onerror
	• onclose
	• onshow
	• onclose

*/

/*
SOLUTION:
>) Use the Web Notifications API
+) To use a Web Notification, you do need to get permission. In the following code, the
Web Notification is wrapped in a request in a timer, to emulate a wait time for the
notification. Both are wrapped in a permission request
*/
+)
Notification.requestPermission(function() {
	setTimeout(function() {
		var notification = new Notification('hey wake up',
											{body: 'your file is done',
											tag: 'preset'});
	}, 5000);
});


/*
EXAMPLE:
+) Prior to the Notification permission request, you can also test to see if Notification exists,
so an error is not thrown if it’s not supported
*/
+)
if (window.Notification) {
	Notification.requestPermission(function() {
		setTimeout(function() {
			var notification = new Notification('hey wake up',
												{body: 'your process is done',
												tag: 'loader',
												icon: 'favicon.ico'});
		}, 5000);
	});
}