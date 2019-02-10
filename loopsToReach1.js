
/* There's this awesome conjecture (that is, a proposition that cannot be proven), where, given a positive integer n, you can run the following process:

If n is even, divide it by 2 to get n / 2.

If n is odd, multiply it by 3 and add 1 to obtain 3n + 1.

Repeat the process indefinitely.

The conjecture is that no matter what number you start with, you will always eventually reach 1.

Let's confirm this. Assume there's a number stored in a variable num. Write a loop like so.*/

function numbersInOne(num) {
   while (num != 1) {
    if (num%2 == 0) {
      num /= 2;
      console.log(num);
    } else { num = ( num * 3 ) + 1 ; 
    console.log(num);
    }
    
   } console.log('it works!');
   
   
}
   
   numbersInOne(83);