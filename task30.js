
function Accumulator(startingValue){
    this.value = 1,

    this.read = () => {
        this.x = parseInt(prompt('read a new number'));
         this.y = parseInt(alert(this.x + this.value));
    }
}


let accumulator = new Accumulator(1); // initial value 1
 
accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value
 
alert(accumulator.value); // shows the sum of these values
