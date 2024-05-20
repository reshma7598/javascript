
const now= new Date()
console.log(now);
console.log(now.toDateString());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getFullYear());
console.log(now.getHours());
console.log(now.getTime());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());


// setdate
console.log(now.setDate(19));
console.log(now.setFullYear(2023));
console.log(now.setHours(20));



// math object

// sqrt,pow

let math=7
console.log(Math.sqrt(math));

// abs
let a=-7
console.log(Math.abs(a));

// min

console.log(Math.max(1,2,3,4,5,0));

// round

let c= 34.588
console.log(Math.round(c));

// random
console.log(Math.random());

// floor

console.log(Math.ceil(c));
console.log(Math.floor(c));