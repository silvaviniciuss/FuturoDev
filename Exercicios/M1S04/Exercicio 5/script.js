const identificar = () => {
    const numero = document.getElementById("numero").value
    const resultado = document.getElementById("resultado")
    if (numero > 0) {
        resultado.innerHTML = "POSITIVO"
        resultado.setAttribute("class", "blue")
    } else if ( numero < 0) {
        resultado.innerHTML = "NEGATIVO"
        resultado.setAttribute("class", "red")
    } else {
        resultado.innerHTML = "IGUAL A ZERO"
        resultado.setAttribute("class", "zero")
    }

}