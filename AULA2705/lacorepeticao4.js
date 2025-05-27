//Utilizando o laco de repeticao do..while, imprima o primeiro numero divisivel por 19
//leve em consideracao o valor do primeiro numero
//100 e do segundo numero 200

let y = 0
let z = 100

do{
    z++
    y = z % 19
    if (y == 0) {
        console.log("entre 100 e 200 o primeiro numero divisivel por 19 é", z)
        break
    }
}
while (z <= 200)