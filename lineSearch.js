function search(arr, x) 
{ 
    var i = 0; 
    var count = arr.length; 
    while (i < count) 
    { 
        if (arr[i] == x) 
        return i; 
        i++; 
    } 
    return null; 
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
// about 142 milliseconds
// Time Complexity from O(n log(n)) to O(n^2) 
// Space Complexity O(log(n)) 