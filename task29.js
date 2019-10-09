
function Calculator(){

    this.read = () => {
        this.x = parseInt(prompt('Enter a value'));
        this.y = parseInt(prompt('Enter value 2'));
    }
    this.sum =() => {
        return((this.x) + (this.y));
    },
   this.mul = () => {
     return((this.x) * (this.y));
    }

}

let calculator = new Calculator();

calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
