import { useEffect, useState } from 'react';
import FormatPrice from '../Helpers/FormatPrice';
import CartAmountToggle from './CartAmountToggle';
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../store/reducers/cartSlice';

const CartItem = ({ id, name, image, color, price, amount, max }) => {
    const [Amount, setAmount] = useState(amount);
    const dispatch = useDispatch();

    const setIncrease = () => setAmount((prev) => (prev < max ? prev + 1 : prev));
    const setDecrease = () => setAmount((prev) => (prev > 1 ? prev - 1 : prev));

    useEffect(() => {
        dispatch(updateQuantity({ id, Amount }));
    }, [Amount, dispatch, id]);

    return (
        <div className='cart_heading grid grid-five-column'>
            <div className='cart-image--name'>
                <div>
                    <figure>
                        <img src={image} alt={id} />
                    </figure>
                </div>
                <div>
                    <p>{name}</p>
                    <div className='color-div'>
                        <p>color:</p>
                        <div className='color-style' style={{ backgroundColor: color, color: color }}></div>
                    </div>
                </div>
            </div>

            {/* price */}
            <div className='cart-hide'>
                <p>
                    <FormatPrice price={price} />
                </p>
            </div>

            {/* quantity  */}
            <div>
                <CartAmountToggle amount={Amount} setDecrease={setDecrease} setIncrease={setIncrease} />
            </div>

            {/* subtotal */}
            <div className='cart-hide'>
                <p>
                    <FormatPrice price={price * Amount} />
                </p>
            </div>

            {/* remove  */}
            <div onClick={() => dispatch(removeItem(id))}>
                <FaTrash className='remove_icon' />
            </div>
        </div>
    );
};

export default CartItem;
