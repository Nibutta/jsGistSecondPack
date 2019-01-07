

function Counter () {
    var count = 0;
   
    return function() {
        count++;

        return count;
    }
}
var counter = Counter(); //1st


console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3


var anotherCounter = Counter(); //2st


console.log(anotherCounter());  // 1
console.log(anotherCounter());  // 2
console.log(anotherCounter());  // 3