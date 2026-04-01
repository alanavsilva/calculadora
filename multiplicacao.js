function multiplicacao() {
    const numero = document.getElementById("numero").value;
    const numero2 = document.getElementById("numero2").value;

    let multiplicacao = Number(numero) * Number(numero2);

    alert("A multiplicação desses números é igual: " + multiplicacao);
}
