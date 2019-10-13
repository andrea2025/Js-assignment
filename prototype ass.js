
var Enyata = {
    internetspace :true,
    materials:true,
    officeaccess:true,
}

var tutor = {
    teaching:true,
    __proto__ : Enyata
}
var trainee = {
    lectures:true,
    assignment:true,
    __proto__ : Enyata
};




let Delicacy = {
    eats: true
  };
  
  function Food(name,chan) {
    this.name = name;
    this.chan = chan;
  }
  
  
  
  let paleto = new Food('pizza','rice');
  console.log(1, paleto);
  
   console.log(2, paleto.constructor);
  let patties = new paleto.constructor('bacon','beans');
  let saute = new patties.constructor('burritto','bean');
  let mushroom = new saute.constructor('onion','crispy');
  let fillet = new mushroom.constructor('casserole','steak');
  let noodles = new fillet.constructor('spaghetti','chicken');
  let crispy = new noodles.constructor('macaroni','cheese');
  let parmesan = new crispy.constructor('chocolate','chip');
  let salisbury = new parmesan.constructor('oat','pie');
  let taco = new salisbury.constructor('pancake','cauliflower');
  let ricarrto = new taco.constructor('bussel','brownies');
  
  
  