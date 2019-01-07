
function search(arr, x) 
{ 
    var i = 0; 
    var j = arr.length; 
    while (i !== j) 
    { 
        var m = Math.floor((i + j) / 2); 
        if (x === arr[m]) 
            return m; 
        if (x < arr[m]) 
            j = m; 
        else 
            i = m + 1; 
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
// about 5 milliseconds

[07.01, 17:44] Ksenia Watsapp: function search(arr, x) 
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
[07.01, 17:44] Ksenia Watsapp: function search(arr, x) 
{ 
    var low = 0; 
    var high = arr.length - 1; 
 
    while ((arr[low] < x) &amp;&amp; (x < arr[high])) 
    { 
        var mid = low + ((x - arr[low])*(high - low))/(arr[high] - arr[low]); 
 
        if (arr[mid] < x) 
            low = mid + 1; 
        else if (arr[mid] > x) 
            high = mid - 1; 
        else 
            return mid; 
    } 
 
    if (arr[low] == x) 
        return low; 
    if (arr[high] == x) 
        return high; 
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
// about 3 milliseconds
[07.01, 17:45] Ksenia Watsapp: function search(arr, x) 
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
// Time Complexity O(n^2) 
// Space Complexity O(1) 
 
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