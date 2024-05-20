// Find the longest word in a sentence.
function findlw(sentence) {
    const words = sentence.split(" ");
    let lw = "";
    for (const word of words) {
        if (word.length > lw.length) {
            lw = word;
        }
    }
    return lw;
}
const sentence = "The quick brown fox jumps over the lazy dog , the dog name is brownyee.";
const lw = findlw(sentence);
console.log( lw);
