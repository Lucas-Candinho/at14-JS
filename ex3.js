function calcularINSS(salario) {

    if (salario > 1500) {
        return ["9", salario-(salario*0.09),salario*0.09];
    }
    if (salario > 1000) {
        return ["8.5", salario-(salario*0.085),salario*0.085];
    }
    if (salario >= 1000) {
        return ["8.0", salario-(salario*0.08),salario*0.08];
    }
    return["0", salario, 0];
}

function pegarValores() {
    let nome = document.getElementById("nome").value;
    let salarioBruto = document.getElementById("salarioBruto").value;
    return[nome, salarioBruto];
}

function mostrarValores () {
    let valores =  pegarValores();
    let nome = valores[0];
    let salarioBruto = valores[1];

    let calculo = calcularINSS(salarioBruto);
    let percentualDesconto = calculo[0];
    let salarioLiquido = calculo[1];
    let valorDesconto = calculo[2];

    document.getElementById("pNome").textContent = ("Seu nome é: " + nome);
    document.getElementById("pBruto").textContent = ("Seu salario bruto é: " + salarioBruto.toString());
    document.getElementById("pValorINSS").textContent = ("O desconto do INSS no seu salário é: " + percentualDesconto + "%, totalizando um valor de " + valorDesconto.toString());
    document.getElementById("pLiquido").textContent = ("Seu salário líquido é: " + salarioLiquido.toString());
}

function proximaPagina() {
    window.location.href = 'index.html';
}