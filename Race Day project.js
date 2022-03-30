let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = 18;
if (age > 18 && registeredEarly === true) {
   raceNumber += 1000;
}
if (age > 18 && registeredEarly === true) {
console.log (`${raceNumber} Race begins at 9:30`);
}

else if (age > 18 && registeredEarly === false) {
console.log (`${raceNumber} Late adults run at 11:00 am`);
 }

else if (age < 18) {
  console.log (`${raceNumber} Youth registrants run at 12:30 pm`);  
}

else if (age === 18) {
  console.log (`${raceNumber} Please see the registration desk`);  
}



