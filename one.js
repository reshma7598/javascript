

// ecma-console.log
// document.write-dom

// variables- store a data of a value in variable
// 3 typex-let,var,const

// var-can change the value

var a=5
var a=10
console.log(a);

// let-thE value of variable can be change , if we want change the variable should be declared in block of code

let b=15;
{
    let b=20
    console.log(b);
}
console.log(b);


// const - cant change the value
const c=7

console.log(c)


// datatypes- primitive and non-priitive

// primitive- string,array,boolea,null, undefined,number,symbol
// non-primitive-objects

// string - "" or ''

let s="hello world  i\'m freena"
let s1="\t how are you"
console.log(s);
console.log(s+s1);

// change a cahracteer in string

let str="hello"
str[0]="j"
console.log(str);
console.log(typeof(str));

// typeOf- to find which datatype is the varaiable is holding

// array-collection of similar datatype

let ar=[1,2,3,3,"hello"]
console.log(ar);
console.log(typeof(ar));
let ss=ar[0];
ar[0]=10
ar[1]=20
console.log(ar);


// number

let n=6
console.log(typeof(n));

// null and undefined
// null - 

let nu=null;
console.log(nu);

let un
console.log(un);


// boolean-true or false

let bool=false
console.log(bool);
console.log(typeof(bool));

// NaN-Not a Number

let aa=4/'a'
console.log(aa);


// bigint

let big=2324565656677n;
console.log(big);
console.log(typeof(big));








