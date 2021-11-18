// Com isso temos acesso ao comando `tsc` no terminal. O tsc é o comando responsável por fazer a transpilação dos 
// arquivos.

// Abaixo, há um exemplo de código escrito em Typescript. Crie um arquivo com este código chamado `exercicio-4.ts` e use 
// comentários para responder as questões.

// a) Como você faria, já com a extensão instalada, para gerar um arquivo javascript a partir do  arquivo typescript 
// com o código abaixo? // tsc index.ts

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b) E se este arquivo estivesse dentro de uma pasta chamada src. O processo seria diferente? Se sim, descreva as 
// diferenças. //seria tsc src/indexedDB.ts

// c) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.
// tem mas eu esqueci, vou procurar saber

// d) Compare esse arquivo com o que criamos durante a aula (ele está disponível na área de configuração do projeto 
//     ali em cima). Leia as descrições sobre cada uma das propriedades. Alguma configuração que chamou sua atenção? 
//     O que mudou em comparação com o arquivo criado pelos slides?
// ele tem o tsconfig.json muito maior e com muitas informações a mais
