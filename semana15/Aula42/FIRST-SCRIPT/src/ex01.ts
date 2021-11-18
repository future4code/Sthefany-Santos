console.log("Hello world!")

// Hoje conhecemos uma "nova linguagem", que é muito parecida com o Javascript, mas que tem alguns 
// adicionais muito importantes para nós. Abaixo temos algumas perguntas e solicitações de escrita 
// de código. Você pode responder as perguntas comentando no arquivo TS.

// O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco 
// desses critérios.

// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número
//  a esta variável. O que acontece?

let minhaString: string = "oi"
// um número da erro, tem ser string


// b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como podemos fazer 
// para que essa variável também aceite strings?
// let meuNumero: string | number = 'o'

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

const pessoa01: {nome:string, idade:number, corFavorita:string} = {
    nome: "Fábia",
    idade: 20,
    corFavorita: "verde"
}

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** 
// `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

type Pessoa = {
    nome: string
    idade: number
    corFavorita: string
}

const pessoa02: Pessoa = {
    nome: "Lúcia",
    idade: 30,
    corFavorita: "laranja"
}

const pessoa03: Pessoa = {
    nome: "Claudia",
    idade: 50,
    corFavorita: "azul"
}
const pessoa04: Pessoa = {
    nome: "Luiza",
    idade: 25,
    corFavorita: "amarelo"
}

// d) Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris. Utilize um 
// `enum` para isso.

enum CoresDoArcoiris {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    VIOLETA = "Violeta"
}

type Pessoaa = {
    nome: string
    idade: number
    corFavorita: CoresDoArcoiris.AZUL
}