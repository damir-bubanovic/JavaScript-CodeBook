/*

!!ULTRA - MANAGE JS - LOADING SCRIPTS ASYNCHRONOUSLY THE HMTL5 WAY!!

> You’re interested in processing scripts asynchronously—not blocking the page from
loading while the scripts load—but you have discovered that the script injection technique
has one problem: the CSS Object Model (CSSOM) blocks inline scripts because
these scripts typically operate on the CSSOM. Since the CSSOM doesn’t know what the
script is going to do, it blocks the script until all of the CSS is loaded. This, then, delays
the network access of the script until all CSS files have been loaded

*/

/*
SOLUTION:
> Use the new HTML5 async script element attribute instead of script injection
	>> There are two script element attributes: defer, which defers script loading until the rest
	of the page is loaded, and the newest async. The latter tells the browser to load the script
	asynchronously, as the page is being parsed. It only works with external scripts; the page
	still blocks with inline scripts
*/
>)
<script src="//cdnjs.cloudflare.com/ajax/libs/mathjs/0.26.0/math.min.js" async></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min.js" async></script>