/*

!!ULTRA - NEW ECMASCRIPT OBJECTS - ITERATING THROUGH TASKS MADE EASY!!

> You want to iterate over a set of tasks, but not all at the same time, and not all within
the same expression

*/

/*
SOLUTION:
+) Use an iterator, a new ES 6 protocol
*/
+)
function makeIterator(array){
	var nextIndex = 0;
	
	return {
		next: function(){
			return nextIndex < array.length ?
				{value: array[nextIndex++], done: false} :
				{done: true};
		}
	}
}

var tasks = [{"task": function() {
				console.log('hello from a');
			}},
			{"task": function() {
				console.log('hello from b');
			}}];

var taskRunner = makeIterator(tasks);

taskRunner.next().value.task();
taskRunner.next().value.task();
/*
hello from a
hello from b
*/