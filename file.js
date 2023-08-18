function runTask1(){
    var inputUser = document.getElementById("task1-input");
    var input = parseInt(inputUser.value);
    var output = document.getElementById("task1-output");
    output.textContent = "";

    if (input < parseInt(inputUser.min) || input > parseInt(inputUser.max)){
        output.textContent = 'Введіть число від 1 до 50'
    } else{
        var i = 0;
        while (i < input){
            output.textContent += `# `;
            i++;
        }
    }
}
function runTask2(){
    var inputUser = document.getElementById("task2-input");
    var input = parseInt(inputUser.value);
    var output = document.getElementById("task2-output");
    output.textContent = "";

    if (input < parseInt(inputUser.min) || input > parseInt(inputUser.max)){
        output.textContent = 'Введіть число від 1 до 50'
    } else{
        while (input >= 0) {
            output.textContent += `${input} `;
            input--;
        }
    }
}
function runTask3(){
    var inputUserNum = document.getElementById("task3-input1");
    var inputUserExp = document.getElementById("task3-input2");
    var input1 = parseInt(inputUserNum.value);
    var input2 = parseInt(inputUserExp.value);
    var output = document.getElementById("task3-output");

    if ((input1 < parseInt(inputUserNum.min) || input1 > parseInt(inputUserNum.max)) || ((input2 < parseInt(inputUserExp.min) || input2 > parseInt(inputUserExp.max)))){
        output.textContent = 'Введіть число від 1 до 50'
    } else{
        var result = 1;
        while (input2 > 0) {
            result *= input1;
            input2--;
        }
        output.textContent = result;
    }
}
function runTask4(){
    var inputUserNum1 = document.getElementById("task4-input1");
    var inputUserNum2 = document.getElementById("task4-input2");
    var input1 = parseInt(inputUserNum1.value);
    var input2 = parseInt(inputUserNum2.value);
    var output = document.getElementById("task4-output");
    output.textContent = "";

    if ((input1 < parseInt(inputUserNum1.min) || input1 > parseInt(inputUserNum1.max)) || ((input2 < parseInt(inputUserNum2.min) || input2 > parseInt(inputUserNum2.max)))){
        output.textContent = 'Введіть число від 1 до 50'
    } else if (input1 > input2){
        output.textContent = 'Помилка'
    } else{
        divisor = 1;
        while (divisor <= input1 && divisor <= input2) {
            if ((input1 % divisor == 0) && (input2 % divisor == 0)){
                output.textContent += `${divisor} `;
            }   
            divisor++;
        }
    }
}
function runTask5(){
    var inputUserNum = document.getElementById("task5-input");
    var input = parseInt(inputUserNum.value);
    var output = document.getElementById("task5-output");

    if (input < parseInt(inputUserNum.min) || input > parseInt(inputUserNum.max)){
        output.textContent = 'Введіть число від 1 до 50'
    } else{
        var factorial = 1;
        var i = 1;

        while (i <= input) {
            factorial *= i;
            i++;
        }
        output.textContent = factorial;
    }
}
function runTask6(){
    var input;
    do {
        input = +prompt('Скільки буде 2 + 2 * 2')
        if (input != 6){
            alert('Не вірно')
        }
    } while (input != 6);

    alert('Відповідь вірна, Вітаю!!!')
}
function runTask7(){
    var output = document.getElementById("task7-output");
    var number = 1000;
    var count = 0;
    do {
        number = number / 2;
        count++;
    } while (number >= 50);

    output.textContent = `Отримане число ${number} кількість поділів ${count}`
}
function runTask8(){
    var inputUserNum = document.getElementById("task8-input");
    var input = parseInt(inputUserNum.value);
    var output = document.getElementById("task8-output");
    output.textContent = ""

    if (input < parseInt(inputUserNum.min) || input > parseInt(inputUserNum.max)){
        output.textContent = 'Введіть число від 1 до 100'
    } else{
        for (var i = 1; i <= 100; i++){
            if (i % input == 0){
                output.textContent += `${i} `
            }
        }
    }
}
function runTask9(){
    var inputUserNum1 = document.getElementById("task9-input1");
    var inputUserNum2 = document.getElementById("task9-input2");
    var input1 = parseInt(inputUserNum1.value);
    var input2 = parseInt(inputUserNum2.value);
    var output = document.getElementById("task9-output");
    output.textContent = "";

    if ((input1 < parseInt(inputUserNum1.min) || input1 > parseInt(inputUserNum1.max)) || ((input2 < parseInt(inputUserNum2.min) || input2 > parseInt(inputUserNum2.max)))){
        output.textContent = 'Введіть число від 1 до 50'
    } else if (input1 > input2){
        output.textContent = 'Помилка'
    } else{
        for (var i = input1; i <= input2; i += 4) {
            output.textContent += `${i} `
        }
    }
}
function runTask10(){
    var inputUserNum = document.getElementById("task10-input");
    var input = parseInt(inputUserNum.value);
    var output = document.getElementById("task10-output");
    output.textContent = ""

    if (input < parseInt(inputUserNum.min) || input > parseInt(inputUserNum.max)){
        output.textContent = 'Введіть число від 2 до 50'
    } else{
        var isPrime = true;
        for (let i = 2; i < input; i++) {
            if (input % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            output.textContent = 'Просте';
        } else {
            output.textContent = 'Не просте';
        }
    }
}