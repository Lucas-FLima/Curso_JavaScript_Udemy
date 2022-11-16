// Recebendo o número do usuário
let usuario = (prompt('Insira o número sem usar vírgulas, se precisar, use ponto (.)'));

// Capturando campos no HTML
const numero = document.querySelectorAll('.numero');
const raiz = document.querySelector('#raiz');
const inteiro = document.querySelector('#inteiro');
const nan = document.querySelector('#nan');
const arredondaBaixo = document.querySelector('#arredondaBaixo');
const arredondaCima = document.querySelector('#arredondaCima');
const decimal = document.querySelector('#decimal');

// Funções para resolver cada funcionalidade pedida.
function numeros(valor) {
    for (let i = 0; i < numero.length; i++) {
        numero[i].innerHTML = valor;
    }
}

function raizValor(valor) {
    const valorRaiz = Math.pow(valor, 1/2);
    raiz.innerHTML = valorRaiz;
}

function inteiroValor(valor) {
    valor = parseFloat(valor);
    const valorInteiro = Number.isInteger(valor);
    inteiro.innerHTML = valorInteiro;
}

function nanValor(valor) {
    const valorNan = isNaN(valor);
    nan.innerHTML = valorNan;
}

function arredondaBaixoValor(valor) {
    const valorArredondaBaixo = Math.floor(valor);
    arredondaBaixo.innerHTML = valorArredondaBaixo;
}

function arredondaCimaValor(valor) {
    const valorArredondaCima = Math.ceil(valor);
    arredondaCima.innerHTML = valorArredondaCima;
}

function decimalValor(valor) {
    const valorDecimal = parseFloat(valor).toFixed(2);
    decimal.innerHTML = valorDecimal;
}

// Função que imprime as funcionalidades na tela
function imprimir(x) {
    numeros(x);
    raizValor(x);
    inteiroValor(x);
    nanValor(x);
    arredondaBaixoValor(x);
    arredondaCimaValor(x);
    decimalValor(x);
}

imprimir(usuario);