import React from 'react'
import ReactDOM from 'react-dom'
import CalculatorSerivce from './calculator.service'

describe('Teste do calculadoraSerive', () => {
    const [calcular,soma,sub,div,mult] = CalculatorSerivce()

    it('Deve garantir que 4 + 4 = 8.',() => {
        let adicao = calcular(4,4,soma)
        expect(adicao).toEqual(8)
    })

    it('Deve garantir que 4 - 4 = 0', () => {
        let subtracao = calcular(4,4,sub) 
        expect(subtracao).toEqual(0)
    })
    it('Deve garantir que 4 / 4 = 1 ', () => {
        let divisao = calcular(4,4, div);
        expect(divisao).toEqual(1)
    })
    it('Deve garantir que 4 * 4 = 16', () => {
        let multiplicacao = calcular(4,4,mult)
        expect(multiplicacao).toEqual(16)
    })
    it('Deve garantir apenas que sejam realizadas operações válidas', () => {
        let operacaoInvalida = calcular(1,4,'%')
        expect(operacaoInvalida).toEqual(0)
    })
});