import PropTypes from 'prop-types';
import styled from 'styled-components';
import FormatPrice from '../Helpers/FormatPrice';
import { Link } from 'react-router-dom';
import { Button } from '../components_Styled/Button';

const ListView = ({ products }) => {
    return (
        <Wrapper>
            <div className='container grid'>
                {products.map((product) => {
                    const { id, name, image, price, description } = product;
                    return (
                        <div key={id} className='card grid grid-two-column'>
                            <figure>
                                <img src={image} alt={name} />
                            </figure>
                            <div className='card-data'>
                                <h3>{name}</h3>
                                <p>{<FormatPrice price={price} />}</p>
                                <p>{description.slice(0, 100)}...</p>
                                <Link to={`/single-product/${id}`}>
                                    <Button className='btn'>Read More</Button>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Wrapper>
    );
};

ListView.propTypes = {
    products: PropTypes.array.isRequired,
};

const Wrapper = styled.section`
    padding: 5rem 0;
    min-height: 80vh;

    .container {
        max-width: 120rem;
    }

    .grid {
        gap: 3.2rem;
    }

    figure {
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
        transition: all 0.5s linear;
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 0%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            transition: all 0.2s linear;
            cursor: pointer;
        }
        &:hover::after {
            width: 100%;
        }
        &:hover img {
            transform: scale(1.2);
        }
        img {
            max-width: 90%;
            margin-top: 1.5rem;
            height: 20rem;
            transition: all 0.2s linear;
        }
    }

    .card {
        border: 0.1rem solid rgb(170 170 170 / 40%);

        .card-data {
            padding: 0 2rem;
        }

        h3 {
            margin: 2rem 0;
            font-weight: 300;
            font-size: 2.4rem;
            text-transform: capitalize;
        }

        .btn {
            margin: 2rem 0;
            background-color: rgb(0 0 0 / 0%);
            border: 0.1rem solid rgb(98 84 243);
            display: flex;
            justify-content: center;
            align-items: center;
            color: rgb(98 84 243);

            &:hover {
                background-color: rgb(98 84 243);
                color: white;
            }

            a {
                color: rgb(98 84 243);
                font-size: 1.4rem;
            }
        }

        .btn-main .btn:hover {
            color: #fff;
        }
    }
`;

export default ListView;
