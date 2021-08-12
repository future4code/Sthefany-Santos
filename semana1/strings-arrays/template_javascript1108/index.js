
// let array
// console.log('a. ', array)//undefined 

// array = null
// console.log('b. ', array)//null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)//11 caracteres

// let i = 0
// console.log('d. ', array[i])//3

// array[i+1] = 19//8
// console.log('e. ', array)//

// const valor = array[i+6]
// console.log**('f. ', valor)//11

//---------------------------------------------------------------------------------------------------

// 2. Leia o código abaixo com atenção 


// ```jsx
// const frase = prompt("Digite uma frase")


// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// ```

// Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?
// //SUBI NUM ÔNIBUS EM MIRROCOS; 27;
//-----------------------------------------------------------------------------------------------------

// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
//O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!

// const nomeUsuario = (prompt("Insira seu nome"))
// const emailUsuario = (prompt("Insira seu e-mail"))
// console.log("O e-mail", emailUsuario, "foi cadastrado com sucesso. Seja bem-vinda(o)", nomeUsuario)

//-----------------------------------------------------------------------------------------------------

// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
// const comidasPreferidas = ["pão", "cuscuz", "pizza", "café", "sorvete"]

// a) Imprima no console o array completo
// console.log(comidasPreferidas)

// b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
// console.log("Essas são minhas comidas preferidas:")
// const comidasPreferidas = ["pão", "cuscuz", "pizza", "café", "sorvete"]
// const tamanho = comidasPreferidas.length

// console.log(comidasPreferidas[tamanho-5])
// console.log(comidasPreferidas[tamanho-4])
// console.log(comidasPreferidas[tamanho-3])
// console.log(comidasPreferidas[tamanho-2])
// console.log(comidasPreferidas[tamanho-1])


// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista

// const comidaUsuario = prompt("Insira sua comida preferida")

// console.log(comidasPreferidas[tamanho-5])
// console.log(comidaUsuario)
// console.log(comidasPreferidas[tamanho-3])
// console.log(comidasPreferidas[tamanho-2])
// console.log(comidasPreferidas[tamanho-1])

//-----------------------------------------------------------------------------------------------------

// 3. Faça um programa, seguindo os passos:
// a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`


// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
const listaDeTarefas = []
const primeiraTarefa = prompt("Insira 1 tarefa que você realiza no dia a dia")
const segundaTarefa = prompt("Insira outra tarefa que você realiza no dia a dia")
const terceiraTarefa = prompt("Insira outra tarefa que você realiza no dia a dia")

listaDeTarefas.push(primeiraTarefa)
listaDeTarefas.push(segundaTarefa)
listaDeTarefas.push(terceiraTarefa)

// c) Imprima o array no console
console.log(listaDeTarefas)



// d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
const tarefaRealizada = prompt("Digite o indice de uma tarefa que já realizou: 0,1 ou 2")

// e) Remova da lista o item de índice que o usuário escolheu.
listaDeTarefas.splice(Number(tarefaRealizada), 1)

// f) Imprima o array no consoleImprima no console
console.log(listaDeTarefas)