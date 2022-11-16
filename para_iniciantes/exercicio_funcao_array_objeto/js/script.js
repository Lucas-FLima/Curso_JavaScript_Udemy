const form = document.querySelector(".form");
const resultado = document.querySelector(".resultado");

let pessoas = [];

function fabricaObjeto(nome, sobrenome, peso, altura) {
    return {
        nome,
        sobrenome,
        peso,
        altura
    }
}

function limpaCampo(nome, sobrenome, peso, altura) {
    nome.value = "";
    sobrenome.value = "";
    peso.value = "";
    altura.value = ""
}

function mostrarResultado(nome, sobrenome, peso, altura) {
    return resultado.innerHTML = resultado.innerHTML += `Nome: ${nome.value}, Sobrenome: ${sobrenome.value}, Peso: ${peso.value}, Altura ${altura.value}. <br />`
}

function recebeEventoForm(e) {
    e.preventDefault();

    const nome = form.querySelector(".nome");
    const sobreNome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    pessoas.push(fabricaObjeto(nome.value, sobreNome.value, peso.value, altura.value));

    mostrarResultado(nome, sobreNome, peso, altura);

    console.log(pessoas);

    limpaCampo(nome, sobreNome, peso, altura);
};

form.addEventListener('submit', recebeEventoForm);