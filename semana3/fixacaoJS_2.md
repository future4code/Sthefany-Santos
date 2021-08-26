ˋˋˋ function calculaPrecoTotal(quantidade) {

let quantApple
let valorApple
let comDesconto = 1.00
let semDesconto = 1.30

if (quantApple < 12){
valorApple = semDesconto*quantApple
} else {
valorApple = comDesconto*quantApple
}

return quantApple
}

console.log(calculaPrecoTotal(13))ˋˋˋ
