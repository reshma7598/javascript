function sumint(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num % 2 === 0) { 
            sum += num; 
        }
    }
    return sum;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sumint(numbers));
