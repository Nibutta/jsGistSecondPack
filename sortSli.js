
 
function sort(items) { 
    var result = []; 
    if (items.length === 1) 
        return items; 
 
    var lLeft = Math.floor(items.length / 2); 
    var lRight = items.length - lLeft; 
    var left = sort(items.slice(0, lLeft)); 
    var right = sort(items.slice(lLeft, items.length)); 
 
    var l = 0; var r = 0; 
 
    while (l < lLeft &amp;&amp; r < lRight) { 
        if (left[l] < right[r]) { 
            result.push(left[l++]); 
            } else { 
            result.push(right[r++]); 
        } 
    } 
 
    while (l < lLeft) { 
        result.push(left[l++]); 
    } 
 
    while (r < lRight) { 
        result.push(right[r++]); 
    } 
 
    return result; 
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
// about 589 milliseconds slija