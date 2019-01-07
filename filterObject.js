// http://www.pythontutor.com/javascript.html#mode=display


var names = [ "Тихон","Петр","Мария","Екатерина","Николай","София"], humans = [];


function Human(name,age,height) {
   
    this.name = name;
    this.age = age;
    this.height = height;

}

function rand(n, m) {

    return Math.round(Math.random()*(m - n) + n);

}

for (let i = 0; i < 10; i++) {

    humans[i] = new Human(names[rand(0, names.length - 1)],rand(18, 60),rand(140,200));
    
}


console.log(humans.sort(mySort("height")));   // sort for height


function mySort(prop) {
    return function(obj1,obj2) {
        return obj1[prop] - obj2[prop];
    }

}

