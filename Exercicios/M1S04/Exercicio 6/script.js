const joao = {
    nome: "João",
    idade: 32,
    nacionalidade: "Brasileira",
    profissao: "Instrutor"
}

const maria = {
    nome: "Maria",
    idade: 56,
    nacionalidade: "Brasileira",
    profissao: "Constureira"
}

const jose = {
    nome: "José",
    idade: 86,
    nacionalidade: "Brasileira",
    profissao: "Entregador"
}


const informações = (objeto) => {
    console.log(`
    Nome: ${objeto.nome}
    Idade: ${objeto.idade}
    Nacionalidade: ${objeto.nacionalidade}
    Profissão: ${objeto.profissao}
    `)
}

informações(joao)
informações(maria)
informações(jose)
