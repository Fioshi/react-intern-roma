import React from 'react';
import { Image } from 'react-bootstrap';
import '../loginHeader/login_header.css'

function LoginHeader({ title, subtitle, alt }) {
    return (
        <>
            <header>
                <h1
                    className='h1-header fw-bolder p-2 fs-2'>
                    <Image
                        src='src\assets\usuarios-alt.png'
                        className='m-1'
                        alt={alt} />
                    {title}
                </h1>
                <h2
                    className='h2-header fw-bolder p-1 fs-4'>
                    {subtitle}
                </h2>
            </header>
        </>
    )
}

export default LoginHeader