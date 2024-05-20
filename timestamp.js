// time settings to human reader


function c(ts) {
    let h = [];
    for (let t of ts) {
        let date = new Date(t);
        h.push(date.toLocaleString());
    }
    return h;
}
const ts = [1621399501841, 16214031051530, 16214067075800];
console.log(c(ts));
