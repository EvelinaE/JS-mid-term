/* ------------------------------ TASK 3 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */



function Calculator() {

    this.sum = function (a, b) {
      return a + b;
    };
  
    this.subtraction = function (a, b) {
      return a - b;
    };
  
    this.multiplication = function (a, b) {
      return a * b;
    };
  
    this.division = function (a, b) {
      if (b !== 0) {
        return a / b;
      } else {
        return undefined;
      }
    };
  }
  
  const myCalculator = new Calculator();
  
  const userInput1 = parseFloat(prompt('Enter the first number:'));
  const userInput2 = prompt('Enter an operator (+, -, *, /):');
  const userInput3 = parseFloat(prompt('Enter the second number:'));
  
  if (!isNaN(userInput1) && !isNaN(userInput3)) {
    if (userInput2 === '+') {
      alert(myCalculator.sum(userInput1, userInput3));
    } else if (userInput2 === '-') {
      alert(myCalculator.subtraction(userInput1, userInput3));
    } else if (userInput2 === '*') {
      alert(myCalculator.multiplication(userInput1, userInput3));
    } else if (userInput2 === '/') {
      alert(myCalculator.division(userInput1, userInput3));
    } else {
      alert('Please enter +, -, *, / symbols only');
    }
  } else {
    alert('Error');
  }