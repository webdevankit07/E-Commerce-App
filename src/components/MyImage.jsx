import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';

const MyImage = ({ images }) => {
    const [imgId, setImgId] = useState(0);

    return (
        images && (
            <Wrapper>
                <div className='flex-col imageItem w-72'>
                    {images.slice(0, 3).map((imageUrl, i) => {
                        return (
                            <figure key={i}>
                                <img
                                    src={imageUrl}
                                    alt={`${imageUrl}`}
                                    className='box-imagr--style'
                                    onClick={() => setImgId(i)}
                                />
                            </figure>
                        );
                    })}
                </div>

                <div className='main-screen'>
                    <img src={images[`${imgId}`]} alt={images[`${imgId}`].filename} />
                </div>
            </Wrapper>
        )
    );
};

MyImage.propTypes = {
    images: PropTypes.array,
};

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    img {
        background-size: cover;
        object-fit: contain;
        cursor: pointer;
        border: 1px solid #b9b9b9;
        margin: 10px;
        /* box-shadow: ${({ theme }) => theme.colors.shadow}; */
    }

    .main-screen {
        width: 100%;
        order: 1;
        img {
            max-width: 100%;
            height: auto;
            box-shadow: ${({ theme }) => theme.colors.shadow};
        }
    }
    .grid-four-column {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, 1fr);
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        display: flex;
        flex-direction: column;
        order: 1;

        .grid-four-column {
            grid-template-rows: 1fr;
            grid-template-columns: repeat(4, 1fr);
        }
    }
`;

export default MyImage;
