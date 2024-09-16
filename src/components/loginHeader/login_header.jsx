import React from 'react';
import { Image } from 'react-bootstrap';

function LoginHeader({ title, subtitle }) {
    return (
        <>
            <header>
                <h1
                    className='p-2 fs-2'>
                    <Image
                        src='src\assets\usuarios-alt.png'
                        className='m-1' />
                    {title}
                </h1>
                <h2
                    className='p-1 fs-4'>
                    {subtitle}
                </h2>
            </header>
        </>
    )
}

export default LoginHeader