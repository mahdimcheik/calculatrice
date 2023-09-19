let firstValue = 1;
let operator = "+";
let secondValue = 2;
let operation = "+";


const calculate = document.querySelector('#calculate');
const operators = document.querySelectorAll(".operator");
const output = document.querySelector("#output");

for(let i = 0 ;i< operators.length;i++)
{
    operators[i].addEventListener('click', ()=>{
       for(let j = 0;j < operators.length;j++)
        {
            if( j != i)
            if(operators[j].classList.contains("selected"))
            {
                operators[j].classList.remove("selected");
            }
        }
        operators[i].classList.add("selected");
        operation = operators[i].innerHTML;
        console.log(operation);       
    });
}


function operate(ope = operation, a, b){
    if(ope === "+") return a + b;
    if(ope === "-") return a - b;
    if(ope === "*") return a * b;
    if(ope === "/") return a / b;
}


calculate.addEventListener('click', () => {
    let a = parseFloat( document.querySelector('#number-1').value);
    let b = parseFloat( document.querySelector('#number-2').value);
    output.innerHTML = operate(operation,a,b )
});