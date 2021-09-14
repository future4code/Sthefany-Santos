```
const ex = Number(prompt("Escreva a nota do ex"))
const p1 = Number(prompt("Escreva a nota do p1"))
const p2 = Number(prompt("Escreva a nota do p2"))

function calculaNota(ex, p1, p2) {

  const media = (ex + p1 + p2) / 3;

  if (media => 9){
    return "A"
  } else if (media < 9 && => 7.5) {
    return "B"
  } else if (media < 7.5 && => 6){
    return "C"
  } else if (media < 6){
    return "D"
  }
}


```
