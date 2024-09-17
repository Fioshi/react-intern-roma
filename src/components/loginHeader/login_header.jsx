import React from 'react';
import { Image } from 'react-bootstrap';
import './login_header.css'

function LoginHeader({imagePath ,title, subtitle, alt }) {
    return (
        <>
            <section>
                <h1
                    className='h1-header fw-bolder p-2 fs-2'>
                    <img
                        src={imagePath}
                        className='m-1'
                        alt={alt} />
                    {title}
                </h1>
                <h2
                    className='h2-header fw-bolder p-1 fs-4'>
                    {subtitle}
                </h2>
            </section>
        </>
    )
}

export default LoginHeader