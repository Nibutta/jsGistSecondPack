function search(arr, x) 
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