let produto = window.prompt("Informe o Código Produto: ")

while ((produto != "0") || (produto != "sair")) {
    switch (produto) {
        case "1":
        case "Morango":
            console.log("R$ 5,99 Kg")
            break
        case "2":
        case "Abacaxi":
            console.log("R$ 5,00 Uni")
            break
        default:
            console.log("Código do produto não existe")
            
    }

    produto = window.prompt("Informe o Código Produto: ")
}


