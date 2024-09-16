import React from 'react';
import { Form, Row, Col, Button, Image } from 'react-bootstrap';
import Divider from '../divider/divider';

function FormLogin() {
  return (
    <Form>
      <Form.Label
        className='mt-4'
        htmlFor="inputEmail">
        Login
      </Form.Label>
      <Form.Control
        type="email"
        id="inputEmail"
        aria-describedby="emailHelBlock"
        placeholder='Email or phone number'
      />

      <Form.Label
        className='mt-4'
        htmlFor="inputPassword">
        Password
      </Form.Label>
      <Form.Control
        type="password"
        id="inputPassword"
        aria-describedby="passwordHelpBlock"
        placeholder='Enter password'
      />

      <Row
        className="mt-3 mb-3 w-100 d-flex justify-content-between align-items-center">
        <Col
          xs="auto">
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Remember me"
            className="w-100"
          />
        </Col>
        <Col
          xs="auto">
          <a href="">Forget Password?</a>
        </Col>
      </Row>

      <Button
        variant="primary"
        size="sm"
        className='w-100'>
        Sign in
      </Button>

      <Divider
        typeDivider="dotted" />

      <Button
        variant="dark"
        size="sm"
        className='w-100'>
        <Image
          src='src\assets\google.png'
          className='p-1' />
        Or sign in with Google
      </Button>
    </Form>
  );
}

export default FormLogin;
