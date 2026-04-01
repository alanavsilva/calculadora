function subtracao() {
    const numero = document.getElementById("numero").value;
    const numero2 = document.getElementById("numero2").value;

    let subtracao = Number(numero) - Number(numero2);

    alert("A subtração desses números é igual: " + subtracao);
}