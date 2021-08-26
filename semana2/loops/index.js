// 1 - O que o código abaixo está fazendo? Qual o resultado impresso no console?
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)
// // ele erá executar até chegar em [4]

// 2. Leia o código abaixo:

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

//  a) O que vai ser impresso no console?
// // 19, 21, 23, 25, 27, 30

// let indice = 0
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero, "indice", indice)
// 	}

//   indice++
// }


//  b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
// // seria while, não for of



// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// // iria retornar até chegar em 4, chegando em cinco *

///------------------------------------------------------------------------
// Exercícios de escrita de código

// 1 - Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

// const quantidadeBichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))
// console.log(quantidadeBichinhos)

// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
// if (quantidadeBichinhos === 0) {
//   console.log("Que pena! Você pode adotar um pet!")
// }


// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array


//2) Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.

// if (quantidadeBichinhos > 0) {
//   let arrayBichinhos = []
//   for(let i=0; i<bichinhos; i++){

//     arrayBichinhos.push(prompt("Diga os nomes de seus bichinhos"))
    
//   }
//   console.log(arrayBichinhos)
// }

// c) Por fim, imprima o array com os nomes dos bichinhos no console
// 

//-------------------------------------------------------------------------
// 2 - Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

// a) Escreva um programa que **imprime** cada um dos valores do array original.

// arrayOriginal = [20, 30, 40, 60]

// function imprimirValorDoArrayOriginal (arrayOriginal) {
//   for (let valor of arrayOriginal){
//     console.log(valor)
//   }
// }

// imprimirValorDoArrayOriginal(arrayOriginal)

// b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10


// function imprimirValorDoArrayOriginal (arrayOriginal) {
//   for (let valor of arrayOriginal){
//     console.log(valor/10)
//   }
// }

// imprimirValorDoArrayOriginal(arrayOriginal)


// c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array


// function imprimirValorPares (arrayOriginal) {
//   let arrayNumerosPares = []
//   for (let valor of arrayOriginal){
//     if (valor % 2 === 0){
//       arrayNumerosPares.push(valor)
//     }
//   }
//     console.log(imprimirValorPares)
// }
// imprimirValorPares(arrayOriginal)



// d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
// function imprimirArrayDeStrings (){
//   let arrayDeStrings =[]
//   let i = 0
//   for (let valor of arrayOriginal){
//     arrayDeStrings.push(`O elemento do índex i ${i} é: ${valor}`)
//     i++
//  }
//  console.log(arrayDeStrings)
// }
// function imprimirArrayDeStrings(arrayOriginal)

// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original.
// function pegarMaiorOuMenorNumero () {
//   let maiorNumero = 0;
//   let menorNumero = Infinity;

//   for(let i = 0; i < arrayOriginal.length; i++){
//     if(arrayOriginal[i] < menorNumero){
//       menorNumero = arrayOriginal
//     } else if (arrayOriginal[i] > maiorNumero){
//       maiorNumero = arrayOriginal[i]
//     }
//   }
//   console.log(maiorNumero)
//   console.log(menorNumero)
// }

// pegarMaiorOuMenorNumero(arrayOriginal)

//-------------------------------------------------------------------------
