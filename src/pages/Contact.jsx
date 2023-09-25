import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const Contact = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        <Wrapper className='contact-wrapper'>
            <h1 className='common-heading'>Contact Page</h1>
            <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29423.944354156247!2d86.08310649713255!3d22.80272162700256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5ef6ee25bcc7f%3A0x71a4d2a3195d2d69!2sGamharia%2C%20Jamshedpur%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1694431361966!5m2!1sen!2sin' width='100%' height='400' style={{ border: 0 }} allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade'></iframe>

            <div className='container'>
                <div className='contact-form'>
                    <form action='https://formspree.io/f/xnqylele' method='post' className='contact-inputs'>
                        <input type='text' name='Username' value={isAuthenticated ? user.name : ''} placeholder='username' required autoComplete='off' />
                        <input type='email' name='Email' value={isAuthenticated ? user.email : ''} placeholder='Email' required autoComplete='off' />
                        <textarea type='text' name='Message' cols='30' rows='10' placeholder='Enter your message' required autoComplete='off' />
                        <input type='submit' value='send' />
                    </form>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    padding: 12rem 0 5rem 0;
    text-align: center;

    .container {
        margin-top: 6rem;

        .contact-form {
            max-width: 50rem;
            margin: auto;

            .contact-inputs {
                display: flex;
                flex-direction: column;
                gap: 3rem;

                input[type='submit'] {
                    cursor: pointer;
                    transition: all 0.2s;

                    &:hover {
                        background-color: ${({ theme }) => theme.colors.white};
                        border: 1px solid ${({ theme }) => theme.colors.btn};
                        color: ${({ theme }) => theme.colors.btn};
                        transform: scale(0.9);
                    }
                }
            }
        }
    }
`;

export default Contact;
