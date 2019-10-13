
let hamster = {
  stomach: [],
 
  eat(food) {
    this.stomach.pu(food);
  }
};
 
let speedy = {
  __proto__: hamster,
  stomach:[]
};
 
let lazy = {
  __proto__: hamster,
  stomach:[]
};
 
// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple
 
// This one also has it, why? fix please.
alert( lazy.stomach ); // apple