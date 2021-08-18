
//EX 01
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2 //true

// let resultado = bool1 && bool2
// console.log("a. ", resultado) //FALSE

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) //FALSE

// resultado = !resultado && (bool1 || bool2) //TRUE
// console.log("c. ", resultado) //TRUE

// console.log("d. ", typeof resultado)//STRING

// // -----------------------------------------------------------------------------------------------
// // EX 02
// let primeiroNumero = prompt("Digite um numero!") //Precisa converter para Number
// let segundoNumero = prompt("Digite outro numero!") //Precisa converter para Number

// const soma = primeiroNumero + segundoNumero

// console.log(soma)//o resultado vai ser um número ao lado do outro, não ocorrera a soma

// // -----------------------------------------------------------------------------------------------
// // EX 03
// let primeiroNumero = prompt("Digite um numero!")//deixar assim: Number(prompt("Digite um numero!"))
// let segundoNumero = prompt("Digite outro numero!")//deixar assim: Number(prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

//---------------------------------------------------------------------------------------------------
// EX 01 - Faça um programa que:

// a) Pergunte a idade do usuário
//R: const idadeUsuario = Number(prompt("Qual sua idade?"))

// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
//R: const idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))

// c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
//R: console.log("Sua idade é maior do que a do seu melhor amigo? -", idadeUsuario>idadeAmigo)

// d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)
//R: console.log("A diferença de idade é de: -", idadeUsuario-idadeAmigo)

//---------------------------------------------------------------------------------------------------
// EX 02 - Faça um programa que:

// a) Peça ao usuário que insira um número **par**
//R: const numeroPar = Number(prompt("Insira um número par"))

// b) Imprima na console **o resto da divisão** desse número por 2.
//R: const metodo = numeroPar % 2
//R: console.log(metodo)

// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
//R: sempre nos resta 0, pois são números divisíveis


// d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
//Retorna o valor restante, como 21%2=1

//---------------------------------------------------------------------------------------------------
//EX 03 - Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console
//R: const idadeUsuario = Number(prompt("Qual sua idade?"))

// a) A idade do usuário em meses
//R: console.log("sua idade em meses:", idadeUsuario*12)

// b) A idade do usuário em dias
//R: console.log("sua idade em dias:", idadeUsuario*365)

// c) A idade do usuário em horas
//R: console.log("sua idade em horas:", idadeUsuario*8760)

//---------------------------------------------------------------------------------------------------
// EX 04 - Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:
// const numb01 = Number(prompt("Digite um número"))
// const numb02 = Number(prompt("Digite outro número"))

// O primeiro numero é maior que segundo? true
//R: console.log("O primeiro número é maior que o segundo? -", numb01>numb02)

// O primeiro numero é igual ao segundo? false
//R: console.log("O primeiro número é igual ao segundo? -", numb01===numb02)

// O primeiro numero é divisível pelo segundo? true
//R: console.log("O primeiro número é divisivel pelo segundo?", numb01%numb02===0)

// O segundo numero é divisível pelo primeiro? true
//R: console.log("O segundo número é divisivel pelo primeiro?", numb02%numb01===0)

// obs: O true ou false vai depender dos números inseridos e do resultado das operações.

//---------------------------------------------------------------------------------------------------
// DESAFIO

// - Graus Fahrenheit(°F) para Kelvin(K)

//     ```
//     (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
//     ```

// - Graus Celsius(°C) para Graus Fahrenheit (°C)

//     ```
//     (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32
//     ```

// a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
// let convFparaK = 77

// const quest01 = ((convFparaK - 32)*(5/9) + 273.15)
// console.log("o valor de 77°F em  K:", quest01)

// b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
// let convCparaF = 80

// const quest02 = convCparaF*(9/5) + 32
// console.log("o valor de 80°C em °F -", quest02)

// c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
// let convCparaF02 = 30
// const quest03 = convCparaF02*(9/5) + 32

// let convFparaK02 = ((quest03 - 32)*(5/9) + 273.15)

// console.log("o valor de 30°C em °F e K-", quest03, "e", convFparaK02)

// d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter

let primeiro = Number(prompt("Insira um número"))

let convCparaF02 = primeiro
const quest03 = convCparaF02*(9/5) + 32

let convFparaK02 = ((quest03 - 32)*(5/9) + 273.15)

console.log("o valor de", primeiro, "C° em °F e K-", quest03, "e", convFparaK02)



