//check  number is positive, negative, or zero
function check(num) {
    if (num > 0) {
        console.log( num , " is a positive number.");
    } else if (num < 0) {
        console.log( num , " is a negative number.");
    } else {
        console.log("The number is zero.");
    }
}
check(5);    
check(-2);   
check(0);
