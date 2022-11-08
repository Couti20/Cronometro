algoritmo "semnome"
var
   n: caractere
inicio
      escreva(" Digite se nome: ")
      leia (n)
      escreval("Total de letras do seu nome: ", Compr(n) )
      escreval (" Seu nome em maiusculo e ", maiusc(n) )
      escreval("A peimeira letra do seu nome e ", copia(n, 1, 1))
      escreval("A ultima letra do seu nome e ", copia(maiusc(n), compr(n), 1))
      escreval("Seu nome tem a letra A na posiçao ", pos("A", maiusc(n)))
      escreval("O codigo da letra A e ", asc("A"))
      escreval("A letra de codigo 65 e", carac(65))
fimalgoritmo
