//5 programas para cada operacao aritimetica

let a = 2;
let b = 2;
//adicao
let adicao = 0;
adicao = a + b;
//subtracao
let subtracao = 0;
subtracao = a - b;
//multiplicacao
let multiplicacao = 0;
multiplicacao = a * b;
//divisao
let divisao = 0;
divisao = a / b;
//modulo
let modulo = 0;
modulo = a % b;


console.log(adicao, subtracao, multiplicacao, divisao, modulo);

//Programa para retornar o maior numero

const num1 = 2;
const num2 = 3;
const num3 = 5;

//Programa que retorna o maior de 2 numeros

if(num1 > num2){
    console.log (num1);
}else {
    console.log(num2);
}

//Programa para retornar o maior de 3 numeros

if(num1 > num2){
    console.log(num1);
}if (num2 > num3){
    console.log(num2);
}else{
    console.log(num3);
}

//Programa para definir um valor POSITIVO, NEGATIVO OU ZERO
const valor = 2;

if (valor > 0){
    console.log(POSITIVO);
}else if(valor === 0){
    console.log(ZERO);
}else {
    console.log(NEGATIVO);
}

//Definir os 3 angulos internos de um triangulo e afirmar se é angulo de um triangulo ou não

const lado1 = 2;
const lado2 = 3;
const lado3 = 4;

if (lado1 + lado2 + lado3 === 180){
    console.log(true);
}else {
    console.log();false;
}

//Programa para converter a nota dada em porcentagem em conceitos de A  e F 
let nota = 90;

switch(nota){
    case "90":
        console.log("A");
        break;
    case "80":
        console.log("B");
        break;
    case "70":
        console.log("C");
        break;
    case "60":
        console.log("D");
        break;
    case "50":
        console.log("F");
        break;
    default:
        console.log("ERRO")
        break;
}

