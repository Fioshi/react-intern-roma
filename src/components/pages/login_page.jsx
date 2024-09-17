import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormLogin from '../loginForm/login_form';
import ImageForm from '../loginImage/login_image';
import LoginHeader from '../loginHeader/login_header';
import './login_page.css';
import LoginFooter from '../loginFooter/login_footer';

import prediosLogin from '../../assets/pexels-paul-loh-65233-233698.jpg'
import logoGenericCorp from '../../assets/usuarios-alt.png'

function MyComponent() {
    return (
        <main>
            <Container
                fluid>
                <Row
                    className='justify-content-center'>
                    <ImageForm
                        caminhoImagem={prediosLogin}
                        alt={"Imagens de prédios da tela de login"}>
                    </ImageForm>
                    <Col
                        sm={4}
                        className='col-header d-flex flex-column justify-content-center align-items-center'>
                        <section
                            className='w-75 justify-content-center align-items-center'>
                            <header>
                                <LoginHeader
                                    imagePath={logoGenericCorp}
                                    title={"Generic Corp"}
                                    subtitle={"Nice to see you again"} />
                            </header>
                            <FormLogin />
                            <footer
                                className='text-center mt-5'>
                                <LoginFooter
                                    imagePath={logoGenericCorp}
                                    title={"Generic Corp"}
                                    description={"Logo da Generic Corp"} />
                            </footer>
                        </section>
                    </Col>
                </Row>
            </Container>
        </main>

    );
}

export default MyComponent;
