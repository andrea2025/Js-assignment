
let sumInput = () => {
    let input =[];
    while(true){
     let userValues = prompt('input number');
     if (userValues == '' || userValues == null || userValues == !isfinite()){
     break;
   }
   input.push(userValues);
  
  }
  let add = 0;
  for(let x of input){
    console.log(add += input);
  }
  } 
  sumInput();