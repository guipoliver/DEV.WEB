//validacao sexo

//criando o laco do..while
do{
    let texto = "Feminino"
    sexo = texto.charAt(0)

    if(sexo!='F' && sexo !='M')
        {console.log("Erro")}
}
while(sexo!='F' && sexo != 'M')
    console.log(sexo)
    console.log("Sexo Validado")