// сложить первый с последним и т.д.

var arr = ['1', '2', '3', '4', '5', '6']; 
var result = [];
     while (arr.length > 0) {       //массив уменьшается в цикле пока не достигнет нуля 
        
        var first = arr.shift();
        var last = arr.pop(); 
        var str = first+last;       //тут будет строка '16', потом '25', потом '34' 
        result.push(str); 
        }                          //После цикла в result лежит массив ['16', '25', '34']. 
        
        //Сольем его в строку: 

result = result.join('-'); 
document.write(result);