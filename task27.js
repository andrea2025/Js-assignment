
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

let sum = 0;

function multiplyNumeric(obj) {
    // sum = Object.values(menu);
    // console.log(sum);
    for(let x in obj){
      if(typeof obj[x] == 'number'){
          obj[x] *= 2;
      }
    }

}
(multiplyNumeric(menu));
  