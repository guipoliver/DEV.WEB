//trabalhando com conceito de classe
//um molde/protótipo
//UML: classe atributo e metódo
//no js aceita o public e o private

//classes: interna ou externa
//interna: um unico arquivo e classes dentro desse arquivo
//externa: criação de classes diferentes em arquivos diferentes

class Carro{
    constructor(marca, modelo, ano){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
    //criando o metodo detalhes
    detalhesDoCarro(){
       return `Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`
    }

}

//criando o meu objeto
const MeuCarro = new Carro('Toyota', 'Corola', 2022)

//exibinhdo resultado
console.log(MeuCarro.detalhesDoCarro())