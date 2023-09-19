let firstValue = 1;
let operator = "+";
let secondValue = 2;
let operation = "";

let oldValue = 0;


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
        oldValue = parseFloat( document.querySelector('#number-1').value);
        document.querySelector('#number-1').value = "";

        //let a = parseFloat( document.querySelector('#number-1').value);
        //oldValue = document.querySelector('#number-1').value = operate(operation,oldValue,a );
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
    //12output.innerHTML = operate(operation,oldValue,a )
    document.querySelector('#number-1').value = operate(operation,oldValue,a );
});

const one = document.querySelector('.one');
one.addEventListener('click', ()=>{
    document.querySelector('#number-1').value += "1";
});
const two = document.querySelector('.two');
two.addEventListener('click', ()=>{
    document.querySelector('#number-1').value += "2";
});
const three = document.querySelector('.three');
three.addEventListener('click', ()=>{
    document.querySelector('#number-1').value += "3";
});
const four = document.querySelector('.four');
four.addEventListener('click', ()=>{
    document.querySelector('#number-1').value += "4";
});
const five = document.querySelector('.five');
five.addEventListener('click', ()=>{
    document.querySelector('#number-1').value += "5";
});
const six = document.querySelector('.six');
six.addEventListener('click', ()=>{
    document.querySelector('#number-1').value += "6";
});
const seven = document.querySelector('.seven');
seven.addEventListener('click', ()=>{
    document.querySelector('#number-1').value += "7";
});
const eight = document.querySelector('.eight');
eight.addEventListener('click', ()=>{
    document.querySelector('#number-1').value += "8";
});
const nine = document.querySelector('.nine');
nine.addEventListener('click', ()=>{
    document.querySelector('#number-1').value += "9";
});
const comma = document.querySelector('.comma');
comma.addEventListener('click', ()=>{
    document.querySelector('#number-1').value += ".";
});


const affiche = document.querySelector("#number-1");
affiche.addEventListener('mouseover', ()=>{
    affiche.classList.add("selected");
});
affiche.addEventListener('mouseleave', ()=>{
    affiche.classList.remove("selected");
});