// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01

// let array = ['smith', 'maicon', 'coren']
let array = [5,11,14,16,20,23]

function retornaTamanhoArray(array) {
   return array.length
}

console.log(retornaTamanhoArray())


// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}
console.log(reversoArray())


// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  array.sort(function (a, b){
      return a - b;
  })
  return array
}

console.log(retornaArrayOrdenado(array))

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter(n => n % 2 === 0)

}
// console.log(retornaNumerosPares(array))

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let numberPares = (novoArrayNumber%2===0)
  let numberElevado = numberPares**2
  return numberPares
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  const maiorNumb = retornaArrayInvertido(retornaArrayOrdenado(array))

  return maiorNumb[0]
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  const resultado = []

  for (let i = 0; i < n; i++) {
     resultado[i] = 2 * i
  }

  return resultado
}
console.log(retornaNPrimeirosPares(resultado))

// EXERCÍCIO 09

function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoB === ladoC) 
  return "Equilátero"

   else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) 
   return "Isósceles"

   return "Escaleno"
}
consolw.log(classificaTriangulo(2,3,2))

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  const arrayOrdenado = retornaArrayOrdenado(array)
  const indiceSegundoMenor = 1
  const indiceSegundoMaior = array.length - 2

  return [
     arrayOrdenado[indiceSegundoMaior],
     arrayOrdenado[indiceSegundoMenor]
  ]
}
console.log(retornaSegundoMaiorESegundoMenor)

// EXERCÍCIO 11

let nomeFilme = prompt("Diga um nome de um filme")
let anoFilme = prompt("Diga o ano do filme")
let diretorFilme = prompt("Diga o diretor do filme")
let atoresFilme = prompt("Diga o elenco do filme")

function retornaChamadaDeFilme(filme) {
  nome: 'O Diabo Veste Prada',
  ano: 2006,
  diretor: 'David Frankel',
  atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}