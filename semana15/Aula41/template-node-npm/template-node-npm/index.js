const countries = require("./countries")

countries.push({
    id:9999999,
    name:'sthefanylandia',
    capital: 'tetelandia',
    continent: 'America',
})
console.table(countries)
















// ----------------------------------------------------------------------------------------------------
// Ex 01
// Hoje conhecemos mais profundamente o Node.js, e vimos o tanto de coisa que dá para fazer com ele. 

// Uma característica muito interessante do node.js é que ele é rodado pelo terminal, e pelo terminal podemos 
// passar parâmetros para o nosso código. Os parâmetros do node funcionam como um array, então seu primeiro 
// valor está no índice 0. Um ponto muito importante é que o node já vem com os **dois primeiros parâmetros 
// preenchidos.**

// a) **Responda como comentário no seu código:** como fazemos para acessar os parâmetros passados na linha 
// de comando para o Node? node nomeDoArquivo.js/ const blabla = process.argv[2]

// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma 
//    mensagem que siga a seguinte estrutura: "Olá, (Nome)! Você tem (sua idade) anos."

    // const nome = "Sthefany";
    // const idade = 20;
    // const novaIdade = 27;
       
    // console.log(`Olá, ${nome}! Você tem ${idade} anos`)

// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.
//    "Olá, (Nome)! Você tem (sua idade) anos. Em sete anos você terá (nova idade)"

    // console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade} e será engenheira de 
    // software sênior`)


//ex 02
// Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. 
// O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.
    // const numb1 = 5;
    // const numb2 = 7;
    // const soma = numb1 + numb2;
    // console.log(`O valor da soma é de ${soma}`)

// ex 3
// Crie uma aplicação Node que receba uma string representando uma tarefa. O programa deve adicionar a nova tarefa 
// em uma variável que represente uma lista de tarefas. A lista de tarefas pode estar criada antes da execução do código. 
// Após adicionar o item à lista, exiba a lista atualizada.

// const listaTarefas = [
//     {
//         tarefa: 'estudar react',
//         horario: 'onze-horas',
//     },
//     {
//         tarefa: 'estudar javascript',
//         horario: 'doze-horas',
//     },
//     {
//         tarefa: 'estudar css',
//         horario: 'treze-horas',
//     }
// ]

// listaTarefas.push({
//     tarefa: 'estudar node',
//     horario: 'meio-dia'
// })
// console.log(listaTarefas)

// ex 4
// Transforme os exercícios anteriores em pacotes individuais do Node (crie uma pasta para cada um)


