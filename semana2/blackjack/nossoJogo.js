/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log("Boas vindas ao jogo de Blackjack!");

    let inicio = confirm("Quer iniciar uma nova rodada?");
    
    if (inicio) {
    
       let carta1Usuario = comprarCarta()
       let carta2Usuario = comprarCarta()
       let carta1pc = comprarCarta()
       let carta2pc = comprarCarta()
    
       let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
       let pontuacaoPc = carta1pc.valor + carta2pc.valor
    
       console.log(`Usuario - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - ${pontuacaoUsuario}`)
       console.log(`Computador - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - ${pontuacaoUsuario}`)
    
       if (pontuacaoUsuario > pontuacaoPc) {
          console.log("O usuário ganhou!")
       } else if (pontuacaoPc > pontuacaoUsuario) {
         console.log("O computador ganhou!")
       } else if (pontuacaoUsuario === pontuacaoPc) {
          console.log("Empate!")
       }
       
    } else {
       console.log("O jogo acabou!")
    } 

