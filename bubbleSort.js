
 
function sort(arr) { 
    var items = arr.slice(); 
    for (var i = 0; i < items.length; i++) { 
        for (var j = i + 1; j < items.length; j++) { 
            if (items[j] < items[i]) { 
                var tmp = items[j]; 
                items[j] = items[i]; 
                items[i] = tmp; 
            } 
        }            
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
// about 458 milliseconds puzir