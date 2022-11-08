algoritmo "Aluno"
var
     N1, N2, M: REAL
inicio

Escreva("Primeira nota? ")
leia(N1)
Escreva("segunda nota? ")
leia(N2)
M <- (N1 + N2) / 2
escreval("A media do aluno foi ", M:4:2)
se (m >= 7) entao
   escreval("aluno aprovado)
senao
   se (m >= 5) e (m <7) entao
      escreval("aluno em recuperao")
   senao
      escreval ("aluno reprovado")
   fimse
fimse
fimalgoritmo
