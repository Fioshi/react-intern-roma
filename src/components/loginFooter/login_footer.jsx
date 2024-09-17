import './login_footer.css';

function LoginFooter({ title, imagePath, description }) {
    return (
        <section>
            <p
                className='fs-6'>
                Don't have an account?
                <a
                    className="text-decoration-none"
                    href="">Sign up now
                </a>
            </p>
            <h1
                className='fs-5 d-none h1-footer'>
                <img src={imagePath} alt={description} />
                {title}
            </h1>
        </section>
    );
}

export default LoginFooter;