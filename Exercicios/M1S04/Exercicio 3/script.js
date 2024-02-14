
const funcaoNomeCompleto = () => {
    let nome = document.getElementById("text1")
    let sobrenome = document.getElementById("text2")
    document.getElementById("nomeCompleto").innerHTML = `${nome.value} ${sobrenome.value}`

    console.log(`${nome.value} ${sobrenome.value}`)
}

