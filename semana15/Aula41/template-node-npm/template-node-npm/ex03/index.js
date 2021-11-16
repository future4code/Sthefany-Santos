// ex 3
// Crie uma aplicação Node que receba uma string representando uma tarefa. O programa deve adicionar a nova tarefa 
// em uma variável que represente uma lista de tarefas. A lista de tarefas pode estar criada antes da execução do código. 
// Após adicionar o item à lista, exiba a lista atualizada.

const listaTarefas = [
    {
        tarefa: 'estudar react',
        horario: 'onze-horas',
    },
    {
        tarefa: 'estudar javascript',
        horario: 'doze-horas',
    },
    {
        tarefa: 'estudar css',
        horario: 'treze-horas',
    }
]

listaTarefas.push({
    tarefa: 'estudar node',
    horario: 'meio-dia'
})
console.log(listaTarefas)