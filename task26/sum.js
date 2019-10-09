
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  let sum = 0;
//   for(let x in salaries){
    
//       if ( sum += salaries[x]){

//       }else {
//           console.log (0);
//       }
   
//   };
//  console.log(sum);  




sum = Object.values(salaries);
console.log(sum);

let amt = sum.reduce((a,b) => a+b);
console.log(amt);
 