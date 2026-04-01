function divisao() {
    const numero = document.getElementById("numero").value;
    const numero2 = document.getElementById("numero2").value;

    let divisao = Number(numero) / Number(numero2);

    alert("A divisão desses números é igual: " + divisao);
}