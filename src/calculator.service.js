function CalculatorSerivce(){

    const soma = '+'
    const sub = '-'
    const div = '/'
    const mult = '*'


    function calcular(numero1,numero2,operacao){
        let resultado
        switch(operacao){
            case soma:
                resultado = numero1 + numero2
                break;
            case sub:
                resultado = numero1 - numero2
                break;
            case div: 
                resultado = numero1 / numero2
                break
            case mult:
                resultado = numero1 * numero2
                break
            default:
                resultado = 0
        }
        return resultado 
    }

    function concatenarNumeros(numAtual, numConcat){
        //Caso contenha apenas '0' ou null, reinicia o valor
        if(numAtual === '0' || numAtual === null){
            numAtual = ''
        }
        //Quando o primeiro digito for '.', concatena o '0' antes do ponto
        if(numConcat === '.' && numAtual === ''){
            return '0.'
        }
        //Caso '.' digitado e já contenha um ponto, apenas retornar
        if(numConcat === '.' && numAtual.indexOf('.') > -1){ //indexOf retorna a posição do array onde ele está localizado, caso não exista retorna -1
            return numAtual
        }

        return numAtual + numConcat
    }

    return[
        calcular,
        concatenarNumeros,
        soma,
        sub,
        div,
        mult
    ]
}

export default CalculatorSerivce;