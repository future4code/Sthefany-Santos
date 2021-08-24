// // EX 01 -------------------------------------------------------

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. Qual o teste que ele realiza? 
// O CÓDIGO TESTA DOIS NÚMERO COM IF E ELSE, SE O RESTO DO MODULO FOR IGUAL A 0 IRA ENTRAR NO IF, SE NÃO FOR SERÁ O ELSE

// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// //NÚMEROS PARES

// c) Para que tipos de números a mensagem é "Não passou no teste"?
// //NÚMEROS ÍMPARES

// // EX 2 ---------------------------------------------------------

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//      // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?
// // UMA ÁRVORE DE CONDÇÕES, CADA DECISÃO IMPLICA EM UM RESULTADO

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// // "O preço da fruta Maça é R$2.25"

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// // "O preço da fruta Pêra é R$5.5"
// // apareceria o valor 5

// // EX 3 ---------------------------------------------------------

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
//   return mensagem
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo?
// // PEDINDO PARA O USUÁRIO DIGITAR O PRIMEIRO NÚMERO E TRANSFORMANDO EM NUMBER

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// // SE FOSSE 10: "Esse número passou no teste"
// // SE FOSSE -10: não apareceria nada

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// // Haverá um erro, mas não sei qual e não o motivo, pois mesmo dando return na variavel ele não retorna no console


//---------------Exercícios de escrita de código--------------------

// EX 1

// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade)
// //

// const idadeUsuario = Number(prompt("Qual sua idade?"))

// if (idadeUsuario => 18) {
//  console.log("Pode dirigir")
// } else {
//   console.log("Não pode dirigir, apenas maiores de idade!")
// }


//     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
// //

//     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
// // 

//     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
// // 

// // -------------------------EX 2 --------------------------------

// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`
// // 


// const turnoDoDia = prompt("Qual turno você estuda? Matutino, Vespertino ou Nortuno?")

// if (turnoDoDia ===  "Matutino") {
//   console.log("Bom dia!")
// } else if (turnoDoDia === "Vespertino"){
//   console.log("Boa tarde!")
// } else if (turnoDoDia === "Noturno"){
//   console.log("Boa noite!")} 



// Se o usuário digitar "V" no prompt, você deverá imprimir no console a mensagem `"Boa Tarde!"`
// // 

// Nesse caso, temos 3 resultados diferentes (Bom dia/Tarde/Noite)
// // 


// Se o usuário digitar "V", a saída deve ser:
// // "Boa tarde!"

// // -------------------------EX 3------------------------------------ 
// 3 - Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// const turnoDoDia = prompt("Qual turno você estuda? Matutino, Vespertino ou Nortuno?")

// switch (turnoDoDia) {
//   case 'Matutino':
//     console.log('Bom dia')
//     break
//   case  'Vespertino':
//     console.log('Boa tarde')
//     break
//   case 'Noturno':
//     console.log('Boa noite')  
//     break
//   default:
//     console.log('Digite um período válido')  
// }


// // -------------------------EX 4------------------------------------

// 4 - Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("
// // 

const generoFilme = prompt("Insira o gênero do filme que vão assistir")

const precoIngresso = prompt("Qual o valor do ingresso?")

if (generoFilme==="fantasia" && precoFilme<=15) {
  console.log("Bom filme!")
} else {
  console.log("Escolha outro filme!")
}