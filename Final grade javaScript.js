// Write your function here:
const finalGrade = (midterm, final, homework) => {
    if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) ||(homework < 0 || homework > 100))  { 
      return 'You have entered an invalid grade.'
    }
    let average = (midterm + final + homework) / 3;
    if (average <= 59) {
      return 'F';
    }
    if (average <= 69) {
      return 'D';
    }
    if (average <= 79) {
      return 'C';
    }
    if (average <= 89) {
      return 'B';
    }
    if (average <= 100) {
      return 'A';
    }
    }