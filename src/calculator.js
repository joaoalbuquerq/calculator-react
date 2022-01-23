import React from 'react'
import { useState } from 'react';
import './calculator.css'
import {Container,Row,Col,Button,Form} from 'react-bootstrap'

 
function Calculator() {

  const [txtNumeros, setTxtNumeros] = useState('0')

  function adicionarNumero(numero){
    setTxtNumeros(txtNumeros + numero)
  }

  function operationDefine(operation){
    setTxtNumeros(operation)
  }

  return (
    <div className='content'>
      <Container>
        <Row>
          <Col xs="3">
            <Button variant="danger">C</Button>       
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
            <Button variant='light' onClick={() => adicionarNumero('7')}>7</Button>
          </Col>
          <Col>
            <Button variant='light' onClick={() => adicionarNumero('7')}>8</Button>
          </Col>
          <Col>
            <Button variant='light' onClick={() => adicionarNumero('8')}>9</Button>
          </Col>
          <Col>
            <Button variant='warning' onClick={() => operationDefine('/')}>/</Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant='light' onClick={() => adicionarNumero('4')}>4</Button>
          </Col>
          <Col>
            <Button variant='light' onClick={() => adicionarNumero('5')}>5</Button>
          </Col>
          <Col>
            <Button variant='light' onClick={() => adicionarNumero('6')}>6</Button>
          </Col>
          <Col>
            <Button variant='warning' onClick={() => operationDefine('*')}>*</Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant='light' onClick={() => adicionarNumero('1')}>1</Button>
          </Col>
          <Col>
            <Button variant='light' onClick={() => adicionarNumero('2')}>2</Button>
          </Col>
          <Col>
            <Button variant='light' onClick={() => adicionarNumero('3')}>3</Button>
          </Col>
          <Col>
            <Button variant='warning' onClick={() => operationDefine('-')}>-</Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant='light'>0</Button>
          </Col>
          <Col>
            <Button variant='light'>.</Button>
          </Col>
          <Col>
            <Button variant='success'>=</Button>
          </Col>
          <Col>
            <Button variant='warning' onClick={() => operationDefine('+')}>+</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Calculator; //Exporta toda a lógica do arquivo
