import styled from 'styled-components';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { setGridView, sorting } from '../store/reducers/filterProductSlice';
import { useEffect, useState } from 'react';

const Sort = () => {
    const { grid_view, filterProducts } = useSelector((state) => state.filterProducts);
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    //! Function for sorting...
    const handleChange = (e) => setValue(e.target.value);

    useEffect(() => {
        dispatch(sorting(value));
    }, [value, dispatch]);

    return (
        <Wrapper className='sort-section'>
            <div className='sorting-list--grid'>
                <button className={grid_view ? 'sort-btn active' : 'sort-btn'} onClick={() => dispatch(setGridView(true))}>
                    <BsFillGridFill className='icon' />
                </button>
                <button className={grid_view ? 'sort-btn' : 'sort-btn active'} onClick={() => dispatch(setGridView(false))}>
                    <BsList className='icon' />
                </button>
            </div>
            <div className='product-data'>
                <p>{filterProducts.length} Products Available</p>
            </div>
            <div className='sort-selection'>
                <form action='#' htmlFor='sort'>
                    <select className='sort-selection--style' name='sort' id='sort' onChange={handleChange}>
                        <option value='lowest'>Price(lowest)</option>
                        <option value='#' disabled></option>
                        <option value='highest'>Price(highest)</option>
                        <option value='#' disabled></option>
                        <option value='a-z'>Price(a-z)</option>
                        <option value='#' disabled></option>
                        <option value='z-a'>Price(z-a)</option>
                    </select>
                </form>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    /* margin-top: 5rem; */

    .sorting-list--grid {
        display: flex;
        gap: 2rem;

        .sort-btn {
            background-color: #ebebeb;
            padding: 0.8rem 1rem;
            border: none;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            border-radius: 2px;
        }

        .icon {
            font-size: 1.6rem;
        }
        .active {
            background-color: ${({ theme }) => theme.colors.black};
            color: #fff;
        }
    }

    .sort-selection .sort-selection--style {
        padding: 0.5rem;
        cursor: pointer;

        .sort-select--option {
            padding: 0.5rem 0;
            cursor: pointer;
            height: 2rem;
            padding: 10px;
        }
    }
`;

export default Sort;
