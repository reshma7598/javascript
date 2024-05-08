// type conversion and type coehersion

let a=5;
let num=String(a)
console.log(num);
console.log(typeof(num));
// console.log(a,typeof(a));


// 

let b="3"
console.log(typeof(b));
let st=Number(b)
console.log(st);
console.log(typeof(st));


// arithematic,logical,comparison,bitwise,conditional,Assignment,speacial

// arithematic operators _ +,-,/,%,*

let aa=5
let bb=6
let c=aa+bb
console.log(c);

// logical-&&,||,!

// comparison/relational-<=,>=,==,!=,===

let d="5"
let e=5
console.log(d==e);
console.log(d===e);

let f=5
let g=7
console.log(f!=g);

// assignment operators_ +=,-=,*=,/=,%=,

let sum=0;
for(let i=0;i<5;i++){
    sum+=i
}
console.log(sum);

// conditional -?:
// speacial operator-,,delete,in ,new,typeof,void

// conditional statement

// if,
// if..else..
// if else if.. else
// switch


// if

let age=19
if(age<=18){
    console.log("he cant drive");
}
else{
    console.log("he can drive");
}

// switch-multiple conditions check

let day=5

switch(day){
    case 1:
        console.log("monday");
        break;
        case 2:
            console.log("tuesday");
            break;
            case 3:
                console.log("wednesday");
                break;
                case 4:
                    console.log("thursday");
                    break;
                    default:
                        console.log("invalid choice");

}


// &&

let x=10;
let y=9
if(x>y&&y<x){
    console.log("y is greateer");
}
else{
    console.log("x is greater");
}



