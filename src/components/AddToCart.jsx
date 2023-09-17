import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import CartAmountToggle from './CartAmountToggle';
import { Link } from 'react-router-dom';
import { Button } from '../components_Styled/Button';

const AddToCart = ({ product }) => {
    const { id, colors, stock } = product;
    const [color, setColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    const setIncrease = () => setAmount((prev) => (prev < stock ? prev + 1 : prev));
    const setDecrease = () => setAmount((prev) => (prev > 1 ? prev - 1 : prev));

    return (
        <Wrapper>
            <div className='colors'>
                <p>
                    Colors:{' '}
                    {colors.map((currColor, i) => {
                        return (
                            <button key={i} style={{ backgroundColor: currColor }} className={color === currColor ? 'btnStyle active' : 'btnStyle'} onClick={() => setColor(currColor)}>
                                {color === currColor ? <FaCheck className='checkStyle' /> : null}
                            </button>
                        );
                    })}
                </p>
            </div>

            {/* Add to Cart  */}
            <CartAmountToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease} />
            <Link to={'/cart'}>
                <Button className='btn'>Add to Cart</Button>
            </Link>
        </Wrapper>
    );
};

AddToCart.propTypes = {
    product: PropTypes.object.isRequired,
};

const Wrapper = styled.section`
    .colors p {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .btnStyle {
        width: 2rem;
        height: 2rem;
        background-color: #000;
        border-radius: 50%;
        margin-left: 1rem;
        border: none;
        outline: none;
        display: grid;
        place-items: center;
        opacity: 0.5;
        cursor: pointer;

        &:hover {
            opacity: 1;
        }
    }

    .active {
        opacity: 1;
    }

    .checkStyle {
        font-size: 1rem;
        color: #fff;
    }

    /* we can use it as a global one too  */
    .amount-toggle {
        margin-top: 3rem;
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 1.4rem;

        button {
            border: none;
            background-color: #fff;
            cursor: pointer;
        }

        .amount-style {
            font-size: 2.4rem;
            color: ${({ theme }) => theme.colors.btn};
        }
    }
`;

export default AddToCart;
