// Write your function here:
const howOld = (age, year) => {


    const theCurrentYear = (2022);
    const yearDifference = year - theCurrentYear;
    const newAge = age + yearDifference;
    
      switch (newAge) {
      case (newAge > age) :
      return console.log(`You will be ${newAge} in the year ${year}`);
      case (newAge < 0) :
      return console.log(`The year ${year} was ${-newAge} years before you were born`);
      default:
      return console.log(`You were ${newAge}  in the year ${year}`);
      }
    }
    console.log(howOld (30, 2025));
    console.log(howOld (2, 2021));
    console.log(howOld (40, 1998));
    console.log(howOld (50, 2033));
    