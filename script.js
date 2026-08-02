// Retrieve User input

let Month = document.getElementById=("Month")
let day = document.getElementById=("day")
let year = document.getElementById=("year")

let gender = document.querySelector('input [name="gender"]:checked')

// validating tne input

if (day < 1 || day > 31) {
  alert ("invalid day");
  return;
}
if (month < 1 || month > 12) {
    alert("invalid month");
    return;
}
if (! gender) {
   alert ("Please choose a gender");
   return;
}
 
// calculating the day

function calculateday ( dd mm yyyy) {
    let cc = Math.floor(yyyy/100);
    let yy = yyyy % 100;

    let d = Math.floor(
        ( (cc / 4) - 2 * cc - 1) +
        ( (5 * yy) / 4 ) +
        ( (26 * (mm + 1)) / 10) +
        dd
     ) % 7;

return d;
}
// Matching the Akan Names

let maleNames =["kwasi","Kwadwo","Kwabena","Kwaku","Yaw","kofi","kwame"];
Let femaleNames =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama",]

// Displaying the result

 function generateAkanName() {
let month = parseInt(document.getElementById("month").value);
let day = parseInt(document.getElementById("day").value);
let year = parseInt(document.getElementById("year").value);

let gender = parseInt(document.querySelector('input[name="gender"]:checked');

if (!gender) {
alert ("please choose a gender");
return;
}
 
if (day < 1 || day > 31 || month < 1 || month > 12) {
alert("invalid date");
return;
}

let d = calculateday(day, month, year);

let name;
if (gender.value === "male") {
    name = maleNames[d]
}else {
name = femaleNames[d];
}
 document.getElementById("result").innertext = "YOUR AKAN NAME IS: " + name;
 }
