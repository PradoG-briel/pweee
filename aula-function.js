"use strict"

// -> procedimento
// -> sub-rotina
// -> funções
// -> Métodos
const num1 = document.getElementById('numero2');

function soma(a, b) {
    return a + b;
}
const total = soma (2, num1); 




// -> parâmetros
// -> argumentos

// Por que usar funções?
// -> Reutilizar o código
// -> Evitar repetição de código
// -> Diminuir o tamanho do código
// -> Facilitar a leitura

// Boas práticas
// -> Responsabilidade única (SOLID)
// -> Funções pequenas
// -> Funções Puras (Dado uma entra sempre será a mesma saída)
// -> Semântica (significado)
// -> Quantidade de parâmetros (0, 1, 2, 3)

const nota1 = Number(document.getElementById('nota1').value)
const nota2 = Number(document.getElementById('nota2').value)

function calcularMedia (n1, n2) {
    return (n1 + n2) / 2
}

const media = calcularMedia (nota1, nota2)
function situacaoAluno(media){
    if(media >= 5){
        return "Aprovado";
    }else{
        return "Reprovado";
    }
}
alert (situacaoAluno(media));

// -> Funções no javascript são "objetos de primeira classe"
// -> Funções de "alta ordem", ou seja, os famosos callbacks

//Função declarada / tradicional
function quadrado (numero) {
    return numero * numero;
}

// Funções anônimas
const quadrado = function (numero) {
    return numero * numero;
}

// arrow function f(x) = x * x
const quadrado = (numero) => {
    return numero * numero;
}

// arrow reducida function
const quadrado = (numero) => numero * numero;


document.getElementById('container')
        .addEventListener('click', () => alert ("Olá mundo!"))