function doSort(items, fst, lst) { 
    if (fst >= lst) 
        return; 
    var i = fst; 
    var j = lst; 
    var x = items[Math.floor((fst + lst) / 2)]; 
 
    while (i < j) { 
        while (items[i] < x) i++; 
        while (items[j] > x) j--; 
        if (i <= j) { 
            var tmp = items[i]; 
            items[i] = items[j]; 
            items[j] = tmp; 
            i++; 
            j--; 
        } 
    } 
    doSort(items, fst, j); 
    doSort(items, i, lst); 
} 
 
function sort(arr) { 
    var items = arr.slice(); 
    doSort(items, 0, items.length - 1); 
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
// fast sort  about 143 milliseconds
// Time Complexity from O(n log(n)) to O(n^2) 
// Space Complexity O(log(n)) 