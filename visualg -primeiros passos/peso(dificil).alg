algoritmo "semnome"
// Função :
// Autor :
// Data : 16/06/2022
// Seção de Declarações
var
i:inteiro
n, pesado: caractere
p, mai: real
procedimento topo()
inicio
limpaTela
escreval("--------------------------------")
escreval(" D E T E C T O R DE P E S A D O")
ESCREVAL("maior peso ate agora:" , mai, "kg")
escreval("---------------------------------")
FimProcedimento


inicio
topo()
para i <- 1 ate 5 faca
escreval("digite o nome:  ")
leia(n)
escreva("digite o peso de ", n, ":")
leia (p)
se(p>mai) entao
mai <- p
pesado <- n
fimSe
topo()
fimpara
topo()
escreval("a pessoa mais pesada foi ", pesado, ", com ", mai " quilos.")
fimalgoritmo
