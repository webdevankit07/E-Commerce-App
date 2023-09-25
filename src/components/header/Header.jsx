import { Link, useLocation } from 'react-router-dom';
import Nav from './navbar/Nav';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Header = () => {
    const [show, setShow] = useState('');
    const [lastScrollY, setLastScrollY] = useState();
    const location = useLocation();

    const controlNavbar = () => {
        setLastScrollY(window.scrollY);
        if (window.scrollY < lastScrollY) {
            setShow('show');
        } else {
            setShow('hide');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    useEffect(() => window.scrollTo(0, 0), [location]);

    return (
        <MainHeader>
            <div className={`${show} main`}>
                <Link to={'/'}>
                    <img src='/images/logo.png' alt='logo' />
                </Link>
                <Nav />
            </div>
        </MainHeader>
    );
};

const MainHeader = styled.header`
    .main {
        position: fixed;
        width: 100%;
        padding: 0 4.8rem;
        height: 10rem;
        background-color: ${({ theme }) => theme.colors.bg};
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 999;
        transition: all 0.3s ease;
    }

    .show {
        top: 0;
    }
    .hide {
        top: -100px;
    }

    .logo {
        height: 5rem;
    }
`;

export default Header;
