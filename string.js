// slice,substring,substr,trim,trimstart,trimend,charAt,charCodeAt,

// slice

let js="welcome to javascfipt"
console.log(js.slice(-12,-6));

// substring
console.log(js.substring(0,10));
console.log(js.substring(5));

// substr
console.log(js.substr(5,5));


// trim-remove space

let j="  hello world "
console.log(j.trimStart());
console.log(j.trimEnd());
console.log(j.trim());
console.log(j);


// charAT
let jj="hello"
console.log(jj.charAt(0));

// charCodeAt
console.log(jj.charCodeAt(0));

// string search methods
// indexOf

let s="welocme to javascript snd nice to meet you"
console.log(s.indexOf("to"));
// last indexof
console.log(s.lastIndexOf("to"));
// search()
console.log(s.search("to"));
// match
let ma="the rain in the spain stay mainly in the plain"
console.log(ma.match("ain"));
// matchAll
// let m ="I love cats Cats are very easy to love cats are very popular"
// let mm=m.matchAll("cats")
// console.log(mm);

// let m = "I love cats. Cats are very easy to love. Cats are very popular.";
// let mm = m.matchAll(/cats/gi);
// console.log(Array.from(mm));


