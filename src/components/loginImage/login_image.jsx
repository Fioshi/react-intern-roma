import React from 'react';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import "../loginImage/login_image.css"
function ImageForm({caminhoImagem}) {
    return (
        <Col
            sm={8}
            className="image-col">
            <Image
                src={caminhoImagem}
                fluid
                className="full-height-image" />
        </Col>
    );
}

export default ImageForm;
