function folhaPagamento() {
    let n = document.getElementById("nome").value;
    let sb = document.getElementById("salarioBruto").value;
    let vINSS = document.getElementById("valorINSS").value;
    document.getElementById("pNome").textContent = ("Seu nome é: " + n);
    document.getElementById("pBruto").textContent = ("Seu salario bruto é: " + (sb).toString());
    document.getElementById("pValorINSS").textContent = ("O desconto do INSS no seu salário é: " + (vINSS).toString());
    document.getElementById("pLiquido").textContent = ("Seu salário líquido é: " + (sb-vINSS).toString());
}

function proximaPagina() {
    window.location.href = 'terceira.html';
}