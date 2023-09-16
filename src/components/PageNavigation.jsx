import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageNavigation = ({ name }) => {
    return (
        <Wrapper>
            <Link to={'/'} className='link'>
                Home/
            </Link>
            {name}
        </Wrapper>
    );
};

const Wrapper = styled.section`
    height: 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 3.2rem;
    padding-left: 1.2rem;

    .link {
        color: ${({ theme }) => theme.colors.helper};
    }

    a {
        font-size: 3.2rem;
    }
`;

export default PageNavigation;
