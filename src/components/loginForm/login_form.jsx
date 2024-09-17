import React, { useState } from 'react';
import { Form, Row, Col, Button, Image } from 'react-bootstrap';
import Divider from '../divider/divider';
import "../loginForm/login_form.css"

function FormLogin() {

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Form className='form'>
      <Form.Label
        className='label-email mt-4'
        htmlFor="inputEmail">
        Login
      </Form.Label>
      <Form.Control
      className='form-email'
        type="email"
        id="inputEmail"
        aria-describedby="Campo de email do formulario"
        placeholder='Email'
        value={email}
        onChange={handleEmailChange}
        isInvalid={!email.match(emailRegex) && email.length > 1 ? true : false}
        isValid={email.match(emailRegex) ? true : false} />


      <Form.Label
        className='label-password mt-4'
        htmlFor="inputPassword">
        Password
      </Form.Label>
      <Form.Control
      className='form-password'
        type="password"
        id="inputPassword"
        aria-describedby="Campo de senha do formulario"
        placeholder='Enter password'
        value={password}
        onChange={handlePasswordChange}
        isInvalid={password.length >= 1 && password.length < 6}
        isValid={password.length >= 6 ? true : false} />

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
          <a
            className='text-decoration-none'
            href="">Forget Password?</a>
        </Col>
      </Row>

      <Button
        type='submit'
        variant="primary"
        size="sm"
        className='custom-btn w-100'>
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
