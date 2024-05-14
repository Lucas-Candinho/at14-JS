function realizarOperacoes() {
    let a = document.getElementById("numero").value;
    let b = document.getElementById("outronumero").value;
    let intA = parseInt(a);
    let intB = parseInt(b); 
    document.getElementById("dif").textContent = (intA-intB);
    document.getElementById("multmult").textContent = (2*intA+3*intB)
    document.getElementById("mult").textContent = (intA*intB)
    if (a>b) {
        document.getElementById("compara").textContent = (a + " > " + b)

    } else {
        document.getElementById("compara").textContent = (b + " > " + a)
    }
}

function proximaPagina() {
    window.location.href = 'segunda.html';
}