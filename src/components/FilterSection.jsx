import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { clearFilters, updateFilterValue } from '../store/reducers/filterProductSlice';
import FormatPrice from '../Helpers/FormatPrice';
import { useEffect } from 'react';
import { Button } from '../components_Styled/Button';

const FilterSection = () => {
    const {
        allProducts,
        filters: { text, category, company, color, price, maxPrice },
    } = useSelector((state) => state.filterProducts);
    const dispatch = useDispatch();

    //! Find Unique_Data from ALl_Products...
    const getUniqueData = (data, attr) => {
        const newVal = data.map((elem) => {
            return elem[attr];
        });

        return attr === 'colors' ? ['All', ...new Set(newVal.flat(2))] : ['All', ...new Set(newVal)];
    };
    const categoryData = getUniqueData(allProducts, 'category');
    const companyData = getUniqueData(allProducts, 'brand');

    useEffect(() => {
        dispatch(updateFilterValue());
    }, [dispatch, text, category, company, color, price, maxPrice]);

    return (
        <Wrapper>
            <div className='filter-search'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        autoComplete='off'
                        type='text'
                        name='text'
                        value={text}
                        placeholder='search'
                        onChange={(e) => dispatch(updateFilterValue({ [e.target.name]: e.target.value }))}
                    />
                </form>
            </div>
            <div className='filter-category'>
                <h3>Category</h3>
                <div>
                    {categoryData.map((currCategory, i) => {
                        return (
                            <button
                                key={i}
                                type='button'
                                className={`${currCategory === category && 'active'}`}
                                value={currCategory}
                                name='category'
                                onClick={(e) => dispatch(updateFilterValue({ [e.target.name]: e.target.value }))}
                            >
                                {currCategory}
                            </button>
                        );
                    })}
                </div>
            </div>
            <div className='filter-company w-96'>
                <h3>Company</h3>
                <form action='#'>
                    <select
                        name='brand'
                        id='company'
                        onSelect={company}
                        className='w-full filter-company--select'
                        onClick={(e) => dispatch(updateFilterValue({ [e.target.name]: e.target.value }))}
                    >
                        {companyData.map((currCompany, i) => {
                            return (
                                <option value={currCompany} key={i}>
                                    {currCompany}
                                </option>
                            );
                        })}
                    </select>
                </form>
            </div>
            <div className='w-full filter_price'>
                <h3>Price</h3>
                <p>
                    <FormatPrice price={price >= 0 && price} />
                </p>
                <input
                    type='range'
                    name='price'
                    min={0}
                    max={maxPrice}
                    value={price}
                    onChange={(e) => dispatch(updateFilterValue({ [e.target.name]: +e.target.value }))}
                />
            </div>
            <div className='filter-clear'>
                <Button onClick={() => dispatch(clearFilters())}>Clear filter</Button>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    /* padding: 5rem 0; */
    display: flex;
    flex-direction: column;
    gap: 3rem;

    h3 {
        padding: 2rem 0;
        font-size: bold;
    }

    .filter-search {
        input {
            padding: 0.6rem 1rem;
            width: 80%;
        }
    }

    .filter-category {
        width: 100%;
        ::-webkit-scrollbar {
            width: 1.5rem;
        }

        ::-webkit-scrollbar-track {
            background-color: #5e76ed;
        }

        ::-webkit-scrollbar-thumb {
            background: #e7e1e1;
            border: 5px solid transparent;
            border-radius: 9px;
            background-clip: content-box;
        }

        div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            height: 330px;
            overflow-x: hidden;
            overflow-y: scroll;
            gap: 0.8rem;

            button {
                border: none;
                background-color: ${({ theme }) => theme.colors.white};
                text-transform: capitalize;
                cursor: pointer;

                &:hover {
                    color: ${({ theme }) => theme.colors.btn};
                }
            }

            .active {
                border-bottom: 1px solid #000;
                color: ${({ theme }) => theme.colors.btn};
            }
        }
    }

    .filter-company--select {
        padding: 0.3rem 1.2rem;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.colors.text};
        text-transform: capitalize;
    }

    .filter-color-style {
        display: flex;
        justify-content: center;
    }

    .color-all--style {
        background-color: transparent;
        text-transform: capitalize;
        border: none;
        cursor: pointer;
    }
    .btnStyle {
        width: 2rem;
        height: 2rem;
        background-color: #000;
        border-radius: 50%;
        margin-left: 1rem;
        display: grid;
        place-items: center;
        border: none;
        outline: none;
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

    .filter_price {
        input {
            margin: 0.5rem 0 1rem 0;
            padding: 0;
            box-shadow: none;
            cursor: pointer;
        }
    }

    .filter-shipping {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .filter-clear .btn {
        background-color: #ec7063;
        color: #000;
    }
`;

export default FilterSection;
