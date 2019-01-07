
function sort(arr) { 
    var items = new Array(arr.length); 
 
    var min = Math.min.apply(Math, arr); 
    var max = Math.max.apply(Math, arr); 
 
    var counts = Array(max - min + 1) 
        .fill(0); 
 
    for (var x of arr) { 
        counts[x - min]++; 
    } 
 
    var total = 0; 
    for (var i = min; i <= max; i++) { 
        var oldCount = counts[i - min]; 
        counts[i - min] = total; 
        total += oldCount; 
    } 
 
    for (var x of arr) { 
        items[counts[x - min]] = x; 
        counts[x - min]++; 
    } 
    return items; 
} 
 
 
var items = [4, 1, 5, 3, 2]; 
var sortItems = sort(items); 
// sortItems is [1, 2, 3, 4, 5] 
console.log(sortItems); 
 
// *** simplified speed test *** 
var i = 0; 
items = Array 
    .apply(null, Array(200)) 
    .map(() => ++i); 
var tmp = items[5]; 
items[5] = items[6]; 
items[6] = tmp; 
var count = 10000; 
var start = new Date(); 
 
for (i = 0; i < count; i++) 
    sort(items); 
 
var milliseconds = (new Date()) - start; 
 
console.log(milliseconds); 
// about 161 milliseconds sort podschet
Time Complexity O(n log(n))) 
// Space Complexity O(n) 