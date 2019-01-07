
function search(arr, x) 
{ 
    var i = 0; 
    var count = arr.length; 
    arr.push(x); 
    while (true) { 
        if (arr[i] == x) { 
            delete arr[count]; 
            return i < count ? i : null; 
        } 
        i++; 
    } 
} 
 
 
var items = [ 2, 3, 5, 7, 11, 13, 17 ]; 
 
console.log(search(items, 1)); 
//print null 
console.log(search(items, 7)); 
//print 3 
console.log(search(items, 19)); 
//print null 
 
// *** simplified speed test *** 
 
var i = 0; 
items = Array 
    .apply(null, Array(10000)) 
    .map(() => ++i ); 
var count = 10000; 
 
var start = new Date(); 
 
for (i = 0; i < count; i++) 
    search(items, 7777); 
 
var milliseconds = (new Date()) - start; 
 
console.log(milliseconds); 
// about 313 milliseconds