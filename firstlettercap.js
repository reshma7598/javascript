// Capitalize the first letter of each word in a sentence
function cap(s) {
     return s.replace(/\b\w/g, (char) => char.toUpperCase());
    }
const inputs = "hello my name is reshma ";
const ca = cap(inputs);
console.log(ca);
