
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0]) //Matheus Nachtergaele
// console.log(filme.elenco[filme.elenco.length - 1])//Denise Fraga
// console.log(filme.transmissoesHoje[2])//canal: "Globo", horario: "14h"

// // 2


// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)//{nome: "Juca", idade: 3, raca: "SRD"}
// console.log(gato)//{nome: "Juba", idade: 3, raca: "SRD",}
// console.log(tartaruga)//{nome: "Jubo", idade: 3, raca: "SRD",}
//OS 3 PONTOS FAZ COM QUE CONSIGAMOS ACESSAR ALGUMA INFORMAÇÕES DA PROPRIEDADE OU COPIAR TODO O OBJETO 

// // 3

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))//FALSE
// console.log(minhaFuncao(pessoa, "altura"))//UNDEFINED
// //POIS NÃO TEMOS A PROPRIEDADE ALTURA

//------------------------------------------------------------------
// 1
// ```jsx
// // Exemplo de entrada
// const pessoa = {
//    nome: "Amanda", 
//    apelidos: ["Amandinha", "Mandinha", "Mandi"]
// }

// // Exemplo de saída
// "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"
// ```

  // // 1 A
// const pessoa = {
//   nome:"Sthefany",
//   apelidos: ["Teté", "Sthe", "Tefi"]
// }
// function vamosVer (pessoa) {
//   const frase = `Eu sou ${pessoa.nome}, mas pode chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`
//   return frase
// }

// console.log(vamosVer(pessoa))

// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

// const novaPessoa = {...pessoa, apelidos: [
//   "Tefs", "Tef", "Tefe"]}

//------------------------------------------------------------------

//2 - 2. Resolva os passos a seguir: 

    // a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 


    // b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

    // 1. O valor de `nome`
    // 2. O numero de caracteres do valor `nome`
    // 3. O valor de `idade`
    // 4. O valor de `profissão`
    // 5. O numero de caracteres do valor `profissão`
    // - Exemplo

        // ```jsx
        // const pessoa = {
        // 	nome: "Bruno", 
        //   idade: 23, 
        // 	profissao: "Instrutor"
        // }

        // minhaFuncao(pessoa)

        // // Retorno: ["Bruno", 5, 23, "Instrutor", 9]
        // ```

        const pessoa = {
          nome: "Ana",
          idade: 25,
          profissao: "Developer"
        }

        const pessoa2 = {
          nome: "Laura",
          idade: 8,
          profissao: "Tiktoker"
        }

        const minhaFuncao = (pessoa,pessoa2) => { return [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissão, pessoa.profissão.length]
        }

        console.log(minhaFuncao(pessoa))
        console.log(minhaFuncao(pessoa2))

  //---------------------3----------------------------------------

const carrinho = []

sacolao1 = {
  nome: "Morango",
  disponibilidade: true
}

sacolao2 = {
  nome: "Abacate",
  disponibilidade: true
}

sacolao3 = {
  nome: "Banana",
  disponibilidade: true
}

function adicionaFrutaNoCarrinho(fruta) {
  carrinho.push(fruta)
}

adicionaFrutaNoCarrinho(sacolao1)
adicionaFrutaNoCarrinho(sacolao2)
adicionaFrutaNoCarrinho(sacolao3)

console.log(carrinho);


// function vamosVer (sacolao1, sacolao2, sacolao3) {
//   const carrinhos = [sacolao1, sacolao2, sacolao3]
//   return carrinhos
// }

// console.log(vamosVer(sacolao1,sacolao2,sacolao3))

        
          
        

