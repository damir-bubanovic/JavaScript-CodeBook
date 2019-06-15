/*

!!ULTRA - DATA - USING SESSIONSTORAGE FOR CLIENT SIDE STORAGE!!

> You want to easily store session information without running into the size and crosspage
contamination problems associated with cookies, and prevent loss of information
if the browser is refreshed

*/

/*
SOLUTION:
+) Use the new DOM Storage sessionStorage functionality
*/
+)
sessionStorage.setItem("name", "Shelley");
sessionStorage.city="St. Louis";
...
var name = sessionStorage,getItem("name");
var city = sessionStorage.city;
...
sessionStorage.removeItem("name");
sessionStorage.clear();