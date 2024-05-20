// vowels
let char = 'o'; 
char = char.toLowerCase();
if (char=='a'||char=='e'||char=='i'||char=='o'||char =='u') {
    console.log(char +" is a vowel.");
} else {
    console.log(char +" is a consonant.");
}



// break

let i=0;
for(i=0;i<10;i++){
    if(i==3){
        continue;
    }
    console.log(i);
}



// array methods

// length,slice,splice,push,pop,shift,unshift.for..of,for ...each


let arr=[1,2,3,4,5,6,7]
let len=arr.length
console.log(len);


// // push-add an element to its last
// console.log(arr.push(8));

// console.log(arr.pop());

// // unshift-adds element to its first
// console.log(arr.unshift(5));
// // shift =removes first remove
// console.log(arr.shift());

// // splice 

// console.log(arr.splice(2,2,6));


// lindexof
console.log(arr.indexOf(2));

console.log(arr);

// for ..each-to iterate 

// variable_name forEach(function()){
//     stmt
// }

let ar=[23,4,6,65,6]
// let x;

ar.forEach(i => {
  console.log(i);  
});


// concat

let a=[1,2,3,4]
let b=[6,5,5,6,7]
let c=a.concat(b)
console.log(c);

// sort()
let d=[23,56,11,34,54,67,8,990]
console.log(d.sort());

// ascending order

let compare=(a,b)=>{
    return b-a
}
let num=[1,3554,67,,788799,90,8,5,3,2]
num.sort(compare)
console.log(num);


// reverse
let re=[1,2,3,5,4,5,8]
console.log(re.reverse());

// map
// Array.map(){
//     stmt
// }

let m=[1,2,3,4,5]
let dd=m.map((i)=>{
    return i*2
})
console.log(dd);

// filter
// Array.filter(i)=>{

// }
let fi=[1,2,4,3,6]
let ff=fi.filter((j)=>{
    return j%2!==0
})
console.log(ff);

// find()
// Array.find(i)=>{

// }

let fin=[1,3,14,6,6]
let ii=fin.find((x)=>{
    return x%2==0
})
console.log(ii);

// reduce -
// Array.redux(accumulate,current valu)=>{

// }

let rr=[1,2,3,4,5,6]
// let rh=[7,8,9]
let r=rr.reduce((acc,current)=>{
    return acc+current
})
console.log(r);


// 0,
// 1

// ac+c=0+1=1
// 1+2=3
// 3+3=6
// 6+4=10
// 10+5=15
// 15+6=21







