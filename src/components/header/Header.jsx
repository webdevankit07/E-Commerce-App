import { Link } from 'react-router-dom';
import Nav from './navbar/Nav';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Header = () => {
    const [show, setShow] = useState('');
    const [lastScrollY, setLastScrollY] = useState();

    const controlNavbar = () => {
        setLastScrollY(window.scrollY);
        if (window.scrollY < lastScrollY) {
            setShow('show');
        } else {
            setShow('');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <MainHeader>
            {/* <div className={`${show}`}> */}
            <Link to={'/'}>
                <img src='/public/images/logo.png' alt='logo' />
            </Link>
            <Nav />
            {/* </div> */}
        </MainHeader>
    );
};

const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    /* .show {
        position: sticky;
        top: 0;
    } */

    .logo {
        height: 5rem;
    }
`;

export default Header;
