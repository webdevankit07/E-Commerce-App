import { useSelector } from 'react-redux';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
    const { filterProducts, grid_view } = useSelector((state) => state.filterProducts);

    if (grid_view === true) {
        return <GridView products={filterProducts} />;
    }

    if (grid_view === false) {
        return <ListView products={filterProducts} />;
    }

    return <div>ProductList</div>;
};

export default ProductList;
