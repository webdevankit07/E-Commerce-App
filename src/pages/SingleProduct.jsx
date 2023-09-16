import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getSingleProduct } from '../store/reducers/productSlice';
import { InfinitySpin } from 'react-loader-spinner';
import MyImage from '../components/MyImage';
import { Container } from '../components_Styled/Container';
import FormatPrice from '../Helpers/FormatPrice';
import { TbReplace, TbTruckDelivery } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md';
// import PageNavigation from '../components/PageNavigation';

const SingleProduct = () => {
    const { isLoading, singleProduct } = useSelector((state) => state.productsDetails);
    const { Id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSingleProduct(Id));
    }, [dispatch, Id]);
    const { id, name, company, price, description, category, stock, stars, reviews, image } = singleProduct;

    if (isLoading) {
        return (
            <Wrapper>
                <div className='grid place-items-center h-[60vh]'>
                    <InfinitySpin width='200' color='#8490ff' />
                </div>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            {/* <PageNavigation name={name} /> */}
            <Container className='container'>
                <div className='grid grid-two-column'>
                    {/* Product Image */}
                    <div className='product_images'>
                        <MyImage images={image} />
                    </div>

                    {/* Product Data  */}
                    <div className='product-data'>
                        <h2>{name}</h2>
                        <p>{stars}</p>
                        <p>{reviews}</p>
                        <p className='product-data-price'>
                            MRP:
                            <del>
                                <FormatPrice price={price + 2500} />
                            </del>
                        </p>
                        <p className='product-data-price product-data-real-price'>
                            Deal of the Day: <FormatPrice price={price} />
                        </p>
                        <p>{description}</p>
                        <div className='product-data-warranty'>
                            <div className='product-warranty-data'>
                                <TbTruckDelivery className='warranty-icon' />
                                <p>Free Delivery</p>
                            </div>
                            <div className='product-warranty-data'>
                                <TbReplace className='warranty-icon' />
                                <p>30 Days Replacement</p>
                            </div>
                            <div className='product-warranty-data'>
                                <TbTruckDelivery className='warranty-icon' />
                                <p>Ankit Delivery</p>
                            </div>
                            <div className='product-warranty-data'>
                                <MdSecurity className='warranty-icon' />
                                <p>Year Warranty</p>
                            </div>
                        </div>
                        <div className='product-data-info'>
                            <p>
                                Avaliable: <span>{stock > 0 ? 'In stock' : 'Not Available'}</span>
                            </p>
                            <p>
                                ID: <span>{id}</span>
                            </p>
                            <p>
                                Brand: <span>{company}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    padding: 10rem 0 0 0;

    .container {
        padding: 9rem 0;
    }

    .product_images {
        display: flex;
        align-items: center;
    }

    .product-data {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 2rem;

        h2 {
            text-transform: capitalize;
        }

        .product-data-warranty {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #ccc;
            margin-bottom: 1rem;

            .product-warranty-data {
                text-align: center;

                .warranty-icon {
                    display: inline-block;
                    background-color: rgba(220, 220, 220, 0.5);
                    border-radius: 50%;
                    width: 4rem;
                    height: 4rem;
                    padding: 0.6rem;
                }
                p {
                    font-size: 1.4rem;
                    padding-top: 0.4rem;
                }
            }
        }

        .product-data-price {
            font-weight: bold;
        }
        .product-data-real-price {
            color: ${({ theme }) => theme.colors.btn};
        }
        .product-data-info {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            font-size: 1.8rem;

            span {
                font-weight: bold;
            }
        }

        hr {
            max-width: 100%;
            width: 90%;
            /* height: 0.2rem; */
            border: 0.1rem solid #000;
            color: red;
        }
    }

    .product-images {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .page_loading {
        font-size: 3.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        padding: 0 2.4rem;
    }
`;

export default SingleProduct;
