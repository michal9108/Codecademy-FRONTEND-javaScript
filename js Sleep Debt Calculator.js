const getSleepHours = day => { 
    switch (day) {
      case 'Monday':
      return 8.00;
       case 'Tuesday':
      return 8.00;
       case 'Wednesday':
      return 8.00;
       case 'Thursday':
      return 8.00;
       case 'Friday':
      return 8.00;
       case 'Saturday':
      return 8.00;
       case 'Sunday':
      return 8.00;
      default:
        return 'Error!!';
    }
    };
    //console.log(getSleepHours('Tuesday'));// should print the # hours assigned to tuesday//
    //const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday')+ getSleepHours('Wednesday')+ getSleepHours('Thursday')+ getSleepHours('Friday')+ getSleepHours('Saturday')+ getSleepHours('Sunday');
    const getActualSleepHours = () => 8 + 8 + 9 + 8 + 8 + 10 + 11;
    
    
    const getIdealSleepHours = idealHours => idealHours * 7;
    
    //const getIdealSleepHours = () => {
     // const idealHours = 7.5;
      //return idealHours * 7;
    //}
    //console.log(getActualSleepHours()); // should print the sum of all sleep hours in the week
    //console.log(getIdealSleepHours()); // if idealHours is 8, should print 56
    
    calculateSleepDebt = () => {
      const actualSleepHours = getActualSleepHours();
      const idealSleepHours = getIdealSleepHours(9);
    
    if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep.');
    }
    
    else if (actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than you needed. Actualy you sleep'  +  (actualSleepHours - idealSleepHours) +  ' hours more than you need.'); 
    } 
    
    else if (actualSleepHours < idealSleepHours) {
    console.log('You shoud get more sleep man. You shoud get rest. You sleep' + (idealSleepHours - actualSleepHours) + ' hours less than you need');
    }
    else {
      console.log('ERROR!!!');
    }
    
    };
    
    calculateSleepDebt();
    
    
    
    
    
    
    
    