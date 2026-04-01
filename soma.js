function soma() {
    const numero = document.getElementById("numero").value;
    const numero2 = document.getElementById("numero2").value;

    let soma = Number(numero) + Number(numero2);

    alert("A soma desses números é igual: " + soma);
}