function add() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    console.log(num1+num2);
    document.getElementById("output").value = num1 + num2;
}

function sub() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    console.log(num1-num2);
    document.getElementById("output").value = num1 - num2;
}

function mul() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    console.log(num1*num2);
    document.getElementById("output").value = num1 * num2;
}

function div() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    if (num2 === 0) {
        document.getElementById("output").value = "Cannot divide by zero";
    } else {
        console.log(num1/num2);
        document.getElementById("output").value = num1 / num2;
    }
}
