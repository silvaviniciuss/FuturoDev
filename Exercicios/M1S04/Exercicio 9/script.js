const mudarTexto = () => {
    const select = document.querySelector("#list")
    const resultado = document.getElementById("resultado")

    const valor = select.options[select.selectedIndex].value

    switch (valor) {
        case "texto1":
            resultado.innerText = "Resultado do Texto 1"
            break
        case "texto2":
            resultado.innerText = "Resultado do Texto 2"
            break
    }

}

