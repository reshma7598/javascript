// Given a date in the format "YYYY-MM-DD", write a function to return the day of the week(getDayOfWeek-GDW)
function GDW(ds) {
    const Dw = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(ds);
    const di = date.getDay();
    return Dw[di];
}
const date = '2024-05-18';
console.log(GDW(date)); 
