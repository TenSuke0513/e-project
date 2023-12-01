function calculate(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let operation = document.getElementById("operation").value;
    let result;

    if (operation === "add"){
        result = parseInt(num1) + parseInt(num2);
    } else if (operation === "subtract"){
        result = parseInt(num1) - parseInt(num2);
    } else if (operation === "multiply"){
        result = parseInt(num1) * parseInt(num2);
    } else if (operation === "divide"){
        result = parseInt(num1) / parseInt(num2);
    }
    document.getElementById("result").innerHTML = "結果：" + result;
}