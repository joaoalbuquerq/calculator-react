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

    return[
        calcular,
        soma,
        sub,
        div,
        mult
    ]
}

export default CalculatorSerivce;