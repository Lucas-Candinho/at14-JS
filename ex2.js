let n = prompt("Digite seu nome completo: ");
let sb = parseFloat(prompt("Digite seu Salário Bruto: "));
let vINSS = parseFloat(prompt("Digite o desconto do INSS: "));

function folhaPagamento(n, sb, vINSS) {
    console.log("Seu nome é: " + n);
    console.log("Seu salario bruto é: " + (sb).toString());
    console.log("O desconto do INSS no seu salário é: " + (vINSS).toString());
    console.log("Seu salário líquido é: " + (sb-vINSS).toString());
}

folhaPagamento(n,sb,vINSS);