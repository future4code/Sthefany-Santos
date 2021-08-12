
// ex 1:
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

//a. 10 e 50
//b. não apareceria nada


// ex 2:
// 
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
//a. essa função irá retornar dados do usuario, e ira transformar tudo em letras maiusculas e ira pesquisar se existe a palavra cenoura na frase, retornando um valor booleano

//b. b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
// i.   `Eu gosto de cenoura` // EU GOSTO DE CENOURA, TRUE
// ii.  `CENOURA é bom pra vista` //  CENOURA É BOM PRA VISTA, TRUE
// iii. `Cenouras crescem na terra` // CENOURAS CRESCEM NA TERRA, TRUE 

//-----------------------------------------------------------------------------------------------------

a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 

```
"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
```

Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

```
Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
```