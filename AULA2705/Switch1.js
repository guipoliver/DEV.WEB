// estrutura de seleção multipla
// exemplo switch 1
// Criando um menu

//criar um variavel
let opcao = "c"

//criando o menu
console.log("Escolha \n")
console.log("(s) - solteiro")
console.log("(c) - casado")
console.log("(d) - divorciado \n\n")

//teste
switch(opcao){
    case 's': console.log("Solteiro"); break
    case 'c': console.log("Casado"); break
    case 'd': console.log("Divorciado"); break
    default: console.log("Outros"); break
}