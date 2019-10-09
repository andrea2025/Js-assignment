
let calculator ={
    read() { 
        this.x = parseInt(prompt('Enter a value'));
        this.y = parseInt(prompt('Enter value 2'));

    },
    sum() {
        return((this.x) + (this.y));
    },
    mul() {
        return((this.x) * (this.y));

    }

};
(calculator.read());
alert(calculator.sum());
alert(calculator.mul());