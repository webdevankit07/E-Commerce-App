import { Link } from 'react-router-dom';
import FormatPrice from '../Helpers/FormatPrice';
const Product = (currElem) => {
    const { id, title, thumbnail, price, category } = currElem;

    return (
        <Link to={`/single-product/${id}`}>
            <div className='card'>
                <figure>
                    <img src={thumbnail} alt={title} />
                    <figcaption className='caption'>{category}</figcaption>
                </figure>
                <div className='card-data'>
                    <div className='card-data-flex'>
                        <h3>{title}</h3>
                        <p className='card-data--price'>
                            <FormatPrice price={price} />
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Product;
