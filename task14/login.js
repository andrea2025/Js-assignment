

var user = prompt("Who's there?")

if(user == "admin"){
    let password = prompt('password?');
    if(password == "TheMaster"){
        alert("Welcome!");
    }else if(password == null){
        alert('canceled');
    }
    else{
        alert('wrong Password');
    }
}
else if (user == null){
    alert("canceled");
}
else{
    alert('i don\'t know you');
}

