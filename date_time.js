// console.log("RAdhika")

let myDate = new Date()
// console.log(myDate)

// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());

// console.log(myDate.toLocaleString());
// console.log(typeof myDate)

let mynewdate = new Date(2023,2,14)
// console.log(mynewdate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(mynewdate.getTime());

// `${newDate.getDay()} and the time`
console.log(myDate.toLocaleString('default',{
    weekday: "long"
}));

 