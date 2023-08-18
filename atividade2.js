const SecretNumber = Math.floor(Math.random()*10)
let tentativa = 0

while (tentativa != 5){
    let PalpiteAtual = parseInt(window.prompt('Adivinhe um número: '))
    if(tentativa == 4){
        document.write('você perdeu,Não houveram vençedores!!')
        break
    }
    else if(PalpiteAtual == SecretNumber){
        document.write('Você Ganhou,parabens!!')
        break
    }else if(PalpiteAtual != SecretNumber){
        tentativa ++
    }         
}