// js dates
const d=new Date();
console.log(d);
const e = new Date(2018, 10, 24, 10, 33, 30);
console.log(e);
const f = new Date();
console.log(f.toUTCString());
const a = new Date();
console.log(a.toDateString());
const b = new Date();
console.log(b.toISOString());
// js date types
// ISO Date
const c = new Date("2015-03-25");
console.log(c);
// Short Date
const g = new Date("2/05/2015");
console.log(g);
// Long Date
const h = new Date("Mar 25 2015");
console.log(h);
// js date get method
const i= new Date();
console.log(i.getDate());
console.log(i.getDay());
console.log(i.getFullYear());
console.log(i.getHours());
console.log(i.getMinutes());
console.log(i.getSeconds()); 
console.log(i.getMilliseconds());
console.log(i.getTime());  
console.log(i.getMonth());

// js date set method
const j= new Date();
j.setHours(3);
console.log(j);
j.setMinutes(10);
console.log(j);
j.setDate(25);
console.log(j);
j.setSeconds(5);
console.log(j);
j.setFullYear(2021);
console.log(j);
j.setMilliseconds(1);
console.log(j);
j.setTime(11262555);
console.log(j);
