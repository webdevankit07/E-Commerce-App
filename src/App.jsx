import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import ErrorPage from './pages/ErrorPage';
import Header from './components/header/Header';
import Footer from './components/Footer';
import { GlobalStyle } from './GlobalStyle';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './store/reducers/productSlice';
import { setFilterProducts } from './store/reducers/filterProductSlice';
import { addFromLocalStorage, updateTotal } from './store/reducers/cartSlice';

const App = () => {
    const { products } = useSelector((state) => state.productsDetails);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
        dispatch(addFromLocalStorage());
        dispatch(updateTotal());
    }, [dispatch]);

    useEffect(() => {
        dispatch(setFilterProducts(products));
    }, [dispatch, products]);

    const theme = {
        colors: {
            heading: 'rgb(24 24 29)',
            text: 'rgba(29 ,29, 29, .8)',
            white: '#fff',
            black: ' #212529',
            helper: '#8490ff',

            bg: '#F6F8FA',
            footer_bg: '#0a1435',
            btn: 'rgb(98 84 243)',
            border: 'rgba(98, 84, 243, 0.5)',
            hr: '#ffffff',
            gradient: 'linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)',
            shadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;',
            shadowSupport: ' rgba(0, 0, 0, 0.16) 0px 1px 4px',
        },
        media: {
            mobile: '768px',
            tab: '998px',
        },
    };

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <GlobalStyle />
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/single-product/:Id' element={<SingleProduct />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='*' element={<ErrorPage />} />
                </Routes>
                <Footer />
            </Router>
        </ThemeProvider>
    );
};

export default App;
