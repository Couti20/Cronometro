algoritmo "calculoIMC"
// Função :
// Autor :
// Data : 01/06/2021
// Seção de Declarações 
var
      m, a, imc: real
inicio
      escreva ("massa (kg): " )
      leia(m)
      escreva (" altura (m): " )
      leia (A)
       imc <- m / (a ^ 2)
       escreval("imc: ", imc:5:2)
       se (imc >= 18.5) e (imc < 25)entao
       escreva("parabens! voce esta no seu peso ideal")
       senao
       escreva("voce nao esta na faixa de peso ideal")
       fimse
fimalgoritmo
