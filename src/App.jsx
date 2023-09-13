import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Products from './pages/products/Products';
import Contact from './pages/contact/Contact';
import SingleProduct from './pages/singleProduct/SingleProduct';
import Cart from './pages/cart/Cart';
import ErrorPage from './pages/errorPage/ErrorPage';
import Header from './components/header/Header';
import { GlobalStyle } from './GlobalStyle';
import Footer from './components/footer/Footer';

const App = () => {
    return (
        <Router>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/products' element={<Products />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/single-product/:id' element={<SingleProduct />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
