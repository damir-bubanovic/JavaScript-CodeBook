/*

!!INTER - ACCESS PAGE ELEMENTS - HIDING PAGE SECTIONS!!

> You want to hide an existing page element and its children until needed

*/

/*
SOLUTION:
+) You can set the CSS visibility property to hide and show the message

+) or you can use the CSS display property
*/
+)
msg.style.hidden = "visible"; // to display
msg.style.hidden = "hidden"; // to hide

/*OR*/

+)
msg.style.display = "block"; // to display
msg.style.display = "none"; // to remove from display