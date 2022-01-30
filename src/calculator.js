import React from 'react'
import { useState } from 'react';
import './calculator.css'
import {Container,Row,Col,Form} from 'react-bootstrap'
import CalculatorSerivce from './calculator.service'

 
function Calculator() {

  const [calcular,concatenarNumeros,soma,sub,div,mult] = CalculatorSerivce()

  const [txtNumeros, setTxtNumeros] = useState('0')
  const [operador,setOperador] = useState('0')
  const [operando,setOperando] = useState(null)
  const [operacao, setOperacao] = useState(null)

  function adicionarNumero(numero){
    let resultado; 
    if(operacao === null){
      resultado = concatenarNumeros(operador,numero)
      setOperador(resultado)
    }else{
      resultado = concatenarNumeros(operando,numero)
      setOperando(resultado)
    }
    console.log(operador,operando,operacao)
    setTxtNumeros(resultado)
  }

  function operationDefine(operation){
    //Se na chamada da função não tivermos apertado em nenhuma operação, realiza os passos. 
    if(operacao === null){
      setOperacao(operation);
      return
    }
    //Caso a operação esteja definida e operando com valor, realiza o calculo da operação 
    if(operando !== null){
      console.log(operador,operando,operacao)
      const resultado = calcular(parseFloat(operador),parseFloat(operando),operacao)
      setOperacao(operation)
      setOperador(resultado.toString())
      setOperando(null)
      setTxtNumeros(resultado.toString())
    }
  }

  function acaoCalcular(){
    if(operando === null){
      return 
    }
    const resultado = calcular(parseFloat(operador),parseFloat(operando),operacao)
    setTxtNumeros(resultado)
  }

  function limpar(){
    setTxtNumeros('0')
    setOperador('0')
    setOperando(null)
    setOperacao(null)
  }

  return (
    <div className='content'>
      <Container>
        <Row>
          <Col xs="3">
            <button variant="danger" onClick={limpar}>C</button>       
          </Col>

          <Col xs="9">
            <Form.Control type='test' 
            name='txtNumeros' 
            className="text-end"
            readOnly='readonly' value={txtNumeros}/>
          </Col>
        </Row>

        <Row>
          <Col>
            <button variant='light' onClick={() => adicionarNumero('7')}>7</button>
          </Col>
          <Col>
            <button variant='light' onClick={() => adicionarNumero('8')}>8</button>
          </Col>
          <Col>
            <button variant='light' onClick={() => adicionarNumero('9')}>9</button>
          </Col>
          <Col>
            <button className='operations' onClick={() => operationDefine('/')}>/</button>
          </Col>
        </Row>

        <Row>
          <Col>
            <button variant='light' onClick={() => adicionarNumero('4')}>4</button>
          </Col>
          <Col>
            <button variant='light' onClick={() => adicionarNumero('5')}>5</button>
          </Col>
          <Col>
            <button variant='light' onClick={() => adicionarNumero('6')}>6</button>
          </Col>
          <Col>
            <button className='operations' onClick={() => operationDefine('*')}>*</button>
          </Col>
        </Row>

        <Row>
          <Col>
            <button variant='light' onClick={() => adicionarNumero('1')}>1</button>
          </Col>
          <Col>
            <button variant='light' onClick={() => adicionarNumero('2')}>2</button>
          </Col>
          <Col>
            <button variant='light' onClick={() => adicionarNumero('3')}>3</button>
          </Col>
          <Col>
            <button className='operations' onClick={() => operationDefine('-')}>-</button>
          </Col>
        </Row>

        <Row>
          <Col>
            <button variant='light'>0</button>
          </Col>
          <Col>
            <button variant='light' onClick={() => adicionarNumero('.')}>.</button>
          </Col>
          <Col>
            <button variant='success' onClick={acaoCalcular}>=</button>
          </Col>
          <Col>
            <button className='operations' onClick={() => operationDefine('+')}>+</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Calculator; //Exporta toda a lógica do arquivo
