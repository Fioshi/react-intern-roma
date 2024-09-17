import React from 'react';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import "../loginImage/login_image.css"

function ImageForm({caminhoImagem, alt}) {
    return (
        <Col
            sm={8}
            className="image-col">
            <img  
                src={caminhoImagem}
                fluid
                className="full-height-image"
                alt={alt} />
        </Col>
    );
}

export default ImageForm;
