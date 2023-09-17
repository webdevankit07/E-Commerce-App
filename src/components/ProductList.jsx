import { useSelector } from 'react-redux';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
    const { filterProducts, grid_view, isLoading } = useSelector((state) => state.filterProducts);

    if (grid_view === true) {
        return <GridView isLoading={isLoading} products={filterProducts} />;
    }

    if (grid_view === false) {
        return <ListView isLoading={isLoading} products={filterProducts} />;
    }

    return <div>ProductList</div>;
};

export default ProductList;
