import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../components_Styled/Button';

const HeroSection = ({ name }) => {
    return (
        <Wrapper>
            <div className='container'>
                <div className='grid grid-two-column'>
                    <div className='hero-section-data'>
                        <p className='intro-data'>Welcome to</p>
                        <h1>{name}</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut dolore impedit ipsam et harum
                            nemo, explicabo repellendus totam, facilis libero error quo! Non delectus perferendis totam
                            illo labore nostrum dicta.
                        </p>
                        <Link to={'/products'}>
                            <Button>shop now</Button>
                        </Link>
                    </div>

                    {/* //! our homepae Image  */}
                    <div className='hero-section-image'>
                        <figure>
                            <img src='/images/hero.jpg' alt='hero-section-image' className='img-style' />
                        </figure>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

HeroSection.propTypes = {
    name: PropTypes.string,
};

const Wrapper = styled.section`
    padding: 22rem 0;

    img {
        min-width: 10rem;
        height: 10rem;
    }

    .hero-section-data {
        p {
            margin: 2rem 0;
        }

        h1 {
            text-transform: capitalize;
            font-weight: bold;
        }

        .intro-data {
            margin-bottom: 0;
        }
    }

    .hero-section-image {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    figure {
        position: relative;

        &::after {
            content: '';
            width: 60%;
            height: 80%;
            background-color: rgba(81, 56, 238, 0.4);
            position: absolute;
            left: 50%;
            top: -5rem;
            z-index: -1;
        }
    }
    .img-style {
        width: 100%;
        height: auto;
    }

    @media (width <= 768px) {
        .grid {
            gap: 10rem;
        }

        figure::after {
            content: '';
            width: 50%;
            height: 100%;
            left: 0;
            top: 10%;
            /* bottom: 10%; */
            background-color: rgba(81, 56, 238, 0.4);
        }
    }
`;

export default HeroSection;
