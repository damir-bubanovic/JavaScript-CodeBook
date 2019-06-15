/*

!!ARRAY - FIND HIGHEST & LOWEST WALUE!!

> using with functions

*/

/*
EXAMPLE:
*/
var scores = [
	60, 50, 60, 58, 54, 54,
	58, 50, 52, 54, 48, 69,
	34, 55, 51, 52, 44, 51,
	69, 64, 66, 55, 52, 61,
	46, 31, 57, 52, 44, 18,
	41, 53, 55, 61, 51, 44
];



/*Produce list*/
/*FASTER SOLUTION*/
for(var i = 0; i < scores.length; i++) {
	var output = "Bubble solution #" + i + " score: " + scores[i] + "<br />";
	document.write(output);
}
/*SLOWER SOLUTION*/
var i = 0;
while(i < scores.length) {
	var output = "Bubble solution #" + i + " score: " + scores[i] + "<br />";
	document.write(output);
	i = i + 1;
}

/*
Bubble solution #0 score: 60
Bubble solution #1 score: 50
Bubble solution #2 score: 60
...
Bubble solution #35 score: 44
*/


/*Lowest number*/
Array.min = function(array){
    return Math.min.apply(Math, array);
};
/*Highest number*/
Array.max = function(array){
    return Math.max.apply(Math, array);
};


var numOfScores = "Number of scores is: " + scores.length + "<br />";
document.write(numOfScores);

var lowScore = "Lowest score is: " + Array.min(scores) + "<br />";
document.write(lowScore);

var highScore = "Highest score is: " + Array.max(scores) + "<br />";
document.write(highScore);

/*
Number of scores is: 36
Lowest score is: 18
Highest score is: 69
*/
