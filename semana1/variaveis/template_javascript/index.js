// ATIVIDADE 01
/*```jsx
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)
```
RESPOSTA // (10, 5)
---------------------------------------
```jsx
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)
```
RESPOSTA // (b,c, undefined)
------------------------------------------
```jsx
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)
```

RESPOSTA:
let cargaHorariaDiaria = prompt("Quantas horas você trabalha por dia?")
let valorDaDiaria = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

------------------------------------------------------------------------*/
// ATIVIDADE 02

/*
const nome = nome
const idade = idade
console.log (typeof nome, typeof idade);
//tive o retorno de "string"
*/

/* 
const nome = prompt ("Qual é o seu nome?")
const idade = prompt ("Qual sua idade?")
console.log (nome, idade)
console.log (typeof nome, typeof idade)
//tive o retorno de duas strings

console.log ("Olá", nome, "você tem", idade, "anos")

const aguaHoje = prompt ("Você já tomou água hoje?")
const comeuHoje = prompt ("Você já se alimentou hoje?")
const escovouDentesHoje = prompt ("Você já escovou seus dentes hoje?")

console.log ("Você já tomou água hoje -", aguaHoje)
console.log ("Você já se alimentou hoje -", comeuHoje)
console.log ("Você já escovou seus dentes hoje? -", escovouDentesHoje) 
*/
//------------------------------------------------------------------------

/*
// Crie a lógica que deve ser inserida no código para que os valores de a e b sejam trocados, independente de qual valor essas variáveis assumam inicialmente (ou seja: não basta dizer que a = 25 e b = 10 porque se os valores iniciais mudarem, a lógica do seu programa teria que mudar também). 

let a = 10
let b = 25
let c = 10


//let convA = a.toString()
//let convB = b.toString()

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
*/

//--------------------------------------------------------------------------------------


//DESAFIO
//1. O primeiro número somado ao segundo número resulta em: x.
//2. O primeiro número multiplicado pelo segundo número resulta em: y.

const acordouHoje = prompt ("Que horas você acordou hoje?")
const acordouOntem = prompt ("Que horas você acordou ontem?")

convHoje = Number(acordouHoje)
convOntem = Number(acordouOntem)

console.log("O primeiro número somado ao segundo número resulta em:", convHoje+convOntem)
console.log("O primeiro número multiplicado pelo segundo número resulta em:", convHoje*convOntem)


