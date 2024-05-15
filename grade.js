let Marks = 54;
let grade ;
if  (Marks >= 90 && Marks <= 100) {
grade = 'A';
} else if (Marks >= 80 && Marks <= 89) {
grade = 'B';
} else if (Marks >= 70 && Marks <= 79){
grade = 'C';
}else if (Marks >= 60 && Marks <= 69){
grade = 'D';
}else{
grade = 'F';
}

console.log("the grade is" , grade);