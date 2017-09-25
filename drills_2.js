'use strict';

// function jediName(firstName, lastName) {
//   const jediLastName = lastName.substring(0, 3);
//   const jediFirstName = firstName.substring(0, 2);
//   console.log(jediLastName + jediFirstName);
// }

// jediName('Beyonce', 'Knowles');

//To infinity..

function beyond(num) {
  if (num === Infinity) {
    console.log('And beyond'); 
  } else if (Number.isFinite(num) && num > 0) {
    console.log('To infinity');
  } else if   (Number.isFinite(num) && num < 0) {
    console.log('To negative infinity');
  } else if (num === 0) {
    console.log('Staying home');
  }
}

beyond(-3);
