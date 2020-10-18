console.log('Person.js is running');

 const isAdult = (age) => age >=18;

 const canDrink =(age) =>age>= 21;

 const isSenior = (age) => age >= 40;
 


 export{isAdult, canDrink, isSenior as default };