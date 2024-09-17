import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormLogin from '../loginForm/login_form';
import ImageForm from '../loginImage/login_image';
import LoginHeader from '../loginHeader/login_header';
import './login_page.css';

function MyComponent() {
    return (
        <main>
            <Container fluid>
                <Row
                    className=' justify-content-center'>
                    <ImageForm
                        caminhoImagem={'src/assets/pexels-paul-loh-65233-233698.jpg'}
                        alt={"Imagens de prédios da tela de login"}>
                    </ImageForm>
                    <Col
                        sm={4}
                        className='col-header d-flex flex-column justify-content-center align-items-center'>
                        <section
                            className='w-75 justify-content-center align-items-center'>
                            <LoginHeader
                                title={"Generic Corp"}
                                subtitle={"Nice to see you again"} />
                            <FormLogin />
                            <div
                                className='text-center mt-5'>
                                <p
                                    className='fs-6'>
                                    Don't have an account?
                                    <a
                                    className="text-decoration-none"
                                        href="">Sign up now
                                    </a>
                                </p>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
        </main>

    );
}

export default MyComponent;
