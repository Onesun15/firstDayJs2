'use strict';

// jediName

// function jediName(firstName, lastName) {
//   const jediLastName = lastName.substring(0, 3);
//   const jediFirstName = firstName.substring(0, 2);
//   console.log(jediLastName + jediFirstName);
// }

// jediName('Beyonce', 'Knowles');

// To infinity..

// function beyond(num) {
//   if (num === Infinity) {
//     console.log('And beyond'); 
//   } else if (Number.isFinite(num) && num > 0) {
//     console.log('To infinity');
//   } else if   (Number.isFinite(num) && num < 0) {
//     console.log('To negative infinity');
//   } else if (num === 0) {
//     console.log('Staying home');
//   }
// }

// beyond(-3);

// Cracking the code

<<<<<<< HEAD
// function decode(message) {
//   // Create an array to capture the char number
//   const arr = [];
//   // use split method to capture each word
//   const eachWord = message.split(' ');
//   // for loop to capture each first letter and check code rule
//   for (let i = 0; i < eachWord.length; i++) {
//     //Build each condition of the code cracker
//     if (eachWord[i][0] === 'a') {
//       arr.push(eachWord[i][2-1]);  
//     } else if (eachWord[i][0] === 'b') {
//       arr.push(eachWord[i][3-1]);  
//     } else if (eachWord[i][0] === 'c') {
//       arr.push(eachWord[i][4-1]);  
//     } else if (eachWord[i][0] === 'd') {
//       arr.push(eachWord[i][5-1]);  
//     } else {
//       arr.push(' ');
//     }
//   }
//   console.log(arr.join(''));
//   return arr.join('');
// }

// decode('craft block argon meter bells brown croon droop');


//How Many Days in a Month

function daysPerMonth (month) {
  switch (month) {
  case 'January':
    console.log('January has 31 days');
    break;
  case 'February':
    console.log('February has 28 days');
    break;
  case 'March':
    console.log('March has 31 days');
    break;
  case 'April':
    console.log('April has 30 days');
    break;
  case 'May':
    console.log('May has 31 days');
    break;
  case 'June':
    console.log('June has 30 days');
    break;
  case 'July':
    console.log('July has 31 days');
    break;
  case 'August':
    console.log('August has 31 days');
    break;
  case 'September':
    console.log('September has 30 days');
    break;
  case 'October':
    console.log('October has 31 days');
    break;
  case 'November':
    console.log('November has 30 days');
    break;
  case 'December':
    console.log('December has 31 days');
            

  }
}

daysPerMonth('December');

